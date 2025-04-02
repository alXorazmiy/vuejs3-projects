
import type { NuxtImg } from '#components';
import type { NuxtLink } from '#components';



<template>
    <header class = "py-4 border-b container">
        <nav class ="flex container items-center">
            <NuxtLink to="/" class = "flex gap-1 items-center">
                <NuxtImg with = "56px" src="/icon-green.svg" alt="" class = "w-14" />
                <span class = "text-3xl font-bold ">Nuxtcipes</span>

            </NuxtLink>
            <ul class = "flex gap-6 ml-auto text-xl font-bold capitalize" >
                <li>
                    <NuxtLink to="/">Home</NuxtLink>
                </li> 
                <li>
                    <NuxtLink to="/about">About</NuxtLink>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>