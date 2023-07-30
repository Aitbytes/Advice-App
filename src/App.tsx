import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [state, setState] = useState({ advice: "No advice" });

  function fetchAdvice() {
    const url: string = "https://api.adviceslip.com/advice";
    const urlWithStamp: string = `${url}?timestamp=${new Date()}`;
    axios
      .get(urlWithStamp)
      .then((response) => {
        const { advice } = response.data.slip;
        setState({ advice: advice });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    console.log("COMPONENT DID MOUNT");
    fetchAdvice();
  }, []);

  return (
    <div className="App">
      <div className="display">
        <h1>{state.advice}</h1>
        <button onClick={fetchAdvice}>
          <span>get advice</span>
        </button>
      </div>
    </div>
  );
}

export default App;
