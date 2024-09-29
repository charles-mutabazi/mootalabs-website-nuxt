<script setup lang="ts">

const links = [
  [{
    avatar: {
      src: '~/assets/logo.svg',
    },
  }],
  [
    {
      label: 'Home',
      icon: 'i-heroicons-home',
      to: '/'
    },
    {
      label: 'About Us',
      icon: 'i-heroicons-chart-bar',
      to: '/about'
    },
    {
      label: 'Command Palette',
      icon: 'i-heroicons-command-line',
      to: '/components/command-palette'
    }
  ]
]
</script>

<template>
  <header>
    <div class="w-full dark:bg-gray-800 bg-gray-100">
      <UContainer fluid>
        <div class="flex justify-between items-center py-2">
          <UHorizontalNavigation :links="links"/>
        </div>
      </UContainer>
    </div>
  </header>
</template>

