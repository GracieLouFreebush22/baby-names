import { NameView } from "./NameView";
import { myNames, OneName } from "../BabyNamesData";



export function BabyNamesView(): JSX.Element {
  return (
    <div>
      {" "}
      Baby Names View
      {myNames.map((nameItem: OneName) => (
        <NameView onename={nameItem} key={nameItem.id} />
        ))}
    </div>
  );
}
// (nameitem: onename) is the paramter list for the map function
//line 10 curlies are jsx expressions 
//name item is just a ref to a variable 