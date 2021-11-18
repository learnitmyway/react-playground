import React from "react";
import useRenderCounter from "./useRenderCounter";

const Component = ({ entry }) => {
  const renderCount = useRenderCounter();
  return (
    <div className="frame">
      {renderCount}
      {entry}
    </div>
  );
};

const MemoComponent = React.memo(({ entry }) => {
  const renderCount = useRenderCounter();
  return (
    <div className="frame">
      {renderCount}
      {entry}
    </div>
  );
});

export default function ListExample() {
  const [, forceUpdate] = React.useState();
  const renderCount = useRenderCounter();
  const data = React.useMemo(() => ["a", "b"], []);
  return (
    <section>
      <h3>Example: Lists</h3>
      <p>
        Question: Does providing a key for each component in an array prevent
        re-renders?
      </p>
      <p>Answer: No, but memoizing does.</p>
      <div className="frame">
        <div className="forceRender">
          {renderCount}
          <button onClick={() => forceUpdate({})}>force render</button>
        </div>
        <div className="frame">
          Component
          {data.map((entry) => (
            <Component entry={entry} key={entry} />
          ))}
        </div>
        <div className="frame">
          MemoComponent
          {data.map((entry) => (
            <MemoComponent entry={entry} key={entry} />
          ))}
        </div>
      </div>
    </section>
  );
}
