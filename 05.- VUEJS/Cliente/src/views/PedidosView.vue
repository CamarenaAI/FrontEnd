<template>
  <div>
    <HeaderView />
    <InformacionPedidos />
    <FooterView />
  </div>
</template>

<script>
import HeaderView from "@/components/HeaderView.vue";
import InformacionPedidos from "@/components/InformacionPedidos.vue";
import FooterView from "@/components/FooterView.vue";

export default {
  name: "HomeView",
  components: {
    HeaderView,
    InformacionPedidos,
    FooterView,
  },
};
</script>
