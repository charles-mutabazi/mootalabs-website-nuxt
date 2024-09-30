<script setup>
useHead({
  title: 'Blog'
});
</script>


<template>
  <div class="flex-grow flex items-center justify-center py-12">
    <UContainer>
      <div class="text-center">
        <UIcon name="i-heroicons-pencil-square"
               class="w-12 h-12 mr-6 mb-6 text-blue-600 dark:text-blue-400 flex-shrink-0"/>
        <h1 class="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
          Coming Soon: Moota Labs Blog
        </h1>
        <p class="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
          Brilliant ideas are brewing. Our blogs will percolate here shortly!
        </p>
        <div class="inline-flex items-center text-blue-600 dark:text-blue-400">
          <UIcon name="i-heroicons-clock" class="w-6 h-6 mr-2"/>
          <span class="text-lg font-semibold">Come back soon for fresh insights!</span>
        </div>
      </div>
    </UContainer>
  </div>
</template>