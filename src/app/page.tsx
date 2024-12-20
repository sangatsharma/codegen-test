"use client";
import { useVacancyControllerGetAllJobVacancy } from "../api/apiComponents";

export const Home = () => {
  const { data, isLoading, error } = useVacancyControllerGetAllJobVacancy({});

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {typeof error.payload === 'string' ? error.payload : error.payload.message}</p>;

  return <div>{data?.message}</div>;
};
export default Home;