<template>
    <v-app style="padding: 0px 12px; margin-top: 12px;">
        <div style="min-height: 0vh">
        <v-row height="100px">
            <v-col>
            <v-text-field label="Hours" type="text" placeholder="00" v-model="hours" outlined color="#FF6E00" number @keypress="isNumber($event, hours)"></v-text-field>
            </v-col>
            <p style="display: inline; margin-top: 10px; font-size: 36px">:</p>
            <v-col>
            <v-text-field label="Minutes" type="text" placeholder="00" v-model="minutes" outlined color="#FF6E00" number @keypress="isNumber($event, minutes)"></v-text-field>
            </v-col>
            <p style="display: inline; margin-top: 10px; font-size: 36px">:</p>
            <v-col>
            <v-text-field label="Seconds" type="text" placeholder="00" v-model="seconds" outlined color="#FF6E00" number @keypress="isNumber($event, seconds)"></v-text-field>
            </v-col>
        </v-row>
        <v-text-field label="Number of Timers" type="text" placeholder="eg. 5" v-model="timers" outlined color="#FF6E00" @keypress="isNumber($event, timers)"></v-text-field>
        <v-btn color="#FF6E00" dark style="float: right" @click="saveTimers()">SAVE</v-btn>
        <div class="clear-btn" light style="float: left" @click="clearTimers()">CLEAR</div>
        </div>
    </v-app>
</template>

<script>
// import { mapState } from 'vuex'

export default {
    data(){
        return{
            park: this.$route.params.park,
            hours: '',
            minutes: '',
            seconds: '',
            timers: '',
            storedTimers: ''
        }
    },
    created(){
        this.loadTimers()
    },
    methods: {
        loadTimers: function(){
            var timers = localStorage.getItem('timers');
            if(timers != null){
                this.storedTimers = JSON.parse(timers);
                this.hours = this.storedTimers.hours;
                this.minutes = this.storedTimers.minutes
                this.seconds = this.storedTimers.seconds
                this.timers = this.storedTimers.timers
            }
        },
        isNumber: function(evt, time) {
            evt = (evt) ? evt : window.event;
            var charCode = (evt.which) ? evt.which : evt.keyCode;
            if(time.length >= 2){
                evt.preventDefault();
            }
            if ((charCode > 31 && (charCode < 48 || charCode > 57))) {
                evt.preventDefault();
            } else {
                return true;
            }
        },
        saveTimers: function(){
            this.timers = parseInt(this.timers);
            if(this.timers == ''){
                this.clearTimers();
            }
            while (this.hours.length < 2){
                this.hours = "0" + this.hours;
            }
            while (this.minutes.length < 2){
                this.minutes = "0" + this.minutes;
            } 
            while (this.seconds.length < 2){
                this.seconds = "0" + this.seconds;
            } 
            var timeProp = {timers: this.timers, hours: this.hours, minutes: this.minutes, seconds: this.seconds};
            localStorage.setItem('timers', JSON.stringify(timeProp));
            this.$router.push('/counter/' + this.park)
        },
        clearTimers: function(){
            localStorage.removeItem('timers');
            this.$router.push('/counter/' + this.park)
        }
    }
}
</script>

<style scoped>
    .clear-btn{
        color: #FF6E00;
        background-color: white;
        height: 42px;
        font-size: 18px;
        line-height: 42px;
        font-size: 18px;
    }
</style>