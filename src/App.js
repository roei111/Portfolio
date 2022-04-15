import { useState, useEffect } from "react";
import Navbar from "./components/layout/Navbar";
import ScrollTop from "./components/layout/ScrollTop"
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import Home from "./components/sections/home/Home";
import About from "./components/sections/About";
import Projects from "./components/sections/projects/Projects";
import Footer from "./components/sections/Footer";

//Get initial theme, if the initialTheme value is false then the theme is light
let initialTheme = false;
//If the the value from the local storage equals to dark
if (localStorage.getItem("theme") === "dark") {
  //Set initial theme value to true, that means dark theme
  initialTheme = true;
}

function App() {
  const [isDarkMode, setIsDarkMode] = useState(initialTheme);
  const [isThemeChanged, setIsThemeChanged] = useState(false); //State to control the fill animation inside the AnimationName Component.
  const theme = createTheme({
    palette: {
      mode: isDarkMode ? "dark" : "light",
      primary: {
        main: "#39bcbc",
        contrastText: isDarkMode? "white": "black",
      },
      secondary: {
        main: "#6e5494",
      }
    },
  });
  return (
    <>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
        setIsThemeChanged={setIsThemeChanged}
      />
      <Home isThemeChanged={isThemeChanged} />
      <About />
      <Projects />
      <Footer />
      <ScrollTop showBelow={250} />
    </ThemeProvider>
    </>
  );
}

export default App;
