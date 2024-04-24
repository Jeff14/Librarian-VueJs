<template>
  <div class="center">
    <div class="division">
      <v-row>
        <v-col cols="12" md="6" offset-md="3" lg="4" offset-lg="4">
          <v-avatar size="100" tile>
            <v-img src="@/assets/logo.png"></v-img>
          </v-avatar>
          <v-text-field
            label="Username"
            v-model="username"
            class="input-field"
          ></v-text-field>
          <v-text-field
            label="Password"
            type="password"
            v-model="password"
            class="input-field"
          ></v-text-field>
          <v-btn block elevation="2" @click="auth"> Login </v-btn>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    auth() {
      alert(this.username + " " + this.password);
    },
  },
};
</script>

<style scoped>
.division {
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  width: 450px;
  margin: 0 auto; /* Center the box horizontally */
}

.input-field {
  width: 400px;
}

.center {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>
