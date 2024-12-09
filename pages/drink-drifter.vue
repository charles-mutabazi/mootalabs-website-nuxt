<template>
  <UContainer class="min-h-screen my-8">
    <!-- Hero Section -->
      <div class="container mx-auto px-4 py-24">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div class="space-y-8">
            <h1 class="text-5xl font-bold leading-tight">
              The Future of Vending is Here
            </h1>
            <p class="text-xl text-blue-100">
              Meet Drifter, Rwanda's first smart cashless vending machine platform designed for local needs.
            </p>
          </div>
          <div class="relative">
            <img
                src="/drink_drifter_product.jpg"
                alt="Drifter Vending Machine"
                class="w-full h-auto rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </div>

    <!-- Features Grid -->
    <div class="container mx-auto px-4 py-24">
      <div class="text-center mb-16">
        <h2 class="text-3xl font-bold mb-4 dark:text-white">Smart Features for Modern Needs</h2>
        <p class="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Experience the convenience of modern vending with our cutting-edge features designed for both customers and operators.
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <UCard v-for="feature in features" :key="feature.title" class="p-6">
          <div class="space-y-4">
            <div class="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-xl w-16">
              <UIcon :name="feature.icon" class="w-8 h-8 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 class="text-xl font-bold dark:text-white">{{ feature.title }}</h3>
            <p class="text-gray-600 dark:text-gray-300">{{ feature.description }}</p>
          </div>
        </UCard>
      </div>
    </div>

    <!-- How It Works -->
    <div class="bg-white dark:bg-gray-800 rounded-2xl">
      <div class="container mx-auto px-4 py-24">
        <div class="text-center mb-16">
          <h2 class="text-3xl font-bold mb-4 dark:text-white">How It Works</h2>
          <p class="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Simple, secure, and convenient - get your refreshments in three easy steps.
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <div v-for="step in steps" :key="step.title"
               class="text-center space-y-4">
            <div class="bg-blue-50 dark:bg-blue-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
              <UIcon :name="step.icon" class="w-8 h-8 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 class="text-xl font-bold dark:text-white">{{ step.title }}</h3>
            <p class="text-gray-600 dark:text-gray-300">{{ step.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </UContainer>
</template>

<script setup>
const features = [
  {
    icon: 'i-heroicons-credit-card',
    title: 'Cashless Payments',
    description: 'Integrated mobile money and NFC card payment options for seamless transactions.'
  },
  {
    icon: 'i-heroicons-signal',
    title: 'Remote Monitoring',
    description: 'Real-time inventory tracking and machine health monitoring through our cloud platform.'
  },
  {
    icon: 'i-heroicons-chart-bar',
    title: 'Analytics Dashboard',
    description: 'Comprehensive sales data and insights to optimize your vending operations.'
  },
  {
    icon: 'i-heroicons-shield-check',
    title: 'Secure Operations',
    description: 'Advanced security features protect both the machine and transaction data.'
  },
  {
    icon: 'i-heroicons-cog-6-tooth',
    title: 'Easy Maintenance',
    description: 'Modular design for simple servicing and product restocking.'
  },
  {
    icon: 'i-heroicons-device-phone-mobile',
    title: 'Mobile App',
    description: 'Manage your vending machine fleet from anywhere using our mobile application.'
  }
]

const steps = [
  {
    icon: 'i-heroicons-qr-code',
    title: 'Scan & Select',
    description: 'Scan the QR code or use NFC to connect to the machine and browse available products.'
  },
  {
    icon: 'i-heroicons-banknotes',
    title: 'Quick Payment',
    description: 'Pay securely using mobile money or your NFC-enabled card.'
  },
  {
    icon: 'i-heroicons-gift',
    title: 'Collect & Enjoy',
    description: 'Collect your product from the dispensing tray and enjoy!'
  }
]
</script>