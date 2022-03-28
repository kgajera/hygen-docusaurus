---
to: src/components/<%= name %>/index.tsx
---
<% const comp = h.inflection.undasherize(name) -%>
import React from "react";

interface <%= comp %>Props {
}

function <%= comp %>({}: <%= comp %>Props) {
  return (<></>);
}

export default <%= comp %>;
