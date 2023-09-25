const baseUrl = 'https://dummyjson.com/products'

const handleResponse = (response: Response) => {
  if (!response.ok) throw response;
  return response;
};

export const getProducts = async () => {
  return fetch(baseUrl).then(handleResponse);
};

export const getProduct = async (id: number) => {
  return fetch(`${baseUrl}/${id}`).then(handleResponse);
};
