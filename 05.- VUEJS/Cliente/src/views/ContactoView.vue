<template>
  <HeaderView />
  <InformacionContacto />
  <FooterView />
</template>

<script>
import HeaderView from "@/components/HeaderView.vue";
import InformacionContacto from "@/components/InformacionContacto.vue";
import FooterView from "@/components/FooterView.vue";

export default {
  name: "HomeView",
  components: {
    HeaderView,
    InformacionContacto,
    FooterView,
  },
};
</script>
