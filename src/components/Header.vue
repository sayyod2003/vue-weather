<template>
    <header class="header">
        <a href="" class="logo">
            <img src="@/assets/images/logo.svg" alt="">
            vue weather
        </a>
        <form @submit.prevent="searchCity" action="" class="header__form">
            <img src="@/assets/images/gulp.svg" alt="" class="header__form-gulp">
            <input type="text" class="header__form-input" placeholder="Выбрать город" v-model="search" />
        </form>
    </header>
</template>

<script>
    export default {
        data(){
            return {
                search:null
            }
        },
        methods:{
            searchCity(){
                if (this.search != null) {
                    this.$emit('searchCity', this.search)
                    this.search = null
                }
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>