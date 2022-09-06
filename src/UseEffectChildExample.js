import { useEffect, useState } from "react";
import useRenderCounter from "./useRenderCounter";

function ChildWithObjDep({ obj }) {
  const [effectCount, setEffectCount] = useState(0);
  useEffect(() => {
    setEffectCount((effectCount) =>
      effectCount < 5 ? effectCount + 1 : effectCount
    );
  }, [obj]);

  return (
    <section>
      <div className="frame">child with obj dep count count: {effectCount}</div>
    </section>
  );
}

function ChildWithPrimitiveDep({ obj }) {
  const [effectCount, setEffectCount] = useState(0);
  useEffect(() => {
    setEffectCount((effectCount) =>
      effectCount < 5 ? effectCount + 1 : effectCount
    );
  }, [obj.a]);

  return (
    <section>
      <div className="frame">child with obj dep count count: {effectCount}</div>
    </section>
  );
}

export function UseEffectChildExample() {
  const [, forceUpdate] = useState();
  const renderCount = useRenderCounter();

  const obj = {
    a: "a"
  };

  return (
    <section>
      <h3>Example: Use Effect Child</h3>
      <p>
        Question 1: How often is an effect called in a child if the dependency
        is an object?
      </p>
      <p>Answer 1: every time it renders</p>
      <p>
        Question 2: How often is an effect called in a child if the dependency
        is a primitive that doesn't change?
      </p>
      <p>Answer 2: only once</p>
      <div className="frame">
        <div className="forceRender">
          {renderCount}
          <button onClick={() => forceUpdate({})}>force render</button>
        </div>
        <ChildWithObjDep obj={obj} />
        <ChildWithPrimitiveDep obj={obj} />
      </div>
    </section>
  );
}
