<!-- header setion -->
<template>
    <section class="z-0 relative bg-heroImg pt-48 pb-60 lg:py-60 bg-cover bg-right-bottom bg-no-repeat">
        <div class="container flex flex-col lg:flex-row items-center gap-12 lg:gap-6">
            <article class="w-full lg:w-6/12">
                <h1 v-for="{node, key} in $static.sections.edges[0].node.textFields.edges" :key="key" v-if="node.fieldSlug == 'headline'" class="text-5xl sm:text-6xl sm:text-7xl text-white mb-8">
                    {{ node.text }}
                </h1>
                <p v-for="{node, key} in $static.sections.edges[0].node.textFields.edges" :key="key" v-if="node.fieldSlug == 'text'" class="text-white text-xl leading-normal mb-6">
                    {{ node.text }}
                </p>
<!--                <ul class="text-xl text-white leading-normal">-->
<!--                    <li class="flex items-start gap-2">-->
<!--                        <span class="block"><i class="far fa-check-square"></i></span>-->
<!--                        <span class="block">We search the whole market.</span>-->
<!--                    </li>-->
<!--                    <li class="flex items-start gap-2">-->
<!--                        <span class="block"><i class="far fa-check-square"></i></span>-->
<!--                        <span class="block">Bad credit or self emplyed? No problem.</span>-->
<!--                    </li>-->
<!--                    <li class="flex items-start gap-2">-->
<!--                        <span class="block"><i class="far fa-check-square"></i></span>-->
<!--                        <span class="block">Video or in-person appointments.</span>-->
<!--                    </li>-->
<!--                </ul>-->
            </article>
            <form :action="$static.meta.formActionURL" class="w-full lg:w-6/12 bg-white rounded-md px-8 sm:px-10 py-6 sm:py-8">
                <h4 v-for="{node, key} in $static.sections.edges[0].node.textFields.edges" :key="key" v-if="node.fieldSlug == 'formtitle'" class="text-2xl leading-snug">
                    {{ node.text }}
                </h4>
                <div class="py-6 flex flex-col gap-4">
                    <div class="relative">
                        <label for="name" class="absolute top-2 left-4 text-sm opacity-70">Name</label>
                        <input id="name" class="w-full pt-6 pb-2 px-4 border-2 border-gray-400 text-xl placeholder-black focus:outline-none font-rbtMedium" type="text" placeholder="Aaron Jack">
                    </div>
                    <div class="relative">
                        <label for="phone" class="absolute top-2 left-4 text-sm opacity-70">Phone</label>
                        <input id="phone" class="w-full pt-6 pb-2 px-4 border-2 border-gray-400 text-xl placeholder-black focus:outline-none font-rbtMedium" type="text" placeholder="07768 982 580">
                    </div>
                    <div class="relative">
                        <label for="email" class="absolute top-2 left-4 text-sm opacity-70">Email</label>
                        <input id="email" class="w-full pt-6 pb-2 px-4 border-2 border-gray-400 text-xl placeholder-black focus:outline-none font-rbtMedium" type="email" placeholder="aaron@prblm.co">
                    </div>
                </div>
                <button type="submit" v-for="{node, key} in $static.sections.edges[0].node.textFields.edges" :key="key" v-if="node.fieldSlug == 'formbuttontext'" class="block bg-secondery text-white text-center uppercase px-5 sm:px-10 py-3 font-rbtBold tracking-wide rounded-md">
                    {{ node.text }}
                </button>
            </form>
        </div>
        <div class="bg-heroBottom absolute -bottom-px left-0 right-0 block h-40">
          <!-- <img class="w-full" src="~@/assets/images/heroBottom.svg" alt="btm"> -->
        </div>
    </section>
</template>

<static-query>
{
  sections: allPageSections(filter: {sectionName: {eq: "Hero"}}) {
    edges {
      node {
        textFields {
          edges {
            node {
              text
              fieldSlug
            }
          }
        }
      }
    }
  }
  meta: metadata {
    formActionURL
  }
}






</static-query>

<script>
export default {
  name: 'Hero',
}
</script>

<style scoped>
.bg-heroImg {
  background: linear-gradient(180deg, #333F5F 0%, #495B89 100%);
}
.bg-heroBottom {
  background-image: url('~@/assets/images/heroBottom.svg');
  @apply bg-cover bg-top bg-no-repeat;
}
</style>