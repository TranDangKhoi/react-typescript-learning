import React, { useEffect } from "react";
import { ICard } from "../utils/interfaces";

const Card = () => {
  useEffect(() => {
    const input = document.querySelector("input") as HTMLInputElement;
    console.log(input.value);
  }, []);
  return (
    <div>
      <input type="text" />
    </div>
  );
};

export default Card;
