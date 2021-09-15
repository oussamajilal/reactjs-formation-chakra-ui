import axios from "axios";
import { Client } from "./Client/Client";
import { Credentials } from "./Login/LoginTypes";

const BASE_URL = "http://localhost:3001";

const fetchProfile = async () => {
  const { data } = await axios.get(`${BASE_URL}/profile`);
  return data as Client;
};

const fetchClients = async () => {
  const { data } = await axios.get(`${BASE_URL}/clients`);
  return data as Array<Client>;
};

const createClient = async (client: Client) => {
  const { data } = await axios.post(`${BASE_URL}/clients`, client);
  return data;
};

const login = async (credentials: Credentials) => {
  const { data } = await axios.post(`${BASE_URL}/login`, credentials);
  return data;
};

const queries = { login, fetchProfile, fetchClients, createClient };

export default queries;
