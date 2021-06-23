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
  codeLanguages: {
    "Java": "text/x-java",
    "Python": "python"
  },
  spanishDifficulty: {
    easy: "Fácil",
    medium: "Intermedio",
    hard: "Difícil",
  },
  msgRefresh: {
    title: "Cuidado 😨",
    description: "¿Seguro quieres refrescar? Perderás tu codigo actual 👎🏻",
    functionText: "Refrescar",
    closeText: "Cerrar",
  },
  msgError: {
    title: "Error de conexión 👾",
    description:
        "Porfi, inténtelo de nuevo ✌🏻",
    functionText: "Recargar",
    closeText: "Cerrar",
  },
  msgAprobado: {
    title: "Yeiiii 🥳",
    description:
        "Felicidades, tu código es buenísimoo 🏆",
    functionText: "Recargar",
    closeText: "Cerrar",
  },
  msgDesaprobado: {
    title: "Awww 😭",
    description:
        "Tu código no pasó todas las pruebas. No te preocupes, lo harás mejor la proxima 💪🏻",
    functionText: "Recargar",
    closeText: "Cerrar",
  }
};

export default k;