<template>
  <UContainer>
    <ClientOnly>
    <NuxtImg :src="$colorMode.preference == 'light' ? '/moota_labs_logo_hero.png' : '/moota_labs_logo_hero_dark.png'"/>
    </ClientOnly>
  </UContainer>
  <div class="mt-10 dark:bg-gray-800 bg-gray-100 pt-8">
    <UContainer>
      <div class="text-center">
      <h2 class="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Our Products</h2>

      <p class="text-2xl mb-4 text-gray-500 dark:text-white font-italic">
        We are always working on some interesting projects at Moota Labs, and while innovation never sleeps, we're
        particularly excited to share a glimpse of our current initiatives. While there are several exciting
        projects in our pipeline that we're not quite ready to reveal, the projects below showcase our dedication to combining
        cutting-edge technology with practical solutions that serve our community. Stay tuned for more innovations that
        will continue to improve the technological lifestyle in East Africa.
      </p>

      </div>


    <ProductShowcase
        productName="Drink Drifter Vending Machine"
        description="Drink Drifter is Rwanda's first locally-manufactured smart vending machine, developed by MOOTA LABS to provide 24/7 automated retail access. The cashless system supports both mobile money and NFC card payments, catering to Rwanda's high mobile money adoption rate. Featuring remote inventory management and targeting locations like universities, businesses, and public spaces, Drifter aims to eliminate traditional shopping constraints. The machine is fully manufactured in Rwanda, creating local jobs while modernizing retail convenience. With a serviceable market of $27.16M, Drifter positions itself as a revolutionary solution in the automated retail space."
        imageSrc="vending_machine_illustration.png"
        imageType="image"
        imagePosition="left"
        ctaText="Read More"
        @cta-click="handleCtaClick('drink-drifter')"
    />

    <ProductShowcase
        productName="Kaaz Mobile App"
        description="Finding skilled workers for a one-time project used to be a daunting task. But not anymore. With Kaaz, you can find the perfect worker for the job, quickly and easily. We vet all of the registered members so you can be sure you're getting the best possible service. And our easy-to-use app makes it easy to find the right worker for the job. Plus, our workers are available for a wide range of projects, so you can find the perfect one for your needs."
        imageSrc="showcase_kaaz.jpg"
        imagePosition="right"
        imageType="image"
        ctaText="Read More"
        @cta-click="handleCtaClick('kaaz')"
    />

    </UContainer>
  </div>
</template>

<script setup lang="ts">
import {navigateTo} from "#app";

useHead({
  title: 'Home'
})
const handleCtaClick = (myRoute: string) => {
  // Handle the CTA button click
  navigateTo({
    name: myRoute
  })
}
</script>