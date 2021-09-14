import axios from "axios";

const BASE_URL = "http://localhost:3001";

const queries = { fetchClients };

async function fetchClients() {
  const { data } = await axios.get(`${BASE_URL}/clients`);
  return data;
}

export default queries;
