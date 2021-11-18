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
        <span> Component</span>
      </div>
      {children}
    </div>
  );
};

const MemoComponent = React.memo(({ children }) => {
  const [, forceUpdate] = React.useState();
  const renderCount = useRenderCounter();
  return (
    <div className="frame">
      <div className="forceRender">
        {renderCount}
        <button onClick={() => forceUpdate({})}>force render</button>
        <span> MemoComponent</span>
      </div>
      {children}
    </div>
  );
});

const ChildComponent = () => {
  const renderCount = useRenderCounter();
  return (
    <div className="frame">
      {renderCount}
      ChildComponent passed as prop
    </div>
  );
};

const MemoChildComponent = React.memo(() => {
  const renderCount = useRenderCounter();
  return (
    <div className="frame">
      {renderCount}
      MemoChildComponent passed as prop
    </div>
  );
});

export default function LiftedUpChildExample() {
  const [, forceUpdate] = React.useState();
  const renderCount = useRenderCounter();
  return (
    <section>
      <h3>Example: Lifting a child above its parent</h3>
      <p>
        Question 1: What happens if a child that is passed a prop to its parent
        (ie lifted to the same level as its parent) re-render if its parent
        re-renders?
      </p>
      <p>
        Answer 1: The child re-rerenders when its grandparent re-renders unless
        it is memoized, but re-rerendering the direct parent has no effect.
      </p>
      <p>
        Question 2: What if the parent is wrapped in <code>React.memo</code>?
      </p>
      <p>Answer 2: No effect</p>
      <div className="frame">
        <div className="forceRender">
          {renderCount}
          <button onClick={() => forceUpdate({})}>force render</button>
        </div>
        <Component>
          <ChildComponent />
          <MemoChildComponent />
        </Component>
        <MemoComponent>
          <ChildComponent />
          <MemoChildComponent />
        </MemoComponent>
      </div>
    </section>
  );
}
