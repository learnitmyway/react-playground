import React from "react";
import useRenderCounter from "./useRenderCounter";

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

export default function Example1() {
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
        &nbsp;and the function is wrapped in <code>useCallback</code>.
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
