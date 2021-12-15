<template>
  <div class="dog">
          <img :src="dogHover" @mouseover="hover = true" @mouseleave="hover = false">
  </div>
</template>

<script>
export default {
  data () {
    return {
      pictureDog: require("../assets/dog.jpg"),
      picturePug: require("../assets/pug.jpg"),
      hover: false
    }
  },
  computed: {
        dogHover() {
        if (this.hover == true) {
        return this.picturePug
      } else {
        return this.pictureDog
      }
    },
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
img {
  height: 500px;
  width: 600px;
  margin: 1%;
}
</style>
