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
    <div style={{ border: "1px solid black", padding: 10 }}>
      {renderCount}
      MemoComponentMemoizedTestFn
    </div>
  );
});

const ComponentMemoizedTestFn = ({ memoizedTestFn }) => {
  const renderCount = useRenderCounter();
  memoizedTestFn();
  return (
    <div style={{ border: "1px solid black", padding: 10 }}>
      {renderCount}
      ComponentMemoizedTestFn
    </div>
  );
};

const MemoComponentTestFn = React.memo(({ testFn }) => {
  const renderCount = useRenderCounter();
  testFn();
  return (
    <div style={{ border: "1px solid black", padding: 10 }}>
      {renderCount}
      MemoComponentTestFn
    </div>
  );
});

const ComponentTestFn = ({ testFn }) => {
  const renderCount = useRenderCounter();
  testFn();
  return (
    <div style={{ border: "1px solid black", padding: 10 }}>
      {renderCount}
      ComponentTestFn
    </div>
  );
};

export default function App() {
  const [, forceUpdate] = React.useState();
  const renderCount = useRenderCounter();
  const memoizedTestFn = React.useCallback(() => {}, []);

  const testFn = () => {};
  return (
    <div style={{ border: "1px solid black", padding: 10 }}>
      {renderCount}
      <button onClick={() => forceUpdate({})}>force render</button>
      <MemoComponentMemoizedTestFn memoizedTestFn={memoizedTestFn} />
      <ComponentMemoizedTestFn memoizedTestFn={memoizedTestFn} />
      <MemoComponentTestFn testFn={testFn} />
      <ComponentTestFn testFn={testFn} />
    </div>
  );
}
