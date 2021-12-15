<template>
  <div class="hello">
    <h1> Welcome to my Animal Image Gallery!</h1>
          <img :src="cowHover" @mouseover="hover = true" @mouseleave="hover = false">
          <img :src="catHover" @mouseover="hover = true" @mouseleave="hover = false">
          <img :src="duckHover" @mouseover="hover = true" @mouseleave="hover = false">
          <img :src="dogHover" @mouseover="hover = true" @mouseleave="hover = false">


  </div>
</template>

<script>
export default {
  name: 'HelloWord',
  data () {
    return {
      pictureCalf: require("../assets/calf.jpg"),
      pictureCow: require("../assets/cow.jpg"),
      pictureKitten: require("../assets/kitten.jpg"),
      pictureCat: require("../assets/cat.jpg"),
      pictureDog: require("../assets/dog.jpg"),
      picturePug: require("../assets/pug.jpg"),
      pictureDuckling: require("../assets/duckling.jpg"),
      pictureDuck: require("../assets/duck.jpg"),
      hover: false
    }
  },
  computed: {
    cowHover () {
      if (this.hover == true) {
        return this.pictureCow
      } else {
        return this.pictureCalf
      }
    },
    catHover() {
        if (this.hover == true) {
        return this.pictureCat
      } else {
        return this.pictureKitten
      }
    },
        duckHover() {
        if (this.hover == true) {
        return this.pictureDuck
      } else {
        return this.pictureDuckling
      }
    },
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
