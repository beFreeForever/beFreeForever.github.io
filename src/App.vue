<template>
  <div>
    <navbar :title="title"/>
    <main>
      <router-view/>
    </main>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'

export default {
  name: "app",
  data() {
    return {
      title: "Cinema"
    };
  },
  components: {
    Navbar
  }
};
</script>