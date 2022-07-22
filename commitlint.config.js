module.exports = {
  parserPreset: {
    parserOpts: {
      headerPattern: /^\[#(\d)+\] (.+)$/,
      headerCorrespondence: ["references", "subject"],
   }
  },
  plugins: [
    {
      rules: {
        "header-match-team-pattern": (parsed) => {
          const { references, subject } = parsed;
          if (references === null && subject === null) {
            return [
              false,
              "Commit header must be in format '[#issue] subject'",
            ];
          }
          return [true, ""];
        }
      },
    },
  ],
  rules: {
    "references-empty": [2, "never"],
    "header-match-team-pattern": [2, "always"],
    "header-min-length": [2, "always", 20],
    "header-max-length": [2, "always", 72],
  }
};
