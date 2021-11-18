import React from "react";
import useRenderCounter from "./useRenderCounter";

const Component = ({ children, name = "Component", fnName }) => {
  const [, forceUpdate] = React.useState();
  const renderCount = useRenderCounter();
  return (
    <div className="frame">
      <div className="forceRender">
        {renderCount}
        <button onClick={() => forceUpdate({})}>force render</button>
        <span> {name}</span>
      </div>
      <span>{fnName}</span>
      {children()}
    </div>
  );
};

const MemoComponent = React.memo((props) => (
  <Component {...props} name="MemoComponent" />
));

const ChildComponent = ({ name = "ChildComponent", fnType = "function" }) => {
  const renderCount = useRenderCounter();
  return (
    <div className="frame">
      {renderCount}
      <span>
        {name} passed as {fnType}
      </span>
    </div>
  );
};

const MemoChildComponent = React.memo((props) => (
  <ChildComponent {...props} name="MemoChildComponent" />
));

export default function RenderPropExample() {
  const [, forceUpdate] = React.useState();
  const renderCount = useRenderCounter();
  const fn = () => <ChildComponent />;
  const fnMemoChild = () => <MemoChildComponent />;
  const memoizedFn = React.useCallback(
    () => <ChildComponent fnType="memoized function" />,
    []
  );
  const memoizedFnMemoChild = React.useCallback(
    () => <MemoChildComponent fnType="memoized function" />,
    []
  );
  return (
    <section>
      <h3>Example: Render prop</h3>
      <p>
        Question 1: What happens when a child component is passed as a render
        prop?
      </p>
      <p>
        Answer:{" "}
        <span role="img" aria-label="head exploding">
          🤯
        </span>
      </p>
      <div className="frame">
        <div className="forceRender">
          {renderCount}
          <button onClick={() => forceUpdate({})}>force render</button>
        </div>
        <Component>{fn}</Component>
        <Component>{memoizedFn}</Component>
        <Component>{fnMemoChild}</Component>
        <Component>{memoizedFnMemoChild}</Component>
        <MemoComponent>{fn}</MemoComponent>
        <MemoComponent>{memoizedFn}</MemoComponent>
        <MemoComponent>{fnMemoChild}</MemoComponent>
        <MemoComponent>{memoizedFnMemoChild}</MemoComponent>
      </div>
    </section>
  );
}
