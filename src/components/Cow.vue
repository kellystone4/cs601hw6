<template>
  <div class="cow">
          <img :src="cowHover" @mouseover="hover = true" @mouseleave="hover = false">
  </div>
</template>

<script>
export default {
  data () {
    return {
      pictureCalf: require("../assets/calf.jpg"),
      pictureCow: require("../assets/cow.jpg"),
      hover: false
    }
  },
  computed: {
        cowHover() {
        if (this.hover == true) {
        return this.pictureCow
      } else {
        return this.pictureCalf
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
