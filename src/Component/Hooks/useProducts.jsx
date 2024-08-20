import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useProducts = (search) => {
  const axiosPublic = useAxiosPublic();
  const { data: allProducts = [] } = useQuery({
    queryKey: ["allProducts", search],
    queryFn: async () => {
      const res = await axiosPublic.get(`/products?search=${search}`);
      return res.data;
    },
  });
  return [allProducts];
};

export default useProducts;
