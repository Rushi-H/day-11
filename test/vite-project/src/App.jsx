import { Suspense, useState } from "react";
import React from "react";

// Lazy loading the component
const SecretMessage = React.lazy(() => import("./SecretMessage"));

function App() {
  const [show, setShow] = useState(false);

  return (
    <>
      <h1>Magic Message Loader ✨</h1>

      <button onClick={() => setShow(true)}>
        Show Secret Message
      </button>

      {show && (
        <Suspense fallback={<h3>⏳ Please wait...</h3>}>
          <SecretMessage />
        </Suspense>
      )}
    </>
  );
}

export default App;