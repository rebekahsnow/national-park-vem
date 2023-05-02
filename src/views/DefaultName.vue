<template>
    <v-app style="padding: 0px 12px; margin-top: 12px">
        <div>
            <v-text-field v-model="defaultName" outlined label="Set a default name" color="#FF6E00">
                <template v-slot:prepend>
                    <img width="24" height="24" src="../assets/icons/name.png" >
                </template>
            </v-text-field>
            <v-btn color="#FF6E00" dark style="float: right; margin-left: 16px" @click="SaveDefaultName()">SAVE</v-btn>
            <div class="clear-btn" light style="float: right" @click="defaultName=''">CLEAR</div>
        </div>
    </v-app>
</template>

<script>
export default {
    data(){
        return{
            defaultName: '',
        }
    },
    created(){
        this.defaultName = localStorage.getItem('defaultName');
        this.defaultName = this.defaultName ? this.defaultName : '';
    },
    methods: {
        SaveDefaultName: function(){
            localStorage.setItem('defaultName', this.defaultName);
            this.$router.go(-1);
        },
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