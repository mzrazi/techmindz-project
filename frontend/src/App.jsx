import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductForm from "./components/ProductForm";
import ProductTable from "./components/ProductTable";

function App() {
  return (
    <div className="min-h-screen bg-slate-100">
      <Navbar />

      <main className="max-w-7xl mx-auto p-6">
        <Routes>
          <Route path="/" element={<ProductTable />} />
          <Route path="/products/new" element={<ProductForm />} />
          <Route path="/products/edit/:id" element={<ProductForm />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
