<template>
    <MainLayout > 
        <div class="pt-[80px] w-[calc(100%-90px)] max-w-[690px]">
            <PostMain />
        </div>
    </MainLayout>
</template>

<script setup>
    import MainLayout from "~/layouts/MainLayout.vue";
    import  PostMain  from "~/components/posts/PostMain.vue";
</script>
