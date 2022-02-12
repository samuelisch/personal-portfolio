import axios from "axios";
const baseUrl = 'https://samuelisch-portfolio-server.herokuapp.com/'

const post = async (mail: object) => {
  const response = await axios.post(baseUrl, mail);
  return response.data
}

const service = {
  post
}

export default service;