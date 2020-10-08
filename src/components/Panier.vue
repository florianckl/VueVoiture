<template>
  <div>
    <section class="panier">
      <h2>Panier</h2>
      <div>{{getCars.length}}</div>
      <li v-for="car in getCars" :key="car.id">
        <div>{{car.marque}}</div>
      </li>
    </section>
  </div>
</template>


<script>
import { mapGetters} from "vuex"


export default {
  name: "Panier",
  data() {
    return {
      carPaniers: null
    }

},
  computed: {
    ...mapGetters({
      getCars:"getCars"
    }),
  },
  methods:{
    test(id){
      if (id!==','){
        return id;
      }else{
        return null;
      }
    }
  }
}
</script>
