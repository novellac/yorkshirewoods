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
          href="https://www.zeffy.com/en-US/fundraising/296cf943-b89e-4ff8-859b-952cc4ddf186"
          ariaCurrentValue="page"
          >Donate
        </a>
      </li>
    </ul>
  </nav>
</template>
