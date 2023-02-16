import { NameViewProps } from "./BabyNamesView";
import { useState } from "react";
import { OneName } from "../BabyNamesData";


export function NameView(props: NameViewProps): JSX.Element {
  
  // could set const props.onename to one thing for ease
  return (
    
    <div>
     
        <div className="name-view">
        <button className="name-button" > {props.onename.name}</button>
        </div>
    </div>
    
  );
}

//Name view takes data from babyData and passes props into it
