module.exports = {
  extends: [
    "@commitlint/parse"
  ],
  rules: {
    'references-empty': [2, 'never'],
    'header-min-length': [2, 'always', 20]
  },
  parserOpts: {
    headerPattern: /^\[#\d+\] .+$/,
  },
};
