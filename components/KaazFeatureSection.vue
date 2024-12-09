<template>
  <section class="container mx-auto px-4 py-16">
    <!-- Header Section -->
    <div class="text-center mb-16 max-w-2xl mx-auto">
      <h2 class="text-3xl font-bold mb-4">
        Now is the time to know what Kaaz offers.
      </h2>
      <p class="text-gray-600">
        With Kaaz you have access to a pool of skilled workers, all over your country. Please ahead and try it out.
      </p>
    </div>

    <!-- Features Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <UCard v-for="feature in features" :key="feature.title" class="p-6 u-card">
        <div class="space-y-4">
          <div class="w-12 h-12 mb-6">
            <UIcon :name="feature.icon" class="w-full h-full text-gray-700" />
          </div>
          <h3 class="text-xl font-bold">{{ feature.title }}</h3>
          <p class="text-gray-600">{{ feature.description }}</p>
        </div>
      </UCard>
    </div>
  </section>
</template>

<script setup>
const features = [
  {
    icon: 'i-heroicons-user-group-solid',
    title: 'Find any worker',
    description: 'Whether you are looking for a gardener, private driver or someone to babysit your kids for few hours, you can find them on Kaaz.'
  },
  {
    icon: 'i-heroicons-clipboard-document-list',
    title: 'Post a quick job',
    description: 'You might want to describe a quick job you have to others with a specific budget and set of skills. We got you as well.'
  },
  {
    icon: 'i-heroicons-user-circle',
    title: 'Get worker contacts fast',
    description: 'Get the contacts of the worker you are pleased based on their rating score with just a tap.'
  },
  {
    icon: 'i-heroicons-briefcase',
    title: 'Anyone can be a Kaaz Worker',
    description: 'You can also opt-in to become a Kaaz worker and start getting gigs.'
  },
  {
    icon: 'i-heroicons-shield-check',
    title: 'Your personal data is secured',
    description: 'Cutting-edge security technology and privacy policies set in place keep your personal data safe with us.'
  },
  {
    icon: 'i-heroicons-chat-bubble-left-right',
    title: 'User generated data',
    description: 'Read or leave reviews about the worker you are about to hire. Get to know the worker before you hire them.'
  }
]
</script>

<style scoped>
.u-card {
  @apply transition-transform hover:scale-105;
}
</style>