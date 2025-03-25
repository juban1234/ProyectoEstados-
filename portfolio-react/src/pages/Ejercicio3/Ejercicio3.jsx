import { useState } from "react";

export const Ejercicio3 = () => {
  const colores = [
    "#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#FF00FF", "#00FFFF",
    "#000000", "#FFFFFF", "#808080", "#800000", "#808000", "#800080",
    "#008080", "#C0C0C0", "#FFA500", "#A52A2A"
  ];

  const [color, setColor] = useState(colores[3]); // Amarillo por defecto

  const cambiarColor = () => {
    setColor(colores[Math.floor(Math.random() * colores.length)]);
  };

  return (
    <section className="w-full flex justify-center items-center gap-4">
      <div
        className="h-20 w-40 flex items-center justify-center border border-gray-400 rounded-md transition-colors duration-500"
        style={{ backgroundColor: color }}
      >
        <p className="text-black">Color: {color}</p>
      </div>

      <button
        className="h-8 px-4 rounded-xl text-white"
        onClick={cambiarColor}
        style={{ backgroundColor: color }}
      >
        Cambiar color
      </button>
    </section>
  );
};
