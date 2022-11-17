import {useState} from "react"
import { BabyNamesView } from "./components/BabyNamesView";
import { AppHeader } from "./components/AppHeader";
import "./style.css";


export function App(): JSX.Element {
  const [searchMessage, setSearchMessage] = useState("");

  function handleSearchTermChange(event: React.ChangeEvent <HTMLInputElement>): void{
    setSearchMessage(event.target.value)
    console.log(event.target.value)
  }
  return (
    <div>
      <h1> Grace's Baby Names Website</h1>
      <AppHeader />
      <div className="search-bar">
        <input value={searchMessage}
          onChange= {handleSearchTermChange}
        />
      </div>

      <button
        className="search-button"
        onClick={() => console.log("KeyboardControlledInput for search is...")}
      >

      </button>
      <div>
        <BabyNamesView />
      </div>
    </div>
  );
}

export default App;


