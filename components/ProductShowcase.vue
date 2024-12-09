<template>
  <section class="py-16">
    <div>
      <div class="flex flex-col md:flex-row items-center gap-8">
        <!-- Product Image or SVG if imagePosition is 'left' -->
        <div class="w-full md:w-1/2 dark:bg-gray-700 rounded-2xl flex justify-center" v-if="imagePosition === 'left'">
          <NuxtImg v-if="imageType === 'image'" :src="imageSrc" :alt="productName" class="" height="600"/>
          <div v-else-if="imageType === 'svg'" v-html="imageSrc" class="w-full h-auto"></div>
        </div>

        <!-- Product Description -->
        <div class="w-full md:w-1/2">
          <h3 class="text-3xl font-bold mb-4">{{ productName }}</h3>
          <p class="text-lg mb-6">
            {{ description }}
          </p>
          <UButton
              v-if="ctaText"
              color="black"
              :label="ctaText"
              trailing-icon="i-heroicons-arrow-right"
              class="font-semibold"
              @click="$emit('cta-click')"
          />
        </div>

        <!-- Product Image or SVG if imagePosition is 'right' -->
        <div class="w-full md:w-1/2 dark:bg-gray-700 rounded-2xl flex justify-centerr" v-if="imagePosition === 'right'">
          <NuxtImg v-if="imageType === 'image'" :src="imageSrc" :alt="productName" class="" height="600"/>
          <div v-else-if="imageType === 'svg'" v-html="imageSrc" class="w-full h-auto"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Props {
  productName: string;
  description: string;
  imageSrc: string;
  imagePosition: 'left' | 'right';
  imageType: 'image' | 'svg';
  ctaText?: string;
}

const props = withDefaults(defineProps<Props>(), {
  imageType: 'image',
  ctaText: ''
});

defineEmits(['cta-click']);
</script>