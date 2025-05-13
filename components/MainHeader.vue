<template>
  <header class="pt-8 mb-8">
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

    <MainNavigation />

    <RegularMeetingBanner/>
    
    <DonationBanner />
  </header>
</template>
