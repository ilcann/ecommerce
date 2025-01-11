import { IUser } from "@/types";

// Base URL
const baseURL = "https://ecomcartservice-gqhxgngjdkedghd3.germanywestcentral-01.azurewebsites.net";

// Endpoint definitions
const endpoints = {
  cart: {
    getCart: (user: IUser) => `${baseURL}/cart/${user.username}`,
    updateCart: `${baseURL}/api/cart/update`,
  },
  products: {
    list: `${baseURL}/api/product`,
  },
};

export default endpoints;