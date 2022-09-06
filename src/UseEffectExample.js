import { useEffect, useState } from "react";
import useRenderCounter from "./useRenderCounter";

export function UseEffectExample() {
  const [, forceUpdate] = useState();
  const renderCount = useRenderCounter();
  const [effect1Count, setEffect1Count] = useState(0);
  const [effect2Count, setEffect2Count] = useState(0);

  const obj = {
    a: "a"
  };

  useEffect(() => {
    setEffect1Count((effect1Count) =>
      effect1Count < 5 ? effect1Count + 1 : effect1Count
    );
  }, [obj]);

  useEffect(() => {
    setEffect2Count((effect2Count) =>
      effect2Count < 5 ? effect2Count + 1 : effect2Count
    );
  }, [obj.a]);

  return (
    <section>
      <h3>Example: Use Effect</h3>
      <p>
        Question 1: How often is an effect called if the dependency is an
        object?
      </p>
      <p>Answer 1: unlimited</p>
      <p>
        Question 1: How often is an effect called if the dependency is a
        primitive that doesn't change?
      </p>
      <p>Answer 1: only once</p>
      <div className="frame">
        <div className="forceRender">
          {renderCount}
          <button onClick={() => forceUpdate({})}>force render</button>
        </div>
        <div className="frame">Effect 1 count: {effect1Count}</div>
        <div className="frame">Effect 2 count: {effect2Count}</div>
      </div>
    </section>
  );
}
