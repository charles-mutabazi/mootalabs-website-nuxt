<template>
  <UContainer>
    <NuxtImg :src="$colorMode.preference == 'light' ? '/moota_labs_logo_hero.png' : '/moota_labs_logo_hero_dark.png'"/>
  </UContainer>
  <div class="mt-10 dark:bg-gray-800 bg-gray-100">

    <ProductShowcase
        title="Our Products"
        productName="Kaaz Mobile App"
        description="Finding skilled workers for a one-time project used to be a daunting task. But not anymore. With Kaaz, you can find the perfect worker for the job, quickly and easily. We vet all of the registered members so you can be sure you're getting the best possible service. And our easy-to-use app makes it easy to find the right worker for the job. Plus, our workers are available for a wide range of projects, so you can find the perfect one for your needs."
        imageSrc="showcase_kaaz.jpg"
        imageType="image"
        ctaText="Read More"
        @cta-click="handleCtaClick"
    />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Home'
})
const handleCtaClick = () => {
  // Handle the CTA button click
  console.log('CTA clicked')
}
</script>