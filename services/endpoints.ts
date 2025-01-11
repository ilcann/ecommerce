import { IUser } from "@/types";

// Base URL
const baseURL = "https://ecomcartservice-gqhxgngjdkedghd3.germanywestcentral-01.azurewebsites.net";
//const baseURL = "http://localhost:3000/";

// Endpoint definitions
const endpoints = {
  cart: {
    getCart: (user: IUser) => `${baseURL}/api/cart/summary/${user.username}`,
    updateCart: `${baseURL}/api/cart/update`,
  },
  products: {
    list: `${baseURL}/api/product`,
  },
};

export default endpoints;