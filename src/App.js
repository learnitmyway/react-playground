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
import { UseEffectExample } from "./UseEffectExample";
import { UseEffectChildExample } from "./UseEffectChildExample";

export default function App() {
  return (
    <main className="frame">
      <UseEffectExample />
      <UseEffectChildExample />
      <SimpleExample />
      <FunctionPassedAsPropExample />
      <LiftedUpChildExample />
      <RenderPropExample />
      <ContextExample />
      <MemoizedContextExample />
      <SplitContextExample />
      <ListExample />
    </main>
  );
}
