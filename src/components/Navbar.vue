   <template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Kelly Stone</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
           <router-link
          to="home"
          class="nav-item nav-link"
          active-class="active"
          exact
        >Image Gallery</router-link>
          </li>
          <li class="nav-item">
                   <router-link
          to="facts"
          class="nav-item nav-link"
          active-class="active"
          exact
        >Animal Facts</router-link>
          </li>
        </ul>
      </div>
    </nav>
    </template>


<script>
export default {}
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
