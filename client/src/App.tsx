import { StyledEngineProvider } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter/AppRouter";
import Header from "./components/Header/Header";

function App() {
  return (
    <BrowserRouter>
      <StyledEngineProvider injectFirst>
        <Header />
        <AppRouter />
      </StyledEngineProvider>
    </BrowserRouter>
  );
}

export default App;
