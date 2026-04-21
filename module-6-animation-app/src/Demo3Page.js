import React from "react";
import Tree from "./demo 3/Tree";
import data from "./demo 3/data";

export default function Demo3Page() {
  return (
    <div>
      <h2>Demo 3 - Collapsible Tree</h2>
      <Tree data={data} width={600} height={500} />
    </div>
  );
}
