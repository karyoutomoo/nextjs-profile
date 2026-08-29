/**
 * @file GLSL sources for the hero backdrop.
 * @module HeroBackdrop/shaders
 */

/** Full-screen triangle. Cheaper than a quad and needs no index buffer. */
export const VERTEX_SHADER = `
attribute vec2 a_position;

void main() {
  gl_Position = vec4(a_position, 0.0, 1.0);
}
`;

/**
 * Domain-warped fractal noise mixed between the two page-gradient stops.
 * The warp (feeding noise back into its own coordinates twice) is what turns
 * flat noise into the slow, cloud-like folding that reads as depth.
 */
export const FRAGMENT_SHADER = `
precision mediump float;

uniform float u_time;
uniform vec2 u_resolution;

const vec3 BASE = vec3(0.0667, 0.0941, 0.1529);
const vec3 HIGHLIGHT = vec3(0.2784, 0.3333, 0.4118);

float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(
    mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x),
    mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x),
    u.y
  );
}

float fbm(vec2 p) {
  float value = 0.0;
  float amplitude = 0.5;
  for (int i = 0; i < 5; i++) {
    value += amplitude * noise(p);
    p *= 2.0;
    amplitude *= 0.5;
  }
  return value;
}

void main() {
  vec2 uv = gl_FragCoord.xy / u_resolution.xy;
  vec2 p = uv * vec2(u_resolution.x / u_resolution.y, 1.0) * 1.6;
  float t = u_time;

  vec2 q = vec2(fbm(p + vec2(0.0, t)), fbm(p + vec2(5.2, -t * 0.8)));
  vec2 r = vec2(
    fbm(p + 3.0 * q + vec2(1.7 + t * 0.6, 9.2)),
    fbm(p + 3.0 * q + vec2(8.3, 2.8 - t * 0.5))
  );
  float f = fbm(p + 2.5 * r);

  vec3 color = mix(BASE, HIGHLIGHT, smoothstep(0.32, 0.72, f));

  // Settle back to the base colour toward the bottom so the canvas melts into
  // the static page gradient below the hero.
  color = mix(color, BASE, smoothstep(0.45, 1.0, 1.0 - uv.y));

  // Dither: kills the banding that flat gradients show on 8-bit displays.
  color += (hash(gl_FragCoord.xy + t) - 0.5) * 0.015;

  gl_FragColor = vec4(color, 1.0);
}
`;
