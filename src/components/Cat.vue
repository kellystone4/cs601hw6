<template>
  <div class="cat">
          <img :src="catHover" @mouseover="hover = true" @mouseleave="hover = false">
  </div>
</template>

<script>
export default {
  data () {
    return {
      pictureKitten: require("../assets/kitten.jpg"),
      pictureCat: require("../assets/cat.jpg"),
      hover: false
    }
  },
  computed: {
        catHover() {
        if (this.hover == true) {
        return this.pictureCat
      } else {
        return this.pictureKitten
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
