<!-- header setion -->
<template>
    <header class="z-50 absolute top-0 left-0 right-0 pt-4">
        <div class="container flex items-center justify-between gap-2">
            <a href="" class="block w-1/6">
                <g-image width="250" height="59" :src="require(`!!assets-loader!@/${$static.info.edges[0].node.siteImage}`)" :alt="$static.info.edges[0].node.siteName" />
            </a>
            <div class="">
            <a v-for="{node, key} in $static.menuItems.edges" :key="key" :href="node.link" class="bg-secondery text-white uppercase px-5 sm:px-8 py-3 font-rbtBold tracking-wide rounded-md">
                {{ node.text }}
            </a>
            </div>


        </div>
    </header>
</template>

<static-query>
{
  info: allSiteInfo {
    edges {
      node {
        siteName
        siteImage
      }
    }
  }
  menuItems: allMenuItems {
    edges {
      node {
        link
        text
        order
        isButton
      }
    }
  }
}

</static-query>

<script>
export default {
  name: 'Header',
}
</script>