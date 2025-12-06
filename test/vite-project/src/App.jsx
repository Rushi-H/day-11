import React, { Suspense, useState } from "react";
import Loader from "./Loader";

// simulate network/file delay by wrapping import in a Promise with setTimeout
const SecretMessage = React.lazy(() =>
  new Promise((resolve) =>
    setTimeout(() => resolve(import("./SecretMessage")), 1500)
  )
);

export default function App() {
  const [show, setShow] = useState(false);

  return (
    <div className="app">
      <h1 className="title">Magic Message Loader ✨</h1>
      <p className="subtitle">Click the button to load the secret component.</p>

      <div className="controls">
        <button
          className="btn"
          onClick={() => setShow((s) => !s)}
        >
          {show ? "Hide Secret" : "Show Secret Message"}
        </button>
      </div>

      <div className="panel">
        {show ? (
          <Suspense fallback={<Loader text="⏳ Please wait — magic is coming!" />}>
            <SecretMessage />
          </Suspense>
        ) : (
          <div className="placeholder">Nothing to show — click the button!</div>
        )}
      </div>

      <footer className="footer">
        <small>Built with love — React Suspense demo ❤️</small>
      </footer>
    </div>
  );
}
