<template>
  <div class="userlist">
    <div class="header">
      <h2><strong>Usuários</strong></h2>
      <button @click="showInput" :class="{'cancelar-btn': mostrarInput}">
        {{ textoBotao }}
      </button>
    </div>

    <div v-show="mostrarInput" class="user-form">
      <form @submit.prevent="criarUsuario">
        <label for="firstName"><strong>Nome do usuário:</strong></label>
        <input type="text" id="firstName" v-model="novoUsuario.first_name" required placeholder="Digite o nome"><br>       
        <label for="optin"><strong>Função do usuário:</strong></label>
      <select v-model="selectedOption">
        <option value="">Selecione uma opção</option>
        <option value="Desenvolvedor">Desenvolvedor</option>
        <option value="Gerente de Projetos">Gerente de Projetos</option>
        <option value="Tech Lead">Tech Lead</option>
        <option value="UI/UX Designer">UI/UX Designer</option>
      </select><br>        
        <button type="submit" class="save">Salvar dados do usuário</button>
      </form>
    </div>

    <ul>
      <li v-for="usuario in usuarios" :key="usuario.id" class="user-item">
        <img :src="usuario.avatar" alt="Avatar" class="avatar">
        <div class="user-details">        
          <p>#{{ usuario.id }}</p>
          <p><strong>{{ usuario.first_name }} {{ usuario.last_name }}</strong></p>
          <p>{{ usuario.email }}</p>
        </div>
        <div class="user-actions">
          <button class="icon" @click="editarUsuario"><img src="@/assets/edit.png" alt="Editar"></button>
          <button class="icon" @click="excluirUsuario"><img src="@/assets/delete.png" alt="Excluir"></button>
          <router-link :to="`/user/${usuario.id}`" class="icon">
            <img src="@/assets/view.png" alt="Visualizar">
          </router-link>
        </div>
      </li>
    </ul>



  </div>
</template>

<script>
import UserService from '@/services/UserService';

export default {
  name: 'UserList',
  data() {
    return {
      textoBotao: 'Novo usuário',
      usuarios: [],
      novoUsuario: {
        first_name: '',
        last_name: ''
      },
      usuarioEditando: null,
      support: null,
      selectedOption: '',
    };
  },
  created() {
    this.fetchUsers();
  },
methods: {
  showInput() {
    this.mostrarInput = !this.mostrarInput;
    this.textoBotao = this.mostrarInput ? 'Cancelar' : 'Novo usuário';
  },
  async fetchUsers() {
    try {
      const response = await UserService.getUsers();
      this.usuarios = response.data; // Usuários
      this.support = response.support; // Dados de suporte
    } catch (error) {
      console.error('Erro ao carregar usuários:', error);
    }
  },
  async criarUsuario() {
    try {
      console.log('Incluir apertado'); 
    } catch (error) {
      console.error('Erro ao criar usuário:', error);
    }
  },
  async editarUsuario(usuario) {
    console.log('Editar apertado');
  },
  async salvarEdicao() {
    try {
      console.log('Salvar edição apertado'); 
    } catch (error) {
      console.error('Erro ao atualizar usuário:', error);
    }
  },
  async excluirUsuario(id) {
    try {
      console.log('Excluir apertado'); 
    } catch (error) {
      console.error('Erro ao excluir usuário:', error);
    }
  }
}

};
</script>

<style scoped>
body, html {
  margin: 0;
  padding: 0;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f0f0f0;
  font-family: Arial, sans-serif;
}

.userlist {
  width: 100%; 
  max-width: 600px; 
  margin: 0 auto; 
  padding: 20px; 
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  box-sizing: border-box;
}

.user-actions button {
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 10px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.user-item {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  background-color: rgb(224, 224, 224);
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
  border-radius: 5px;
}

.avatar {
  width: 80px; 
  height: auto;
  margin-right: 20px;
  border-radius: 50%;
}

.user-details {
  flex: 1;
}

.user-details p {
  margin: 5px 0; 
  text-align: left;
}

.user-form {
  width: 100%; 
  max-width: 600px; 
  margin: 20px auto; 
  padding: 20px;
  box-sizing: border-box;
  background-color: #f9f9f9;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.user-form input,
.user-form select {
  width: 100%; 
  padding: 10px;
  margin-bottom: 15px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button {
  background-color: black;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  display: block;
}

button.cancelar-btn {
  background-color: rgb(226, 226, 226);
  color: black;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  display: block;
}

.save {
  background-color: black;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  display: block;
  padding: 10px;
  margin-bottom: 15px;
  width: 100%; 
}

label {
  color: black;
  display: block;
  text-align: left;
}

h2 {
  color: black;
}

.user-actions {
  display: flex;
  align-items: center;
}

.user-actions .icon {
  margin-right: 10px;
}

@media (max-width: 768px) {
  .userlist {
    width: 100%;
    padding: 10px;
  }

  .user-item {
    flex-direction: column;
    align-items: flex-start;
  }

  .avatar {
    width: 100%;
    margin-right: 0; 
    margin-bottom: 10px;
  }

  .user-details {
    width: 100%;
  }

  .user-details p {
    margin: 5px 0;
  }

  .user-actions {
    width: 100%;
    justify-content: flex-start;
    margin-top: 10px;
  }
}

</style>
