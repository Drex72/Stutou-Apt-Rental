import { getImageLinksFromApi } from "../../../utils/getImageLinksFromApi";

export const getAllImages = async (searchTerm: string) => {
  try {
    const response = await fetch(
      `https://api.unsplash.com/search/photos?page=1&query=${searchTerm}`, {
      method: 'GET',
      headers: {
        Authorization: `Client-ID eUN1WFiAyd9wL3VJ44yx8ZGoJzIFKwftI8mWVBNusDM`,
      }
    }
    );
    if (response.status === 200) {
      const responseJson = await response.json();
      return {
        data: getImageLinksFromApi(responseJson.results),
        error: null,
        loading: false,
      };
    }
    return { data: null, error: response.statusText, loading: false };
  } catch (error: any) {
    return { data: null, error, loading: false };
  }
};
