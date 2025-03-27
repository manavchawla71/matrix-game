import { React, useState } from "react";

const Matrix = () => {
  const [grid, setgrid] = useState(Array(9).fill("white")); //  all elements of array is white
  const [orderofclicks, setorderclickes] = useState([]);
  const handleClick = (index) => {
    if (grid[index] == "white") {
      const newgrid = [...grid];
      newgrid[index] = "green";
      setgrid(newgrid);
      setorderclickes([...orderofclicks, index]); // it will store all our order in which boxes are clicked like 2,4,6,0 something
    }
    if (orderofclicks.length == 8) {
      // when we are clicking our last box
      changetoorange([...orderofclicks, index]);
    }
  };

  const changetoorange = (order) => {
    order.forEach((i, idx) => {
      setTimeout(() => {
        setgrid((prev) => {
          const newgrid = [...prev];
          newgrid[idx] = "orange";
          setgrid(newgrid);
          return newgrid;
        });
      }, i * 500); // where i*500 defines how much time each box will take to become orange as per the oringal clickes
    });
  };
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 100px)",
        gap: "5px",
      }}
    >
      {grid.map((color, index) => (
        <div
          key={index}
          onClick={() => handleClick(index)}
          style={{
            width: 100,
            height: 100,
            backgroundColor: color,
            border: "1px solid black",
            cursor: "pointer",
          }}
        ></div>
      ))}
    </div>
  );
};

export default Matrix;
