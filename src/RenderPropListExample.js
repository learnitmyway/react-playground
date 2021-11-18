import React from "react";
import useRenderCounter from "./useRenderCounter";

const Component = ({ children, contents }) => {
  const [, forceUpdate] = React.useState();
  const renderCount = useRenderCounter();
  return (
    <div className="frame">
      <div className="forceRender">
        {renderCount}
        <button onClick={() => forceUpdate({})}>force render</button>
        <span> Component</span>
      </div>
      {contents.map((entry) => children(entry))}
    </div>
  );
};

const MemoComponent = React.memo(({ children, contents }) => {
  const [, forceUpdate] = React.useState();
  const renderCount = useRenderCounter();
  return (
    <div className="frame">
      <div className="forceRender">
        {renderCount}
        <button onClick={() => forceUpdate({})}>force render</button>
        <span> MemoComponent</span>
      </div>
      {contents.map((entry) => children(entry))}
    </div>
  );
});

const ChildComponent = ({ entry }) => {
  const renderCount = useRenderCounter();
  return (
    <div className="frame">
      {renderCount}
      {entry}
      <span> ChildComponent</span>
    </div>
  );
};

const MemoChildComponent = React.memo(({ entry }) => {
  const renderCount = useRenderCounter();
  return (
    <div className="frame">
      {renderCount}
      {entry}
      <span> MemoChildComponent</span>
    </div>
  );
});

export default function RenderPropListExample() {
  const [, forceUpdate] = React.useState();
  const renderCount = useRenderCounter();
  const data = React.useMemo(() => ["a", "b"], []);
  return (
    <section>
      <h3>Example: Render prop list</h3>
      <p>
        Question: Does a child passed as a render prop re-render when its parent
        re-renders?
      </p>
      <p>Answer: Yes, unless it is memoized.</p>
      <div className="frame">
        <div className="forceRender">
          {renderCount}
          <button onClick={() => forceUpdate({})}>force render</button>
        </div>
        <Component contents={data}>
          {(entry) => <ChildComponent entry={entry} key={entry} />}
        </Component>
        <Component contents={data}>
          {(entry) => <MemoChildComponent entry={entry} key={entry} />}
        </Component>
        <MemoComponent contents={data}>
          {(entry) => <MemoChildComponent entry={entry} key={entry} />}
        </MemoComponent>
      </div>
    </section>
  );
}
