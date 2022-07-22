module.exports = {
  extends: [
    "@commitlint/parse"
  ],
  rules: {
    //"references-empty": [2, "never"],
    //"header-min-length": [2, "always", 20],
    //"header-max-length": [2, "always", 72],
  },
  parserOpts: {
    headerPattern: /^\[#\d+\] .+$/,
  },
};
