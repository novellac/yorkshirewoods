<template>
  <div>
    <h2>{{ title }}</h2>
    <CardList v-if="sortedEvents.length">
      <OneCard
        v-for="article in sortedEvents"
        :key="article._path"
        :theme="theme"
        class="max-w-sm"
      >
        <div class="p-4">
          <NuxtLink :to="article._path">
            <h3 class="mb-2 underline">{{ article.title }}</h3>
          </NuxtLink>
          <p v-if="article.eventbegin && article.eventend">
            {{ formattedStartEnd(article.eventbegin, article.eventend) }}
          </p>
          <p v-if="article.location">{{ article.location }}</p>
        </div>
      </OneCard>
    </CardList>
    <h3 v-else>Nothing yet ... stay tuned!</h3>
  </div>
</template>

<script setup>
import { useDateFormat } from '@vueuse/core';

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  eventTimeframe: {
    type: String,
    default: 'past',
    validator(c) {
      return ['past', 'future'].includes(c);
    },
  },
  theme: {
    type: String,
    default: 'green',
  },
});

const ISODateNow = new Date(Date.now()).toISOString();

const filteredEvents = await queryContent('events')
  .where({
    eventend: {
      [props.eventTimeframe === 'future' ? '$gte' : '$lt']: ISODateNow,
    },
  })
  .find();

const sortedEvents = computed(() => {
  if (!filteredEvents) return;

  if (props.eventTimeframe === 'past') {
    return filteredEvents.reverse();
  }

  return filteredEvents;
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
