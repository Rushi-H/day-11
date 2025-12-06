import React, { useEffect, useState } from "react";

export default function SecretMessage() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // small delay to play the reveal animation
    const t = setTimeout(() => setVisible(true), 50);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className={`secret-card ${visible ? "reveal" : ""}`}>
      <h2>🎉 Surprise!</h2>
      <p>This secret component was lazy-loaded using React Suspense.</p>
      <p>Isn't that cool? 😄</p>
    </div>
  );
}
