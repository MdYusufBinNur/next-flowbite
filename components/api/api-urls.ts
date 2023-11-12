// export const API_BASE = 'http://brollopsguiden-api/api/v1';
export const API_BASE = process.env.NEXT_PUBLIC_API_BASE || process.env.API_BASE;
export const API_URLS = {
  base_url: API_BASE,
  login: `${API_BASE}/login`,
};
