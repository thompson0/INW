import CardSidebar from "./Componentes/CardSidebar"
import  Container  from "./Componentes/Container"
import ConteudoPrincipal from "./Componentes/ConteudoPrincipal"
import Header from "./Componentes/Header"
import Sidebar from "./Componentes/Sidebar"


function App() {
  return (
    <>
    <Header/>
    <Container>
    <Sidebar>
      <CardSidebar/>
      <CardSidebar/>
      <CardSidebar/>
    </Sidebar>
    <ConteudoPrincipal/>
    </Container>
    
   
    </>
  )
}

export default App