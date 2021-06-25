<template>
    <h2>{{date}}/{{month}}</h2>
    <p>{{msg}}</p>
</template>

<script>
const axios = require('axios');

export default {
    name: 'Display',
    props: {
        datesGiven: String
    },
    data() {
        return {
            msg: '',
            date: '',
            month: ''
        }
    },
    mounted() {
        this.month = this.datesGiven.substr(0, this.datesGiven.indexOf('/'))
        this.date = this.datesGiven.substr(this.datesGiven.indexOf('/') + 1, this.datesGiven.length)
        console.log(this.date, this.month)
        if (!(parseInt(this.date) > 31)) {
            if (!(parseInt(this.month) > 12)) {
                if (!(parseInt(this.date) < 1)) {
                    if (!(parseInt(this.month) < 1)) {
                        let url = 'http://www.numbersapi.com/' + this.month + '/' + this.date + '/date';
                        console.log(url)
                        axios
                            .get(url)
                            .then((response) => {
                                this.msg = response.data
                            })
                            .catch(function (error) {
                                this.msg = 'An error as occured' + error
                            })
                    } else {
                        this.msg = 'Please enter a correct date';
                    }
                } else {
                    this.msg = 'Please enter a correct date';
                }
            } else {
                this.msg = 'Please enter a correct date';
            }
        } else {
            this.msg = 'Please enter a correct date';
        }
    }
}

</script>

<style scoped>
    

    h2{
        margin-top: 5px;
        margin-bottom: 5px;
    }
</style>