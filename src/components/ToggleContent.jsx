import React from "react";
import useToggle from "../hooks/useToggle";

export default function ToggleContent() {
  const { toggle, changeToggle } = useToggle(false);
  return (
    <div className="p-20">
      <button className="btn bg-blue-800" onClick={changeToggle}>
        {toggle ? "Hide" : "Show"}
      </button>
      {toggle ? (
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          sapiente corrupti recusandae magni, neque commodi sint, autem vel,
          porro et dicta omnis deserunt laudantium aperiam odio velit?
          Veritatis, nostrum dignissimos.
        </p>
      ) : null}
    </div>
  );
}
