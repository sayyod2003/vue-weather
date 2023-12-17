<template>
  <div class="weeks" v-if="getDailyWeather">
   <Day v-for="(day, index) in getDailyWeather" :key="index" :day="day"/>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Day from "@/components/Day.vue";
export default {
  components:{
    Day
  },
  computed: {
      ...mapGetters(['getDailyWeather']),
  },
};
</script>

<style lang="scss" scoped>
</style>