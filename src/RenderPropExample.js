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

const ChildComponent = ({ fnType = "function" }) => {
  const renderCount = useRenderCounter();
  return (
    <div className="frame">
      {renderCount}
      <span>ChildComponent passed as {fnType}</span>
    </div>
  );
};

export default function RenderPropExample() {
  const [, forceUpdate] = React.useState();
  const renderCount = useRenderCounter();
  const fn = () => <ChildComponent />;
  const memoizedFn = React.useCallback(
    () => <ChildComponent fnType="memoized function" />,
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
        Answer: The child will re-render when its parent (ie the the component
        that receives it) re-renders and it will re-rerender when its
        grandparent re-renders unless the parent and render prop function are
        memoized
      </p>
      <div className="frame">
        <div className="forceRender">
          {renderCount}
          <button onClick={() => forceUpdate({})}>force render</button>
        </div>
        <Component>{fn}</Component>
        <Component>{memoizedFn}</Component>
        <MemoComponent>{fn}</MemoComponent>
        <MemoComponent>{memoizedFn}</MemoComponent>
      </div>
    </section>
  );
}
