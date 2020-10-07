<template>
  <div>
    <section class="panier">
      <h2>Panier</h2>
      <div>{{getCars.length}}</div>
      <li v-for="id in getCars" :key="id">
        <div>{{test(id)}}</div>
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
