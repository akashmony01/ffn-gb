<template>
    <div id="app" class="bg-white">
        <Header />
        <slot/>
        <Footer />
    </div>
</template>

<static-query>
query {
    metadata {
        siteName
    }
}
</static-query>


<script>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'

export default {
  metaInfo: {
    title: 'Hello, world!'
  },
  components: {
    Header,
    Footer,
  }
}
</script>


<style>
</style>
