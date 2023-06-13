import shortid from "shortid";

export const SIDEBAR_ITEM = "sidebarItem";
export const ROW = "row";
export const COLUMN = "column";
export const COMPONENT = "component";

export const SIDEBAR_ITEMS = [

  {
    id: shortid.generate(),
    type: SIDEBAR_ITEM,
    component: {
      type: "Chart: Bar",
      content: "",
      image: "bar"
    }
  },
  {
    id: shortid.generate(),
    type: SIDEBAR_ITEM,
    component: {
      type: "Chart: Card",
      content: "chart3Content",
      image: "card"
    }
  },
  {
    id: shortid.generate(),
    type: SIDEBAR_ITEM,
    component: {
      type: "Chart: Donut",
      content: "chart4Content",
      image: "donut"
    }
  },
  {
    id: shortid.generate(),
    type: SIDEBAR_ITEM,
    component: {
      type: "Chart: Gauge ",
      content: "chart5Content",
      image: "gauge"
    }
  },
  {
    id: shortid.generate(),
    type: SIDEBAR_ITEM,
    component: {
      type: "Chart: HorizonBar",
      content: "chart6Content",
      image: "horizonbar"
    }
  },
  {
    id: shortid.generate(),
    type: SIDEBAR_ITEM,
    component: {
      type: "Chart: Line",
      content: "chart7Content",
      image: "background7"
    }
  },
  {
    id: shortid.generate(),
    type: SIDEBAR_ITEM,
    component: {
      type: "Chart: Pie",
      content: "chart8Content",
      image: "pie"
    }
  },
  {
    id: shortid.generate(),
    type: SIDEBAR_ITEM,
    component: {
      type: "Chart: Scatter",
      content: "Some input",
      image: "scatter"
    }
  },
  {
    id: shortid.generate(),
    type: SIDEBAR_ITEM,
    component: {
      type: "Chart: Tree",
      content: "",
      image: "tree"
    }
  },
  {
    id: shortid.generate(),
    type: SIDEBAR_ITEM,
    component: {
      type: "Chart",
      content: "",
      image: ""
    }
  },
  {
    id: shortid.generate(),
    type: SIDEBAR_ITEM,
    component: {
      type: "Filter",
      content: "",
      image: ""
    }
  },
  {
    id: shortid.generate(),
    type: SIDEBAR_ITEM,
    component: {
      type: "Compare: ",
      content: "",
      image: ""
    }
  },
  {
    id: shortid.generate(),
    type: SIDEBAR_ITEM,
    component: {
      type: "Note",
      content: "",
      image: ""
    }
  }

];
