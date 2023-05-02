<template>
    <v-app style="padding: 0px 12px; margin-top: 12px">
        <div class="wrapper">
            <h5 class="dataHeaders"><b>Step 1:</b> Copy email</h5>
            <img class="dataPic" src="../assets/icons/copyEmail.png">
            <v-divider style="margin-top: 8px"></v-divider>
            <h5 class="dataHeaders"><b>Step 2:</b> Paste into cell</h5>
            <img class="dataPic" src="../assets/icons/paste.png">
            <v-divider style="margin-top: 8px"></v-divider>
            <h5 class="dataHeaders"><b>Step 3:</b> Click on clipboard and select <i>Split text to columns</i></h5>
            <img class="dataPic" src="../assets/icons/split.png">
            <v-divider style="margin-top: 8px"></v-divider>
            <h5 class="dataHeaders"><b>Step 4:</b> Click on Separator and select <i>Semicolon</i></h5>
            <img class="dataPic" src="../assets/icons/semicolon.png">
            <v-divider style="margin-top: 8px"></v-divider>
            <h5 class="dataHeaders">Final outcome: </h5>
            <img class="dataPic" src="../assets/icons/start2.png">
        </div>
    </v-app>
</template>

<script>
export default {

}
</script>

<style>
/* Utilizing Data Page */
.wrapper{
    padding: 16px;
    padding-top: 0px;
}
.dataHeaders{
    font-size: 16px;
    font-weight: normal;
    margin: 16px 0px;
} 
.dataPic{
    width: 100%;
    height: auto;
    margin-right: 16px;
}

</style>