import { useMemo, useState } from 'react';

function App() {
  const [myNum, setMyNum] = useState(0)
  const [show, setShow] = useState(false)

  const getValue = () => {
      setMyNum(myNum + 1)
  }

  const countNumber = (num) => {
    console.log("countNumber line no 12", num)
    for (let i = 0; i < 100000000; i++){

    }
    return num
  }

  const checkData = useMemo(() => {
    return countNumber(myNum)
  }, [myNum])

  return (
    <div className="App">
      <button onClick={getValue} style={{background: "red"}}> Counter </button>
      <p>My new number: {checkData}</p>

      <button onClick={() => setShow(!show)}>
        {show ? "You clicked me" : "Click me plz"}          
      </button>
    </div>
  );
}

export default App;
