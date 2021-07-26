<!-- header setion -->
<template>
    <footer class="bgFooter py-10">
        <div class="container max-w-screen-md text-center text-white">
            <p class="py-14">
                {{ $static.sections.edges[0].node.textFields.edges[0].node.text }}
            </p>
            <p>
                Copyright © {{ new Date().getFullYear() }} {{ $static.info.edges[0].node.siteName }}
            </p>
        </div>
    </footer>
</template>

<static-query>
{
  sections: allPageSections(filter: {sectionName: {eq: "Disclaimer"}}) {
    edges {
      node {
        sectionName
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
  info: allSiteInfo {
    edges {
      node {
        siteName
        siteImage
      }
    }
  }
}

</static-query>

<script>
export default {
  name: 'Footer',
}
</script>