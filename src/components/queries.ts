import axios from "axios";
import { Client } from "./Client";

const BASE_URL = "http://localhost:3001";

const queries = { fetchClients, createClient };

async function fetchClients() {
  const { data } = await axios.get(`${BASE_URL}/clients`);
  return data;
}

async function createClient(client: Client) {
  const { data } = await axios.post(`${BASE_URL}/clients`, client);
  return data;
}

export default queries;
