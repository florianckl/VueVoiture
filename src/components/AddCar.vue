<template>
  <div class="submitform">
    <div v-if="!submitted">
      <div class="form-group">
        <label for="marque">Marque</label>
        <input type="text" class="form-control" id="marque" required v-model="car.marque" name="name">
      </div>
      <div class="form-group">
        <label for="nom">Nom</label>
        <input type="text" class="form-control" id="nom" required v-model="car.nom" name="name">
      </div>

      <div class="form-group">
        <label for="prix">prix</label>
        <input type="number" class="form-control" id="prix" required v-model="car.prix" name="prix">
      </div>

      <div class="form-group">
        <label>photo voiture</label>
        <input type="file" @change="onFileSelected">
      </div>
      <button v-on:click="saveCar" class="btn btn-success">Submit</button>
    </div>

    <div v-else>
      <h4>You submitted successfully!</h4>
      <button class="btn btn-success" v-on:click="newCar">Add</button>
    </div>
  </div>
</template>

<script>
import http from "../http-common";

export default {
  name: "add-car",
  data() {
    return {
      selectedfile:null,
      car: {
        id: 0,
        marque:"",
        nom: "",
        prix: null
      },
      submitted: false
    };
  },
  methods: {
    onFileSelected(event){
      this.selectedfile=event.target.files[0]
      console.log(event)
    },
    /* eslint-disable no-console */
    saveCar() {
      var data = {
        marque: this.car.marque,
        nom: this.car.nom,
        prix: this.car.prix,
        image:this.selectedfile.name
      };


      http
          .post("/add", data)
          .then(response => {
            this.car.id = response.data.id;
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
      const fd=new FormData;
      fd.append('name', 'selectedfile.name')
      fd.append('file', this.selectedfile)
      let config = {
        header : {
          'Content-Type' : 'multipart/form-data'
        }
      }
      if(this.selectedfile!=null) {
        //fd.append('file',this.selectedfile,this.selectedfile.name)
        http
            .post("/uploadfile", fd, config)
            .then(response => {
              this.car.id = response.data.id;
              console.log(response.data);
            })
            .catch(e => {
              console.log(e);
            });
      }
      this.submitted = true;

    },
    newCar() {
      this.submitted = false;
      this.car = {};
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