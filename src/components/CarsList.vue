<template>
  <div class="list row">
    <div class="col-md-6">
     <!-- <img class="menu-item__image" :src="'/images/crossiant.jpg'"  />-->
      <h4>Cars List</h4>
      <ul>
        <li v-for="(car, id) in cars" :key="id">

          <router-link :to="{
                            name: 'car-details',
                            params: { car:car }}"
          >{{car.nom}}, {{car.marque}}, {{car.prix}}{{car.image}}</router-link>
          <button v-on:click="ajouterDansPanier(car.id)" class="btn btn-success">Acheter</button>
          {{count}}
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
  props: ["selectedCars"],
  data (){

    return {
      cars: [],
      count:0

    };
  },
  computed:{

  },

  methods: {
    ajouterDansPanier:function (id){
      this.count++;
      this.$store.dispatch("majPanier",id);
      //this.selectedCars.append(car);
    },
    /* eslint-disable no-console */
    retrieveCars() {
      http
          .get("/cars")
          .then(response => {
            this.cars = response.data; // JSON are parsed automatically.
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
.meme img {
  max-width: 100%;
}
</style>