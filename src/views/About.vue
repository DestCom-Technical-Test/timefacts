<template>
  <div class="about">
    <h1>Here you can find simply the data you asked :</h1>
    <p>AAAA {{$route.params.dates}}</p>
  </div>
</template>

<script>
//import Display from '../components/Display.vue';

export default{
  name:'App',
  components:{
    //Display
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
