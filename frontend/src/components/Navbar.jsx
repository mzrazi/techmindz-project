const Navbar = () => {
  return (
    <header className="bg-white shadow-md border-b">
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">
            📦 Product Inventory Manager
          </h1>

          <p className="text-slate-500 mt-1">
            Manage your inventory efficiently.
          </p>
        </div>
      </div>
    </header>
  );
};

export default Navbar;