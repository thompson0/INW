import Navbar from "./NavBar";

function Header() {
    return ( 
       <header className="flex bg-black text-white p-4 mb-4 justify-between">
        <span>Ola visitante</span>
        <h1>Bem-vindo Ao Movieapp</h1>
        <Navbar/>
       </header>
     );
}

export default Header;