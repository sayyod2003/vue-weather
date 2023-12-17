<template>
  <div class="infoBlock" v-if="current">
    <div class="infoBlock__left">
      <img src="@/assets/images/sun.svg" alt="" class="infoBlock__left-img" v-if="getDescr == 'Clear'"/>
      <img src="@/assets/images/mainly_cloudy.svg" alt="" class="infoBlock__left-img" v-else-if="getDescr == 'Clouds'"/>
      <img src="@/assets/images/small_rain.svg" alt="" class="infoBlock__left-img" v-else-if="getDescr == 'Drizzle'"/>
      <img src="@/assets/images/rain.svg" alt="" class="infoBlock__left-img" v-else-if="getDescr == 'Rain'"/>
      <img src="@/assets/images/snow.png" alt="" class="infoBlock__left-img"  v-else-if="getDescr == 'Snow'"/>
      <h1 class="infoBlock__left-title">{{ Math.round(current?.temp) }}°</h1>
      <h2 class="infoBlock__left-today">Сегодня</h2>
      <p class="infoBlock__left-time">Время: {{ getTime }}</p>
      <p class="infoBlock__left-city">Город: {{ current?.city }}</p>
    </div>
    <div class="infoBlock__right">
      <img
        src="@/assets/images/cloud.png"
        alt=""
        class="infoBlock__right-cloud"
      />
      <div class="infoBlock__right-item">
        <div class="infoBlock__right-img">
          <img src="@/assets/images/temp.svg" alt="" />
        </div>
        <p class="infoBlock__right-descr">
          <span>Температура</span> {{ Math.round(current?.temp) }}° - ощущается
          как {{ Math.round(current.feels_like) }}°
        </p>
      </div>
      <div class="infoBlock__right-item">
        <div class="infoBlock__right-img">
          <img src="@/assets/images/pressure.svg" alt="" class="" />
        </div>
        <p class="infoBlock__right-descr">
          <span>Давление </span>{{ current?.pressure }} мм ртутного столба -
          нормальное
        </p>
      </div>
      <div class="infoBlock__right-item">
        <div class="infoBlock__right-img">
          <img src="@/assets/images/precipitation.svg" alt="" class="" />
        </div>
        <p class="infoBlock__right-descr">
          <span>Осадки</span> {{ current?.humidity }} m/s
        </p>
      </div>
      <div class="infoBlock__right-item">
        <div class="infoBlock__right-img">
          <img src="@/assets/images/wind.svg" alt="" class="" />
        </div>

        <p class="infoBlock__right-descr">
          <span>Ветер</span> {{ current?.wind_speed }} м/с юго-запад - легкий
          ветер
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  props: {
    current: Object,
  },
  computed: {
    ...mapGetters(['getFullWeather']),
    getTime() {
      return new Date().toLocaleString("en-US", {
        timeZone: this.getFullWeather.timezone,
        timeStyle: "short",
        hourCycle:'h24'
      });
    },
    getDescr(){
      return  this.current.weather[0].main
    }
  },
};
</script>

<style lang="scss" scoped>
</style>