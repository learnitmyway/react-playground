import React from "react";
import useRenderCounter from "./useRenderCounter";

const Component = ({ name = "Component", value }) => {
  console.log(value);
  const renderCount = useRenderCounter();
  return (
    <div className="frame">
      {renderCount}
      {name}
    </div>
  );
};

const MemoComponent = React.memo((props) => (
  <Component {...props} name="MemoComponent" />
));

export default function Example1() {
  const [, forceUpdate] = React.useState();
  const [value] = React.useState({ some: "value" });
  const renderCount = useRenderCounter();
  return (
    <section>
      <h3>Example: Parent child relationship</h3>
      <p>Question 1: Does a child re-render if its parent re-renders?</p>
      <p>
        Answer 1: Yes, unless its child is wrapped in <code>React.memo</code>.
      </p>
      <p>Question 2: Is state memoized when passed as a prop?</p>
      <p>Answer 2: Yes</p>
      <div className="frame">
        <div className="forceRender">
          {renderCount}
          <button onClick={() => forceUpdate({})}>force render</button>
        </div>
        <Component value={value} />
        <MemoComponent value={value} />
      </div>
    </section>
  );
}
