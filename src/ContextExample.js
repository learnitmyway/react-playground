import React from "react";
import useRenderCounter from "./useRenderCounter";
import { CountProvider, useCountState, useCountUpdater } from "./count-context";

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
  console.log("test");
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
  const count = useCountState();
  const renderCount = useRenderCounter();
  return (
    <div style={{ border: "1px solid black", padding: 10 }}>
      {renderCount}
      MemoComponentConsumingCount: {`The current count is ${count}. `}
    </div>
  );
});

const MemoComponentConsumingCountWithChildren = React.memo(({ children }) => {
  const count = useCountState();
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
  const count = useCountState();
  const renderCount = useRenderCounter();
  return (
    <div style={{ border: "1px solid black", padding: 10 }}>
      {renderCount}
      ComponentConsumingCount: {`The current count is ${count}. `}
    </div>
  );
};

const Counter = React.memo(function Counter() {
  const increment = useCountUpdater();
  const renderCount = useRenderCounter();
  return (
    <div style={{ border: "1px solid black", padding: 10 }}>
      {renderCount}
      <button onClick={increment}>Increment count</button>
    </div>
  );
});

export default function ContextExample() {
  const [, forceUpdate] = React.useState();
  const renderCount = useRenderCounter();
  return (
    <section>
      <h3>Example: Context</h3>
      <p>
        Question: Which children re-render when their parent provider
        re-renders?
      </p>
      <p>
        Answer: only the children that are wrapped in <code>React.memo</code>{" "}
        and don't have any children themselves
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
            <span>child</span>
          </MemoComponentWithChildren>
          <Counter />
          <ComponentConsumingCount />
          <MemoComponentConsumingCount />
          <MemoComponentConsumingCountWithChildren>
            <span>child</span>
          </MemoComponentConsumingCountWithChildren>
        </CountProvider>
      </div>
    </section>
  );
}
