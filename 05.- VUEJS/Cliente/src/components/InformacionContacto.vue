<template>
  <section>
    <article class="visitanos">
      <h3>Visitanos</h3>

      <h4><b>Domicilio</b></h4>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat beatae
        voluptas molestias illum vel ipsa<br />
        suscipit inventore voluptatum amet in quisquam consequatur, deleniti
        sed. Eos nam expedita beatae optio<br />
        quia.
      </p>

      <h4><b>Horario</b></h4>
      <p>Lunes - Viernes: 9:00 am - 19:00pm</p>
      <p>Sabado: 9:00 am - 14:00 pm</p>
      <p>Domingo: Cerrado</p>

      <h4><b>Llamanos</b></h4>
      <p>782-989-23-23</p>
    </article>
  </section>
</template>

<script>
export default {
  name: "InformacionContacto",
};
</script>

<style scoped>
/* Main */
section {
  background-color: #ffb48a;
  margin-left: 2%;
  margin-right: 2%;
  width: 96%;
  min-height: 400px;
  float: right;
}

.visitanos {
  background-color: #8d4925;
  margin-top: 10px;
  margin-left: 10%;
  margin-right: 10%;
  width: 80%;
  color: azure;
}

.visitanos h3 {
  font-size: 30px;
}

.visitanos h4 {
  font-size: 25px;
}

.visitanos p {
  font-size: 20px;
}

@media (max-width: 450px) {
  /* Main */
  section {
    background-color: #ffb48a;
    margin-top: 20px;
    margin-left: 2%;
    margin-right: 2%;
    width: 96%;
    min-height: 200px;
    float: right;
  }

  .visitanos {
    background-color: #8d4925;
    margin-top: 10px;
    margin-left: 10%;
    margin-right: 10%;
    width: 80%;
    color: azure;
  }

  .visitanos h3 {
    font-size: 20px;
  }

  .visitanos h4 {
    font-size: 15px;
  }

  .visitanos p {
    font-size: 10px;
  }
}
</style>
