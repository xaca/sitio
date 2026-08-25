import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter,Routes, Route } from "react-router";
import './index.css'
import Home from './pages/home/Home.jsx'
import Registro from './pages/registro/Registro.jsx'
import Menu from "./components/ui/menu/Menu.jsx"

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Menu />
    <Routes>
      <Route path="/registro" element={<Registro />} />
      <Route path="/" element={<Home />} />
    </Routes>
  </BrowserRouter>,
)
