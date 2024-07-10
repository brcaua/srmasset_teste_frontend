import axios from "axios";

const baseURL = "http://localhost:8080";

const pessoasAPI = {
  async getPessoas() {
    return await axios.get(`${baseURL}/pessoas`);
  },
  async createPessoa(pessoa: any) {
    return await axios.post(`${baseURL}/pessoas`, pessoa);
  },
};

export default pessoasAPI;
