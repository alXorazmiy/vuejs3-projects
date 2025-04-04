<template>
    <UploadLayout>
        <div class="w-full mt-[80px] mb-[40px] bg-white shadow-lg rounded-md py-6 md:px-10 px-4" >
            <div>
                <div class="font-semibold text-[23px] ">Upload video</div>
                <div class="text-gray-400 mt-1">Post a video to your account</div>
            </div>
            <div class="mt-8 md:flex gap-6">
                <label v-if="false"  for="fileInput" class="md:mx-0 mx-auto mt-4 mb-6 flex flex-col items-center justify-center w-full max-w-[260px] h-[470px] text-center p-3 border-2 border-dashed border-gray-300 rounded-lg hover:bg-gray-100 cursor-pointer"  >
                    <Icon name = "majesticons:cloud-upload" size="40" color = "#b3b3b1"  />
                    <div class="mt-4 text-[17px] "  >Select video to upload</div>
                    <div class="mt-1.5 text-gray-500 text-[13px] ">Or drag and drop a file</div>
                    <div class="mt-12 text-gray-400 text-sm">MP4</div>
                    <div class="mt-2 text-gray-500 text-[13px] ">Up to 30 minutes</div>
                    <div class="mt-2 text-gray-500 text-[13px] ">Less than 2 GB</div>
                    <div class="px-2 py-1 5 mt-8 text-white rounded-sm text-[15px] bg-[#f02c56] w-[80%]">Select file</div>
                    <input type="file" ref="file" id="fileInput" hidden accept=".mp4">
                </label>
                <div v-else class = "md:mx-0 mx-auto mt-4 md:mb-12 mb-16 flex items-center justify-center w-full max-w-[260px] h-[540px] p-3 rounded-2xl cursor-pointer relative"  >
                   
                    <video src="/example.mp4"  autoplay loop :muted = "isMuted" class = "absolute rounded-xl object-cover z-10  w-full h-full" ></video>
                    <button class="absolute z-20 bottom-6 right-2" @click="event => isMuted = !isMuted">
                        <Icon :name="isMuted ?  'material-symbols:no-sound-rounded' : 'material-symbols:volume-up-rounded'" style="color: white;" size = "20"/>
                    </button>
                    <div class="absolute -bottom-12 flex items-center justify-between z-50 rounded-xl border w-full p-2 border-gray-300">
                        <div class="flex items-center truncate">
                            <Icon name = "clarity:success-standard-line" size="16" class = "min-w-[16px]" />
                            <div class="pl-1 truncate text-ellipsis text-[11px] ">Video name</div>
                        </div>
                        <button class="ml-2 font-semibold text-[11px] ">
                            Change
                        </button>
                    </div>

                </div>

                <div class="mt-4 mb-6">
                    <div class="flex py-4 px-6 bg-[#f8f8f8] ">
                        <div class="">
                            <Icon name = "mdi:box-cutter-off" class = "mr-4" size="20"  />
                        </div>
                        <div>
                            <div class="text-semibold mb-1.5  text-[15px]">Divide videos and edit</div>
                            <div class="text-semibold mb-1.5  text-[13px] text-gray-400">
                                You can quickly divide videos into  multiple parts, remove  redundant parts and turn landscape videos  into portrait videos
                            </div>
                        </div>
                        <div class="flex justify-end w-full h-full text-center my-auto max-w-[130px] ">
                            <button class="px-8 py-1.5 text-white rounded-sm text-[15px] bg-[#f02c56] ">Edit</button>
                        </div>
                    </div>
                    <div class="mt-5">
                        <div class="flex items-center justify-between">
                            <div class="mb-1 text-[15px] ">Caption</div>
                            <div class="text-gray-400 text-[12px]">0/150</div>
                        </div>
                    </div>
                </div>

            </div>
        </div>


    </UploadLayout>
</template>

<script setup>
    let isMuted = ref(true)
    import UploadLayout from '@/layouts/UploadLayout.vue'
</script>

