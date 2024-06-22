import Navbar from "./NavBar";
import Rodape from "./Rodape";

function Header() {
    return ( 
      <>
         <header className="flex bg-red-800 text-black font-bold p-4 mb- justify-between text-2xl ">
        <span>THOMPFLIX</span>
        <Navbar/>
       </header>


      
      
      </>
    
     );
}

export default Header;