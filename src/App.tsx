import { BabyNamesView } from "./components/BabyNamesView";
//import {PlaceView} from "./components/PlaceView"
import "./style.css";

function App(): JSX.Element {
  return (
    <div>
      <h1> Grace's Baby Names Website</h1>
      <div>
        <BabyNamesView />
      </div>
    </div>
  );
}
export default App;
