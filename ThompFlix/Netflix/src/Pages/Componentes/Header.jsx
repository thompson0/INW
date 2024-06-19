import Navbar from "./NavBar";

function Header() {
    return ( 
       <header className="flex bg-red-800 text-black font-bold p-4 mb- justify-between ">
        <span>THOMPFLIX</span>
        <Navbar/>
       </header>
     );
}

export default Header;