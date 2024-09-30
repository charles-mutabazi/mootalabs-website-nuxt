<template>
  <div class="flex flex-col min-h-screen">
  <HeaderNavbar/>
  <main class="flex-grow w-full">
    <slot/>
  </main>
    <Footer/>
  </div>
</template>