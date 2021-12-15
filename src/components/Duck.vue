<template>
  <div class="duck">
          <img :src="duckHover" @mouseover="hover = true" @mouseleave="hover = false">
  </div>
</template>

<script>
export default {
  data () {
    return {
      pictureDuckling: require("../assets/duckling.jpg"),
      pictureDuck: require("../assets/duck.jpg"),
      hover: false
    }
  },
  computed: {
        duckHover() {
        if (this.hover == true) {
        return this.pictureDuck
      } else {
        return this.pictureDuckling
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
