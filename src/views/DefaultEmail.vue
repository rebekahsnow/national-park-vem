<template>
    <v-app style="padding: 0px 12px; margin-top: 12px">
        <div>
            <v-text-field v-model="defaultEmail" outlined label="Set a default email" color="#FF6E00">
                <template v-slot:prepend>
                    <img width="24" height="24" src="../assets/icons/email.png" >
                </template>
            </v-text-field>
            <p>This is the email where data will be sent.</p>
            <v-btn color="#FF6E00" dark style="float: right; margin-left: 16px" @click="SaveDefaultEmail()">SAVE</v-btn>
            <div class="clear-btn" light style="float: right" @click="defaultName=''">CLEAR</div>
        </div>
    </v-app>
</template>

<script>
export default {
    data(){
        return{
            defaultEmail: '',
        }
    },
    created(){
        this.defaultEmail = localStorage.getItem('defaultEmail');
        this.defaultEmail = this.defaultEmail ? this.defaultEmail : '';
    },
    methods: {
        SaveDefaultEmail: function(){
            localStorage.setItem('defaultEmail', this.defaultEmail);
            this.$router.go(-1);
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