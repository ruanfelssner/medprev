import Vue from 'vue';
import VueResource from 'vue-resource';

Vue.use(VueResource);

const services = {
  list: { method: 'GET', url: 'box_5bafe5f4bb577e7a9831' },
  cad: { method: 'POST', url: 'box_5bafe5f4bb577e7a9831' },
  del: { method: 'DELETE', url: 'box_5bafe5f4bb577e7a9831' },
  edit: { method: 'PULL', url: 'box_5bafe5f4bb577e7a9831' },
};

const { http } = Vue;
http.options.root = 'https://jsonbox.io/';

http.headers.common['Access-Control-Allow-Origin'] = '*';
http.headers.common['Content-Type'] = 'application/json';
http.headers.common.Accept = '*/*';
http.headers.common['Cache-Control'] = 'no-cache';

Object.keys(services).map((service) => {
  services[service] = Vue.resource('', {}, services[service]);
});

export default services;
