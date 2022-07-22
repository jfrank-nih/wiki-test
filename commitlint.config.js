module.exports = {
  parserPreset: {
    parserOpts: {
      headerPattern: new RegExp(
        /^\[#(\d)+\]\s(.+)$/
      ),
      headerCorrespondence: ["references", "subject"],
    }
  },
  plugins: [
    {
      rules: {
        "header-match-team-pattern": (parsed) => {
          const { references, subject } = parsed;
          console.log(references);
          console.log(subject);
          if (references === null || subject === null) {
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
    //"references-empty": [2, "never"],
    "header-match-team-pattern": [2, "always"],
    "header-min-length": [2, "always", 21],
    "header-max-length": [2, "always", 72],
  }
};
