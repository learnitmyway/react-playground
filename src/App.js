import React from "react";
import "./styles.css";

function useRenderCounter() {
  const ref = React.useRef();
  React.useEffect(() => {
    ref.current.textContent = Number(ref.current.textContent || "0") + 1;
  });
  return (
    <span
      style={{
        backgroundColor: "#ccc",
        borderRadius: 4,
        padding: "2px 4px",
        fontSize: "0.8rem",
        margin: "0 6px",
        display: "inline-block"
      }}
      ref={ref}
    />
  );
}

const MemoComponentMemoizedTestFn = React.memo(({ memoizedTestFn }) => {
  const renderCount = useRenderCounter();
  memoizedTestFn();
  return (
    <div className="frame">
      {renderCount}
      MemoComponentMemoizedTestFn
    </div>
  );
});

const ComponentMemoizedTestFn = ({ memoizedTestFn }) => {
  const renderCount = useRenderCounter();
  memoizedTestFn();
  return (
    <div className="frame">
      {renderCount}
      ComponentMemoizedTestFn
    </div>
  );
};

const MemoComponentTestFn = React.memo(({ testFn }) => {
  const renderCount = useRenderCounter();
  testFn();
  return (
    <div className="frame">
      {renderCount}
      MemoComponentTestFn
    </div>
  );
});

const ComponentTestFn = ({ testFn }) => {
  const renderCount = useRenderCounter();
  testFn();
  return (
    <div className="frame">
      {renderCount}
      ComponentTestFn
    </div>
  );
};

function Example1() {
  const [, forceUpdate] = React.useState();
  const renderCount = useRenderCounter();
  const memoizedTestFn = React.useCallback(() => {}, []);
  const testFn = () => {};
  return (
    <section>
      <h3>Example 1</h3>
      <p>Question: Does a child re-render if a function is passed as a prop?</p>
      <p>
        Answer: Yes, unless the child is wrapped in <code>React.memo</code>
        and the function is wrapped in <code>useCallback</code>
      </p>
      <div className="frame">
        <div className="forceRender">
          {renderCount}
          <button onClick={() => forceUpdate({})}>force render</button>
        </div>

        <MemoComponentMemoizedTestFn memoizedTestFn={memoizedTestFn} />
        <ComponentMemoizedTestFn memoizedTestFn={memoizedTestFn} />
        <MemoComponentTestFn testFn={testFn} />
        <ComponentTestFn testFn={testFn} />
      </div>
    </section>
  );
}

export default function App() {
  return (
    <main className="frame">
      <Example1 />
    </main>
  );
}
