<template>
  <v-app>
    <v-content>
      <v-container class="fill-height"
                   fluid>
        <v-row align="center"
               justify="center">
          <v-col cols="12"
                 sm="8"
                 md="4">
            <v-card class="v-card--outlined">
              <div class="login-header primary">
                <i class="fa fa-lock"></i> Zaloguj się:
              </div>
              <v-card-text>
                <v-form class="pr-md-4 pl-md-4"
                        ref="form"
                        lazy-validation>
                  <v-text-field outlined
                                label="Email"
                                name="login"
                                type="text"
                                prepend-icon="fa fa-envelope"/>
                  <v-text-field outlined
                                id="password"
                                label="Hasło"
                                name="password"
                                type="password"
                                prepend-icon="fa fa-lock"/>
                </v-form>
                <div class="text-center">
                  <v-btn large color="primary"
                         @click="login">Zaloguj
                  </v-btn>
                </div>
                <v-card-actions class="mt-2">
                  <v-spacer/>
                  Nie masz jeszcze konta?
                  <v-btn text color="accent">Dołącz</v-btn>
                </v-card-actions>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'Login',
  data: () => {
    return {
      email: '',
      password: '',
      show: false
    }
  },
  methods: {
    login: function () {
      this.show = !this.show;
      console.log(this.show);
    }
  }
}
</script>

<style scoped lang="scss">
  .login-header {
    width: 80%;
    padding: 1em 2em;
    margin: -1.3em auto 1em;
    border-radius: 4px;
    color: #ebebeb;
    text-align: center;
    font-size: 1.2em;
  }
</style>
