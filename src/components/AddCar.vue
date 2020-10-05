<template>
  <div class="submitform">
    <div v-if="!submitted">
      <div class="form-group">
        <label for="marque">Marque</label>
        <input type="text" class="form-control" id="marque" required v-model="car.marque" name="marque">
      </div>
      <div class="form-group">
        <label for="nom">Name</label>
        <input type="text" class="form-control" id="nom" required v-model="car.nom" name="nom">
      </div>

      <div class="form-group">
        <label for="prix">Prix</label>
        <input type="number" class="form-control" id="prix" required v-model="car.prix" name="prix">
      </div>

      <button v-on:click="saveCustomer" class="btn btn-success">Submit</button>
    </div>

    <div v-else>
      <h4>You submitted successfully!</h4>
      <button class="btn btn-success" v-on:click="newCustomer">Add</button>
    </div>
  </div>
</template>

<script>
import http from "../http-common";

export default {
  name: "add-customer",
  data() {
    return {
      customer: {
        id: 0,
        marque:"",
        nom: "",
        prix: 0,
        active: false
      },
      submitted: false
    };
  },
  methods: {
    /* eslint-disable no-console */
    saveCar() {
      var data = {
        marque: this.car.marque,
        nom: this.car.nom,
        prix: this.car.prix
      };

      http
          .post("/car", data)
          .then(response => {
            this.customer.id = response.data.id;
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });

      this.submitted = true;
    },
    newCustomer() {
      this.submitted = false;
      this.customer = {};
    }
    /* eslint-enable no-console */
  }
};
</script>

<style>
.submitform {
  max-width: 300px;
  margin: auto;
}
</style>