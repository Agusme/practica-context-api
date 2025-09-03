import { Route, Routes } from "react-router-dom"
import ButtonLanguage from "./components/ButtonLanguage"
import FooterComponent from "./components/FooterComponent"
import NavbarComponent from "./components/NavbarComponent"
import Home from "./components/views/Home"
import Cart from "./components/views/Cart"


function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <NavbarComponent></NavbarComponent>
        <div className="flex-grow bg-blue-200">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/languages" element={<ButtonLanguage />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
        <FooterComponent />
      </div>

    </>
  )
}

export default App
