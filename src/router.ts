import Vue from 'vue';
import Router from 'vue-router';
import PageAboutUs from '@/views/AboutUs.vue';
import PageContact from '@/views/Contact.vue';
import PageHome from '@/views/Home.vue';
import PageServices from '@/views/Services.vue';
import PageVerifyReport from '@/views/VerifyReport.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'PageHome',
      component: PageHome,
    },
    {
      path: '/about',
      name: 'PageAboutUs',
      component: PageAboutUs,
    },
    {
      path: '/services',
      name: 'PageServices',
      component: PageServices,
    },
    {
      path: '/verify',
      name: 'PageVerifyReport',
      component: PageVerifyReport,
    },
    {
      path: '/contact',
      name: 'PageContact',
      component: PageContact,
    },
  ],
});
