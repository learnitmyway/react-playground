import React from "react";
import useRenderCounter from "./useRenderCounter";

const Component = ({ children }) => {
  const [, forceUpdate] = React.useState();
  const renderCount = useRenderCounter();
  return (
    <div className="frame">
      <div className="forceRender">
        {renderCount}
        <button onClick={() => forceUpdate({})}>force render</button>
      </div>
      {children}
    </div>
  );
};

const ChildComponent = () => {
  const renderCount = useRenderCounter();
  return (
    <div className="frame">
      {renderCount}
      ChildComponent
    </div>
  );
};

export default function LiftedUpChildExample() {
  const [, forceUpdate] = React.useState();
  const renderCount = useRenderCounter();
  return (
    <section>
      <h3>Example: Lifting a child above its parent</h3>
      <p>
        Question: Does a child that is passed a prop re-render if its parent
        re-renders?
      </p>
      <p>Answer: Only if its parent's parent re-renders</p>
      <div className="frame">
        <div className="forceRender">
          {renderCount}
          <button onClick={() => forceUpdate({})}>force render</button>
        </div>
        <Component>
          <ChildComponent />
        </Component>
      </div>
    </section>
  );
}
