const baseUrl = 'https://dummyjson.com/products'

const handleResponse = (response: Response) => {
  if (!response.ok) throw response
  return response
}

export const getProducts = async () => {
  return fetch(`${baseUrl}?limit=100`).then(handleResponse)
}

export const getProduct = async (id: number) => {
  return fetch(`${baseUrl}/${id}`).then(handleResponse)
}

export const searchProducts = async (query: string) => {
  return fetch(`${baseUrl}?q=${query}?skip=5&limit=7`).then(handleResponse)
}

export const getCategories = async () => {
  return fetch(`${baseUrl}/categories`).then(handleResponse)
}