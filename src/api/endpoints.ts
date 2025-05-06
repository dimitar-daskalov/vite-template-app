// Base endpoints constants
const BASE_API = {
  AUTH: "/auth",
  USER: "/user",
};

export const ApiRoute = {
  // Static
  getMe: `${BASE_API.USER}/me`,

  // Dynamic
  getDynamicAuth: (address: string) => `${BASE_API.AUTH}?address=${address}`,
};
