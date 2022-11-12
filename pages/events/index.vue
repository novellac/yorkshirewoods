<script setup>
import { ref, computed } from 'vue-demi'
import { useNow, useDateFormat } from '@vueuse/core'

const formatted = useDateFormat(useNow(), 'dddd, MMMM D, YYYY HH:mm AA')

const ISODateNow = new Date(Date.now()).toISOString()

const futureEvents = await queryContent('events')
  .where({ eventend: { $gte: ISODateNow } })
  .find()

const pastEvents = await queryContent('events')
  .where({ eventend: { $lt: ISODateNow } })
  .find()

const formattedStartEnd = (rawEventBegin, rawEventEnd) => {
  const dateFormatFull = 'dddd, MMMM D, YYYY h:mm AA'
  const dateFormatTime = 'h:mm AA'
  const dateBegin = new Date(rawEventBegin)
  const dateEnd = new Date(rawEventEnd)

  // Ends on the same day, just show time end
  if (
    dateBegin.getFullYear() === dateEnd.getFullYear() &&
    dateBegin.getMonth() === dateEnd.getMonth() &&
    dateBegin.getDate() === dateEnd.getDate()
  ) {
    return `${useDateFormat(dateBegin, dateFormatFull).value} - ${
      useDateFormat(dateEnd, dateFormatTime).value
    }`
  }

  return `${useDateFormat(dateBegin, dateFormatFull).value} - ${
    useDateFormat(dateEnd, dateFormatFull).value
  }`
}
</script>

<template>
  <main>
    <EventsList title="Upcoming Events" eventTimeframe="future" />
    <EventsList
      title="Past Events"
      eventTimeframe="past"
      theme="silver"
      class="mt-12"
    />
  </main>
</template>
