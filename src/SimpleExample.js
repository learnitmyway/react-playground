import React from "react";
import useRenderCounter from "./useRenderCounter";

const Component = ({ name = "Component" }) => {
  const renderCount = useRenderCounter();
  return (
    <div className="frame">
      {renderCount}
      {name}
    </div>
  );
};

const MemoComponent = React.memo(() => <Component name="MemoComponent" />);

export default function Example1() {
  const [, forceUpdate] = React.useState();
  const renderCount = useRenderCounter();
  return (
    <section>
      <h3>Example: Parent child relationship</h3>
      <p>Question: Does a child re-render if its parent re-renders?</p>
      <p>
        Answer: Yes, unless its child is wrapped in <code>React.memo</code>.
      </p>
      <div className="frame">
        <div className="forceRender">
          {renderCount}
          <button onClick={() => forceUpdate({})}>force render</button>
        </div>
        <Component />
        <MemoComponent />
      </div>
    </section>
  );
}
