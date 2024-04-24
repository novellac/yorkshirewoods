<template>
  <main>
    <h1 class="mb-4">
      {{ article.title }}
    </h1>
    <p>
      <span class="font-bold text-green-700">Location:</span>
      {{ article.location }}
    </p>
    <p v-if="article.eventbegin && article.eventend">
      <span class="font-bold text-green-700">Date and time:</span>
      {{ formattedStartEnd(article.eventbegin, article.eventend) }}
    </p>
    <p>
      <span class="font-bold text-green-700">Description:</span>
      {{ article.description }}
    </p>

    <ul class="flex flex-wrap justify-center mt-6">
      <li
        class="p-1 basis-1/2 md:basis-1/3"
        v-for="image in article.galleryImages"
      >
        <img class="object-contain" :src="image.src" :alt="image.alt" />
      </li>
    </ul>
  </main>
</template>

<script setup>
import { useDateFormat } from '@vueuse/core';

const slug = useRoute().params.slug.toString().replace(/,/g, '/');

const { data: article } = await useAsyncData(slug, () => {
  return queryContent(`events/${slug}`).findOne();
});

useHead({
  title: `${article.value.title}`,
});

const formattedStartEnd = (rawEventBegin, rawEventEnd) => {
  const dateFormatFull = 'dddd, MMMM D, YYYY h:mmAA';
  const dateFormatTime = 'h:mmAA';
  const dateBegin = new Date(rawEventBegin);
  const dateEnd = new Date(rawEventEnd);

  // Ends on the same day, just show time end
  if (
    dateBegin.getFullYear() === dateEnd.getFullYear() &&
    dateBegin.getMonth() === dateEnd.getMonth() &&
    dateBegin.getDate() === dateEnd.getDate()
  ) {
    return `${useDateFormat(dateBegin, dateFormatFull).value} - ${
      useDateFormat(dateEnd, dateFormatTime).value
    }`;
  }

  return `${useDateFormat(dateBegin, dateFormatFull).value} - ${
    useDateFormat(dateEnd, dateFormatFull).value
  }`;
};
</script>
