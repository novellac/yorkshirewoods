<template>
  <div>
    <h1 class="px-6 mb-8 text-center">Welcome to the neighborhood!</h1>

    <section class="flex flex-col p-6">
      <!-- <h2 id="featured-event">Featured Resource</h2>
      <div class="flex flex-col gap-4 mb-8">
        Featured Resource info here
      </div> -->

      <!-- <h3 class="sr-only">Event images</h3>
      <ul class="flex flex-wrap justify-center gap-6 mb-10">
        <li>
          <figure>
            <figcaption>Join in the autumn fun! To be a vendor, voluneer, or donate, contact us yorkshirewoodsneighborhood@gmail.com</figcaption>
            <img class="object-contain max-h-screen" src="~/assets/images/2024HarvestFestivalPoster.png"
            alt="A brightly colored flyer with cartoon hay, pumpkins, corn, and jack-o-lanterns. Flyer advertises the harvest festival being held on October 26 from 12pm - 4pm at 9745 Kensington Ave." />
          </figure>
        </li>       
      </ul> -->

      <EventsList title="Upcoming Events" eventTimeframe="future" theme="green" />
      <NuxtLink class="ml-auto text-lg underline" to="/events">See all events</NuxtLink>
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

      <h2 id="give-feedback" class="mt-6">Tell us what you need</h2>

      <h3 class="mt-3 mb-1">Anchor Detroit survey</h3>
      <p>
        Anchor Detroit, presented by <a href="https://liferemodeled.org">Life Remodeled</a>, is a community center in
        the Yorkshire Woods area.
        We encourage you to fill out their survey about your needs for Anchor Detroit. This will help
        Life Remodeled bring the programs and events YOU want to see!
      </p>
      <a href="https://submit.jotform.com/beckyLR/anchordetroitsurvey">Fill out the Anchor Detroit survey here!</a>

      <!-- <h3 class="mt-6 mb-1">Yorkshire Woods Neighborhood survey</h3>
      <p>
        Fill out our community survey to tell us what you need from your
        neighborhood!
      </p>
      <iframe class="mt-4 mb-8 border-y" title="Yorkshire Woods Community Survey"
        src="https://docs.google.com/forms/d/e/1FAIpQLSeDdbWg7KlQ0AkWmU-h7SzXasbX9hUtznB0VS2vPF-Zg-FZzQ/viewform?embedded=true"
        width="100%" height="400px" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe> -->

      <h2 id="mission" class="mt-6">Our mission</h2>
      <p class="mb-2">
        Read about how we organize ouselves in the
        <a href="/bylaws">Yorkshire Woods Community Organization Bylaws</a>.
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

      <h2 id="press" class="mt-6">In the press</h2>
      <YTEmbed videoId="i-um2IyI3PA" />

      <h2 id="history" class="mt-6">Our history</h2>
      <p>
        YWCO was originally formed in the 1970s as Neighbors United. Detroit
        officially recognizes the area which borders Kelly Road, Whittier, I-94,
        and Morang as Yorkshire Woods. The area was originally woodlands and
        parks. The first residential home in the community was built in the
        early 1920s, still exists, and is occupied by the original family.
      </p>

      <h2 id="values" class="mt-6">We're all about...</h2>

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

      <p class="mt-6 text-2xl">...We're all about you!</p>
    </article>
  </div>
</template>
