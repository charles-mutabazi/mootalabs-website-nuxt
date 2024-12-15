import {
  type Analytics,
  initializeAnalytics,
  isSupported,
} from 'firebase/analytics'

export default defineNuxtPlugin(async () => {
  // Check if we're in production
  const isDevelopment = process.env.NODE_ENV !== 'production'

  let analytics: Analytics | null = null

  // Only initialize analytics in production
  if (!isDevelopment) {
    const firebaseApp = useFirebaseApp()

    if (await isSupported()) {
      analytics = initializeAnalytics(firebaseApp)
      console.log('Analytics initialized in production')
    } else {
      console.log('Analytics not supported')
    }
  } else {
    console.log('Analytics disabled in development')
  }

  return {
    provide: {
      analytics,
    },
  }
})