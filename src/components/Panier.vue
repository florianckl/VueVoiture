<template>
  <div>
    <section class="panier">
      <h2>Panier</h2>

      <car-panier
          v-for="item in getId"
          :id="item.id"
          :marque="item.marque"
          :nom="item.nom"
          :prix="item.prix"
          :image="item.image"
          :key="item.id"
      />
    </section>
  </div>
</template>


<script>
import CarPanier from "../components/CarPanier"
import { mapGetters} from "vuex"


export default {
  name: "Panier",
  components: {
    CarPanier
  },
  computed: {
    ...mapGetters({
      getId:"getId"
    }),
  },
  methods:{
    maj(){
      return this.$store.getters.getId;
    }
  }


}
</script>
