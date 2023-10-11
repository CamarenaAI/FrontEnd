<template>
  <HeaderView />
  <IntroView />
  <InformacionView />
  <FooterView />
</template>

<script>
import HeaderView from "@/components/HeaderView.vue";
import IntroView from "@/components/IntroView.vue";
import InformacionView from "@/components/InformacionView.vue";
import FooterView from "@/components/FooterView.vue";

export default {
  name: "HomeView",
  components: {
    HeaderView,
    IntroView,
    InformacionView,
    FooterView,
  },
};
</script>
