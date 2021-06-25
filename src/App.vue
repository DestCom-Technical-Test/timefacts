<template>
  <div id='date'>
    <label>Enter dates in "Day/Month" formats, separated with commas</label>
    <input type="text" v-model="date" />
    <p> {{date}} </p>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
    
  },
  data(){
    return{
      date: ''
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

div{
  display: flex;
  flex-direction: column;
}
</style>
