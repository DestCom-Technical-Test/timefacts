<template>
<div>
    <h2>{{date}}/{{month}}</h2>
    <p>{{msg}}</p>
</div>
</template>

<script>
const axios = require('axios');

export default{
  name:'Display',
  props:{
      datesGiven: String
  },
  data(){
    return{
     msg: '',
     date:'',
     month:''
    }
  },
  mounted (){
      this.date = this.datesGiven.substr(0, this.datesGiven.indexOf('/'))
      this.month = this.datesGiven.substr(this.datesGiven.indexOf('/')+1, this.datesGiven.length)
      if(!(parseInt(this.date)>31)){
          if(!(parseInt(this.month)>12)){
            let url ='http://www.numbersapi.com/' + this.date + '/' + this.month + '/date';
            axios
                .get(url)
                .then((response) => {
                    this.msg = response.data
                })
                .catch(function (error){
                    this.msg = 'An error as occured' + error
                })
            }
            else{
            this.msg = 'Please enter a correct date';
        }
    }
    else{
        this.msg = 'Please enter a correct date';
    }
  }
}

</script>

<style scoped>
    div{
        text-align: left;
        background-color: white;
        border-radius: 25px;
        margin-top: 10%;
        padding: 5px;
        height: 20vh;
        width: 25vw;
    }

    h2{
        margin-top: 5px;
        margin-bottom: 5px;
    }
</style>