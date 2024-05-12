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
