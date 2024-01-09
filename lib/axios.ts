import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
});

export const getAxios = async (url: string) => {
  const res = await axiosInstance.get(url);
  return res;
};

export const postAxios = async (url: string, option: any) => {
  const res = await axiosInstance.post(url, option);
  return res;
};

export const putAxios = async (url: string, option: any) => {
  const res = await axiosInstance.put(url, option);
  return res;
};

export const deleteAxios = async (url: string) => {
  const res = await axiosInstance.delete(url);
  return res;
};
