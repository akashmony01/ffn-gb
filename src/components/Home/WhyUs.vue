<!-- header setion -->
<template>
    <section class="transform -translate-y-14 lg:py-20">
        <div class="container">
            <h2 v-for="{node, key} in $static.sections.edges[0].node.textFields.edges" :key="key" v-if="node.fieldSlug == 'title'" class="text-5xl text-center mb-20">
                {{ node.text }}
            </h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
                <div v-for="{node, key} in $static.sections.edges[0].node.repeaterBlock.edges" :key="key" class="text-center">
                    <h3 v-for="{node, key} in node.websitetextfieldSet.edges" :key="key" v-if="node.fieldSlug == 'benefittitle'" class="text-3xl mb-6">
                        {{ node.text }}
                    </h3>
                    <p v-for="{node, key} in node.websitetextfieldSet.edges" :key="key" v-if="node.fieldSlug == 'benefittext'" class="text-xl">
                        {{ node.text }}
                    </p>
                </div>
            </div>
            <div class="py-20 text-center">
                <a v-for="{node, key} in $static.sections.edges[0].node.clickableFields.edges" :key="key" v-if="node.fieldSlug == 'cta'" href="" class="inline-block bg-secondery text-white uppercase px-14 py-3 font-rbtBold tracking-wide rounded-md">
                    {{ node.text }}
                </a>
            </div>
        </div>
    </section>
</template>

<static-query>
{
  sections: allPageSections(filter: {sectionName: {eq: "Benefits"}}) {
    edges {
      node {
        sectionName
          clickableFields {
            edges {
              node {
                text
                link
                fieldSlug
              }
            }
          }
        textFields {
          edges {
            node {
              text
              fieldSlug
            }
          }
        }
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
  name: 'WhyUs',
}
</script>