import React from "react";

export const Button = ({ text, onClick }) => {
  return (
    <button onClick={onClick}>
      {text}
    </button>
  );
}



//skapar en funktion som heter Button. Den tar emot props (text och onclick) så att den kan återanvändas. Den exporteras så den kan importeras i andra filer. 