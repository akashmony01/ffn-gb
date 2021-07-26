<template>
  <Layout>

    <Hero />
    <Review />
    <WhyUs />

  </Layout>
</template>

<static-query>
query {
  metadata {
    author
    keywords
    siteName
    title
    description
    image
  }
}

</static-query>

<script>
import Hero from '~/components/Home/Hero.vue'
import Review from '~/components/Home/Review.vue'
import WhyUs from '~/components/Home/WhyUs.vue'

export default {
  metaInfo () {
    return this.$seo({
      title: this.$static.metadata.title, // Uses the titleTemplate in Gridsome config
      description: this.$static.metadata.title,
      keywords: this.$static.metadata.keywords,
        author: this.$static.metadata.author,
      openGraph: {
        type: 'website',
        title: this.$static.metadata.title,
        description: this.$static.metadata.title,
        name: this.$static.metadata.siteName,
        image: this.$static.metadata.image,
      },
      twitter: {
        description: this.$static.metadata.title,
        title: this.$static.metadata.siteName,
          image: this.$static.metadata.image,
          creator: this.$static.metadata.author,
        type: 'summary'
      },
    })
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