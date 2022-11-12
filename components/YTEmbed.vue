<template>
  <iframe
    :src="`https://www.youtube-nocookie.com/embed/${videoId}`"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
    class="w-full max-w-sm aspect-video"
  ></iframe>
</template>

<script setup>
defineProps({
  videoId: {
    type: String,
    required: true,
  },
})
</script>
