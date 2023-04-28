import { ThemeProvider } from "@mui/material";
import Main from "./Main/main";
import { theme } from "./theme";
function App() {
  return (
    <ThemeProvider theme={theme} >
      <Main/>
    </ThemeProvider>
  );
}

export default App;
