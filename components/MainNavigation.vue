<template>
  <nav class="flex justify-center px-2 text-white bg-green-800">
    <ul class="flex flex-col flex-wrap gap-4 my-2 sm:gap-8 sm:flex-row">
      <li>
        <NuxtLink class="no-underline" to="/" ariaCurrentValue="page">
          Home
        </NuxtLink>
      </li>
      <li>
        <NuxtLink class="no-underline" to="/events" ariaCurrentValue="page">
          Events
        </NuxtLink>
      </li>
      <li>
        <NuxtLink class="no-underline" to="/resources" ariaCurrentValue="page">
          Resources
        </NuxtLink>
      </li>
      <li>
        <NuxtLink class="no-underline" to="/contact" ariaCurrentValue="page">
          Contact
        </NuxtLink>
      </li>
      <li>
        <a
          class="no-underline"
          href="/donate"
          ariaCurrentValue="page"
          >Donate
        </a>
      </li>
    </ul>
  </nav>
</template>
