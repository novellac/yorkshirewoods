<template>
  <div>
    <h1 class="px-6 mb-8 text-center">Welcome to the neighborhood!</h1>

    <article
      class="flex flex-col gap-6 p-4 bg-purple-300 border-4 border-purple-700 md:flex-row rounded-xl bg-gradient-to-r from-purple-800 to-purple-800 via-purple-500"
    >
      <img
        class="object-contain rounded max-h-60"
        src="/images/uploads/img_5972001_20230409_115206.jpg"
        alt="In front of a house decorated with a bunch of purple balloons, Ms. Lottie poses with Yorkshire Woods Community Organization president Mose Primus."
      />
      <section>
        <h2 class="mb-4 text-center text-white md:mt-4">
          Celebrating Ms. Lottie, 101 years young!
        </h2>
        <p class="text-white">
          On April 4th, we celebrated Ms. Lottie, who turned 101 years young!
          Read about the event and see the photos on the
          <a href="/events/event-2023-04-celebrating-ms-lottie">event page</a>.
        </p>
      </section>
    </article>

    <section class="flex flex-col p-6">
      <EventsList
        title="Upcoming Events"
        eventTimeframe="future"
        theme="green"
      />
      <NuxtLink class="ml-auto text-lg underline" to="/events"
        >See all events</NuxtLink
      >
    </section>

    <article class="p-6 mt-12">
      <h2 id="about-boundaries">Do you live in Yorkshire Woods?</h2>
      <p>
        The boundaries of Yorkshire Woods are
        <span class="bold">Kelly Road</span> on the north,
        <span class="bold">Morang Drive</span> on the east,
        <span class="bold">I-94 Service Drive</span> on the south, and
        <span class="bold">Whittier Street</span> on the west.
      </p>

      <h2 class="mt-6">Tell us what you need</h2>
      <p>
        Fill out our community survey to tell us what you need from your
        neighborhood!
      </p>
      <iframe
        class="mt-4 mb-8 border-y"
        title="Yorkshire Woods Community Survey"
        src="https://docs.google.com/forms/d/e/1FAIpQLSeDdbWg7KlQ0AkWmU-h7SzXasbX9hUtznB0VS2vPF-Zg-FZzQ/viewform?embedded=true"
        width="100%"
        height="400px"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
        >Loading…</iframe
      >

      <h2 id="mission" class="mt-6">Our mission</h2>
      <p class="mb-2">
        Read about how we organize ouselves in the <a href="/bylaws">Yorkshire Woods Community Organization Bylaws</a>.
      </p>
      <p>
        To encourage, promote and aid in developing, improving and maintaining
        the area of Yorkshire Woods as a desirable residential community. We
        strive to unify the community spirit, and promote the health, safety and
        welfare of our residents. We encourage recreation and service programs
        that enhance our residents' social life and community welfare. We
        constantly promote a better understanding and fellowship among our
        residents and business owners.
      </p>

      <h2 class="mt-6">In the press</h2>
      <YTEmbed videoId="i-um2IyI3PA" />

      <h2 class="mt-6">Our history</h2>
      <p>
        YWCO was originally formed in the 1970s as Neighbors United. Detroit
        officially recognizes the area which borders Kelly Road, Whittier, I-94,
        and Morang as Yorkshire Woods. The area was originally woodlands and
        parks. The first residential home in the community was built in the
        early 1920s, still exists, and is occupied by the original family.
      </p>

      <h2 class="mt-6">We're all about...</h2>

      <h3 class="mt-4">Reclaiming</h3>
      <p>
        Together we're reclaiming our neighborhood one block at a time - both
        the residential and the business districts.
      </p>

      <h3 class="mt-4">Being strong and viable</h3>
      <p>
        We remain strong and viable in our neighborhood through establishing a
        sense of community, living together productively, and sharing our common
        interest in proactively rebuilding Detroit.
      </p>

      <h3 class="mt-4">Involving and inspiring</h3>
      <p>
        We involve and inspire our youth and pave the way for their present and
        future in Yorkshire Woods.
      </p>

      <h3 class="mt-4">Cherishing</h3>
      <p>
        We cherish our senior citizens and look out for their welfare so that
        they can live peacefully in their homes.
      </p>

      <h3 class="mt-4">Listening</h3>
      <p>
        We listen to the needs and desires of our residents and businesses and
        make things happen.
      </p>

      <h2 class="mt-6 text-2xl">...We're all about you!</h2>
    </article>
  </div>
</template>
