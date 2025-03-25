import { useState, useEffect } from "react";

export const Ejercicio4 = () => {
  const [contador, setContador] = useState(0);
  const [activo, setActivo] = useState(false);

  useEffect(() => {
    if (!activo) return;

    const intervalo = setInterval(() => {
      setContador(c => c + 1);
    }, 1000);

    return () => clearInterval(intervalo);
  }, [activo]);

  return (
    <section className="flex flex-col items-center gap-4">
      <button
        className="px-4 py-2 rounded-xl bg-blue-500 text-white"
        onClick={() => setActivo(true)}
      >
        Iniciar
      </button>

      <p className="text-lg">{contador}</p>

      <button
        className="px-4 py-2 rounded-xl bg-red-500 text-white"
        onClick={() => {
          setActivo(false);
          setContador(0);
        }}
      >
        Parar
      </button>
    </section>
  );
};



