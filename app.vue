<template>
  <header class="my-8">
    <div class="pb-6">
      <NuxtLink to="/" class="text-2xl font-thin no-underline">
        <span class="flex items-end justify-center">
          <span>Yorkshire</span>
          <span>
            <img
              class="inline h-12 mb-3"
              src="~/assets/images/logo.png"
              alt=""
            />
          </span>
          <span>Woods</span>
        </span>
        <span class="block text-center">Community Organization</span>
      </NuxtLink>
    </div>
    <nav class="flex justify-center px-2 text-white bg-green-800 border">
      <ul class="flex gap-8 my-2">
        <li>
          <NuxtLink class="no-underline" to="/" ariaCurrentValue="page">Home</NuxtLink>
        </li>
        <li>
          <NuxtLink class="no-underline" to="/events" ariaCurrentValue="page">All events</NuxtLink>
        </li>
        <li>
          <NuxtLink class="no-underline" to="/contact" ariaCurrentValue="page">Contact us</NuxtLink>
        </li>
      </ul>
    </nav>
  </header>

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

<style scoped>
nav li {
  @apply hover:underline;
}
</style>
