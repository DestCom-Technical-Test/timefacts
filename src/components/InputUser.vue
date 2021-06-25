<template>
  <label>Enter a date in the 'month/day' format : </label>
</template>

<script>

export default{
  name:'InputUser',
  data(){
    return{
      dates:''
    }
  },
  methods: {
    updateValue: function(dates){
      this.$emit('input', dates)
    }
  }
}

</script>

<style scoped>

</style>