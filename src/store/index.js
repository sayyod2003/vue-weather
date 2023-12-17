import { createStore } from 'vuex'
import { apiKey } from "@/url";
import axios from "axios";
export default createStore({
  state: {
    weather: null
  },
  getters: {
    getFullWeather: (state) => {
      if (state.weather) {
        return state.weather
      }
    },
    getDailyWeather(state) {
      return state.weather.daily?.filter((el, index) => index > 0)
    }
  },
  mutations: {
    getWeather(state, payload) {
      state.weather = payload
    }
  },
  actions: {
    async getWeather({ commit }, city) {
      try {
        const res = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${apiKey}`)
        let { lat, lon, name } = res.data[0]
        const res2 = await axios.get(`https://api.openweathermap.org/data/2.8/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=ru`)
        res2.data.current.city = name
        commit('getWeather', res2.data)
      } catch (error) {
        console.log('bunday shaxar mavjud emas!');
      }

    }
  },
  modules: {
  }
})
