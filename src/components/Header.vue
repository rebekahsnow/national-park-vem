<template>
    <div>
        <v-app id="inspire">
            <v-card
            color="grey lighten-4"
            flat
            tile
            >
            <v-toolbar color="#FFFFFF" height="60px">
                <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->

                <img src="../assets/icons/back.png" style="height: 24px; width: 24px;margin-right: 16px" v-if="!home" @click="$router.go(-1)">
        
                <img src="../assets/icons/bison.png" class="bison" v-if="home">
                <div class="title-box">
                    <div class="title">{{title}}</div>
                    <div class="date">{{date}}</div> 
                </div>
        
                <v-spacer></v-spacer>

                <img src="../assets/icons/cog.png" @click="$router.push('/settings')">
        
            </v-toolbar>
            </v-card>
        </v-app>
    </div>
</template>

<script>
var moment = require('moment');

export default {
    name: 'Header',
    data(){
        return{
            home: false,
            title: '',
            date: ''
        }
    },
    created(){
        this.CheckRoute();
        this.date = moment(new Date()).format('dddd, MMMM Do, YYYY')
    },
    methods:{
        CheckRoute: function(){
            var name = this.$route.name;
            if(name == 'Home'){
                this.home = true;
            }else if(name == 'DefaultName'){
                name = 'Set Default Name';
            }else if(name == 'DefaultEmail'){
                name = 'Set Default Email';
            }else if(name == 'DataUtilization'){
                name = 'Data Utilization';
            }else{
                this.home = false;
            }
            this.title = name
        }
    },
    watch:{
        $route (){
            this.CheckRoute()
        }
    } 
    
}
</script>

<style scoped>
.bison{
  height: 36px;
  width: auto;
  margin-bottom: -2px;
  margin-right: 16px;
}

li{
  list-style-type: none;
  margin: 0px 16px;
  color: #FF6E00;
  font-size: 20px;
  font-family: "boldRoboto";
}
.title-box{
    display: inline-block;
    height: 60px;
}
.v-application .title{
    font-size: 16px;
    line-height: 24px;
    font-weight: 500;
    margin-top: 6px;
}
.date{
    font-size: 14px;
    font-weight: 400;
    margin: 0px;
}
</style>

<style>
#inspire > .v-application--wrap {
  min-height: 0px !important;
}
</style>