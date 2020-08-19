import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import firebase from 'firebase'

Vue.config.productionTip = false

var firebaseConfig = {
  apiKey: "AIzaSyCsE9vESvuJAvuwqj__Kyc1f4zhSa8rqHY",
  authDomain: "buymyshoesdb.firebaseapp.com",
  databaseURL: "https://BuyMyShoesDB.firebaseio.com",
  storageBucket: "buymyshoesdb.appspot.com",
}

firebase.initializeApp(firebaseConfig)

var databaseRef = firebase.database().ref("users/")



  databaseRef.set({
    username: "cyrille",
    // email: email,
    // profile_picture : imageUrl
  })

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
