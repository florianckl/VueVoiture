<template>
  <div class="form-group">
    <label for="marque">Marque</label>
    <input type="text" class="form-control" id="marque" required v-model="marque" name="name">
  </div>
  <div class="form-group">
    <label for="nom">Nom</label>
    <input type="text" class="form-control" id="nom" required v-model="nom" name="name">
  </div>

  <div class="form-group">
    <label for="prix">prix</label>
    <input type="number" class="form-control" id="prix" required v-model="prix" name="prix">
  </div>
</template>

<script>
export default {
  name: "CarPanier",
  props: {
    id: {
      type: Number,
      required: true
    },
    marque: {
      type: String,
      required: true
    },
    nom: {
      type: String,
      required: true
    },

    prix: {
      type: Number,
      defaut: 1
    },
    image: {
      type: String,
    }
  },
}
</script>

<style scoped>

</style>