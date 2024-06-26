<template>
  <div class="view">
    <router-link to="/">Voltar</router-link> |
    <h1>Detalhes do Usuário</h1>

    <div v-if="usuario">
      <p><strong>ID:</strong> {{ usuario.id }}</p>
      <p><strong>Nome:</strong> {{ usuario.firstname }} {{ usuario.lastname }}</p>
      <p><strong>E-mail:</strong> {{ usuario.email }}</p>
      <p><strong>Função:</strong> {{ usuario.funcao }}</p>
    </div>
    <div v-else>
      <p>Usuário não encontrado.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'View',
  data() {
    return {
      usuario: null
    };
  },

};
</script>

<style scoped>
.view {
  padding: 20px;
}

h1 {
  margin-bottom: 20px;
}
</style>
