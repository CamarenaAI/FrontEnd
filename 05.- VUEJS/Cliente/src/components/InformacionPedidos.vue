<template>
  <section>
    <h2>Realiza tu pedido</h2>
    <form @submit.prevent="enviarFormulario">
      <article class="informacion">
        <h3>Informacion Personal</h3>
        <label for="Nombre">Nombre Completo:</label><br />
        <input
          type="text"
          v-model="nombre"
          id="Nombre"
          placeholder="Nombre"
        /><br />
        <label for="Telefono">Telefono:</label><br />
        <input
          type="text"
          v-model="telefono"
          id="Telefono"
          placeholder="Teléfono"
        /><br />
        <label for="Email">E-mail:</label><br />
        <input
          type="email"
          v-model="email"
          id="Correo"
          placeholder="Correo"
        /><br />
        <label for="Domicilio">Domicilio:</label><br />
        <input
          type="text"
          v-model="domicilio"
          id="Domicilio"
          placeholder="Domicilio"
        /><br />
      </article>

      <article class="sabores">
        <p><b>Sabor</b></p>
        <div v-for="sabor in sabores" :key="sabor">
          <input
            type="checkbox"
            :value="sabor"
            v-model="saboresSeleccionados"
          />
          <label>{{ sabor }}</label>
        </div>
      </article>

      <article class="decoraciones">
        <p><b>Decoracion</b></p>
        <div v-for="decoracion in decoraciones" :key="decoracion">
          <input
            type="checkbox"
            :value="decoracion"
            v-model="decoracionesSeleccionadas"
          />
          <label>{{ decoracion }}</label>
        </div>
      </article>

      <br /><br />
      <div style="text-align: center">
        <input type="reset" class="reset" />
        <button type="submit" class="submit">Enviar</button>
      </div>
    </form>
  </section>
</template>

<script>
export default {
  data() {
    return {
      nombre: "",
      telefono: "",
      email: "",
      domicilio: "",
      sabores: ["Chocolate", "Vainilla", "Nuez", "Zanahoria", "Naranja"], // Añade tus sabores aquí
      decoraciones: ["Naked", "Fondant", "Buttercream", "Praliné", "Drip Cake"], // Añade tus decoraciones aquí
      saboresSeleccionados: [],
      decoracionesSeleccionadas: [],
    };
  },
  methods: {
    enviarFormulario() {
      const mensaje =
        `Gracias por tu pedido, ${this.nombre}.\n\n` +
        `Teléfono: ${this.telefono}\n` +
        `E-mail: ${this.email}\n` +
        `Domicilio: ${this.domicilio}\n` +
        `Sabores seleccionados: ${this.saboresSeleccionados.join(", ")}\n` +
        `Decoraciones seleccionadas: ${this.decoracionesSeleccionadas.join(
          ", "
        )}`;

      alert(mensaje);
    },
  },
};
</script>

<style scoped>
/* Main */
section {
  background-color: #ffb48a;
  margin-left: 2%;
  margin-right: 2%;
  width: 96%;
  min-height: 700px;
  float: right;
}

section h2 {
  font-size: 50px;
  text-align: center;
}

section p {
  font-size: 25px;
  text-align: center;
}

section label {
  font-size: 20px;
}

/*Article*/
.informacion {
  background-color: #e8c39d;
  margin-left: 5%;
  margin-bottom: 20px;
  width: 90%;
  height: 250px;
}

.informacion h3 {
  font-size: 25px;
}

.informacion label {
  font-size: 20px;
}

.sabores {
  background-color: #e8c39e;
  margin-left: 5%;
  width: 44%;
  height: 200px;
  float: left;
  margin-bottom: 20px;
}

.decoraciones {
  background-color: #e8c39e;
  margin-right: 5%;
  width: 44%;
  height: 200px;
  float: right;
  margin-bottom: 20px;
}

section .reset,
section .submit {
  font-size: 20px;
}

@media (max-width: 450px) {
  /* Main */
  section {
    background-color: #ffb48a;
    margin-left: 2%;
    margin-right: 2%;
    width: 96%;
    min-height: 400px;
    float: right;
  }

  section h2 {
    font-size: 25px;
    text-align: center;
  }

  section p {
    font-size: 15px;
    text-align: center;
  }

  section label {
    font-size: 10px;
  }

  /*Article*/
  .informacion {
    background-color: #e8c39d;
    margin-left: 5%;
    margin-bottom: 20px;
    width: 90%;
    height: 250px;
  }

  .informacion h3 {
    font-size: 15px;
  }

  .informacion label {
    font-size: 10px;
  }

  .sabores {
    background-color: #e8c39e;
    margin-left: 5%;
    width: 44%;
    height: 200px;
    float: left;
    margin-bottom: 20px;
  }

  .decoraciones {
    background-color: #e8c39e;
    margin-right: 5%;
    width: 44%;
    height: 200px;
    float: right;
    margin-bottom: 20px;
  }

  section .reset,
  section .submit {
    font-size: 10px;
    margin-bottom: 20px;
  }
}
</style>
