import {useState} from "react";

export function KeyboardControlledInput(){
    const[ searchMessage, setSearchMessage] = useState("");

    return(
        <>
            <input
                value = {searchMessage}
                onChange={(event) => {
                    setSearchMessage(event.target.value);
                }}
            />
            <button
                onClick={()=>
                    console.log(
                        "KeyboardControlledInput for search is..."
                    )
                }
            >
            Log input
            </button>
        </>
    )
}