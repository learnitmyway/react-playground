import React from "react";
import useRenderCounter from "./useRenderCounter";
import {
  CountProvider,
  useCountState,
  useCountUpdater
} from "./count-split-context";

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

const MemoCounter = React.memo(() => {
  const increment = useCountUpdater();
  const renderCount = useRenderCounter();
  return (
    <div style={{ border: "1px solid black", padding: 10 }}>
      {renderCount}
      MemoCounter <button onClick={increment}>Increment count</button>
    </div>
  );
});

const Counter = () => {
  const increment = useCountUpdater();
  const renderCount = useRenderCounter();
  return (
    <div style={{ border: "1px solid black", padding: 10 }}>
      {renderCount}
      Counter <button onClick={increment}>Increment count</button>
    </div>
  );
};

export default function SplitContextExample() {
  const [, forceUpdate] = React.useState();
  const renderCount = useRenderCounter();
  return (
    <section>
      <h3>Example: Split Context</h3>
      <p>
        Question 1: Which components are spared a re-render if the context is
        split?
      </p>
      <p>
        Answer 1: Those that no longer consume the count <strong>state</strong>{" "}
        context
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
          <MemoCounter />
          <Counter />
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
