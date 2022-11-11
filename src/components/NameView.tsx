import react from "react";
import {OneName} from "../BabyNamesData"

interface NameViewProps{
    onename: OneName;
}

export function NameView(props: NameViewProps): JSX.Element{
    return(
        <div className= "name-view"> 
            <h3> {props.onename.name}</h3>
        </div>
    )
}