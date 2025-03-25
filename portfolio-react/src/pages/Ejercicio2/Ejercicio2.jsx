import React, { useState } from "react";
import { AiFillLike, AiFillDislike } from "react-icons/ai";

export const Ejercicio2 = () => {
  const [counts, setCounts] = useState({ likes: 0, dislikes: 0 });

  const handleVote = (type) => {
    setCounts((prev) => ({
      ...prev,
      [type]: prev[type] + 1
    }));
  };

  return (
    <section className="flex flex-col w-full h-full justify-start items-center">
      <p className="mb-16">Ejercicio 2</p>

      <section className="flex gap-10">
        <section>
          <AiFillLike className="text-3xl" onClick={() => handleVote("likes")} />
          <p>{counts.likes}</p>
        </section>

        <section>
          <AiFillDislike className="text-3xl" onClick={() => handleVote("dislikes")} />
          <p>{counts.dislikes}</p>
        </section>
      </section>
    </section>
  );
};

