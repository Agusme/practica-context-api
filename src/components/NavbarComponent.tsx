import { useContext } from "react"
import { LanguageContext } from "../context/LanguageContext"
import { NavLink } from "react-router-dom"

export default function NavbarComponent() {

  const { languages } = useContext(LanguageContext)


  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="flex-1">
           <NavLink to="/" className="btn btn-ghost text-xl">AGUSTINA MENA</NavLink>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 gap-4">
             <NavLink to="/" className={({isActive})=> isActive ? "underline text-xl  text-blue-800" :"text-xl  text-blue-800"} >{languages === "es" ? "Inicio" : "Home"}</NavLink>
             <NavLink to="/languages" className={({isActive})=> isActive ? "underline text-xl  text-blue-800" :"text-xl  text-blue-800"} >{languages === "es" ? "Ejemplo1" : "Example1"}</NavLink>
             <NavLink to="/cart" className={({isActive})=> isActive ? "underline text-xl  text-blue-800" :"text-xl  text-blue-800"} >{languages === "es" ? "Ejemplo2" : "Example2"}</NavLink>
          </ul>
        </div>
 
      </div>
    </div>
  )
}
