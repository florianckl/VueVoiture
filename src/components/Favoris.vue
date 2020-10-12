<template>
  <div>
    <section class="favoris">
      <h2>Favoris</h2>
        <div>{{getCars}}</div>
    </section>
  </div>
</template>


<script>
import { mapGetters} from "vuex"


export default {
  name: "Favoris",
  data() {
    return {
      carPanier: []
    }

  },
  computed: {
    ...mapGetters({
      getCars:"getCarsFavoris"
    }),
  },
  methods:{
    t(car){
      console.log(car.marque)
      return car.id
    },
    test(){
      for (var id in this.getCars){
        console.log(id+"")
          this.carPanier=id;
        }

    }
  }
}
</script>
