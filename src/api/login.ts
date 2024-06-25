export function register({
  email,
  password,
  username,
}: {
  email: string;
  password: string;
  username: string;
}) {
  return fetch("https://skypro-music-api.skyeng.tech/user/signup/", {
    method: "POST",
    body: JSON.stringify({
      email,
      password,
      username,
    }),
    headers: {
      "content-type": "application/json",
    },
  }).then((response) => {
    if (response.status === 201 || response.status === 400) {
      return response.json().then((json) => {
        return {
          json,
          status: response.status,
        };
      });
    } else {
      throw new Error("Ошибка");
    }
  });
}

export function login({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  return fetch("https://skypro-music-api.skyeng.tech/user/login/", {
    method: "POST",
    body: JSON.stringify({
      email,
      password,
    }),
    headers: {
      "content-type": "application/json",
    },
  }).then((response) => {
    if (
      response.status === 200 ||
      response.status === 400 ||
      response.status === 401
    ) {
      return response.json().then((json) => {
        return {
          json,
          status: response.status,
        };
      });
    } else {
      throw new Error("Ошибка");
    }
  });
}

export function tokens({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  return fetch("https://skypro-music-api.skyeng.tech/user/token/", {
    method: "POST",
    body: JSON.stringify({
      email,
      password,
    }),
    headers: {
      "content-type": "application/json",
    },
  }).then((response) => response.json());
}
