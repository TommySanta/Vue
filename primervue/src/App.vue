<template>
  <div>
    <h1 style="color: blue;">Título estático de App</h1>
    <hr/>
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
