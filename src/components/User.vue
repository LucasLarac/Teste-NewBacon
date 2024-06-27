<template>
  <div class="user">
    <div v-if="usuario">
      <div class="header">
        <p id="id"><strong>#</strong> {{ usuario.id }}</p>
        <button @click="voltar">Voltar</button> 
      </div>
      <div class="user-info">
        <div class="avatar-container">
          <img :src="usuario.avatar" alt="Avatar" class="avatar">
        </div>
        <div class="details">
          <p>Primeiro nome: <strong class="name-black">{{ usuario.first_name }}</strong></p>
          <p>Último nome: <strong class="name-black">{{ usuario.last_name }}</strong></p>
        </div>
      </div>
      <div class="infos">
        <p>Endereço de e-mail:</p>

        <label><strong>{{ usuario.email }}</strong></label>
        <p>Link do avatar:</p>
        <label><strong>{{ usuario.avatar }}</strong></label>
        <Support/>

      </div>
    </div>
    <div v-else-if="showMessage">
      <p>Usuário não encontrado.</p>
    </div>
  </div>
</template>

<script>
import UserService from '@/services/UserService';
import Support from './Support.vue'

export default {
  name: 'User',
  components:{
    Support
  },
  data() {
    return {
      usuario: null,
      support: null,
      showMessage: false
    };
  },
  mounted() {
    setTimeout(() => {
      if (!this.usuario) {
        this.showMessage = true;
      }
    }, 5000);
  },
  created() {
    this.fetchUserDetails();
  },
  methods: {
    async fetchUserDetails() {
      try {
        const userId = this.$route.params.id;
        this.usuario = await UserService.getUser(userId);
      } catch (error) {
        console.error('Erro ao carregar detalhes do usuário:', error);
      }
    },
    
    voltar() {
      this.$router.go(-1);
    }
  }
};
</script>

<style scoped>
.user {
  width: 100%; 
  max-width: 600px; 
  margin: 0 auto; 
  padding: 20px; 
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  box-sizing: border-box;
}

.infos {
  flex: 1;
}

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

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  color: black;
  font-size: 2em;
}

.user-info {
  display: flex;
  align-items: center;
}

.avatar-container {
  margin-right: 20px;
}

.avatar {
  width: 80px;
  height: auto;
}

.details {
  flex: 1;
}
.name-black {
  color: black;
}

.details p {
  margin: 5px 0;
  text-align: left;
  color: rgb(163, 163, 163);
}



button {
  background-color: rgb(226, 226, 226);
  color: black;
  border: none;
  padding: 13px 33px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}
</style>
