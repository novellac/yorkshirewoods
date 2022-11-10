<template>
  <main>
    <h1 class="mb-4">
      {{ article.title }}
    </h1>
    <p>Location: {{ article.location }}</p>
    <p>{{ article.description }}</p>

    <ul class="flex flex-wrap justify-center mt-6">
      <li
        class="p-1 basis-1/2 md:basis-1/3"
        v-for="image in article.galleryImages"
      >
        <img
          class="object-cover aspect-video"
          :src="image.src"
          :alt="image.alt"
        />
      </li>
    </ul>
  </main>
</template>

<script setup>
const slug = useRoute().params.slug.toString().replace(/,/g, '/')

const { data: article } = await useAsyncData(slug, () => {
  return queryContent(`events/${slug}`).findOne()
})

useHead({
  title: `${article.value.title}`,
})
</script>
