import "./styles.css";
import { useState } from "react";

export default function App() {
  const [data, setData] = useState("");
  const [update, setUpdate] = useState([]);

  const handleChange = (e) => {
    setData(e.target.value);
  };
  const handleClick = () => {
    setUpdate((per) => [...per, data]);
  };

  return (
    <div className="App">
      <h2>Print Search Bar Word</h2>
      <input onChange={handleChange} type="text" value={data} />
      <button onClick={handleClick}>Submit</button>
      <div>
        <ul>
          {update.map((item, id) => {
            return <li key={id}>{item}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}
