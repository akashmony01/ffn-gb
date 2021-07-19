<template>
  <BlogLayout>

  <main class="-mt-14">

    <BlogHero />

    <section class="pt-8 pb-14  ">
      <div class="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- first blog -->
        <FeaturedBlog />
        <!-- other blogs -->
        <BlogItem />
        <BlogItem />
        <BlogItem />
        <BlogItem />
      </div>
    </section>
  
  </main>

  </BlogLayout>
</template>

<static-query>
{
  posts {
    edges {
      node {
        id
        title
        slug
        excerpt
        date
        featuredImage {
          node {
            sourceUrl
          }
        }
        tags {
          nodes {
            link
            slug
          }
        }
      }
    }
  }
}
</static-query>


<script>
import BlogHero from '~/components/Blog/BlogHero.vue'
import FeaturedBlog from '../components/Blog/FeaturedBlog.vue'
import BlogItem from '../components/Blog/BlogItem.vue'

export default {
  metaInfo: {
    title: 'Blog'
  },
  components: {
    BlogHero,
    FeaturedBlog,
    BlogItem,
  }
}
</script>

<style>
</style>
