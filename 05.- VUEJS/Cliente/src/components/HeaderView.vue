<template>
  <header>
    <nav>
      <a href=""><img src="@/assets/Pasteleria.png" alt="Logo" /></a>
      <router-link to="/">Inicio</router-link>
      <router-link to="/pedidos">Pedidos</router-link>
      <router-link to="/contacto">Contacto</router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: "HeaderView",
};
</script>

<style scoped>
/* Header */
header {
  background-color: #c57d56;
  width: 100%;
  height: 150px;
  margin-bottom: 20px;
  float: left;
}

header nav a img {
  width: 150px;
  height: 150px;
  margin-top: 0%;
  float: left;
}

header nav {
  font-size: 25px;
  text-align: right;
}

header nav a {
  color: whitesmoke;
  margin-bottom: 5%;
  margin-right: 2%;
  flex: content;
}

@media (max-width: 450px) {
  /* Header */
  header {
    background-color: #c57d56;
    width: 100%;
    height: 80px;
    margin-bottom: 20px;
    float: left;
  }

  header nav a img {
    width: 80px;
    height: 80px;
    float: left;
  }

  header nav {
    font-size: 12px;
    text-align: right;
  }

  header nav a {
    color: whitesmoke;
    margin-bottom: 5%;
    margin-right: 2%;
    flex: content;
  }
}
</style>
