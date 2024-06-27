<template>
<div v-if="support" class="support-info">
  <p>Link de suporte: </p>
  <label for=""> <strong>{{support.url}}</strong></label>
  <p>Link de suporte: </p>
  <label for=""> <strong>{{support.text}}</strong></label>
</div>
</template>

<script>
import UserService from '@/services/UserService';

export default {
  name: 'Support',
  data() {
    return {
      support: null
    };
  },
  created() {
    this.fetchUsers();
  },
methods: {
    async fetchUsers() {
    try {
      const response = await UserService.getUsers();
      this.usuarios = response.data; // Usuários
      this.support = response.support; // Dados de suporte
    } catch (error) {
      console.error('Erro ao carregar usuários:', error);
    }
  },
}

};
</script>

<style scoped>
.infos p {
  margin: 5px 0; 
  text-align: left;
  color: rgb(163, 163, 163);
}

.infos label {
  display: block;
  width: 100%;
  margin: 5px 0; 
  text-align: left;
  color: rgb(0, 0, 0);
}
</style>
