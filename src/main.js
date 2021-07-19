// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
require('~/global.css'),
require('~/assets/css/lib/fontawesome.min.css')

import DefaultLayout from '@/layouts/Default.vue'
import BlogLayout from '@/layouts/BlogLayout.vue'
import VueFilterDateFormat from '@vuejs-community/vue-filter-date-format';

export default function (Vue, { router, head, isClient }) {
  Vue.component('Layout', DefaultLayout)
  Vue.component('BlogLayout', BlogLayout)
  Vue.use(VueFilterDateFormat);
  
  // Add attributes to BODY tag
  // Set default layout as a global component

}
