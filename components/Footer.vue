<template>
  <footer class="w-full dark:bg-gray-800 bg-gray-100 py-8 border-t-2 border-gray-200 dark:border-gray-700">
    <UContainer fluid>
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <!-- Logo and company info -->
        <div class="col-span-1 md:col-span-2">
          <router-link to="/">
            <ClientOnly>
            <NuxtImg :src="$colorMode.preference === 'light' ? 'logo.svg' : 'logo-darkmode.svg'"
                     alt="Moota Labs" class="w-1/3 mb-4" />
            </ClientOnly>
          </router-link>
        </div>

        <!-- Quick Links -->
        <div>
          <h3 class="font-bold mb-4 dark:text-white text-gray-800">Quick Links</h3>
          <ul>
            <li v-for="link in links[1]" :key="link.to" class="mb-2">
              <ULink :to="link.to" class="text-sm dark:text-gray-300 text-gray-600 hover:underline">
                {{ link.label }}
              </ULink>
            </li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div>
          <h3 class="font-bold mb-4 dark:text-white text-gray-800">Contact Us</h3>
          <p class="text-sm dark:text-gray-300 text-gray-600 mb-2">Email: <ULink to="mailto:info@mootalabs.com">info@mootalabs.com</ULink></p>
          <p class="text-sm dark:text-gray-300 text-gray-600">Address: KG 17 Ave, Kigali - Rwanda</p>
        </div>
      </div>

      <!-- Copyright and Social Links -->
      <div class="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <p class="text-sm dark:text-gray-300 text-gray-600 mb-4 md:mb-0">
            © {{ new Date().getFullYear() }} Moota Labs. All rights reserved.
          </p>
          <div class="flex space-x-4">
            <UButton icon="i-mdi-twitter" color="gray" variant="ghost" to="https://x.com/mootalabs/" target="_blank"/>
          </div>
        </div>
      </div>
    </UContainer>
  </footer>
</template>

<script setup lang="ts">
const links = [
  [], // empty array for the logo
  [
    {
      label: 'Home',
      to: '/'
    },
    {
      label: 'About Us',
      to: '/about'
    },
    {
      label: 'Blog',
      to: '/blog'
    },
  ]
]
</script>