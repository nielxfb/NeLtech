import axios from "axios";
import { IProduct } from "../interfaces/product-interface";

const getProducts = async (): Promise<IProduct[]> => {
  try {
    const url = import.meta.env.VITE_API_URL + "/get-products";
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw new Error((error as Error).message);
  }
};

const getProductsByCategory = async (
  categoryID: number
): Promise<IProduct[]> => {
  try {
    const url =
      import.meta.env.VITE_API_URL + `/get-products-by-category/${categoryID}`;
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw new Error((error as Error).message);
  }
};

export { getProducts, getProductsByCategory };
