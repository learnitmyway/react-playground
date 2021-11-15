import React from "react";
import "./styles.css";
import FunctionPassedAsPropExample from "./FunctionPassedAsPropExample";
import SplitContextExample from "./SplitContextExample";
import ContextExample from "./ContextExample";

export default function App() {
  return (
    <main className="frame">
      <FunctionPassedAsPropExample />
      <ContextExample />
      <SplitContextExample />
    </main>
  );
}
