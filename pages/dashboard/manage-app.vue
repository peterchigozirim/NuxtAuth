<template>
  <div class="py-6 space-y-6">
    <div class="text-2xl font-semibold">
      App Settings
    </div>
    <div>
      <div class="grid grid-cols-2 gap-4">
        <div class="w-full h-auto relative">
          <div grid="border border-dash border-black">
            <div
              ref="imageDropZoneRef"
              class="flex flex-col w-full min-h-200px h-auto bg-gray-400/10 justify-center items-center mt-6 rounded"
            >
              <div font-bold mb2>
                Image DropZone
              </div>
              <div>
                isOverDropZone:
                <BooleanDisplay :value="isOverImageDropZone" />
              </div>
              <div class="flex flex-wrap justify-center items-center">
                <div v-for="(file, index) in imageFilesData" :key="index" class="w-200px bg-black-200/10 ma-2 pa-6">
                  <p>Name: {{ file.name }}</p>
                  <p>Size: {{ file.size }}</p>
                  <p>Type: {{ file.type }}</p>
                  <p>Last modified: {{ file.lastModified }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { useDropZone, useEventListener } from '@vueuse/core'
  onBeforeMount(async()=>{
    store.handleFetchUser()
  })
  definePageMeta({
    layout: 'authlayout',
    middleware: ['auth']
  })


  const filesData = ref([])
  const imageFilesData = ref([])

  function onDrop(files) {
    filesData.value = []
    if (files) {
      filesData.value = files.map(file => ({
        name: file.name,
        size: file.size,
        type: file.type,
        lastModified: file.lastModified,
      }))
    }
  }

  function onImageDrop(files) {
    imageFilesData.value = []
    if (files) {
      imageFilesData.value = files.map(file => ({
        name: file.name,
        size: file.size,
        type: file.type,
        lastModified: file.lastModified,
      }))
    }
  }

  const dropZoneRef = ref()
  const imageDropZoneRef = ref()
  const pngRef = ref()

  const { isOverDropZone } = useDropZone(dropZoneRef, onDrop)

  useEventListener(pngRef, 'dragstart', (event) => {
    event.dataTransfer?.setData('image/png', '/vue.png')
  })

  const { isOverDropZone: isOverImageDropZone } = useDropZone(imageDropZoneRef, { dataTypes: ['image/png'], onDrop: onImageDrop })

</script>
