import React, { useState } from "react";

function useToggle(toggleArg = false) {
  const [toggle, setToggle] = useState(toggleArg);

  const changeToggle = () => setToggle((prev) => !prev);

  return { toggle, changeToggle };
}
export default useToggle;
