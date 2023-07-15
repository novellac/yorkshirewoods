<template>
  <div class="flex flex-col min-h-screen">
    <MainHeader />

    <main class="flex-grow max-w-screen-lg mx-auto">
      <NuxtPage />
    </main>

    <MainFooter/>
  </div>
</template>

<script setup>
useHead({
  title: 'Yorkshire Woods Community Organization',
  // or, instead:
  // titleTemplate: (title) => `My App - ${title}`,
  meta: [
    {
      name: 'description',
      content:
        'Welcome to the neighborhood! Find events and information for the Yorkshire Woods Community Organization, Detroit, Michigan.',
    },
  ],
  script: [
    { src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' },
  ],
})
</script>

<style scoped>
nav li {
  @apply hover:underline;
}
</style>
