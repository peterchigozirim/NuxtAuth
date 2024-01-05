<template>
  <div>
    <div class="grid grid-cols-12">
        <div class="col-span-12">
            <ul class="flex justify-center gap-2 mt-8">
                <template v-for="(link, i) in links" :key="i">
                
                <li v-if="link.url === null" v-html="link.label" class="w-14 h-11 text-center leading-[2.8] flex items-center justify-center truncate  text-[0.50rem] text-gray-900 transition-all duration-300 border rounded-md cursor-pointer border-gray-300 hover:bg-gray-300 focus:bg-gray-300 dark:border-gray-100/20 dark:text-gray-50 dark:hover:bg-gray-500/20">
                    
                </li>
                
                <li 
                    v-else
                    @click="goTo(link.url)"
                    v-html="link.label"
                    :class="link.active ? 'bg-emerald-500 border-transparent text-white' : 'border-gray-300 hover:bg-gray-300 text-gray-900  focus:bg-gray-300 dark:border-gray-100/20 dark:text-gray-50 dark:hover:bg-gray-500/20'" 
                    class="w-14 h-11 text-center border text-xs flex justify-center items-center rounded-md cursor-pointer  leading-[2.8]">
                    
                </li>
                
                </template>
            </ul>
        </div>
        <!--end col-->
    </div>
  <UtilityLoader v-if="loader" />
  </div>
</template>

<script setup>
import { useToast } from 'vue-toastification';


const toast = useToast()
  const props = defineProps({
    links: Array,
    classes: String,
    pageLimit: Number,
    totalRecords: Number,
  });

  const emit = defineEmits(["updateData"]);

  const loader = ref(false);
  
  const goTo = async (url) => {
    loader.value = true;
      const {data, error, pending} = await useAuth('/api'+url.split("api")[1]);
      emit("updateData", data.value);
      loader.value = false;
      if(error.value) {
        toast.error(error.value.message)
      }
  };
</script>

<style>

</style>