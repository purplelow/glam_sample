const BASE_URL = `http://localhost:3000/users`;

export function fetchSocialFeed() {
  return fetch(`${BASE_URL}`).then((response) => response.json());
}