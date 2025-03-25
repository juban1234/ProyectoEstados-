import { useState } from "react"

// Hooks
export const Main = () => {

  const [bgColor , setBgColor] = useState('bg-white')
  const [colorValue , setColorValue] = useState('rgb(255, 255, 255)')


  const handleChangeColor = () => {
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)
    const newColor = `rgb(${r}, ${g}, ${b})`

    setBgColor(newColor)
    setColorValue(newColor)
  }


  return (
    <section className="w-1/1 flex justify-evenly items-center">
      <div className= { `h-100 mt-5 w-3xl flex items-center justify-center border  border-gray-400 p-4 rounded-md transition-colors duration-500`}
      style={{ backgroundColor: bgColor }}
      >
      

      <p className="text-black"> Color generado: {colorValue}</p>

      </div>

      <button className="h-8 flex items-center justify-center w-30 rounded-xl" onClick={handleChangeColor}
      style={{ backgroundColor: bgColor }}
      >
        Cambiar color
      </button>

      
    </section>
    

  )
  

}
