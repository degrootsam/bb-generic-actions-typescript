export default {
  transform: {
    "^.+\\.tsx?$": "esbuild-jest",
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  testEnvironment: "node",
};
