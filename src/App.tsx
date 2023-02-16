import { useState } from "react";
import { BabyNamesView } from "./components/BabyNamesView";
import { OneName, mySortedNames } from "./BabyNamesData";
import "./style.css";

export function App(): JSX.Element {
  const [searchMessage, setSearchMessage] = useState("");
  //this is ultimate parent file but need to change the state in AppHeader?? 
  const [favName, setFavName] = useState("");

  function handleSearchTermChange(
    event: React.ChangeEvent<HTMLInputElement>
  ): void {
    setSearchMessage(event.target.value);
    console.log(event.target.value);
  }


  return (
    <div>
      <h1> Grace's Baby Names Website</h1>
        <div className="search-bar">
          <input value={searchMessage} onChange={handleSearchTermChange} />
        </div>
        <button
          className="search-button"
          onClick={() => console.log("Search message is...")}> SEARCH 
        </button>
      <div>
        <BabyNamesView searchmessage={searchMessage}  />
      </div>
    </div>
  );
}





export default App;
