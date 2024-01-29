import { GlobalStyle } from "./GlobalStyles"
import Header from "./components/Header"
import Carrossel from "./components/Carrossel"
import Footer from "./components/Fotter"
import Section from "./components/Carrossel/Section"

function App() {
  
  return (
    <>
      <GlobalStyle/>
      <Header/>
      <Carrossel/>
      <Section></Section>
      <Footer/>
    </>
      
  )
}

export default App
