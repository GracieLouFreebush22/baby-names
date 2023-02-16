import { NameView } from "./NameView";
import { OneName, mySortedNames } from "../BabyNamesData";
import { useState } from "react";

export interface NameViewProps {
  onename: OneName;
}

interface BabyNamesViewProps {
  searchmessage: string;
}

export function BabyNamesView({ searchmessage,}: BabyNamesViewProps): JSX.Element {
  const matchingBabyNames = findMatchingBabyNames(searchmessage, mySortedNames);
  
  function setFavName(newname: OneName) {
    throw new Error("Function not implemented.");
  }
  return (
    <div>
      <div>
      <h3> Favorites: </h3>
      <button className="store-button" > Store Name as Favorite </button>
    </div>
      <div className="names-view">
        <ul>
          {matchingBabyNames.map((nameItem: OneName) => (
            <NameView onename={nameItem} key={nameItem.id} />
          ))}
        </ul>
      </div>
    </div>
  );
}

function findMatchingBabyNames(
  searchMessage: string,
  mySortedNames: OneName[]
) {
  const resultNames: OneName[] = [];
  //looking at prop of array instead of prop of a object
  for (const item of mySortedNames) {
    if (item.name.toLowerCase().includes(searchMessage)) {
      resultNames.push(item);
    }
  }

  return resultNames;
}
// (nameitem: onename) is the paramter list for the map function
//line 10 curlies are jsx expressions
//name item is just a ref to a variable

//DONE WITH EX 2 HUZZAH!
