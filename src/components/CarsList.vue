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
          <img :src="src"  alt="">
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
//import * as axios from "axios";

export default {
  name: "cars-list",
  data() {
    return {
      cars: [],
      linke:"",
      files:null,
      src:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
    };
  },
  methods: {
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
      //const url ="http:localhost:8080/download/"+ "Capture2.png";

      /*
      http
          .get(url).then(res=>{
          this.files = res.data;
        })
      },*/
/*
        let config = {
          // example url
          url: "http://localhost:8080/download/"+"capture2.png",
          method: 'GET',
          responseType: 'arraybuffer'
        }
        // eslint-disable-next-line no-undef
        axios(config)
            .then((response) => {
              var bytes = new Uint8Array(response.data);
              var binary = bytes.reduce((data, b) => data += String.fromCharCode(b), '');
              this.src = "data:image/png;base64," + btoa(binary);
            });*/
    },

      /*
      http
          .get(url, { responseType: 'blob' })
          .then(response => {
            const blob = new Blob([response.data], { type: 'application/*' })
            const link = document.createElement('a')
            link.href = URL.createObjectURL(blob)
            //link.download = "Capture.png"
            this.linke=link.href;
            //link.click()
            URL.revokeObjectURL(link.href)
          }).catch(console.error)
    },*/
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