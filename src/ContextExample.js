import React from "react";
import useRenderCounter from "./useRenderCounter";
import { CountProvider, useCountContext } from "./count-context";

const Component = () => {
  const renderCount = useRenderCounter();
  return (
    <div className="frame">
      {renderCount}
      Component
    </div>
  );
};

const MemoComponent = React.memo(() => {
  const renderCount = useRenderCounter();
  return (
    <div className="frame">
      {renderCount}
      MemoComponent
    </div>
  );
});

const MemoComponentWithChildren = React.memo(({ children }) => {
  const renderCount = useRenderCounter();
  return (
    <div className="frame">
      {renderCount}
      MemoComponentWithChildren
      {children}
    </div>
  );
});

const MemoComponentConsumingCount = React.memo(() => {
  const { count } = useCountContext();
  const renderCount = useRenderCounter();
  return (
    <div style={{ border: "1px solid black", padding: 10 }}>
      {renderCount}
      MemoComponentConsumingCount: {`The current count is ${count}. `}
    </div>
  );
});

const MemoComponentConsumingCountWithChildren = React.memo(({ children }) => {
  const { count } = useCountContext();
  const renderCount = useRenderCounter();
  return (
    <div style={{ border: "1px solid black", padding: 10 }}>
      {renderCount}
      MemoComponentConsumingCountWithChildren:{" "}
      {`The current count is ${count}. `}
      {children}
    </div>
  );
});

const ComponentConsumingCount = () => {
  const { count } = useCountContext();
  const renderCount = useRenderCounter();
  return (
    <div style={{ border: "1px solid black", padding: 10 }}>
      {renderCount}
      ComponentConsumingCount: {`The current count is ${count}. `}
    </div>
  );
};

const MemoCounter = React.memo(() => {
  const { increment } = useCountContext();
  const renderCount = useRenderCounter();
  return (
    <div style={{ border: "1px solid black", padding: 10 }}>
      {renderCount}
      MemoCounter <button onClick={increment}>Increment count</button>
    </div>
  );
});

const Counter = () => {
  const { increment } = useCountContext();
  const renderCount = useRenderCounter();
  return (
    <div style={{ border: "1px solid black", padding: 10 }}>
      {renderCount}
      Counter <button onClick={increment}>Increment count</button>
    </div>
  );
};

export default function ContextExample() {
  const [, forceUpdate] = React.useState();
  const renderCount = useRenderCounter();
  return (
    <section>
      <h3>Example: Context</h3>
      <p>
        Question 1: Which components re-render when the count is incremented?
      </p>
      <p>Answer 1: Those that consume the count context</p>
      <p>
        Question 2: Which components re-render when the provider's parent
        re-renders?
      </p>
      <p>
        Answer 2: All except the one that is wrapped in <code>React.memo</code>,
        doesn't consume the context and has no children passed as a prop
      </p>
      <div className="frame">
        <div className="forceRender">
          {renderCount}
          <button onClick={() => forceUpdate({})}>force render</button>
        </div>
        <CountProvider>
          <Component />
          <MemoComponent />
          <MemoComponentWithChildren>
            <span>&#129490;</span>
          </MemoComponentWithChildren>
          <Counter />
          <MemoCounter />
          <ComponentConsumingCount />
          <MemoComponentConsumingCount />
          <MemoComponentConsumingCountWithChildren>
            <span>&#129490;</span>
          </MemoComponentConsumingCountWithChildren>
        </CountProvider>
      </div>
    </section>
  );
}
