<template>
  <div id="app" class="container-fluid">
    <div>
      <router-link class="btn btn-primary" to="/cars">Cars</router-link>
      <router-link class="btn btn-primary" to="/add">Add</router-link>
    </div>
    <br/>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style>
.site-info {
  color: red;
  margin-bottom: 20px;
}

.btn-primary {
  margin-right: 5px;

}

.container-fluid {
  text-align: center;
}
</style>
