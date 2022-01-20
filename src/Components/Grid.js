import react from "react";
import "./Grid.scss";

const Grid = () => {
  const row = [];
  for (let i = 0; i <= 20; i++) {
    const col = [];

    for (let j = 0; j <= 10; j++) {
      col.push(<div className="col"></div>);
    }
    row.push(<div className="row">{col}</div>);
  }
  return <div className="${b}">{row}</div>;
};

export default Grid;
