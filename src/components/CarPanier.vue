<template>
    <div class="form-group">
      <label>Id: </label> {{ id }}
      <label>Marque: </label> {{ marque }}
      <label>Nom: </label> {{ nom }}
      <label>Prix: </label> {{ prix }}
    </div>
</template>

<script>
export default {
  name: "CarPanier",
  props: {

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