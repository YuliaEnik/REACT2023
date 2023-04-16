import { IData } from "../Components/Card";

let path =
  "https://api.artic.edu/api/v1/artworks?fields=id,title,artist_title,date_display,image_id";

export const getcardApiData = async (
  search?: string,
  id?: number
): Promise<IData[]> => {
  const searchPath = `https://api.artic.edu/api/v1/artworks/search?q=${search}&&fields=id,title,artist_title,date_display,image_id`;

  if (search) {
    path = searchPath;
  }
  if (id) {
    path = `${path}/${id}`;
  }
  const res = await fetch(path, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  if (res.ok) {
    const response = await res.json();
    return response.data;
  }
  throw new Error();
};
