import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ResumeView from '../views/ResumeView.vue'
import ContactView from '../views/ContactView.vue'
import ProjetsView from '../views/ProjetsView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      title: "Acceuil",
    },
  },
  {
    path: "/resume",
    name: "resume",
    component: ResumeView,
    meta: {
      title: "CV",
    },
  },
  {
    path: "/projets",
    name: "projets",
    component: ProjetsView,
    meta: {
      title: "Projets",
    },
  },
  {
    path: "/contact",
    name: "contact",
    component: ContactView,
    meta: {
      title: "Contact",
    },
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
