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
  const fn = () => <ChildComponent />;
  const memoizedFn = React.useCallback(() => <ChildComponent />, []);
  return (
    <section>
      <h3>Example: Render prop</h3>
      <p>
        Question 1: What happens when a child component is passed as a render
        prop?
      </p>
      <p>
        Answer: It will re-render always re-render when its parent (ie the the
        component that receives it) and will re-rerender if its grandparent
        re-renders unless the parent and render prop function are memoized
      </p>
      <div className="frame">
        <div className="forceRender">
          {renderCount}
          <button onClick={() => forceUpdate({})}>force render</button>
        </div>
        <Component fnName="function">{fn}</Component>
        <Component fnName="memoizedFn">{memoizedFn}</Component>
        <MemoComponent fnName="function">{fn}</MemoComponent>
        <MemoComponent fnName="memoizedFn">{memoizedFn}</MemoComponent>
      </div>
    </section>
  );
}
