module.exports = {
  externals: {
    sharp: "commonjs sharp",
  },
  resolve: {
    fallback: { path: require.resolve("path-browserify") },
    extensions: [".jsx", ".js", ".tsx", ".ts"],
  },
};
