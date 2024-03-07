import axios from 'axios';
import JSCookie from 'js-cookie'

const { ENV_API_BASE_URL } = import.meta.env;

const httpRequest = axios.create({
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json;charset=UTF-8',
  },
  baseURL: ENV_API_BASE_URL,
});

const requestHandler = (config: any) => {
  const token = JSCookie.get('accessToken')
  if (token) {
    config.headers = {
      Authorization: `Bearer ${token}`,
      ...config.headers
    }
  }
  return config
}

export default httpRequest;
