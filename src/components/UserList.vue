<template>
  <div class="userlist">
    <div class="header">
      <h2>Usuários</h2>
      <button @click="showInput" :class="{'cancelar-btn': mostrarInput}">
        {{ textoBotao }}
      </button>
    </div>

    <div v-show="mostrarInput" class="user-form">
      <p>Nome do usuário</p>
      <input type="text" v-model="nomeCompleto" placeholder="Nome do Usuário">
      <p>Função do usuário</p>
      <select v-model="selectedOption">
        <option value="">Selecione uma opção</option>
        <option value="Desenvolvedor">Desenvolvedor</option>
        <option value="Gerente de Projetos">Gerente de Projetos</option>
        <option value="Tech Lead">Tech Lead</option>
        <option value="UI/UX Designer">UI/UX Designer</option>
      </select>
      <br>
      <button @click="salvarDados">Salvar dados do usuário</button>
    </div>

    <div class="user-list">
      <h3>Lista de Usuários</h3>
      <ul>
        <li v-for="(usuario, index) in usuarios" :key="usuario.id">
          <div>
            {{ usuario.id }} - {{ usuario.firstname }} {{ usuario.lastname }} - {{ usuario.email }} - {{ usuario.funcao }}
          </div>
          <div>
            <button @click="editarUsuario(index)">
              <span class="icon"><img src="@/assets/edit.png" alt="Editar"></span>
            </button>

            <button @click="excluirUsuario(index)">
              <span class="icon"><img src="@/assets/delete.png" alt="Excluir"></span>
            </button>

            <router-link :to="`/view/${usuario.id}`">
              <span class="icon"><img src="@/assets/view.png" alt="Visualizar"></span>
            </router-link>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { useToast } from 'vue-toast-notification';

export default {
  name: 'UserList',
  data() {
    return {
      mostrarInput: false,
      textoBotao: 'Novo usuário',
      nomeCompleto: '',
      selectedOption: '',
      usuarios: [],
      nextId: 1 // ID inicial
    };
  },
  methods: {
    showInput() {
      this.mostrarInput = !this.mostrarInput;
      if (!this.mostrarInput) {
        this.textoBotao = 'Novo usuário';
      } else {
        this.textoBotao = 'Cancelar';
      }
    },
    salvarDados() {
      const toast = useToast();
      if (this.nomeCompleto && this.selectedOption) {
        // Separando o nome completo em firstname e lastname
        const partesNome = this.nomeCompleto.split(' ');
        const firstname = partesNome[0];
        const lastname = partesNome.slice(1).join(' '); // Sobrenome pode ser composto
        const email = `${firstname}.${lastname}@newbacon.com.br`;

        this.usuarios.push({
          id: this.nextId++,
          firstname: firstname,
          lastname: lastname,
          email: email,
          funcao: this.selectedOption
        });

        this.nomeCompleto = '';
        this.selectedOption = '';
        this.mostrarInput = false;
        this.textoBotao = 'Novo usuário';
        toast.success('Usuário criado com sucesso!');
      } else {
        toast.error('Por favor, preencha todos os campos');
      }
    },
    editarUsuario(index) {
      this.nomeCompleto = this.usuarios[index].firstname + ' ' + this.usuarios[index].lastname;
      this.selectedOption = this.usuarios[index].funcao;
      this.mostrarInput = true;
      this.textoBotao = 'Cancelar';
      // Removendo o usuário da lista antes de editar
      this.usuarios.splice(index, 1);
    },
    excluirUsuario(index) {
      this.usuarios.splice(index, 1);
      const toast = useToast();
      toast.success('Usuário excluído com sucesso!');
    }
  }
};
</script>

<style scoped>
.userlist {
  width: 592px;
  height: 761px;
  top: 96px;
  left: 344px;
  position: absolute;
}

button {
  background-color: black; /* Fundo preto */
  color: white; /* Texto branco */
  border: none; /* Remove borda padrão */
  padding: 10px 20px; /* Ajuste o preenchimento conforme necessário */
  border-radius: 5px; /* Cantos arredondados */
  cursor: pointer; /* Indica área clicável */
}

button.cancelar-btn {
  background-color: rgb(226, 226, 226); /* Fundo branco */
  color: black; /* Texto preto */
}

h2 {
  padding: 10px 20px; /* Ajuste o preenchimento conforme necessário */
  line-height: 61px; /* Defina a altura da linha para a altura desejada */
  display: inline-block; /* Permite definir largura */
  width: 229px; /* Defina a largura desejada */
  text-align: center; /* Opcional: centralizar o texto horizontalmente */
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.header h2 {
  margin: 0;
}

.user-form p {
  margin: 10px 0 5px;
  color: black;
}

.user-form input,
.user-form select {
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  box-sizing: border-box;
}

.user-form button {
  padding: 10px 15px;
  cursor: pointer;
}

.user-list {
  margin-top: 20px;
}

.user-list ul {
  list-style-type: none;
  padding: 0;
}

.user-list li {
  margin: 5px 0;
}
</style>
