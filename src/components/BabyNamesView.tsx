import { NameView } from "./NameView";
import { OneName , mySortedNames} from "../BabyNamesData";
import searchMessage from "../App";

export interface NameViewProps {
  onename: OneName;
}

export function BabyNamesView(props: NameViewProps): JSX.Element {

const matchingBabyNames = findMatchingBabyNames(searchMessage, mySortedNames)

  return (
    <div className="names-view">
      <ul>
        {matchingBabyNames.map((nameItem: OneName) => (
          <NameView onename={nameItem} key={nameItem.id} />
        ))}
      </ul>
    </div>
  );
}

function findMatchingBabyNames(term: string, mySortedNames:OneName[]){
  const resultNames: OneName[] = []
    if (onename.name.includes(term)){
      resultNames.push(mySortedNames)
  }
  return resultNames
}
// (nameitem: onename) is the paramter list for the map function
//line 10 curlies are jsx expressions
//name item is just a ref to a variable
