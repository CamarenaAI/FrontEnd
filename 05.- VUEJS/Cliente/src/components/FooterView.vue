<template>
  <footer>
    <p>Pastelerías Cookies & Cream © 2023<br />Todos los derechos reservados</p>
    <router-link to="/aviso">Aviso de privacidad</router-link>
  </footer>
</template>

<script>
export default {
  name: "FooterView",
};
</script>

<style scoped>
/* Footer */
footer {
  background-color: #c57d56;
  width: 100%;
  height: 100px;
  float: left;
  margin-top: 20px;
  text-align: center;
}

footer a {
  font-size: 15px;
  color: blue;
}

@media (max-width: 450px) {
  /* Footer */
  footer {
    background-color: #c57d56;
    width: 100%;
    height: 100px;
    float: left;
    margin-top: 20px;
    text-align: center;
    font-size: 12px;
  }

  footer a {
    font-size: 12px;
    color: blue;
  }
}
</style>
