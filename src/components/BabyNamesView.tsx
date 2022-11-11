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
