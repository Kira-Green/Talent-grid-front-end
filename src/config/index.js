const API_URL = process.env.REACT_APP_API_URL || "";

export const api = {
  login: `${API_URL}/login`,
  employees: `${API_URL}/employees`
};

export const tokenKey = "my_token";
