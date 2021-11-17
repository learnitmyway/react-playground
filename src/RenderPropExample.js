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
      {children()}
    </div>
  );
};

const ChildComponent = () => {
  const renderCount = useRenderCounter();
  return (
    <div className="frame">
      {renderCount}
      ChildComponent passed as prop
    </div>
  );
};

export default function RenderPropExample() {
  const [, forceUpdate] = React.useState();
  const renderCount = useRenderCounter();
  return (
    <section>
      <h3>Example: Render prop</h3>
      <p>
        Question: Does a child passed as a render prop re-render when its parent
        re-renders?
      </p>
      <p>Answer: Yes</p>
      <div className="frame">
        <div className="forceRender">
          {renderCount}
          <button onClick={() => forceUpdate({})}>force render</button>
        </div>
        <Component>{() => <ChildComponent />}</Component>
      </div>
    </section>
  );
}
