import axios from 'axios';
import Interceptor from './interceptor';

const createInstance = () => {
  const instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
  });

  Interceptor(instance);

  return instance;
};

const config = createInstance();

export default config;
