export function getTracks() {
  return fetch("https://skypro-music-api.skyeng.tech/catalog/track/all/").then(
    (res) => {
      if (!res.ok) {
        throw new Error("Ошибка при получении данных");
      }
      return res.json();
    }
  );
}

export function getSelections({ id }: { id: number }) {
  return fetch(
    "https://skypro-music-api.skyeng.tech/catalog/selection/" + id
  ).then((res) => {
    if (!res.ok) {
      throw new Error("Ошибка при получении данных");
    }
    return res.json();
  });
}

export function addToFavorite({
  access,
  refresh,
  track_id,
}: {
  access: string;
  refresh: string;
  track_id: number;
}) {
  return fetch(
    `https://skypro-music-api.skyeng.tech/catalog/track/${track_id}/favorite/`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${access}`,
      },
    }
  ).then((response) => {
    return response.status !== 401;
  });
}

export function removeFromFavorite({
  access,
  refresh,
  track_id,
}: {
  access: string;
  refresh: string;
  track_id: number;
}) {
  return fetch(
    `https://skypro-music-api.skyeng.tech/catalog/track/${track_id}/favorite/`,
    {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${access}`,
      },
    }
  ).then((response) => {
    return response.status !== 401;
  });
}

export function getFavoriteTracks({
  access,
  refresh,
}: {
  access: string;
  refresh: string;
}) {
  return fetch(
    "https://skypro-music-api.skyeng.tech/catalog/track/favorite/all/",
    {
      headers: {
        Authorization: `Bearer ${access}`,
      },
    }
  ).then((res) => {
    if (!res.ok) {
      throw new Error("Ошибка при получении данных");
    }
    return res.json();
  });
}
