<template>
  <div class="list row">
    <Car @message-sent="setMessage" />
    <div class="col-md-6">
     <!-- <img class="menu-item__image" :src="'/images/crossiant.jpg'"  />-->
      <h3>trier par</h3>
      <input type="radio" id="one" value="Prix" v-model="picked"  @change="refreshList">
      <label for="one">Prix</label>
      <br>
      <input type="radio" id="two" value="Marque" v-model="picked" @change="refreshList">
      <label for="two">Marque</label>
      <br>
      <h4>Cars List</h4>
      <ul>

        <li v-for="(car, id) in cars" :key="id">

          <router-link :to="{
                            name: 'car-details',
                            params: { car:car }}"
          >Nom: {{car.nom}}, Marque:{{car.marque}}, Prix: {{car.prix}},  image: {{car.image}}</router-link>

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
import Car from "./Car"

export default {
  components: { Car },
  name: "cars-list",
  props: ["selectedCars"],
  data (){

    return {
      cars: [],
      //count:0,
      picked:"",
      message:""

    };
  },
  computed:{

  },

  methods: {
    setMessage(payload) {
      console.log("dffs");
      this.message = payload.message
      console.log(this.message+"");

    },
    ajouterDansPanier:function (car){
      //this.count++;
      this.$store.dispatch("carPanier",{id:car.id,marque:car.marque,nom:car.nom, prix:car.prix,image:car.image});

      //this.selectedCars.append(car);
    },
    /* eslint-disable no-console */
    retrieveCars() {
      let url="/cars";
      console.log("picked"+this.picked);
      if (this.picked==="Prix"){
        console.log("prix");
        url="/cars/sortByPrix";

      }if(this.picked==="Marque"){
        console.log("marque");
        url="/cars/sortByMarque";
      }
      http
          .get(url)
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