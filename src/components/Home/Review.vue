<!-- header setion -->
<template>
    <section>
        <div class="transform -translate-y-36 lg:-translate-y-14 container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
            <div v-for="{node, key} in $static.sections.edges[0].node.repeaterBlock.edges" :key="key" class="bg-gray-400 rounded-lg mt-2 ml-2">
                <div class="transform -translate-x-2 -translate-y-2 bg-white rounded-lg p-5 border-2 border-gray-400">
                    <p v-for="{node, key} in node.websitetextfieldSet.edges" :key="key" v-if="node.fieldSlug == 'testmonialcontent'" class="text-middle mb-2">
                        {{ node.text }}
                    </p>
                    <h5 v-for="{node, key} in node.websitetextfieldSet.edges" :key="key" v-if="node.fieldSlug == 'testmonialname'" class="text-middle text-black font-rbtBold italic">
                        - {{ node.text }}
                    </h5>
                </div>
            </div>
        </div>
    </section>
</template>

<static-query>
{
  sections: allPageSections(filter: {sectionName: {eq: "Testimonials"}}) {
    edges {
      node {
        repeaterBlock {
          edges {
            node {
              websitetextfieldSet {
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
      }
    }
  }
}

</static-query>

<script>
export default {
  name: 'Review',
}
</script>