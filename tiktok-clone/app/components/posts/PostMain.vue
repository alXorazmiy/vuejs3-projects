<template>
    <div id ="PostMain" class = "flex border-b py-6" >
         <div class="cursor-pointer">
            <img src="https://picsum.photos/id/83/300/320" alt="" class="rounded-full max-h-[60px]">
         </div>
         <div class="pl-3 w-full px-4">
            <div class="flex items-center justify-between pb-0.5">
                <button>
                    <span class="font-bold hover:underline cursor-pointer">
                        Username
                    </span>
                    <span class="text-[13px] text-light text-gray-500 pl-1 cursor-pointer"></span>
                </button>
                <button class="border text-[15px] px-[21px] py-0.5 border-[#f02c56] text-[#f02c56] hover:bg-[#ffeef2] font-semibold rounded-md">Follow</button>
            </div>
            <div class="text-[15px] pb-0.5 break-words md:max-w-[400px] max-w-[300px]">
                This is some text
            </div>
            <div class="text-[14px] text-gray-500 pb-0.5">#fun #cool #SuperAwesome</div>
            <div class="text-[14px] pb-0.5 flex items-center font-semibold">
                <Icon name = "mdi:music"  size = "17" />
                <div class="px-1">original sound - Awesome</div>
                <Icon name = "mdi:heart" size="20"  />
            </div>

            <div class="mt-2.5 flex">
                <div class="relative min-h-[480px] max-h-[580px] max-w-[260px] flex items-center bg-black rounded-xl cursor-pointer">
                    <video  ref="video" loop :muted = "isMuted" class="rounded-xl object-cover mx-auto h-full" src="/example.mp4"></video>
                    <img src="@/assets/images/tiktok-logo-white.png" class="absolute right-2 bottom-14" width="90"  alt="">
                    <button class="absolute bottom-4 right-2" @click="event => isMuted = !isMuted">
                        <Icon :name="isMuted ?  'material-symbols:no-sound-rounded' : 'material-symbols:volume-up-rounded'" style="color: white;" size = "20"/>
                    </button>
                </div>
                <div class="relative mr-[75px]">
                    <div class="absolute bottom-0 pl-2">
                        <div class="pb-4 text-center">
                            <button class="rounded-full bg-gray-200 p-2 cursor-pointer w-[41px] h-[41px]">
                                <Icon name="mdi:heart" size="25" />
                            </button>
                            <span class="text-xs text-gray-800 font-semibold">34</span>
                        </div>
                        <div class="pb-4 text-center">
                            <button class="rounded-full bg-gray-200 p-2 cursor-pointer w-[41px] h-[41px]">
                                <Icon name="bx:bxs-message-rounded-dots" size="25" />
                            </button>
                            <span class="text-xs text-gray-800 font-semibold">34</span>
                        </div>
                        <div class="pb-4 text-center">
                            <button class="rounded-full bg-gray-200 p-2 cursor-pointer w-[41px] h-[41px]">
                                <Icon name="ri:share-forward-fill" size="25" />
                            </button>
                            <span class="text-xs text-gray-800 font-semibold">34</span>
                        </div>
                    </div>
                </div>
            </div>

         </div>
    </div>
</template>

<script setup>
    let video = ref(null)
    let isMuted = ref(true)
    onMounted(() => video.value.play())
</script>

