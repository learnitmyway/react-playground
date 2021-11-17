import React from "react";
import "./styles.css";

import SimpleExample from "./SimpleExample";
import FunctionPassedAsPropExample from "./FunctionPassedAsPropExample";
import LiftedUpChildExample from "./LiftedUpChildExample";
import ContextExample from "./ContextExample";
import MemoizedContextExample from "./MemoizedContextExample";
import SplitContextExample from "./SplitContextExample";
import RenderPropExample from "./RenderPropExample";
import ListExample from "./ListExample";
import RenderPropListExample from "./RenderPropListExample";

export default function App() {
  return (
    <main className="frame">
      <SimpleExample />
      <FunctionPassedAsPropExample />
      <LiftedUpChildExample />
      <RenderPropExample />
      <ContextExample />
      <MemoizedContextExample />
      <SplitContextExample />
      <ListExample />
      <RenderPropListExample />
    </main>
  );
}
