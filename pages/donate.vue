<template>
  <article class="px-6">
    <div class="mb-8">
      <h1>Suggested donation tiers</h1>
      <p>
        Welcome! Below are suggested monthly and annual donation rates.
        While we appreciate all donations, your monthly and annual donations help Yorkshire Woods to better plan for
        future projects and neighborhod improvements.
      </p>
    </div>

    <ul class="flex gap-3 flex-wrap mx-auto justify-center">
      <li v-for="(tier, index) in tiers" :key="index"
        class="flex flex-col gap-1 w-[16rem] grow-0 shrink-0 items-stretch">
        <h2 class="text-white bg-green-700 p-4 grow text-center shrink-0">{{ tier.name }}</h2>
        <p class="text-white bg-green-700 p-4 min-h-[220px] text-center flex flex-col justify-between">
          <span class="block">
            ${{ tier.annual }} Annually<br>
            or<br>
            ${{ tier.monthly }} per month
          </span>

          <a class="block bottom-0 font-sans no-underline text-xl bg-green-800 py-1 hover:shadow hover:shadow-white/50"
            href="https://www.zeffy.com/en-US/fundraising/296cf943-b89e-4ff8-859b-952cc4ddf186">Donate!</a>
        </p>
      </li>
    </ul>

  </article>
</template>

<script setup>
const tiers = [
  {
    name: 'Residents',
    annual: 48,
    monthly: 4
  },
  {
    name: 'Extended Neighbors',
    annual: 120,
    monthly: 10
  },
  {
    name: 'Govt / Nonprofits',
    annual: 240,
    monthly: 20
  },
  {
    name: 'Local Businesses',
    annual: 300,
    monthly: 25
  },
  {
    name: 'For Profit Corp',
    annual: 500,
    monthly: 42
  },
]
</script>
