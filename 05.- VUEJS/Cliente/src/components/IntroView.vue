<template>
  <section id="section-1" class="intro">
    <article class="post-1">
      <h2>Pasteles</h2>
      <table class="pasteles">
        <tr>
          <th>
            <a href="#informacion" @click.prevent="scrollToInfo"
              ><img src="@/assets/P.Chocolate.jpg"
            /></a>
          </th>
          <th>
            <a href="#informacion" @click.prevent="scrollToInfo"
              ><img src="@/assets/P.Vainilla.jpg"
            /></a>
          </th>
          <th>
            <a href="#informacion" @click.prevent="scrollToInfo"
              ><img src="@/assets/P.Nuez.jpg"
            /></a>
          </th>
          <th>
            <a href="#informacion" @click.prevent="scrollToInfo"
              ><img src="@/assets/P.Zanahoria.jpg"
            /></a>
          </th>
          <th>
            <a href="#informacion" @click.prevent="scrollToInfo"
              ><img src="@/assets/P.Naranja.jpg"
            /></a>
          </th>
        </tr>
      </table>
    </article>

    <article class="post-2">
      <h2>Decoraciones</h2>
      <table class="decoraciones">
        <tr>
          <th>
            <a href="#informacion" @click.prevent="scrollToInfo"
              ><img src="@/assets/D.Naked.jpg"
            /></a>
          </th>
          <th>
            <a href="#informacion" @click.prevent="scrollToInfo"
              ><img src="@/assets/D.Fondant.jpg"
            /></a>
          </th>
          <th>
            <a href="#informacion" @click.prevent="scrollToInfo"
              ><img src="@/assets/D.Buttercream.jpg"
            /></a>
          </th>
          <th>
            <a href="#informacion" @click.prevent="scrollToInfo"
              ><img src="@/assets/D.Praline.jpg"
            /></a>
          </th>
          <th>
            <a href="#informacion" @click.prevent="scrollToInfo"
              ><img src="@/assets/D.DripCake.jpg"
            /></a>
          </th>
        </tr>
      </table>
    </article>
  </section>
</template>

<script>
export default {
  name: "IntroView",
  methods: {
    scrollToInfo() {
      const infoSection = document.getElementById("informacion");
      if (infoSection) {
        infoSection.scrollIntoView({ behavior: "smooth" });
      }
    },
  },
};
</script>

<style scoped>
/* Main */
.intro {
  background-color: #ffb48a;
  margin: 0 auto;
  width: 90%;
  margin-left: 5%;
  min-height: 600px;
  float: left;
}

.intro article {
  margin-bottom: 10px;
}

.intro h2 {
  text-align: center;
  font-size: 50px;
  color: azure;
  overflow: hidden;
}

/*Post Pasteles*/
.pasteles img {
  height: 100px;
  width: 100%;
}

.pasteles th a:hover {
  background-color: #8d4925;
}

.post-1 table,
.post-2 table {
  background-color: #ffb48a;
  width: 100%;
}

/*Post Decoraciones*/
.decoraciones img {
  height: 150px;
  width: 100%;
}

.decoraciones th a:hover {
  background-color: #8d4925;
}

.decoraciones table {
  background-color: #ffb48a;
  width: 100%;
}

@media (max-width: 450px) {
  /* Main */
  .intro {
    background-color: #ffb48a;
    margin: 0 auto;
    width: 90%;
    margin-left: 5%;
    min-height: 200px;
    float: left;
  }

  .intro article {
    margin-bottom: 50px;
  }

  .intro h2 {
    text-align: center;
    font-size: 15px;
    color: azure;
    overflow: hidden;
  }

  /*Post Pasteles*/
  .pasteles img {
    height: 50px;
    width: 100%;
  }

  .pasteles th a:hover {
    background-color: #8d4925;
  }

  .post-1 table {
    background-color: #ffb48a;
    width: 100%;
  }

  /*Post Decoraciones*/
  .decoraciones img {
    height: 50px;
    width: 100%;
  }

  .decoraciones th a:hover {
    background-color: #8d4925;
  }

  .decoraciones table {
    background-color: #ffb48a;
    width: 100%;
  }

  .post-2 table {
    background-color: #ffb48a;
    width: 100%;
  }
}
</style>
