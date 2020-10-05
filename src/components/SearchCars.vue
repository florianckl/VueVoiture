<template>
  <div class="searchform">
    <h4>Find by Marque</h4>
    <div class="form-group">
      <input type="text" class="form-control" id="marque" required v-model="marque" name="marque">
    </div>

    <div class="btn-group">
      <button v-on:click="searchCustomers" class="btn btn-success">Search</button>
    </div>

    <ul class="search-result">
      <li v-for="(car, index) in cars" :key="index">
        <h6>{{car.name}} ({{car.age}})</h6>
      </li>
    </ul>
  </div>
</template>

<script>
import http from "../http-common";

export default {
  name: "search-car",
  data() {
    return {
      age: 0,
      cars: []
    };
  },
  methods: {
    /* eslint-disable no-console */
    searchCars() {
      http
          .get("/cars/marque/" + this.marque)
          .then(response => {
            this.cars = response.data; // JSON are parsed automatically.
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
    }
    /* eslint-enable no-console */
  }
};
</script>

<style>
.searchform {
  max-width: 300px;
  margin: auto;
}
.search-result {
  margin-top: 20px;
  text-align: left;
}
</style>