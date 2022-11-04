/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      width: {
        190: "190px",
        275: "275px",
        300: "300px",
        340: "340px",
        350: "350px",
        650:"650px",
        656: "656px",
        880: "880px",
        508: "508px",
      }, 

      height: {
        80: "80px",
        250:"250px",
        175:"230px",
        340: "340px",
        370: "370px",
        420: "420px",
        510: "510px",
        600: "600px",
        650:"650px",
        685: "685px",
        800: "800px",
        "90vh": "90vh",
      },
      minWidth: {
        210: "210px",
        350: "350px",
        620: "620px",
      },
      textColor: {
        lightGray: "#829ab1",
        secColor: "#efefef",
        navColor: "#BEBEBE",
        heading:"#2e2e2e",
        red:"red",
        txColor:"var(--textColor)",
      },
      borderColor:{
black:"var( --border-color)",
      },
      backgroundColor: {
        mainColor: "var(--bg-color)",
        secondaryColor: "#F0F0F0",
        blackOverlay: "rgba(0, 0 ,0 ,0.7)",
        cardOverlay: "rgba(256, 256 ,256 ,0.4)",
        primary: "#F5F3F3",
        dark:"var(--dark-color)",
      },
      screens:{
        sm:"640px",
        md:"768px",
        lg:"1024px",
        xl:"1280px"
      }
    },
  }
}
