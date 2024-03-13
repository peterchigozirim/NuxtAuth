<template>
  <div>
    <UtilityLoader v-if="loader" />
    <div v-else class="main-content">
      <div class="py-10 space-y-6 text-sm">
        <section class="">
            <div class="container mx-auto max-w-5xl w-11/12 md:w-auto">
              <div>
                <button @click="addModal = true" class="border-emerald-500 border rounded h-9 w-28 flex items-center text-emerald-500 px-2 hover:text-white hover:bg-emerald-500 dark:hover:bg-emerald-700"> <icon name="material-symbols:add" class="mr-1" />Add User</button>
              </div>
            </div>
        </section>
        <!-- Start grid -->
        <section class="">
            <div class="container mx-auto max-w-5xl w-11/12 md:w-auto space-y-6">
                
                <div class="space-y-6">
                    <div v-if="users.length < 1" class="p-4 border border-gray-100/50 rounded-md relative hover:-translate-y-1.5 transition-all duration-500 ease-in-out border-emerald-500 hover:shadow-md hover:shadow-gray-100/30 dark:border-neutral-600 dark:hover:shadow-neutral-900">
                        <div class="flex justify-between items-center ">
                            <div class="">
                                <div class="mt-3 mt-lg-0">
                                    <p class="mb-2 text-gray-500 text-muted dark:text-gray-300"> No Application</p>
                                </div>
                            </div><!--end col-->
                        </div><!--end row-->
                    </div>
                    <div v-else v-for="(user, i) in users" :key="i" class="md:p-4 p-2 py-4 text-sm border  rounded-md relative hover:-translate-y-1.5 transition-all duration-500 ease-in-out border-emerald-500 hover:shadow-md hover:shadow-gray-100/30 dark:border-neutral-600 dark:hover:shadow-neutral-900">
                        <div class="flex justify-between items-center flex-wrap space-y-5  md:space-y-0">
                            <div class="">
                                <div class=" space-y-1">
                                    <p class="text-gray-800 text-muted dark:text-gray-300"><icon name="ic:sharp-person-3" class="text-2xl"></icon> User: {{ user.name }} </p>
                                    <p class="text-gray-800 text-muted dark:text-gray-300"><icon name="material-symbols:alternate-email" class="text-2xl"></icon> Email: {{ user.email }} </p>
                                    <p class="text-gray-800 text-muted dark:text-gray-300"><icon name="material-symbols:nest-clock-farsight-analog-outline-rounded" class="text-lg"/>  {{ formattedDate(user.created_at) }}</p>
                                </div>
                            </div><!--end col-->

                            <div class="">
                                <div class="flex flex-wrap gap-2">
                                    <button @click="changeView(user)" class="px-2 py-1 text-sm font-medium text-cyan-500 hover:text-white rounded bg-cyan-500/20 dark:hover:bg-cyan-500/40 hover:bg-cyan-800/80">Change Password</button>
                                    <button @click="deleteUser(user.id)" class="px-2 py-1 text-sm font-medium rounded bg-red-500/20 dark:hover:bg-red-500/70 hover:bg-red-500 text-red-500 hover:text-white">Delete</button>
                                </div>
                            </div><!--end col-->
                        </div><!--end row-->
                    </div>
                </div>
                <!-- pagination -->
                <UtilityPagination
                    :links="pages.links"
                    :totalRecords="pages.total"
                    :page-limit="pages.per_page"
                    @updateData="updateData"
                  />
                <!-- end -->
            </div>
        </section>
        <!-- End grid -->
      </div>
    </div> 
    <UtilityModal :show="showModal" @close="showModal = false" :maxWidth="'md'">
      <div class="bg-emerald-500 dark:bg-emerald-700 text-white h-10 flex items-center px-2 font-semibold">
        {{ userDetail.name }}
      </div>
      <div class="px-4 pb-4 text-sm">
        <VeeForm :validation-schema="changeSchema" @submit="update">
          <div class="space-y-4">
            <VeeField type="text" name="id" class="hidden" v-model="id" />
            
            <div class="w-full">
              <label class="block text-sm font-medium mb-1">New Password:</label>
              <div class="relative">
                <VeeField :type="showPass? 'text' : 'password'" name="password" placeholder="Enter Password" class="border-gray-500 border w-full rounded-md h-9 bg-transparent outline-none focus:ring-1 focus:ring-emerald-500 px-2 pr-3 text-sm" />
                <div @click="showPass = !showPass" class="absolute top-2 right-2">
                  <Icon v-if="showPass" name="ri:eye-fill" />
                  <Icon v-else name="ri:eye-off-fill" />
                </div>
              </div>
              
              <VeeErrorMessage name="password" class="text-xs text-red-500" />
            </div>

            <div class="w-full">
              <label class="block text-sm font-medium mb-1">Confirm Password:</label>
              <div class="relative">
                <VeeField :type="conPass? 'text' : 'password'" name="confirm_password" placeholder="Confirm Password" class="border-gray-500 border w-full rounded-md h-9 bg-transparent outline-none focus:ring-1 focus:ring-emerald-500 px-2 pr-3 text-sm" />
                <div @click="conPass = !conPass" class="absolute top-2 right-2">
                  <Icon v-if="conPass" name="ri:eye-fill" />
                  <Icon v-else name="ri:eye-off-fill" />
                </div>
              </div>
              
              <VeeErrorMessage name="confirm_password" class="text-xs text-red-500" />
            </div>

            <div class="flex justify-center items-center gap-2">
              <div class="w-full">
                <button class="border border-emerald-500 text-emerald-500 hover:bg-emerald-500 p-2 block w-full rounded hover:text-white">change Password</button>
              </div>
              <div class="w-full">
                <button @click="showModal = false" type="button" class="flex border w-full justify-center p-2 text-sm border-rose-500 text-rose-500 hover:bg-rose-500 rounded hover:text-white">Close</button>
              </div>
            </div>
          </div>
        </VeeForm>
      </div>
    </UtilityModal>
    <UtilityModal :show="addModal" @close="addModal = false" :maxWidth="'md'">
      <div class="bg-emerald-500 dark:bg-emerald-700 text-white h-10 flex items-center px-2 font-semibold">
        Add User
      </div>
      <div class="px-4 py-4 space-y-3 text-sm">
        <VeeForm :validation-schema="schema" @submit="submit">
          <div class="space-y-4">
            
            <div class="w-full">
              <label class="block text-sm font-medium mb-1">Full Name:</label>
              <VeeField type="text" name="name" placeholder="Enter Full Name" class="border-gray-500 border w-full rounded-md h-9 bg-transparent outline-none focus:ring-1 focus:ring-emerald-500 px-2 text-sm" />
              <VeeErrorMessage name="name" class="text-xs text-red-500" />
            </div>

            <div class="w-full">
              <label class="block text-sm font-medium mb-1">Email Address:</label>
              <VeeField type="email" name="email" placeholder="Enter Email Address" class="border-gray-500 border w-full rounded-md h-9 bg-transparent outline-none focus:ring-1 focus:ring-emerald-500  px-2 text-sm" />
              <VeeErrorMessage name="email" class="text-xs text-red-500" />
            </div>
            
            <div class="w-full">
              <label class="block text-sm font-medium mb-1">Password:</label>
              <div class="relative">
                <VeeField :type="showPass? 'text' : 'password'" name="password" placeholder="Enter Password" class="border-gray-500 border w-full rounded-md h-9 bg-transparent outline-none focus:ring-1 focus:ring-emerald-500 px-2 pr-3 text-sm" />
                <div @click="showPass = !showPass" class="absolute top-2 right-2">
                  <Icon v-if="showPass" name="ri:eye-fill" />
                  <Icon v-else name="ri:eye-off-fill" />
                </div>
              </div>
              
              <VeeErrorMessage name="password" class="text-xs text-red-500" />
            </div>

            <div class="flex justify-center items-center gap-2">
              <div class="w-full">
                <button class="border border-emerald-500 text-emerald-500 hover:bg-emerald-500 p-2 block w-full rounded hover:text-white">Create</button>
              </div>
              <div class="w-full">
                <button @click="addModal = false" type="button" class="flex border w-full justify-center p-2 text-sm border-rose-500 text-rose-500 hover:bg-rose-500 rounded hover:text-white">Close</button>
              </div>
            </div>
          </div>
        </VeeForm>
      </div>
    </UtilityModal>
  </div>
</template>

<script setup>
import dayjs from 'dayjs'
import { useToast } from 'vue-toastification'
  
  definePageMeta({
    layout: 'authlayout',
    // middleware: ['auth', 'watch-user']
  })

useHead({
  title: 'Manage User',
  meta: [
    { name: 'description', content: 'Manage User Page.' }
  ],
})
const showModal = ref(false)
const showPass = ref(false)
const conPass = ref(false)
const addModal = ref(false)
const users = ref([])
const pages = ref({})
const id = ref(null)
const stores = mailStore()
onBeforeMount(() => {
  fetch()
})
const updateData = (detail) => {
  pages.value =  detail;
  users.value = detail.data
};
const userDetail = ref({})
const changeView = (user)=>{
  userDetail.value = user
  id.value = user.id
  showModal.value = true
}

useHead({
    title: 'Manage User',
    meta: [
      { name: 'description', content: 'Manage Users.' }
    ],
  })

const schema = {
    name : 'required',
    email: 'required|email',
    password: 'required|min:8'
  }

  const changeSchema = {
    password: 'required|min:8',
    confirm_password: 'required|confirmed:@password'
  }

  const loader = ref(false)
  const toast = useToast()

  const submit = async(values, {resetForm})=>{
    addModal.value = false
    loader.value = true
    const { data, error, status} = await useAuth('/api/manage-user', {
      method: "POST",
      body: values,
      watch: false,
    });
    if (error.value) {
      addModal.value = true
      loader.value = false
      console.log(error.value);
      toast.error(error.value.message) 
    }else if (status.value =='success') {
      resetForm()
      loader.value = false
      fetch()
      return toast.success(data.value.message)
    }
  }

  const fetch = async()=>{
    loader.value = true
    const {data, error, status, pending } = await useAuth('/api/manage-user', {
      method: "GET",
      watch: false,
    });
    if (error.value) {
      loader.value = false
      toast.error(error.value.message) 
    }else if (status.value =='success') {
      loader.value = false
      users.value = data.value.data;
      pages.value = data.value
      return
    }

  }

  const update = async (values, {resetForm})=>{
    showModal.value = false
    loader.value = true
    const { data, error, status, pending} = await useAuth('/api/manage-user/'+id.value, {
      method: "PUT",
      body: values,
      watch: false,
    });
    
    loader.value = pending.value
    if (error.value) {
      showModal.value = true
      console.log(error.value);
      toast.error(error.value.message) 
    }else if (status.value =='success') {
      resetForm()
      fetch()
      return toast.success(data.value.message)
    }
  }

  const deleteUser = async (form)=>{
    if (confirm('Are you sure?')) {
      loader.value = true
      const { data, error, status} = await useAuth('/api/user/' + form, {
        method: "DELETE",
      });
      if (error.value) {
        loader.value = false
        console.log(error.value);
        toast.error(error.value.message) 
      }else if (status.value =='success') {
        loader.value = false
        fetch()
        return toast.success(data.value.message)
      }
    }
  }

const formattedDate = (date)=> {return dayjs(date).format('DD MMM YYYY')}

</script>

<style>

</style>