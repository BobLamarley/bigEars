<template>
  <v-layout>
     <v-flex xs12 sm6 offset-sm3>
       <v-card>
         <v-card-media :src="this.$store.getters['user/getProfile']['imageProfile']" height="500px"></v-card-media>

         <v-card-title primary-title>
              <v-flex xs3>
              </v-flex>
              <v-flex xs6>
                 <h3 class="completeName">{{ this.$store.getters['user/getProfile']['firstname'] }} {{ this.$store.getters['user/getProfile']['lastname'] }}</h3>
                 <div><i class="fas fa-universal-access"></i> Role : {{ this.$store.getters['user/getProfile']['role'] }}</div>
                 <div> Dernière connexion : {{ this.$store.getters['user/getProfile']['lastConnection'] | formatDate }}</div>
                 <div>Couleur de l'interface :<center><color-picker v-model="color"></color-picker></center></div>
              </v-flex>
              <v-flex xs3>
              </v-flex>
         </v-card-title>

         <v-card-actions>
           <v-flex xs3>
           </v-flex>
           <v-flex xs6>
             <v-btn v-on:click="save" flat color="orange">Sauvegarder</v-btn>
           </v-flex>
           <v-flex xs3>
           </v-flex>
         </v-card-actions>
       </v-card>
     </v-flex>
   </v-layout>
 </template>

<script>
import ColorPicker from '@radial-color-picker/vue-color-picker'
require('@radial-color-picker/vue-color-picker/dist/vue-color-picker.min.css')

function hslToRgb (h, s, l) {
  var r, g, b

  if (s === 0) {
    r = g = b = l // achromatic
  } else {
    var hue2rgb = function hue2rgb (p, q, t) {
      if (t < 0) t += 1
      if (t > 1) t -= 1
      if (t < 1 / 6) return p + (q - p) * 6 * t
      if (t < 1 / 2) return q
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6
      return p
    }

    var q = l < 0.5 ? l * (1 + s) : l + s - l * s
    var p = 2 * l - q
    r = hue2rgb(p, q, h + 1 / 3)
    g = hue2rgb(p, q, h)
    b = hue2rgb(p, q, h - 1 / 3)
  }
  return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)]
}

function componentToHex (c) {
  var hex = c.toString(16)
  return hex.length === 1 ? '0' + hex : hex
}

function rgbToHex (r, g, b) {
  return '#' + componentToHex(r) + componentToHex(g) + componentToHex(b)
}

export default {
  name: 'settings',
  components: { ColorPicker },
  data () {
    return {
      color: {
        hue: 50,
        saturation: 100,
        luminosity: 50,
        alpha: 1
      }
    }
  },
  methods: {
    save: function () {
      var rgb = hslToRgb(this.color.hue / 360, this.color.saturation / 100, this.color.luminosity / 100)
      var hex = rgbToHex(rgb[0], rgb[1], rgb[2])
      this.$store.commit('color/SET_COLOR', hex)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.layout
{
  margin: 10%;
}

.selector.is-pressed
{
  animation: inherit !important;
}
</style>
