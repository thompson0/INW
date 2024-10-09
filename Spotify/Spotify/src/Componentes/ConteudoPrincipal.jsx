function ConteudoPrincipal({ children }) {
  return (
    <div className="grid grid-cols-4 bg-rose-400 w-full h-auto items-center justify-center">
      {children}
    </div>
  );
}

export default ConteudoPrincipal;
