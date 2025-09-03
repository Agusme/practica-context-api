import { useContext } from "react"
import { LanguageContext } from "../context/LanguageContext"

export default function ButtonLanguage() {

      const {languages, toggleLanguage}= useContext(LanguageContext)

  return (
    <div className="flex justify-center items-center h-screen flex-col ">
               <h1 className="text-6xl text-center py-10 text-blue-800">{languages ==="es"? "Práctica 1 de Context API" : "Context API Practice 1"} </h1>
      <p className="text-2xl">{languages ==="es"? "Con este botón podemos elegir y cambiar el idioma de la página": "With this button, we can choose and change the language of the page"} </p>
          <button onClick={toggleLanguage} className="btn btn-primary mt-10 p-8 text-xl">
          {languages === "es" ? "EN" : "ES"}
        </button>
    </div>
  )
}
