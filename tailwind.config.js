// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", ],
  theme: {
    extend: {
      colors: {
        mainGreen: "#295E56",
        green: "#93aeaa",
        lightGreen: "#E9EDEC",
        mainBlack: "#303030",
        lightBlack: "#565656",
        secondaryBlack: "#1E1E1E",
        mainOrange: "#FF9F67",
        mainRed: "#B31717",
        lightGray: "#e9eeed",
        flatWhite: "#F8F9FB",
        mainBlack: "#030304",
        mainGray: "#333333",
        mainDisabled:"#f2f2f2"
      },
      gridTemplateColumns: {
        view: "max-content 1fr",
      },
      gridTemplateRows: {
        view: "max-content 1fr max-content",
      },
    },
  },
}

