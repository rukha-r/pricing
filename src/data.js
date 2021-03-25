let data = [
  {
    id: Math.round(Math.random(1000000) * 1000),
    type: "Basic",
    price: 19.99,
    storage: 500,
    allowed_user: 2,
    send_limit: 3,
  },
  {
    id: Math.round(Math.random(1000000) * 1000),
    type: "Professional",
    price: 24.99,
    storage: 1000,
    allowed_user: 5,
    send_limit: 10,
  },
  {
    id: Math.round(Math.random(1000000) * 1000),
    type: "Master",
    price: 39.99,
    storage: 2000,
    allowed_user: 10,
    send_limit: 20,
  },
];

export default data;
