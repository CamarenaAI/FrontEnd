<template>
  <section>
    <h1>Aviso de privacidad</h1>
    <p><strong>Responsable de la recopilación de datos:</strong></p>
    <p>[Nombre de la empresa]</p>
    <p>[Dirección de la empresa]</p>
    <p>[Correo electrónico de contacto]</p>
    <p>[Teléfono de contacto]</p>
    <p><strong>Tipo de datos que se recopilan:</strong></p>
    <ul>
      <li>Nombre completo</li>
      <li>Dirección de correo electrónico</li>
      <li>Dirección física</li>
      <li>Información financiera (número de tarjeta de crédito, etc.)</li>
    </ul>
    <p><strong>Finalidad del tratamiento de datos:</strong></p>
    <ul>
      <li>Procesar pedidos y compras</li>
      <li>Enviar newsletters</li>
      <li>Personalizar la experiencia del usuario en el sitio web</li>
    </ul>
    <p><strong>Compartir información:</strong></p>
    <p>
      No compartimos información personal con terceros sin consentimiento previo
      del usuario, excepto cuando sea necesario para cumplir con la ley.
    </p>
    <p><strong>Seguridad de la información:</strong></p>
    <p>
      Se toman medidas de seguridad razonables para proteger la información
      personal de los usuarios, incluyendo el uso de protocolos de seguridad y
      tecnologías de cifrado.
    </p>
    <p><strong>Derechos del usuario:</strong></p>
    <ul>
      <li>
        Derecho de acceso: los usuarios tienen derecho a acceder a sus datos
        personales y solicitar información sobre cómo se procesan.
      </li>
      <li>
        Derecho de rectificación: los usuarios tienen derecho a corregir o
        actualizar su información personal si es inexacta o incompleta.
      </li>
      <li>
        Derecho de cancelación: los usuarios tienen derecho a cancelar su
        información personal y solicitar que se elimine de la base de datos de
        la empresa.
      </li>
      <li>
        Derecho de oposición: los usuarios tienen derecho a oponerse al
        procesamiento de sus datos personales en determinadas circunstancias.
      </li>
    </ul>
    <p><strong>Cookies:</strong></p>
    <p>
      Utilizamos cookies para mejorar la experiencia del usuario en el sitio
      web. Las cookies son pequeños archivos que se almacenan en el dispositivo
      del usuario y se utilizan para recordar las preferencias del usuario y
      personalizar el contenido.
    </p>
    <p>
      <strong>Fecha de última actualización:</strong> [Fecha de última
      actualización del aviso de privacidad]
    </p>
    <p><strong>Contacto:</strong></p>
    <p>
      Si los usuarios tienen preguntas o inquietudes sobre este aviso de
      privacidad, pueden ponerse en contacto con la empresa a través de los
      siguientes medios:
    </p>
    <ul>
      <li>
        Dirección de correo electrónico de contacto: [Correo electrónico de
        contacto]
      </li>
      <li>Teléfono de contacto: [Teléfono de contacto]</li>
      <li>Dirección postal: [Dirección de la empresa]</li>
    </ul>
  </section>
</template>

<script>
export default {
  name: "AvisoPrivacidad",
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

@media (max-width: 450px) {
  /* Main */
  section {
    background-color: #ffb48a;
    margin-left: 2%;
    margin-right: 2%;
    width: 96%;
    min-height: 700px;
    float: right;
  }

  section h1 {
    font-size: 20px;
  }

  section p {
    font-size: 15px;
  }
}
</style>
