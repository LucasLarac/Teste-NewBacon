import axios from 'axios';

const BASE_URL = 'https://reqres.in/api';

const UserService = {
  async getUsers() {
    try {
      const response = await axios.get(`${BASE_URL}/users`);
      return response.data; 
    } catch (error) {
      console.error('Erro ao obter usuários:', error);
      throw error; 
    }
  },

  async getUser(id) {
    try {
      const response = await axios.get(`${BASE_URL}/users/${id}`);
      return response.data.data; 
    } catch (error) {
      console.error(`Erro ao obter usuário com ID ${id}:`, error);
      throw error; 
    }
  },



  async createUser(user) {
    try {
      const response = await axios.post(`${BASE_URL}/users`, user);
      return response.data; 
    } catch (error) {
      console.error('Erro ao criar usuário:', error);
      throw error; 
    }
  },

  async updateUser(id, user) {
    try {
      const response = await axios.put(`${BASE_URL}/users/${id}`, user);
      return response.data; 
    } catch (error) {
      console.error(`Erro ao atualizar usuário com ID ${id}:`, error);
      throw error; 
    }
  },

  async deleteUser(id) {
    try {
      const response = await axios.delete(`${BASE_URL}/users/${id}`);
      return response.data; 
    } catch (error) {
      console.error(`Erro ao excluir usuário com ID ${id}:`, error);
      throw error; 
    }
  }
};

export default UserService;
