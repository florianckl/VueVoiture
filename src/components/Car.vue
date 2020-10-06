<template>
  <div v-if="this.car">
    <h4>Car</h4>
    <div>
      <label>Id: </label> {{this.car.id}}
    </div>
    <div>
      <label>Marque: </label> {{this.car.marque}}
    </div>
    <div>
      <label>Nom: </label> {{this.car.nom}}
    </div>
    <div>
      <label>Prix: </label> {{this.car.prix}}
    </div>

    <span
          v-on:click="modifier"
          class="button is-small btn-primary">modifier</span>

    <span class="button is-small btn-danger" v-on:click="deleteCar()">Delete</span>
  </div>
  <div v-else>
    <br/>
    <p>Please click on a Car...</p>
  </div>
</template>

<script>
import http from "../http-common";

export default {
  name: "car",
  props: ["car"],
  methods: {
    /* eslint-disable no-console */
    modifier() {
      var data = {
        id: this.car.id,
        marque: this.car.marque,
        nom: this.car.nom,
        prix: this.car.prix
      };

      http
          .put("/car/" + this.car.id, data)
          .then(response => {
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
    },
    deleteCar() {
      http
          .delete("/cars/delete/" + this.car.id)
          .then(response => {
            console.log(response.data);
            this.$emit("refreshData");
            this.$router.push('/');
          })
          .catch(e => {
            console.log(e);
          });

    }
    /* eslint-enable no-console */
  }
};
</script>