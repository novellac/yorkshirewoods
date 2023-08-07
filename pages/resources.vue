<template>
  <article class="px-6">
    <div class="mb-8">
      <h1>Community Resources</h1>
      <p>Know what's happening around your neighborhood, city, and state!</p>
    </div>

    <section class="mb-8">
      <h2>Neighborhood</h2>
      <ul>
        <li>
          <h3 class="mt-4">Yorkshire Woods Community Organization</h3>
          <p>Yes, that's us (and you)! Read more about us:</p>
          <ul class="ml-4">
            <li>
              <NuxtLink to="/events"> Attend upcoming events </NuxtLink>
            </li>
            <li>
              <a href="/donate"> Donate to your neighborhood</a>
            </li>
            <li>
              <a href="/bylaws"> Read about the YWCO bylaws </a>
            </li>
          </ul>
        </li>

        <li>
          <h3 class="mt-4">
            Trash pickup schedule for Yorkshire Woods residents
          </h3>
          <p>
            Trash is picked up on the odd (1st, 3rd, etc) Thursdays of the
            month. Bulk, Yard, and Recycling are picked up on the even (2nd,
            4th, etc) Thursdays of the month.
          </p>
          <p>
            You can figure out your next pickup day and sign up to receive text
            messages from Detroit by going to the
            <a
              href="https://detroitmi.gov/webapp/find-your-waste-pickup-schedule"
              >Find Your Waste Pickup Schedule</a
            >
            web page. Once you navigate to the page, enter your address in the
            "Find My Home" box. You can then sign up for reminders, see your
            provider, and see your upcoming pickup dates on the left.
          </p>
          <img
            class="mt-2"
            src="~/assets/images/neighborhoodTrashPickupMap.png"
            alt="A partial
          map of Detroit, with each of the trash pickup zones demarcated in
          different colors. A pin sits in the middle of the orange zone on the
          right, indicating Yorkshire Woods' trash pickup zone."
          />
        </li>
      </ul>
    </section>
  </article>
</template>
