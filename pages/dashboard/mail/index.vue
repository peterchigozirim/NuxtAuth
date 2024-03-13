<template>
  <div class="py-6 space-y-6 text-sm">
    <div class="text-2xl font-semibold">
      Send Mail
    </div>
    <div>
      <section class="max-w-4xl mx-auto space-y-6">
        
        <div>
          <VeeForm :validation-schema="schema" @submit="submit">
            <div class="space-y-4">
              <div class="w-full">
                <label class="block text-sm font-medium mb-1">Email Address:</label>
                <VeeField type="email" name="email" placeholder="Enter Email Address" class="border-gray-500 border w-full rounded-md h-9 bg-transparent outline-none focus:ring-1 focus:ring-emerald-500  px-2 text-sm" />
                <VeeErrorMessage name="email" class="text-xs text-red-500" />
              </div>
              
              <div class="w-full">
                <label class="block text-sm font-medium mb-1">Subject:</label>
                <VeeField type="text" name="subject" placeholder="Enter Subject" class="border-gray-500 border w-full rounded-md h-9 bg-transparent outline-none focus:ring-1 focus:ring-emerald-500 px-2 text-sm" />
                <VeeErrorMessage name="subject" class="text-xs text-red-500" />
              </div>

              <div class="w-full">
                <label class="block text-sm font-medium mb-1">Message:</label>
                <VeeField v-slot="{ field }" name="message">
                  <Editor
                    api-key="2o4sh2tynp0p3y5zgsq4fhh8pg04qahgdyf332oymdzbz77i"
                    :init="{
                        plugins: 'lists link image table code help wordcount',
                        height: 300,
                        toolbar_mode: 'sliding',
                        toolbar: 'formatselect | fontselect | bold italic strikethrough forecolor backcolor formatpainter | alignleft aligncenter alignright alignjustify | numlist bullist outdent indent | removeformat | code | addcomment | checklist | casechange',
                    }"
                    v-bind="field"
                    name="message"
                    class="block w-full px-2 rounded-md py-2 shadow-sm bg-black focus:bg-black ring-0 outline-none border-[#526484] border focus:border-[#526484] focus:outline-none focus:ring-1 focus:ring-[#526484] placeholder:text-gray-400 sm:text-sm sm:leading-6"
                  />
                </VeeField>
                
                <VeeErrorMessage name="message" class="text-xs text-red-500" />
              </div>
              <div>
                <button class="border border-emerald-500 text-emerald-500 hover:bg-emerald-500 p-2 rounded hover:text-white">Send Mail</button>
              </div>
            </div>
          </VeeForm>
        </div>
      </section>
    </div>
  </div>
  <UtilityLoader v-show="loader" />
</template>

<script setup>
  import Editor from '@tinymce/tinymce-vue'
  import { useToast } from 'vue-toastification'

  useHead({
    title: 'Send Email to client',
    meta: [
      { name: 'description', content: 'sending mail to clients' }
    ],
  })
  definePageMeta({
    layout: 'authlayout',
    // middleware: ['auth', 'watch-user']
  })
  const schema = {
    subject : 'required',
    email: 'required|email',
    message: 'required'
  }

  const loader = ref(false)
  const toast = useToast()

  const submit = async(values, {resetForm})=>{
    loader.value = true
    const { data, error, status} = await useAuth('/api/mail', {
      method: "POST",
      body: values,
      watch: false,
      headers: {
        "Content-Type": "application/json"
      },
    });
    if (error.value) {
      loader.value = false
      console.log(error.value);
      toast.error(error.value.message) 
    }else if (status.value =='success') {
      resetForm()
      loader.value = false
      return toast.success('Sent Successfully')
    }
    console.log(data.value);
    console.log(status.value);
  }
</script>

<style>

</style>