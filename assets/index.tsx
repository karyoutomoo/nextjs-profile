import profile from "./profile.jpg";

const assets = {
  profile,
} as const;

export type AssetKeys = keyof typeof assets; // "profile"

export default assets;
