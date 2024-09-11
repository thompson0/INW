function Sidebar({children}) {
    return (
        <>
         <aside className="flex flex-col bg-cyan-500 h-[747px] w-1/4 justify-center items-center"> 
            {children}
         </aside>
        
        </>
      );
}

export default Sidebar;