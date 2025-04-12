import { defineStore } from "pinia";

export const useProfileStore = defineStore('profile', {
    state: ()=> ({
        id: '',
        name: '',
        bio: '',
        image: '',
        posts: null,
        post: null,
        allLikes: 0,
    }),
    actions : {
        
    }
})