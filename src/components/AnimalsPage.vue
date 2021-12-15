<template>
  <div id="app">
 <h1> Welcome to my Animal Image Gallery!</h1>
        <Dog/>
        <Cow/>
        <Cat/>
        <Duck/>
  </div>
</template>

<script>
import Dog from './Dog.vue'
import Cow from './Cow.vue'
import Cat from './Cat.vue'
import Duck from './Duck.vue'


export default {
  name: 'App',
  components: {
    Dog,
    Cow,
    Cat,
    Duck
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
