import { useState } from "react";

export function KeyboardControlledInput() {
  const [searchMessage, setSearchMessage] = useState("");

  return (
    <>
      <div className="search-bar">
        <input
          value={searchMessage}
          onChange={(event) => {
            setSearchMessage(event.target.value);
          }}
        />
      </div>

      <button
        className="search-button"
        onClick={() => console.log("KeyboardControlledInput for search is...")}
      >
        Log input
      </button>
    </>
  );
}
