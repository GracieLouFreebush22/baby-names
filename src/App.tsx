import {useState} from "react"
import { BabyNamesView } from "./components/BabyNamesView";
import { AppHeader } from "./components/AppHeader";
import "./style.css";


function App(): JSX.Element {

  const [searchMessage, setSearchMessage] = useState("");
  
  return (
    <div>
      <h1> Grace's Baby Names Website</h1>
      <AppHeader />
      <div className="search-bar">
        <input
          value={searchMessage}
          onChange={(event) => {
            setSearchMessage(event.target.value);
          }}
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


