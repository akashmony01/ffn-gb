<template>
    <section class="bg-blogImg bg-center bg-no-repeat bg-cover py-20 sm:py-32 text-white">
      <div class="container text-center">
        <h1>
          Ghost
        </h1>
        <p class="text-lg sm:text-2xl opacity-100">
          The professional publishing platform
        </p>
      </div>
    </section>
</template>

<script>
export default {
  name: 'BlogHero',
}
</script>

<style scoped>
.bg-blogImg {
  background-image: url(~@/assets/images/blogHeroBg.jpg);
}
</style>