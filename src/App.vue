<template>
  <div id="app" class="container">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/cadastro">Cadastro</router-link>
    </div>
    <div class="columns col-oneline">
      <div class="column col-12">

    <router-view/>
      </div>
    </div>
  </div>
</template>
<script>

import Vue from 'vue';
import { VuejsDatatableFactory } from 'vuejs-datatable';
import VueResource from 'vue-resource';
import VueTheMask from 'vue-the-mask';

Vue.use(VueTheMask);
Vue.use(VueResource);
Vue.use(VuejsDatatableFactory);

const { http } = Vue;
http.options.root = 'https://jsonbox.io/box_5bafe5f4bb577e7a9831';

http.headers.common['Access-Control-Allow-Origin'] = '*';
http.headers.common['Content-Type'] = 'application/json';
http.headers.common.Accept = '*/*';
http.headers.common['Cache-Control'] = 'no-cache';

export default {

};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
