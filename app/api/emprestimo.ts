import axios from "axios";

const baseURL = "http://localhost:8080";

const emprestimoAPI = {
  async getEmprestimos() {
    return await axios.get(`${baseURL}/emprestimo`);
  },
  async createEmprestimo(emprestimo: any) {
    return await axios.post(`${baseURL}/emprestimo`, emprestimo);
  },
};

export default emprestimoAPI;
