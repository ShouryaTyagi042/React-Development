import React, { useState, useEffect } from "react";
import "./Banner.css";

function Banner() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });

  return (
    <div className="banner">
      <p>You clicked this button {count} times.</p>
      <button onClick={() => setCount(count + 1)}>click me</button>
    </div>
  );
}

export default Banner;
