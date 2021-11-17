import React from "react";
import "./styles.css";

import SimpleExample from "./SimpleExample";
import FunctionPassedAsPropExample from "./FunctionPassedAsPropExample";
import SplitContextExample from "./SplitContextExample";
import ContextExample from "./ContextExample";

export default function App() {
  return (
    <main className="frame">
      <SimpleExample />
      <FunctionPassedAsPropExample />
      <ContextExample />
      <SplitContextExample />
    </main>
  );
}
