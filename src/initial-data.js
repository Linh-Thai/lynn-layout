import { COMPONENT, ROW, COLUMN } from "./constants";

const initialData = {
  layout: [
    {
      type: ROW,
      id: "row0",
      children: [
        {
          type: COLUMN,
          id: "column0",
          children: [
            {
              type: COMPONENT,
              id: "component0"
            }
          ]
        }
      ]
    },
  ],
  components: {
    component0: { id: "component0", type: "input", content: "Some chart" }
  }
};

export default initialData;
