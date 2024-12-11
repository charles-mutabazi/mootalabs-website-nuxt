<template>
  <UContainer class="min-h-screen">
    <!-- Hero Section -->
    <div class="bg-white dark:bg-gray-800 rounded-lg mt-4">
      <div class="container mx-auto px-4 py-20">
        <div class="max-w-3xl mx-auto text-center">
          <h1 class="text-5xl font-bold mb-6 text-gray-900 dark:text-white">About Moota Labs</h1>
          <p class="text-2xl text-gray-600 dark:text-gray-300 leading-relaxed">
            We're a dynamic tech company at the forefront of innovation, crafting cutting-edge solutions that redefine
            the digital experience.
          </p>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="container mx-auto px-4 py-12">
      <!-- Innovation Section -->
      <div class="grid lg:grid-cols-2 gap-16 items-center mb-24">
        <div class="space-y-6">
          <div class="inline-block bg-blue-50 dark:bg-blue-900/30 p-4 rounded-xl mb-4">
            <UIcon name="i-heroicons-light-bulb" class="w-8 h-8 text-blue-600 dark:text-blue-400"/>
          </div>
          <h2 class="text-3xl font-bold text-gray-900 dark:text-white">Innovation at Our Core</h2>
          <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
            Welcome to Moota Labs, where innovation meets excellence in the ever-evolving landscape of technology. As a
            dynamic tech company at the forefront of the industry, we specialize in crafting cutting-edge solutions that
            redefine the digital experience.
          </p>
        </div>
        <NuxtImg src="/innovation_vector.svg" alt="Innovation" class="rounded-lg w-full"/>
      </div>

      <!-- Services Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
        <UCard
            v-for="service in services"
            :key="service.title"
            class="p-6 hover:shadow-lg transition-shadow dark:bg-gray-800"
        >
          <div class="space-y-4">
            <div class="bg-gray-50 dark:bg-gray-700 p-4 rounded-xl w-16">
              <UIcon :name="service.icon" class="w-8 h-8 text-blue-600 dark:text-blue-400"/>
            </div>
            <h3 class="text-xl font-bold text-gray-900 dark:text-white">{{ service.title }}</h3>
            <p class="text-gray-600 dark:text-gray-300">{{ service.description }}</p>
          </div>
        </UCard>
      </div>

      <!-- Approach Section -->
      <div class="grid lg:grid-cols-2 gap-16 items-center mb-24">
        <NuxtImg src="/approach_vector.svg" alt="Innovation" class="rounded-lg w-full"/>
        <div class="order-1 lg:order-2 space-y-6">
          <div class="inline-block bg-green-50 dark:bg-green-900/30 p-4 rounded-xl mb-4">
            <UIcon name="i-heroicons-puzzle-piece" class="w-8 h-8 text-green-600 dark:text-green-400"/>
          </div>
          <h2 class="text-3xl font-bold text-gray-900 dark:text-white">Our Holistic Approach</h2>
          <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
            What sets us apart is not just our technical prowess, but our holistic approach to technology solutions. We
            believe in collaboration and partnership, working closely with our clients to understand their unique needs
            and challenges.
          </p>
        </div>
      </div>

      <!-- Excellence Banner -->
      <div class="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-12 text-white">
        <div class="max-w-3xl mx-auto text-center space-y-6">
          <UIcon name="i-heroicons-rocket-launch" class="w-12 h-12 mx-auto"/>
          <h2 class="text-3xl font-bold">Driven by Excellence</h2>
          <p class="text-lg opacity-90 leading-relaxed">
            Our journey is marked by a relentless pursuit of innovation, quality, and customer satisfaction. Join us in
            navigating the ever-expanding horizons of technology.
          </p>
          <UButton
              color="white"
              variant="solid"
              size="lg"
              class="mt-8"
          >
            Let's Work Together
          </UButton>
        </div>
      </div>
    </div>
  </UContainer>
</template>

<script setup>

useHead({
  title: 'About Us'
});

const services = [
  {
    icon: 'i-heroicons-code-bracket',
    title: 'Software Development',
    description: 'Creating seamless and user-centric mobile and web applications using the latest technologies.'
  },
  {
    icon: 'i-heroicons-cpu-chip',
    title: 'IoT Solutions',
    description: 'Bridging the digital and physical worlds with innovative IoT hardware products and solutions.'
  },
  {
    icon: 'i-heroicons-cog',
    title: 'Custom Solutions',
    description: 'Delivering bespoke, scalable, and future-ready solutions that empower businesses.'
  }
];
</script>