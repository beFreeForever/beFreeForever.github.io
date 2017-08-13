<template>
    <v-app>
        <v-navigation-drawer dark persistent :mini-variant="miniVariant" :clipped="clipped" v-model="drawer">
            <v-list>
                <v-list-item v-for="(item, i) in items" :key="i" v-on:click="NextRoute(item.route)">
                    <v-list-tile value="true">
                        <v-list-tile-action>
                            <v-icon light v-html="item.icon"></v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                            <v-list-tile-title v-text="item.title"></v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
        <v-toolbar class="purple lighten-4">
            <v-toolbar-side-icon @click.native.stop="drawer = !drawer"></v-toolbar-side-icon>
            <v-btn icon @click.native.stop="miniVariant = !miniVariant">
                <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'"></v-icon>
            </v-btn>
            <v-btn icon @click.native.stop="clipped = !clipped">
                <v-icon>web</v-icon>
            </v-btn>
            <v-toolbar-title v-text="title"></v-toolbar-title>
            <v-spacer></v-spacer>
        </v-toolbar>
        <main>
            <v-container fluid>
                <router-view></router-view>
            </v-container>
        </main>
    </v-app>
</template>

<script>
import VueRouter from 'vue-router';
import index from './index.vue';
import axios from 'axios';
export default {
    data() {
        return {
            clipped: false,
            drawer: true,
            items: [
                { icon: 'power_settings_new', title: 'Главная', route: '/' },
                { icon: 'error_outline', title: 'Информация', route: '/info' }
            ],
            miniVariant: false,
            right: true,
            rightDrawer: false,
            title: 'Quantum.Inc admin page',
        }
    },
    methods: {
        NextRoute(data) {
            this.$router.push(data)
        }
    }
}
</script>

<style lang="stylus">
  @import './stylus/main'
</style>