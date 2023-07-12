import type { AxiosInstance } from 'axios';

const Interceptor = (instance: AxiosInstance) => {
  instance.interceptors.response.use((res) => res.data.data);
};

export default Interceptor;
