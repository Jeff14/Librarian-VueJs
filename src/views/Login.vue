<template>
    <div class="center">
        <v-row>
            <v-col cols="10" sm="6" offset-sm="3" md="4" offset-md="4" offset="1">
                <v-avatar size="100" tile>
                    <v-img src="@/assets/logo.png"></v-img>
                </v-avatar>
                <v-text-field label="username" v-model="username"></v-text-field>
                <v-text-field label="password" type= "password" v-model="password"></v-text-field>
                <v-btn block elevation="2" @click="auth()">
                    Login
                </v-btn>
            </v-col>
        </v-row>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                username: "",
                password: ""
            }
        },
        methods: {
            auth() {
                alert(this.username +" "+this.password)
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>