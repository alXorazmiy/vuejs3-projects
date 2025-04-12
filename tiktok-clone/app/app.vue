<template>
    <NuxtPage />
    <AuthOverlay v-if="isLoginOpen"/>
    <EditProfileOverlay v-if = "isEditProfileOpen" />
</template>

<script setup  >
    import { storeToRefs } from 'pinia';
    import EditProfileOverlay from './components/profile/EditProfileOverlay.vue';
    const {$generalStore} = useNuxtApp()
    const {isLoginOpen, isEditProfileOpen} = storeToRefs($generalStore)

</script>
