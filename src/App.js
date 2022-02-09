import { useState } from "react";
import Navbar from "./components/Navbar";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import {CssBaseline} from "@mui/material";
import AnimationName from "./components/AnimationName";


//Get initial theme, if the initialTheme value is false then the theme is light 
let initialTheme = false;
//If the the value from the local storage equals to dark
if (localStorage.getItem("theme") === "dark") {
  //Set initial theme value to true, that means dark theme
  initialTheme = true;
}



function App() {
  const [isDarkMode, setIsDarkMode] = useState(initialTheme);
  const darkTheme = createTheme({
    palette: {
      mode: isDarkMode ? "dark" : "light",
    },
  });
  return (

    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <AnimationName />
    </ThemeProvider>
  );
}

export default App;
