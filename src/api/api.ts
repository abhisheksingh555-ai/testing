import axios from "axios";

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export const apiData = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

export const allData = async (): Promise<Post[]> => {
  const response = await apiData.get<Post[]>("/posts");
  return response.data;
};