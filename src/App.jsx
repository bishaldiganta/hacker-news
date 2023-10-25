import "./App.css";
import { useState } from "react";

function App() {
  /* const [showMain, setShowMain] = useState(false); */
  const [searchInput, setSearchInput] = useState ('')
  console.log(searchInput)



  const searchItems = () => {
    setSearchInput(searchValue)
   
  }

  return (
    <div className="App">
      <h1>HELLO</h1>
      <input type="text" value={searchInput} onChange={(e) => setSearchInput(e.target.value)} />
    </div>
  );
}

export default App;