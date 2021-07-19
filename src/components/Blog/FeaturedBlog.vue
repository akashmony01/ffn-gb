<template>
    <div class="lg:col-span-3 flex flex-col lg:flex-row items-center gap-4">
        <a href="" class="block w-full lg:w-8/12">
        <g-image class="w-full" src="~/assets/images/blog1.png" alt="blog1" />
        </a>
        <article class="w-full lg:w-4/12 lg:pl-2">
        <a href="" class="block mb-6">
            <h6>
            Getting Started
            </h6>
            <h2>
            Start here for a quick overview of everything you need to know
            </h2>
            <p>
            We've crammed the most important information to help you get started with Ghost into this one post. It's your cheat-sheet to get started, and your shortcut to advanced features.
            </p>
        </a>
        <div class="flex gap-2">
            <a href="" class="block w-10">
            <g-image class="w-full rounded-full" src="~/assets/images/author1.png" alt="at" />
            </a>
            <div>
            <a href="">
                <h5>
                Ghost
                </h5>
            </a>
            <p class="text-xs">
                Mar 18, 2021 • 2 min read
            </p>
            </div>
        </div>
        </article>
    </div>
</template>

<script>
export default {
  name: 'FeaturedBlog',
}
</script>