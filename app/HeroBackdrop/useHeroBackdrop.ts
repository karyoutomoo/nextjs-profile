/**
 * @file WebGL lifecycle for the hero backdrop: compile, resize, animate, pause.
 * @module HeroBackdrop/useHeroBackdrop
 */
import { RefObject, useEffect } from "react";

import { DRIFT_SPEED, MAX_DPR } from "./heroBackdrop.config";
import { FRAGMENT_SHADER, VERTEX_SHADER } from "./heroBackdrop.shaders";
import { BackdropContext } from "./heroBackdrop.types";

/**
 * Compiles one shader stage.
 * @param gl Rendering context.
 * @param type gl.VERTEX_SHADER or gl.FRAGMENT_SHADER.
 * @param source GLSL source.
 * @return The compiled shader, or null if compilation failed.
 */
const _compileShader = (
  gl: WebGLRenderingContext,
  type: number,
  source: string,
): WebGLShader | null => {
  const shader = gl.createShader(type);
  if (!shader) {
    return null;
  }

  gl.shaderSource(shader, source);
  gl.compileShader(shader);

  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    gl.deleteShader(shader);
    return null;
  }

  return shader;
};

/**
 * Builds the program and uploads the full-screen triangle.
 * @param canvas Target canvas.
 * @return Draw context, or null when WebGL is unavailable or compilation failed.
 */
const _createContext = (canvas: HTMLCanvasElement): BackdropContext | null => {
  const gl = canvas.getContext("webgl", {
    antialias: false,
    alpha: false,
    powerPreference: "low-power",
  });
  if (!gl) {
    return null;
  }

  const vertex = _compileShader(gl, gl.VERTEX_SHADER, VERTEX_SHADER);
  const fragment = _compileShader(gl, gl.FRAGMENT_SHADER, FRAGMENT_SHADER);
  const program = gl.createProgram();
  if (!vertex || !fragment || !program) {
    return null;
  }

  gl.attachShader(program, vertex);
  gl.attachShader(program, fragment);
  gl.linkProgram(program);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    return null;
  }

  gl.useProgram(program);

  const buffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.bufferData(
    gl.ARRAY_BUFFER,
    new Float32Array([-1, -1, 3, -1, -1, 3]),
    gl.STATIC_DRAW,
  );

  const position = gl.getAttribLocation(program, "a_position");
  gl.enableVertexAttribArray(position);
  gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);

  return {
    gl,
    program,
    uniforms: {
      time: gl.getUniformLocation(program, "u_time"),
      resolution: gl.getUniformLocation(program, "u_resolution"),
    },
  };
};

/**
 * Drives the backdrop canvas. Renders a single static frame when the visitor
 * prefers reduced motion, and suspends the loop whenever the hero scrolls out
 * of view so an off-screen shader never holds the GPU.
 * @param canvasRef Ref to the backdrop canvas.
 * @return void
 */
export const useHeroBackdrop = (
  canvasRef: RefObject<HTMLCanvasElement | null>,
): void => {
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    const context = _createContext(canvas);
    if (!context) {
      return;
    }

    const { gl, program, uniforms } = context;
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    let frame = 0;
    let visible = true;
    let disposed = false;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, MAX_DPR);
      const width = Math.max(1, Math.floor(canvas.clientWidth * dpr));
      const height = Math.max(1, Math.floor(canvas.clientHeight * dpr));

      if (canvas.width === width && canvas.height === height) {
        return;
      }

      canvas.width = width;
      canvas.height = height;
      gl.viewport(0, 0, width, height);
      gl.uniform2f(uniforms.resolution, width, height);
    };

    const draw = (elapsed: number) => {
      gl.uniform1f(uniforms.time, elapsed * DRIFT_SPEED);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
    };

    const renderStaticFrame = () => {
      resize();
      draw(0);
    };

    const loop = (now: number) => {
      if (disposed) {
        return;
      }
      resize();
      draw(now / 1000);
      frame = window.requestAnimationFrame(loop);
    };

    const start = () => {
      if (disposed || frame || motionQuery.matches) {
        return;
      }
      frame = window.requestAnimationFrame(loop);
    };

    const stop = () => {
      if (!frame) {
        return;
      }
      window.cancelAnimationFrame(frame);
      frame = 0;
    };

    const onMotionChange = () => {
      if (motionQuery.matches) {
        stop();
        renderStaticFrame();
        return;
      }
      start();
    };

    const onVisibilityChange = () => {
      if (document.hidden || !visible) {
        stop();
        return;
      }
      start();
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        onVisibilityChange();
      },
      { threshold: 0 },
    );
    observer.observe(canvas);

    const resizeObserver = new ResizeObserver(() => {
      resize();
      if (motionQuery.matches) {
        draw(0);
      }
    });
    resizeObserver.observe(canvas);

    renderStaticFrame();
    start();

    motionQuery.addEventListener("change", onMotionChange);
    document.addEventListener("visibilitychange", onVisibilityChange);

    return () => {
      disposed = true;
      stop();
      observer.disconnect();
      resizeObserver.disconnect();
      motionQuery.removeEventListener("change", onMotionChange);
      document.removeEventListener("visibilitychange", onVisibilityChange);
      gl.deleteProgram(program);
    };
  }, [canvasRef]);
};
