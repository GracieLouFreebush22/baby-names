<<<<<<< HEAD
//import { mySortedNames } from "../BabyNamesData";
=======
>>>>>>> origin/main
import { NameViewProps } from "./BabyNamesView";

export function NameView(props: NameViewProps): JSX.Element {
  // could set const props.onename to one thing for ease
<<<<<<< HEAD
  /*
  function getClassforSex(sex: string): string {
    return sex === "m" ? "male" : "female";
  }*/
=======
>>>>>>> origin/main

  return (
    <div className="name-view">
      <button className="name-button"> {props.onename.name}</button>
    </div>
  );
}

//Name view takes data from babyData and passes props into it
