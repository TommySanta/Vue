<template>
  <div>
    <MenuComponent/>
    <router-view></router-view>
    <hr/>
  </div>
</template>

<script>
import MenuComponent from './components/MenuComponent.vue'


export default {
  name: 'App',
  components: {
    MenuComponent
  }
}
</script>

<style>
  @import './assets/css/estilos.css';
</style>
