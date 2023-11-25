import axios from 'axios';

// Axios instance untuk admin
const axiosJWTadmin = axios.create();

axiosJWTadmin.interceptors.request.use(async (config) => {
  try {
    const response = await axios.get("https://silly-elk-cummerbund.cyclic.app/account/token", {
      headers: {
        'role': "admin"
      },
    });
    config.headers.Authorization = `Bearer ${response.data.token}`;
    return config;
  } catch (error) {
    return Promise.reject(error);
  }
});

// Axios instance untuk user (peserta_magang)
const axiosJWTuser = axios.create();

axiosJWTuser.interceptors.request.use(async (config) => {
  try {
    const response = await axios.get("https://silly-elk-cummerbund.cyclic.app/account/token", {
      headers: {
        'role': "peserta_magang"
      },
    });
    config.headers.Authorization = `Bearer ${response.data.token}`;
    return config;
  } catch (error) {
    return Promise.reject(error);
  }
});

export { axiosJWTadmin, axiosJWTuser };
