import { ChakraProvider } from "@chakra-ui/react";
import HomeNavbar from "./components/Navbar/HomeNavbar";
import Home from "./Pages/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <ChakraProvider>
      <HomeNavbar />
      <Home />
      <Footer />
    </ChakraProvider>
  );
}

export default App;
