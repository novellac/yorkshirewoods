<template>
  <h1 class="pb-4 m-4 border-b border-b-grey-300">
    <span class="flex items-end justify-center">
      <span>Yorkshire</span>
      <span>
        <img class="inline h-12 mb-3" src="~/assets/images/logo.png" alt="" />
      </span>
      <span>Woods</span>
    </span>
    <span class="block text-center">Community Organization</span>
  </h1>
  <div class="max-w-screen-lg mx-auto">
    <NuxtPage />
  </div>
  <footer class="p-4 mt-12 border-t border-t-gray-300">
    <p>© 2022 Yorkshire Woods Community Organization</p>
  </footer>
</template>

<script setup>
useHead({
  title: 'Yorkshire Woods Community Organization',
  // or, instead:
  // titleTemplate: (title) => `My App - ${title}`,
  meta: [
    {
      name: 'description',
      content: 'Yorkshire Woods neighborhood, Detroit, Michigan.',
    },
  ],
  script: [
    { src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' },
  ],
})
</script>
