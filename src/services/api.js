export async function getCategories() {
  const url = 'https://api.mercadolibre.com/sites/MLB/categories';
  const fetchResponse = await fetch(url);
  const parsedResponse = await fetchResponse.json();
  return parsedResponse;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  let url = 'https://api.mercadolibre.com/sites/MLB/search?';
  if (categoryId) url += `category=${categoryId}`;
  if (categoryId && query) url += '&';
  if (query) url += `q=${query}`;
  const fetchResponse = await fetch(url);
  const parsedResponse = await fetchResponse.json();
  return parsedResponse;
}
