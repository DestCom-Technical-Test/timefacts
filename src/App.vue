<template>
  <div>
    <div class="bloc1"></div>
    <div class="bloc2"></div>
    <div class="bloc3"></div>
    <div class="bloc4"></div>

    <div class="text">
      <label>Enter a date in the 'month/day' format separated by commas : </label>
      <input type="text" v-model="dates" v-on:keyup.enter="test" />
    </div>
    <div class="title">
      <h1>Your dates in the history</h1>
      <p>You want to explore {{numberOfDates}} dates</p>
    </div>
    <div class="facts">
      <div v-for="date in tab" :key="date">
        <Display :datesGiven="date" />
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
    numberOfDates: function(){
      return this.tab.length
    }
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

html,
body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100vh;
  background: linear-gradient(red, black);
  font-family: 'Lato', sans-serif;
  overflow: hidden;
}

.bloc1 {
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

.bloc2 {
  position: absolute;
  top: 0%;
  width: 100%;
  height: 10%;
  z-index: 1;
  overflow: hidden;
  background-color: darkblue;
}

.bloc3 {
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

.bloc4 {
  position: absolute;
  left: 25vw;
  width: 50vw;
  height: 20%;
  z-index: 2;
  overflow: hidden;
  background-color: cyan;
}

.text {
  padding-top: 3%;
  margin-right: auto;
  margin-left: auto;
  position: relative;
  z-index: 4;
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
  text-align: center;
}

input[type=text]:focus {
  outline-width: 0;
  border-bottom: 2px solid white;

}

.facts {
  position: relative;
  margin-right: auto;
  margin-left: auto;
  height: 50vh;
  overflow-y: auto;
  width: 50vw;
  z-index: 5;
}

.facts>div {
  text-align: left;
  background-color: white;
  border-radius: 25px;
  margin-top: 10%;
  padding: 5px;
  height: 25vh;
  width: 30vw;
  margin-right: auto;
  margin-left: auto;
}

.title{
  position: relative;
  background-color: black;
  color: white;
  z-index: 7 !important;
  width: 35vw;
  min-height: 20vh;
  margin-top: 2%;
  padding-top: 3%;
  text-align: center;
  margin-right: auto;
  margin-left: auto;
}

.facts::-webkit-scrollbar-track
{
	-webkit-box-shadow: inset 0 0 6px transparent;
	border-radius: 10px;
	background-color: transparent;
}

.facts::-webkit-scrollbar
{
	width: 12px;
	background-color: transparent;
}

.facts::-webkit-scrollbar-thumb
{
	border-radius: 10px;
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
	background-color: cyan;
}
</style>