import axios from "axios";

async function getMeal() {
  const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/`);
  return response;
}

export default getMeal;
