<template>
    <div id="app" class="bg-white">

        <header class="z-50 py-3 text-white font-medium">
            <div class="container flex justify-between lg:justify-start items-center gap-4">
            <!-- <a href="" class="block text-xl font-semibold">
                Ghost
            </a> -->
            <nav
                id="mainMenu" 
                class="
                hidden
                lg:flex
                flex-col 
                lg:flex-row
                items-center 
                justify-center 
                lg:justify-between 
                lg:gap-4
                fixed
                lg:static
                top-0 
                left-0 
                right-0 
                bottom-0
                bg-primary
                lg:bg-transparent 
                z-50
                overflow-y-auto
                w-full
                "
            >
                <span class="closeMenu block lg:hidden absolute right-4 top-4 cursor-pointer inline-block">
                <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                </span>
                <ul class="mb-10 lg:mb-0 text-3xl lg:text-xl font-light lg:font-medium leading-normal flex flex-col lg:flex-row items-center gap-3">
                <li>
                    <a href="" class="block opacity-90 hover:opacity-100">
                    Home
                    </a>
                </li>
                <li>
                    <a href="" class="block opacity-90 hover:opacity-100">
                    About
                    </a>
                </li>
                <li>
                    <a href="" class="block opacity-90 hover:opacity-100">
                    Collection
                    </a>
                </li>
                <li>
                    <a href="" class="block opacity-90 hover:opacity-100">
                    Author
                    </a>
                </li>
                <li>
                    <a href="" class="block opacity-90 hover:opacity-100">
                    Portal
                    </a>
                </li>
                </ul>
                <ul class="flex flex-wrap items-center gap-3">
                <li class="text-xl">
                    <a href="" class="block opacity-90 hover:opacity-100">
                    <i class="fab fa-facebook"></i>
                    </a>
                </li>
                <li class="text-xl">
                    <a href="" class="block opacity-90 hover:opacity-100">
                    <i class="fab fa-twitter"></i>
                    </a>
                </li>
                <li>
                    <a href="" class="block px-4 py-1 bg-white text-black rounded-full opacity-90 hover:opacity-100">
                    Subscribe
                    </a>
                </li>
                </ul>
            </nav>
            <div class="block lg:hidden w-full">
                <span class="openMenu float-right">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                </span>
            </div>
            </div>
        </header>

        <slot/>

        <!-- fixed btn -->
        <button id="fixedOpenForm" class="openForm hidden fixed bottom-5 right-5 z-40 rounded-full bg-primary px-6 py-5 text-white flex items-center gap-2 shadow-lg">
            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg" style="width: 24px; height: 24px; color: rgb(255, 255, 255);"><path d="M17.903 12.016c-.332-1.665-1.491-3.032-3.031-3.654M11.037 8.4C9.252 9.163 8 10.935 8 13c0 .432.055.85.158 1.25M10.44 17.296c.748.447 1.624.704 2.56.704 1.71 0 3.22-.858 4.12-2.167M15.171 21.22c3.643-.96 6.329-4.276 6.329-8.22 0-1.084-.203-2.121-.573-3.075M18.611 6.615C17.114 5.3 15.151 4.5 13 4.5c-2.149 0-4.112.797-5.608 2.113M5.112 9.826c-.395.98-.612 2.052-.612 3.174 0 4.015 2.783 7.38 6.526 8.27" stroke="#fff" stroke-width="1.5" stroke-linecap="round"></path><path d="M8.924 24.29c1.273.46 2.645.71 4.076.71 5.52 0 10.17-3.727 11.57-8.803M6.712 2.777C3.285 4.89 1 8.678 1 13c0 3.545 1.537 6.731 3.982 8.928M24.849 11.089C23.933 5.369 18.977 1 13 1c-.69 0-1.367.058-2.025.17" stroke="#fff" stroke-width="1.5" stroke-linecap="round"></path></svg>
            <span>Subscribe</span>
        </button>
        <!-- popup form -->
        <div id="popupForm" class="hidden fixed top-0 left-0 w-full h-full z-40 bg-black bg-opacity-20">
            <div class="oveflow-hidden overflow-yscroll h-full sm:h-auto w-full sm:w-auto sm:min-w-popup max-w-full absolute top-0 sm:top-20 left-2/4 transform -translate-x-2/4 bg-white px-8 py-12 sm:rounded-lg">
            <span class="closeForm absolute right-4 top-4 cursor-pointer inline-block">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </span>
            <div class="text-center">
                <img class="w-16 mb-3 mx-auto" src="build/img/popup.png" alt="pp">
                <h4 class="font-medium">
                Ghost
                </h4>
            </div>
            <form action="" class="">
                <div class="mb-6">
                <label class="block text-sm font-medium mb-1" for="name">
                    Name
                </label>
                <input class="border border-gray-200 rounded-sm px-4 py-2.5 w-full text-sm" type="text" placeholder="Jamie Anderson">
                </div>
                <div class="mb-6">
                <label class="block text-sm font-medium mb-1" for="email">
                    Email
                </label>
                <input class="border border-gray-200 rounded-sm px-4 py-2.5 w-full text-sm" type="text" placeholder="janderson@gmail.om">
                </div>  
                <div class="pt-2">
                <button class="bg-primary p-2.5 rounded-sm text-white w-full" type="Submit">
                    Sign Up
                </button>
                <p class="mt-2 text-sm opacity-100 text-center">
                    Already a member?
                    <a href="" class="text-primary">
                    Sign In
                    </a>
                </p>
                </div>
            </form>
            </div>
        </div>

        <footer class="bg-black text-white pt-10 pb-32">
            <div class="container flex flex-col md:flex-row items-center justify-between gap-3">
            <p class="text-sm">
                Ghost © 2021
            </p>
            <ul class="flex flex-wrap items-center text-sm gap-6">
                <li class="">
                <a href="" class="opacity-70 hover:opacity-100">
                    Data & privacy
                </a>
                </li>
                <li class="list-disc">
                <a href="" class="opacity-70 hover:opacity-100">
                    Contact
                </a>
                </li>
                <li class="list-disc">
                <a href="" class="opacity-70 hover:opacity-100">
                    Contribute →
                </a>
                </li>
            </ul>
            <p class="text-sm">
                Powered by Ghost
            </p>
            </div>
        </footer>

<!-- 
        <script src="~/assets/js/lib/jquery.min.js"></script>
        <script src="~/assets/js/main.js"></script>     -->
    </div>
</template>

<static-query>
query {
    metadata {
        siteName
    }
}
</static-query>


<style>
</style>
