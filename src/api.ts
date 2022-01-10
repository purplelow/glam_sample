const BASE_URL = `http://localhost:3000/users`;

export function fetchGlamFeed() {
  return fetch(`${BASE_URL}`).then((response) => response.json());
}