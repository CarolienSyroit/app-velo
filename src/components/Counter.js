import './Counter.css';

function Counter() {

  const [count, setCount] = useState(0);
  const [name, setName] = useState("Wis");

  return (
    <div className="Counter">
      {count}
      <button onClick{() => {setCount(count - 1)}}>-</button>
      <button onClick{() => {setCount(count + 1)}}>+</button>
      <br>
      {name}
      <button onClick={() => {setName("Syroit")}}>stel achternaam in</button>
    </div>
  );
}

export default Counter;
