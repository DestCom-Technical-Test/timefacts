<template>
  <div id='date'>
    <label>Enter dates in "Day/Month" formats, separated with commas</label>
    <input type="text" v-model="input" />
    <p>{{date}}</p>
  </div>
</template>

<script>
export default {
  name: 'InputUser',
  props: {
    date: String,
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

div{
  display: flex;
  flex-direction: column;
}

</style>
