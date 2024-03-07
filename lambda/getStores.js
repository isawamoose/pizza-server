export const handler = async () => {
  const body = {
    store: [
      { name: 'San Diego', date: '3/6/2024, 2:47:16 PM' },
      { name: 'Springdale', date: '3/6/2024, 2:47:21 PM' },
      { name: 'Default Pizza Server', date: '3/6/2024, 2:47:21 PM' },
    ],
  };
  const response = {
    statusCode: 200,
    body: JSON.stringify(body),
  };
  return response;
};
