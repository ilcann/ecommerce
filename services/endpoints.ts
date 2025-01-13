import { IUser } from "@/types";


//const localUrl = "http://localhost:5062"
const remoteURL = 'https://ecomcartservice-gqhxgngjdkedghd3.germanywestcentral-01.azurewebsites.net'

// Base URL
const baseURL = remoteURL;

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