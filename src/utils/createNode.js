const nodeLabels = {
  request: "Request",
  middleware: "Middleware",
  route: "Route",
  controller: "Controller",
  service: "Service",
  database: "Database",
  response: "Response",
};

const createNode = (type, count) => {
  return {
    id: `${Date.now()}`,

    type,

    position: {
      x: Math.random() * 500 + 100,
      y: Math.random() * 400 + 100,
    },

    data: {
      label: `${nodeLabels[type]} ${count}`,
    },
  };
};

export default createNode;