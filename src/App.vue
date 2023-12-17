<template>
  <div class="container" v-if="getFullWeather">
    <Header @searchCity="getWeather($event)" />
    <InfoBlock :current="getFullWeather?.current" v-if="getFullWeather"/>
    <Weeks/>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import InfoBlock from "./components/InfoBlock.vue";
import Weeks from "./components/Weeks.vue";
export default {
  components: {
    Header,
    InfoBlock,
    Weeks,
  },
  methods: {
    getWeather(city) {
      this.$store.dispatch("getWeather", city);
    },
  },
  computed: {
    getFullWeather() {
      return this.$store.getters.getFullWeather;
    },
  },
  created() {
    this.getWeather("Toshkent");
  },
  data() {
    return {
      search: null,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>