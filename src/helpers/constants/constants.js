const k = {
    //Card details
    cardNumberLength: 16,
    cardNameLength: 4,
    cardExpiryLength: 4,
    cardCvcLength: 3,
    difficultiesDropdown: [
      {
        value: "easy",
        label: "Facil",
      },
      {
        value: "medium",
        label: "Intermedio",
      },
      {
        value: "hard",
        label: "Dificil",
      },
    ],
    languagesDropdown: [
      {
        value: "text/x-java",
        label: "Java",
      },
      {
        value: "python",
        label: "Python",
      },
  ],
    spanishDifficulty: {
      easy: "Fácil",
      medium: "Intermedio",
      hard: "Difícil",
    }
};

export default k;