<template>
  <div class="list row">
    <div class="col-md-6">
      <h4>Cars List</h4>
      <ul>
        <li v-for="(car, index) in cars" :key="index">
          <router-link :to="{
                            name: 'car-details',
                            params: { car: car, id: car.id }
                        }">
            {{car.name}}
          </router-link>
        </li>
      </ul>
    </div>
    <div class="col-md-6">
      <router-view @refreshData="refreshList"></router-view>
    </div>
  </div>
</template>

<script>
import http from "../http-common";

export default {
  name: "cars-list",
  data() {
    return {
      cars: []
    };
  },
  methods: {
    /* eslint-disable no-console */
    retrieveCars() {
      http
          .get("/cars")
          .then(response => {
            this.cars = response.data.nom; // JSON are parsed automatically.

            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
    },
    refreshList() {
      this.retrieveCars();
    }
    /* eslint-enable no-console */
  },
  mounted() {

    this.retrieveCars();
  }
};
</script>

<style>
.list {
  text-align: left;
  max-width: 450px;
  margin: auto;
}
</style>