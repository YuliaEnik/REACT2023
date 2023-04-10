export const getURL = async (search: string, id?: number) => {
  const link = "https://api.artic.edu/api/v1/artworks";
  let path = `${link}?q=${search}`;

  if (!search) path = link;
  if (id) path = `${link}/${id}`;

  const res = await fetch(path, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  return await res.json();
};
