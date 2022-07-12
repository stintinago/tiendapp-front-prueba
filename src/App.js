import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './components/Home';
import AddProudct from './components/AddProduct';
import Layout from './components/Layout';
import AddBrand from "./components/AddBrand";
import Brand from "./components/Brand";
import EditBrandModal from "./components/Brand/EditModal";
import EditModal from "./components/Home/EditModal";
import EditProduct from "./components/EditProduct";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="AddProudct" element={<AddProudct />} />
          <Route path="AddBrand" element={<AddBrand />} />
          <Route path="Brand" element={<Brand />} />
          <Route path="EditBrand" element={<EditBrandModal/>} />
          <Route path="EditProduct/:id" element={<EditProduct />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
