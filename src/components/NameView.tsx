import react from "react";
import {OneName} from "../babyNamesData"

interface NameViewProps{
    onename: OneName;
}

export function NameView(): JSX.Element{
    return(
        <div> Hello this is place view </div>
    )
}