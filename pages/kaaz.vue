<template>
  <UContainer class="py-12">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <!-- Left Content Section -->
      <div class="space-y-8">
        <h1 class="text-4xl font-bold">
          Quickly get a skilled worker.
        </h1>
        <p class="text-gray-600 leading-relaxed">
          Finding skilled workers for a one-time project used to be a daunting task. But not anymore. With Kaaz, you can find the perfect worker for the job, quickly and easily. We vet all of the registered members so you can be sure you're getting the best possible service. And our easy-to-use app makes it easy to find the right worker for the job. Plus, our workers are available for a wide range of projects, so you can find the perfect one for your needs.
        </p>
        <div class="grid grid-cols-2 gap-4 max-w-sm">
          <UButton
              icon="i-simple-icons-googleplay"
              color="gray"
              variant="solid"
              class="h-14"
          >
            <div class="flex flex-col items-start">
              <span class="text-xs">GET IT ON</span>
              <span class="text-sm font-medium">Google Play</span>
            </div>
          </UButton>
          <UButton
              icon="i-simple-icons-apple"
              color="gray"
              variant="solid"
              class="h-14"
          >
            <div class="flex flex-col items-start">
              <span class="text-xs">Download on the</span>
              <span class="text-sm font-medium">App Store</span>
            </div>
          </UButton>
        </div>
      </div>

      <!-- Right Image Section -->
      <ClientOnly>
        <NuxtImg src="/showcase_kaaz.jpg"/>
      </ClientOnly>
    </div>

    <UDivider class="mt-16"/>

    <KaazFeatureSection />
  </UContainer>
</template>

<script setup>

import KaazFeatureSection from '~/components/KaazFeatureSection.vue';

useHead({
  title: 'Kaaz App'
});
</script>