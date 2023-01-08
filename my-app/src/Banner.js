import React, { useState, useEffect } from "react";

function Banner() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked this button {count} times.</p>
      <button onClick={() => setCount(count + 1)}>click me</button>
    </div>
  );
}

export default Banner;
