import { BabyNamesView } from "./components/BabyNamesView";
import { AppHeader } from "./components/AppHeader";
import "./style.css";
import { KeyboardControlledInput } from "./components/KeyboardControlledInput";

function App(): JSX.Element {
  return (
    <div>
      <h1> Grace's Baby Names Website</h1>
      <AppHeader />
      <KeyboardControlledInput />
      <div>
        <BabyNamesView />
      </div>
    </div>
  );
}
export default App;

//big push hoping this works
//did yarn build will i work now
//did not work 5th try