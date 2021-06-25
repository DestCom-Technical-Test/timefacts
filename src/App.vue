<template>
<div>
  <div class="bloc1"></div>
  <div class="bloc2"></div>
  <div class="bloc3"></div>
  <div class="bloc4"></div>

  <div class="text">
    <label>Enter a date in the 'month/day' format : </label>
    <input type="text" v-model="dates" v-on:keyup.enter="test" />
    <div class="facts">
      <div v-for="date in tab" :key="date">
        <Display :datesGiven="date"  />
      </div>
    </div>
  </div> 
</div>
</template>

<script>
import Display from './components/Display.vue';

export default{
  name:'App',
  components:{
    Display
  },
  data(){
    return{
      dates:'',
      tab:[]
    }
  },
  computed:{

  },
  methods:{
    test: function(){
      this.tab = this.dates.split(',')
    }
  }
}

</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap');

html,body{
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100vh;
  background: linear-gradient(red, black);
  font-family: 'Lato', sans-serif;
  overflow: hidden;
}

.bloc1{
  position: absolute;
  top: 10%;
  left: -1%;
  width: 100%;
  height: 25vh;
  z-index: 1;
  overflow: hidden;
  border-top: 250px solid darkblue;
  border-left: 3000px solid transparent;
}

.bloc2{
  position: absolute;
  top: 0%;
  width: 100%;
  height: 10%;
  z-index: 1;
  overflow: hidden;
  background-color: darkblue;
}

.bloc3{
  position: absolute;
  top: 20%;
  left: 25vw;
  width: 50vw;
  height: 5vh;
  z-index: 2;
  overflow: hidden;
  margin: 0;
  padding: 0;
  background-image: linear-gradient(to right bottom, cyan 0%, cyan 50%, transparent 50%);
}

.bloc4{
  position: absolute;
  left: 25vw;
  width: 50vw;
  height: 20%;
  z-index: 2;
  overflow: hidden;
  background-color: cyan;
}

.text{
  margin-right: auto;
  margin-left: auto;
  position: relative;
  z-index: 5;
  top: 10%;
  left: 0vw;
  width: 25vw;
  display: flex;
  flex-direction: column;
  text-align: center;
}

input[type=text] {
  border: none;
  border-bottom: 2px solid black;
  background-color: cyan;
}

input[type=text]:focus {
  outline-width: 0;
  
}

.facts{
  margin-top: 10%;
  height: 90vh;
  overflow-y: scroll;
  width: 30vw;
}
</style>