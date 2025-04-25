<template>
  <div>
    <h1 class="px-6 mb-8 text-center">Welcome to the neighborhood!</h1>

    <section class="flex flex-col p-6">
      <h2 id="featured-event">Featured Resource</h2>
      <div id="thawFundDescrip" class="flex flex-col gap-4 mb-8">
        <p>
          The Heat and Warmth (THAW) Fund has opened its program to the Yorkshire Woods neighborhood! THAW fund program
          was awarded a $400k for sustainable home repairs for residents in Yorkshire Woods only. <br>
          Recipients will be awarded anywhere from $500 - $35,000 per household for safety and health repairs. <br>
          <span class="bg-green-100 block p-4 m-4">
            THAW fund is taking applications from Yorkshire Woods neighborhood residents for grants to help with health
            and safety repairs for homeowners. Applications will be open December 1. Awards are on a first come, first
            serve basis for Yorkshire Woods residents. Severity of repair for safety and health purposes will be
            prioritized.
          </span>

          Repairs must be for safety needs and sustainability, not beautification projects. Examples of eligible home
          repairs include cement and brick damage.<br>
          Home repair program includes the following:
        </p>

        <ul class="list-disc list-inside">
          <li>Roofs, soffit, gutters, and fascia (no partial replacements)</li>
          <li>Storm doors/Exterior doors</li>
          <li>Windows</li>
          <li>Insulation</li>
          <li>Modification for modernization/efficiency purposes or replacement of heating (furnaces or boilers)/
            cooling (full home only)/ventilation systems and water heater upgrades including on demand retrofitting</li>
          <li>Functioning and up to date exterior security lighting</li>
          <li>Appliance upgrades to energy star rating i.e. stove, refridgerator</li>
          <li>Electrical updates or replacement - wiring of home (partial or full)</li>
        </ul>

        <p>
          Other eligible activities requiring MSHDA pre-approval and cannot be stand-alone:
        </p>

        <ul class="list-disc list-inside">
          <li>Masonry replcement or repair</li>
          <li>Lead and/or asbestos remediation</li>
          <li>Interior walls, ceilings, and drywall</li>
          <li>Porch/deck repair and installation</li>
          <li>Private driveways and sidewalks (concrete and asphalt)</li>
        </ul>

        <p>
          To be eligible, you must own your home, meet the AMI income requirement, complete household income
          self-certification, submit identification, proof of income, and proof of home ownership and insurance. <br>
          Interested? Contact THAW fund at <a href="tel:18008668429">1-800-866-8429</a> or find THAW fund online at <a
            href="www.thawfund.org">www.thawfund.org</a>.
        </p>
      </div>
      <div class="flex gap-4 flex-wrap sm:flex-nowrap mb-12 w-full">
        <img class="basis-1/2 sm:w-1/2 shrink object-contain" src="~/public/images/uploads/thawFund20241219.jpg"
          alt="THAW fund flyer page 1" aria-describedby="thawFundDescrip" />
        <img class="basis-1/2 sm:w-1/2 shrink object-contain" src="~/public/images/uploads/thawFund20241219b.jpg"
          alt="THAW fund flyer page 2" aria-describedby="thawFundDescrip" />
      </div>
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
