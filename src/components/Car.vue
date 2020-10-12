<template>
  <div v-if="this.car">
    <div v-if="modifDemandee">
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
      <button v-on:click="modifier" class="btn btn-success">Submit</button>
    </div>
    <div v-else>
      <h4>Car</h4>
      <div>
        <div class="col-md-6">
          <div>{{ affichageVoiture() }}</div>
          <div class="container"><img :src="src" alt=""></div>

        </div>


      </div>
      <div class="form-group">
        <label>Id: </label> {{ this.car.id }}
      </div>
      <div class="form-group">
        <label>Marque: </label> {{ this.car.marque }}
      </div>
      <div class="form-group">
        <label>Nom: </label> {{ this.car.nom }}
      </div>
      <div class="form-group">
        <label>Prix: </label> {{ this.car.prix }}
      </div>
      <div class="form-group">
        <button v-on:click="ajouterDansPanier" class="btn btn-success">Acheter</button>
        <input type="checkbox" id="checkbox" value=1 v-model="checkedCategories" @change="ajoutDansFavori">
        <label for="checkbox">favori</label>
        {{ checkedCategories }}
      </div>
      <span
          v-on:click="demandeModification"
          class="button is-small btn-primary">modifier</span>

      <span class="button is-small btn-danger" v-on:click="deleteCar()">Delete</span>
    </div>
  </div>
</template>

<script>
import http from "../http-common";
import * as axios from "axios";

export default {
  name: "car",
  props: ["car"],

  data() {
    return {
      checkedCategories: false,
      id: 0,
      marque: "",
      name: "",
      prix: 0,
      favori: 0,
      panier: 0,
      modifDemandee: false,
      selectedfile: null,
      src: "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
    };
  },
  computed: {},

  methods: {
    ajoutDansFavori(){
      this.$store.dispatch("carFavori",this.car.id);

      this.$emit('message-sent',"dsgdgsd");
    },
    ajouterDansPanier(){
      this.panier++;
      this.$store.dispatch("carPanier",this.car.id);
      console.log(this.panier);
    },
    affichageVoiture() {
      let config = {
        // example url
        url: "http://localhost:8080/download/" + this.car.image,
        method: 'GET',
        responseType: 'arraybuffer'
      }
      // eslint-disable-next-line no-undef
      axios(config)
          .then((response) => {
            var bytes = new Uint8Array(response.data);
            var binary = bytes.reduce((data, b) => data += String.fromCharCode(b), '');
            this.src = "data:image/png;base64," + btoa(binary);
          });
    },
    /* eslint-disable no-console */
    demandeModification() {
      this.modifDemandee = true
    },
    onFileSelected(event) {
      this.selectedfile = event.target.files[0]
      console.log(event)
    },
    modifier() {
      var data = {

        id: this.car.id,
        marque: this.car.marque,
        nom: this.car.nom,
        prix: this.car.prix
      };

      http
          .put("/cars/" + this.car.id, data)
          .then(response => {
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
      this.modifDemandee = false

      if (this.selectedfile != null) {
        const fd = new FormData;
        fd.append('name', 'selectedfile.name')
        fd.append('file', this.selectedfile)
        let config = {
          header: {
            'Content-Type': 'multipart/form-data'
          }
        }

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
        this.car.image = this.selectedfile.name
      }
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

    },
    refreshList() {
      this.retrieveCars();
    },
    mounted() {
      this.affichageVoiture();
    }

    /* eslint-enable no-console */
  }
};
</script>
<style>
.container {
  max-height: 300px;
  max-width: 2400px;
  width: 420px;
  height: 220px;
}

.container img {
  width: 100%;
  height: auto;
}
</style>