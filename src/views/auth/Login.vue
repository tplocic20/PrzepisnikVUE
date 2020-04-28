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
                <i class="fa fa-lock"></i> {{$t('pages.login.msg.title')}}
              </div>
              <v-card-text>
                <v-form class="pr-md-4 pl-md-4"
                        ref="form"
                        lazy-validation>
                  <v-text-field outlined
                                :label="$t('pages.login.input.email')"
                                name="login"
                                type="text"
                                required
                                :rules="[this.$validators.required(), this.$validators.isEmail()]"
                                prepend-icon="fa fa-envelope"
                  />
                  <v-text-field outlined
                                id="password"
                                :label="$t('pages.login.input.password')"
                                name="password"
                                type="password"
                                :rules="[this.$validators.required()]"
                                prepend-icon="fa fa-lock"/>
                </v-form>
                <div class="text-center overflow-hidden login-btn-wrapper">
                  <transition
                    name="login-btn-transition"
                    enter-active-class="animated bounceInLeft"
                    leave-active-class="animated bounceOutRight"
                  >
                    <v-btn v-if="show" large color="primary" class="login-btn mt-4"
                           @click="login">{{$t('pages.login.btn.login')}}
                    </v-btn>
                  </transition>
                  <transition
                    name="login-spinner-transition"
                    enter-active-class="animated fadeIn"
                    leave-active-class="animated fadeOut">
                    <CustomLoader v-if="!show"
                                  small
                                  no-shadow
                                  class="login-spinner"/>
                  </transition>
                </div>
              </v-card-text>
              <v-divider></v-divider>
              <v-card-actions class="mt-2">
                <v-spacer/>
                {{$t('pages.login.msg.no-account')}}
                <v-btn text color="accent">{{$t('pages.login.msg.join')}}</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import CustomLoader from '../../common/custom-loader';

export default {
  name: 'Login',
  components: {
    CustomLoader
  },
  comments: {
    CustomLoader
  },
  data: () => {
    return {
      email: '',
      password: '',
      show: true
    }
  },
  methods: {
    login: function () {
      this.show = !this.show;
      this.$refs.form.validate();
      console.log(this.show);
      setTimeout(() => {
        this.show = !this.show;
      }, 3000);
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
    box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  }

  .login-btn-wrapper {
    position: relative;
    height: 75px;

    .login-btn {
      z-index: 1;
    }

    .login-spinner {
      position: absolute;
      left: 0;
      right: 0;
      top: -10px;
      margin-left: auto;
      margin-right: auto;
    }
  }
</style>
