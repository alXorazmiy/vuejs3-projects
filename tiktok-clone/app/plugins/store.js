

import { useUserStore } from "~/store/user";
import { useProfileStore } from "~/store/profile";
import { useGeneralStore } from "~/store/general";


export default defineNuxtPlugin((NuxtApp) => {
    return {
        provide : {
            userStore : useUserStore(),
            profileStore : useProfileStore(),
            generalStore : useGeneralStore(),
        }
    }
})

