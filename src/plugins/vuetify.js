import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify, {
    theme: {
      primary: '#FFFCF6',
      secondary: '#b0bec5',
      accent: '#FF6E00',
      error: '#ff00ff'
    }
});

export default new Vuetify({
});
