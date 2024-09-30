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

<template>
  <header>
    <div class="w-full dark:bg-gray-800 bg-gray-100">
      <UContainer fluid>
        <div class="flex justify-between items-center py-2">

          <router-link to="/">
            <NuxtImg :src="$colorMode.preference == 'light' ? 'logo.svg' : 'logo-darkmode.svg'"
                     alt="Moota Labs" class="w-1/3"/>
          </router-link>

          <UHorizontalNavigation :links="links"/>
        </div>
      </UContainer>
    </div>
  </header>
</template>

