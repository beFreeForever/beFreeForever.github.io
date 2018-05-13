<template>
  <div>
    <navbar :title="title"/>
    <main>
      <router-view/>
    </main>


    <b-modal
      v-model="isShowAuth"
      title="Авторизация"
      centered>
      <b-container fluid>
         <b-row class="mb-1">
           <!-- <b-col cols="2">Логин</b-col> -->
           <b-col>
             <b-form-input 
                v-model="auth.login"
                type="text"
                placeholder="Введите логин"/>
            </b-col>
         </b-row>
         <b-row class="mb-1">
           <!-- <b-col cols="2">Пароль</b-col> -->
           <b-col>
             <b-form-input 
                v-model="auth.password"
                type="password"
                placeholder="Введите пароль"/>
           </b-col>
         </b-row>
      </b-container>
      <div slot="modal-footer" class="w-100">
         <!-- <p class="float-left">Modal Footer Content</p> -->
         <b-btn size="sm" class="float-right" variant="success">
           Войти
         </b-btn>
         <b-btn size="sm" class="float-right" variant="success">
           Регистрация
         </b-btn>
         <b-btn size="sm" class="float-left" variant="second">
           Забыли пароль?
         </b-btn>
      </div>
    </b-modal>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";

export default {
  name: "app",
  data() {
    return {
      title: "Cinema",
      auth: {
        login: null,
        password: null
      }
    };
  },
  computed: {
    isShowAuth: {
      get() {
        return this.$store.getters.isShowAuth;
      },
      set(value) {
        this.$store.commit("setIsShowAuth", value);
      }
    }
  },
  components: {
    Navbar
  }
};
</script>