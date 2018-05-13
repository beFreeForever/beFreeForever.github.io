<template>
    <b-navbar toggleable="md" type="dark" variant="dark">

        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

        <b-navbar-brand style="cursor: pointer" @click="$router.push('/')">{{title}}</b-navbar-brand>

        <b-collapse is-nav id="nav_collapse">

        <b-navbar-nav>
            <b-nav-item @click="$router.push('/prime-graph')">График премьер</b-nav-item>
            <b-nav-item @click="$router.push('/contacts')">Контактная информация</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
            <!-- <b-nav-item style="cursor: pointer" @click="isShowAuth = true">Авторизация</b-nav-item> -->
            <b-nav-item style="cursor: pointer" @click="$router.push('/account')">Авторизация</b-nav-item>
        </b-navbar-nav>

        </b-collapse>
    </b-navbar>
</template>

<script>
export default {
  props: {
    title: String
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
  }
};
</script>
