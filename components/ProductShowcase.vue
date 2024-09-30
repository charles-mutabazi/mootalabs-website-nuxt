<template>
  <section class="py-16">
    <UContainer>
      <h2 class="text-4xl font-bold text-center mb-12">{{ title }}</h2>

      <div class="flex flex-col md:flex-row items-center gap-8">
        <!-- Product Image or SVG -->
        <div class="w-full md:w-1/2">
          <img v-if="imageType === 'image'" :src="imageSrc" :alt="productName" class="w-full h-auto"/>
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
      </div>
    </UContainer>
  </section>
</template>

<script setup lang="ts">
interface Props {
  title: string;
  productName: string;
  description: string;
  imageSrc: string;
  imageType: 'image' | 'svg';
  ctaText?: string;
}

const props = withDefaults(defineProps<Props>(), {
  imageType: 'image',
  ctaText: ''
});

defineEmits(['cta-click']);
</script>