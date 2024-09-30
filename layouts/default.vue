<template>
    <HeaderNavbar/>
    <UContainer fluid class="h-screen flex flex-col">
      <main class="flex-1 overflow-auto">
        <slot/>
      </main>
    </UContainer>
</template>