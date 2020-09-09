import Vue from 'vue'
// router
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Home from '@/views/HelloWorld.vue'
import Testing from '@/views/Testing.vue'
import Exercise from '@/views/Exercise.vue'
import Detail from '@/views/Detail.vue'
//import Cart from './views/Cart.vue'
import ShoppingCart from './views/ShoppingCart.vue'
import Order from './views/Order.vue'

const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: Home
    },
    { 
      path: '/testing',
      component: Testing 
    },
    { 
      path: '/exercise', 
      component: Exercise 
    },
    { 
      path: '/detail/:id',
      name: 'detail',
      component: Detail
    },
    // { 
    //   path: '/cart',
    //   name: 'cart',
    //   component: Cart
    // },
    { 
      path: '/shoppingcart',
      name: 'shoppingcart',
      component: ShoppingCart
    },
    { 
      path: '/order',
      name: 'order',
      component: Order
    }
  ],
  mode: 'history' // abstract
});

export default router