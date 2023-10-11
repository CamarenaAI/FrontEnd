<template>
  <HeaderView />
  <AvisoPrivacidad />
  <FooterView />
</template>

<script>
import HeaderView from "@/components/HeaderView.vue";
import AvisoPrivacidad from "@/components/AvisoPrivacidad.vue";
import FooterView from "@/components/FooterView.vue";

export default {
  name: "HomeView",
  components: {
    HeaderView,
    AvisoPrivacidad,
    FooterView,
  },
};
</script>
