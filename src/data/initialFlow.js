export const initialNodes = [
  {
    id: "1",
    type: "request",
    position: { x: 100, y: 100 },
    data: {
      label: "POST /login",
    },
  },

  {
    id: "2",
    type: "middleware",
    position: { x: 350, y: 100 },
    data: {
      label: "Auth Check",
    },
  },

  {
    id: "3",
    type: "route",
    position: { x: 600, y: 100 },
    data: {
      label: "POST /login",
    },
  },
];

export const initialEdges = [
  {
    id: "e1-2",
    source: "1",
    target: "2",
    animated: true,
  },

  {
    id: "e2-3",
    source: "2",
    target: "3",
    animated: true,
  },
];

