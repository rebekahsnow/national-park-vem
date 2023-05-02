<template>
    <v-app style="padding: 0px 12px; margin-top: 12px">
        <div class="setting" @click="$router.push('settings/defaultname')" style="margin-top: 12px !important">Default Name</div>
        <div class="setting" @click="$router.push('settings/defaultemail')">Recipient Default Email</div>
        <div class="setting" @click="$router.push('settings/datautilization')">Utilizing Data</div>
    </v-app>
</template>

<script>
export default {

}
</script>

<style scoped>
.setting{
    font-weight: bold;
    margin: 16px;
}

</style>