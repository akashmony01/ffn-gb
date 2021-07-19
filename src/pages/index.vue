<template>
  <Layout>

    <Hero />
    <Review />
    <WhyUs />

  </Layout>
</template>

<script>
import Hero from '~/components/Home/Hero.vue'
import Review from '~/components/Home/Review.vue'
import WhyUs from '~/components/Home/WhyUs.vue'

export default {
  metaInfo: {
    title: 'Hello, world!'
  },
  components: {
    Hero,
    Review,
    WhyUs,
  }
}
</script>

<style scoped>
.bg-heroImg {
  background-image: url(~@/assets/images/heroBg.png);
}
</style>