import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  const title =
    "Colouring Card Games - Printable colouring pages, greeting cards, playing cards, and puzzle templates";
  const description =
    "Download free printable colouring pages, greeting card templates, playing card templates, and puzzle cutouts. Draw on pages in the browser, export to PDF, and start a creative project in minutes.";
  return [
    { title },
    { name: "description", content: description },
    {
      name: "robots",
      content:
        "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1",
    },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ];
}

export function loader({}: Route.LoaderArgs) {
  // Keep if you rely on a loader, otherwise you can remove it.
  return { message: "Welcome to Colouring Card Games" };
}

export default function Home({ loaderData }: Route.ComponentProps) {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10 text-slate-900">
      {/* Skip link */}
      <a href="#content" className="sr-only focus:not-sr-only">
        Skip to content
      </a>

      {/* Top nav with safe in-page anchors */}
      <header className="mb-10">
        <nav aria-label="Primary">
          <ul className="flex flex-wrap gap-5 text-sm">
            <li>
              <a href="#download" className="hover:underline">
                Downloads
              </a>
            </li>
            <li>
              <a href="#templates" className="hover:underline">
                Templates
              </a>
            </li>
            <li>
              <a href="#draw" className="hover:underline">
                Draw in browser
              </a>
            </li>
            <li>
              <a href="#how-it-works" className="hover:underline">
                How it works
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:underline">
                FAQ
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Hero */}
      <section id="content" className="mb-12">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
          Printable colouring pages and card game templates you can customise
        </h1>
        <p className="mt-4 max-w-3xl text-lg text-slate-700">
          ColouringCardGames gives you high quality printable pages, greeting
          card templates, playing card templates, and puzzle cutouts. Open a
          page, draw on it in the browser, download a clean PDF, and print at
          home or at a shop.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href="#download"
            className="inline-flex items-center rounded-md bg-slate-900 px-4 py-2 text-white"
          >
            Browse downloads
          </a>
          <a
            href="#draw"
            className="inline-flex items-center rounded-md border border-slate-300 px-4 py-2"
          >
            Try the drawing tool
          </a>
        </div>
        <p className="mt-3 text-sm text-slate-600" aria-live="polite">
          {loaderData?.message}
        </p>
      </section>

      {/* Value props */}
      <section aria-labelledby="features" className="mb-12">
        <h2 id="features" className="text-2xl font-bold">
          Why creators choose ColouringCardGames
        </h2>
        <ul className="mt-6 grid gap-6 sm:grid-cols-2">
          <li className="rounded-lg border border-slate-200 p-5">
            <h3 className="font-semibold">Ready to print</h3>
            <p className="mt-2 text-slate-700">
              Clean outlines, print friendly margins, and PDFs that work on
              standard paper sizes.
            </p>
          </li>
          <li className="rounded-lg border border-slate-200 p-5">
            <h3 className="font-semibold">Draw before you print</h3>
            <p className="mt-2 text-slate-700">
              Add lines, shapes, and notes right on the page, then export a
              flattened file.
            </p>
          </li>
          <li className="rounded-lg border border-slate-200 p-5">
            <h3 className="font-semibold">Card game friendly</h3>
            <p className="mt-2 text-slate-700">
              Playing card grids, tuck box guides, and back face patterns that
              line up after cutting.
            </p>
          </li>
          <li className="rounded-lg border border-slate-200 p-5">
            <h3 className="font-semibold">Kid and classroom approved</h3>
            <p className="mt-2 text-slate-700">
              Simple outlines that colour well, plus templates that teachers can
              reuse across lessons.
            </p>
          </li>
        </ul>
      </section>

      {/* Downloads */}
      <section id="download" aria-labelledby="downloads" className="mb-12">
        <h2 id="downloads" className="text-2xl font-bold">
          Downloads that help you start fast
        </h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          <article className="rounded-lg border border-slate-200 p-5">
            <h3 className="font-semibold">Colouring pages</h3>
            <p className="mt-2 text-slate-700">
              Animals, nature, patterns, and simple shapes for early colouring
              practice. Outlines are crisp with no shading.
            </p>
            <a
              href="#how-it-works"
              className="mt-3 inline-block text-slate-900 underline"
            >
              How printing works
            </a>
          </article>
          <article className="rounded-lg border border-slate-200 p-5">
            <h3 className="font-semibold">Greeting card templates</h3>
            <p className="mt-2 text-slate-700">
              Foldable card layouts in common sizes. Add your art, print, fold,
              and gift.
            </p>
            <a
              href="#templates"
              className="mt-3 inline-block text-slate-900 underline"
            >
              See template types
            </a>
          </article>
          <article className="rounded-lg border border-slate-200 p-5">
            <h3 className="font-semibold">Playing card templates</h3>
            <p className="mt-2 text-slate-700">
              Front and back layouts that align after cutting. Ideal for
              prototypes and classroom games.
            </p>
            <a
              href="#templates"
              className="mt-3 inline-block text-slate-900 underline"
            >
              See template types
            </a>
          </article>
          <article className="rounded-lg border border-slate-200 p-5">
            <h3 className="font-semibold">Puzzle cutout pages</h3>
            <p className="mt-2 text-slate-700">
              Jigsaw outlines and shape puzzles you can cut, colour, and reuse.
              Great for parties and rainy days.
            </p>
            <a
              href="#templates"
              className="mt-3 inline-block text-slate-900 underline"
            >
              See template types
            </a>
          </article>
        </div>
      </section>

      {/* Templates section */}
      <section id="templates" aria-labelledby="tpl" className="mb-12">
        <h2 id="tpl" className="text-2xl font-bold">
          Template types included
        </h2>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2">
          <li className="rounded border border-slate-200 p-4">
            <strong>US Letter and A4</strong>
            <p className="text-slate-700 mt-1">
              Every template prints cleanly on common home and school printers.
            </p>
          </li>
          <li className="rounded border border-slate-200 p-4">
            <strong>Single and double sided</strong>
            <p className="text-slate-700 mt-1">
              Front and back guides help align card backs and folded cards.
            </p>
          </li>
          <li className="rounded border border-slate-200 p-4">
            <strong>Cut guides and bleed</strong>
            <p className="text-slate-700 mt-1">
              Light marks make cutting easy while staying out of the final
              artwork.
            </p>
          </li>
          <li className="rounded border border-slate-200 p-4">
            <strong>High contrast outlines</strong>
            <p className="text-slate-700 mt-1">
              Designed for crayons, pencils, and markers with no muddy fills.
            </p>
          </li>
        </ul>
      </section>

      {/* Draw in browser */}
      <section id="draw" aria-labelledby="draw-online" className="mb-12">
        <h2 id="draw-online" className="text-2xl font-bold">
          Draw on pages before you print
        </h2>
        <p className="mt-3 text-slate-700">
          Use simple tools to add notes, borders, and shapes. Save your edits,
          then export a print ready PDF. No account required.
        </p>
        <ul className="mt-4 list-disc pl-5 text-slate-700">
          <li>Pen, eraser, shapes, and text</li>
          <li>Undo and redo with keyboard shortcuts</li>
          <li>Export to PDF or PNG</li>
        </ul>
        <a
          href="#how-it-works"
          className="mt-3 inline-block text-slate-900 underline"
        >
          How it works
        </a>
      </section>

      {/* How it works */}
      <section id="how-it-works" aria-labelledby="how" className="mb-12">
        <h2 id="how" className="text-2xl font-bold">
          How printing and setup works
        </h2>
        <ol className="mt-4 list-decimal pl-5 text-slate-700">
          <li>Pick a colouring page or template from the downloads section.</li>
          <li>
            Open it in the browser drawing tool if you want to add lines or
            text.
          </li>
          <li>
            Export a PDF and choose the paper size that matches your printer.
          </li>
          <li>Print at home or send the PDF to a print shop.</li>
          <li>Cut along the guides and fold where marked.</li>
        </ol>
      </section>

      {/* Creative uses */}
      <section aria-labelledby="creative-uses" className="mb-12">
        <h2 id="creative-uses" className="text-2xl font-bold">
          Creative ways to use colouring and card templates
        </h2>
        <p className="mt-3 text-slate-700">
          Our printable colouring pages and card game layouts are not just for
          kids. Families, teachers, designers, and hobbyists use these templates
          to create unique projects. Whether you are planning a classroom
          activity, building a homemade board game, or making custom greeting
          cards, you can start with a ready-to-print outline.
        </p>
        <ul className="mt-4 list-disc pl-5 text-slate-700">
          <li>DIY birthday cards and holiday gifts</li>
          <li>Printable classroom worksheets and puzzles</li>
          <li>Prototype card games before professional printing</li>
          <li>Relaxing colouring activities for adults</li>
        </ul>
      </section>

      {/* Education */}
      <section aria-labelledby="education" className="mb-12">
        <h2 id="education" className="text-2xl font-bold">
          Designed for teachers, parents, and learners
        </h2>
        <p className="mt-3 text-slate-700">
          Printable card and colouring templates help students practice
          creativity, problem solving, and fine motor skills. Teachers can
          quickly download classroom-ready worksheets, while parents can set up
          rainy day activities without extra prep. All resources are free for
          personal and educational use.
        </p>
      </section>

      {/* DIY Games */}
      <section aria-labelledby="diy-games" className="mb-12">
        <h2 id="diy-games" className="text-2xl font-bold">
          Build your own card and puzzle games at home
        </h2>
        <p className="mt-3 text-slate-700">
          Many visitors use our playing card grids and puzzle outlines to invent
          their own games. Print double-sided cards, cut them out, and start
          testing your game mechanics. For puzzles, use the jigsaw cutouts to
          design brain teasers that are fun at parties and family nights.
        </p>
      </section>

      {/* Printing tips */}
      <section aria-labelledby="printing-tips" className="mb-12">
        <h2 id="printing-tips" className="text-2xl font-bold">
          Printing tips for best results
        </h2>
        <ul className="mt-4 list-disc pl-5 text-slate-700">
          <li>Choose “Actual Size” in your print dialog for proper scaling</li>
          <li>Use thicker cardstock for greeting cards and playing cards</li>
          <li>Try coloured paper for backgrounds and added flair</li>
          <li>Laminate puzzles and flash cards for reuse</li>
        </ul>
      </section>

      {/* Community projects */}
      <section aria-labelledby="community" className="mb-12">
        <h2 id="community" className="text-2xl font-bold">
          Join a growing community of makers
        </h2>
        <p className="mt-3 text-slate-700">
          ColouringCardGames is trusted by hobbyists, educators, and families
          around the world. Thousands of projects start here each month, from
          custom flash cards to family game nights. Download a template today
          and share your creativity with others.
        </p>
      </section>

      {/* Adult colouring */}
      <section aria-labelledby="adult-colouring" className="mb-12">
        <h2 id="adult-colouring" className="text-2xl font-bold">
          Relaxing printable colouring pages for adults
        </h2>
        <p className="mt-3 text-slate-700">
          Colouring is not just for children. Adults use our printable outlines
          to reduce stress, explore creativity, and take mindful breaks during
          the day. Choose from intricate patterns, geometric mandalas, and
          themed card templates you can colour in and share.
        </p>
      </section>

      {/* Holidays and events */}
      <section aria-labelledby="holidays-events" className="mb-12">
        <h2 id="holidays-events" className="text-2xl font-bold">
          Free printable templates for holidays and special events
        </h2>
        <p className="mt-3 text-slate-700">
          Planning for birthdays, weddings, or seasonal parties? Use our
          greeting card and puzzle cutout pages to add a personal touch. Many
          designs are themed for Christmas, Halloween, Easter, and other
          occasions, so you can always find a template that fits the season.
        </p>
      </section>

      {/* Customisation */}
      <section aria-labelledby="customisation" className="mb-12">
        <h2 id="customisation" className="text-2xl font-bold">
          Customisable card and colouring templates
        </h2>
        <p className="mt-3 text-slate-700">
          Every download works with the browser drawing tool, so you can add
          text, borders, and icons before you print. Create personalised gifts,
          one-of-a-kind prototypes, or classroom flash cards that match your
          teaching style.
        </p>
      </section>

      {/* Benefits */}
      <section aria-labelledby="benefits" className="mb-12">
        <h2 id="benefits" className="text-2xl font-bold">
          Benefits of printable colouring and card templates
        </h2>
        <ul className="mt-4 list-disc pl-5 text-slate-700">
          <li>Encourages creativity and self-expression</li>
          <li>Cost-effective compared to store-bought cards and games</li>
          <li>Quick download and no signup required</li>
          <li>Printable on both A4 and Letter paper sizes</li>
        </ul>
      </section>

      {/* Sustainability */}
      <section aria-labelledby="sustainability" className="mb-12">
        <h2 id="sustainability" className="text-2xl font-bold">
          Eco-friendly projects you can print at home
        </h2>
        <p className="mt-3 text-slate-700">
          Instead of buying mass-produced cards or puzzles, you can print only
          what you need, reuse templates, and choose recycled paper for a
          sustainable project. Small changes make a big difference for the
          environment while still giving you creative freedom.
        </p>
      </section>

      {/* Family activities */}
      <section aria-labelledby="family-activities" className="mb-12">
        <h2 id="family-activities" className="text-2xl font-bold">
          Printable colouring and card games for family activities
        </h2>
        <p className="mt-3 text-slate-700">
          Families use our templates for rainy day crafts, weekend game nights,
          and creative bonding time. Print colouring pages for younger kids,
          card grids for teens who want to design their own games, and puzzles
          that everyone can cut out and enjoy together.
        </p>
      </section>

      {/* Classroom games */}
      <section aria-labelledby="classroom-games" className="mb-12">
        <h2 id="classroom-games" className="text-2xl font-bold">
          Classroom-ready card game templates and colouring sheets
        </h2>
        <p className="mt-3 text-slate-700">
          Teachers rely on quick, printable resources to keep lessons engaging.
          Our colouring pages double as worksheets, and our card layouts are
          perfect for flash cards, memory games, and custom vocabulary
          exercises. Everything is printer-friendly and reusable across lessons.
        </p>
      </section>

      {/* Party crafts */}
      <section aria-labelledby="party-crafts" className="mb-12">
        <h2 id="party-crafts" className="text-2xl font-bold">
          DIY printable party crafts and decorations
        </h2>
        <p className="mt-3 text-slate-700">
          Hosting a birthday or themed party? Print jigsaw cutouts, greeting
          cards, and card games as interactive crafts. Guests can colour, cut,
          and assemble activities right at the table. These pages are simple to
          set up and fun for groups of all ages.
        </p>
      </section>

      {/* Game designers */}
      <section aria-labelledby="game-designers" className="mb-12">
        <h2 id="game-designers" className="text-2xl font-bold">
          Printable prototypes for board and card game designers
        </h2>
        <p className="mt-3 text-slate-700">
          Game creators save time by testing mechanics with printable card grids
          and tuck box layouts. Download templates, add your own graphics, and
          print a working prototype in minutes. Adjust quickly without the cost
          of professional printing until your game is ready.
        </p>
      </section>

      {/* Seasonal collections */}
      <section aria-labelledby="seasonal" className="mb-12">
        <h2 id="seasonal" className="text-2xl font-bold">
          Seasonal colouring pages and holiday card collections
        </h2>
        <p className="mt-3 text-slate-700">
          Discover themed templates for every season: snowflake puzzles and
          Christmas cards, pumpkin cutouts for Halloween, spring flower
          colouring pages, and summer party card games. Download and print what
          you need when you need it.
        </p>
      </section>

      {/* Homeschooling */}
      <section aria-labelledby="homeschool" className="mb-12">
        <h2 id="homeschool" className="text-2xl font-bold">
          Printable colouring and card templates for homeschooling
        </h2>
        <p className="mt-3 text-slate-700">
          Homeschool parents love resources that combine creativity with
          learning. Our colouring sheets encourage focus and fine motor
          practice, while card and puzzle templates can be used for math
          flashcards, spelling games, and custom memory exercises. Everything is
          free to download and easy to print at home.
        </p>
      </section>

      {/* Mindfulness */}
      <section aria-labelledby="mindfulness" className="mb-12">
        <h2 id="mindfulness" className="text-2xl font-bold">
          Mindful colouring and creative relaxation
        </h2>
        <p className="mt-3 text-slate-700">
          Printable colouring is a proven way to slow down and de-stress. Adults
          use our templates to practice mindfulness, focus on patterns, and
          enjoy quiet screen-free time. Choose simple outlines or more detailed
          designs depending on your mood and energy.
        </p>
      </section>

      {/* Flashcards */}
      <section aria-labelledby="flashcards" className="mb-12">
        <h2 id="flashcards" className="text-2xl font-bold">
          Printable flashcards and learning games
        </h2>
        <p className="mt-3 text-slate-700">
          Beyond colouring, our card templates make excellent flashcards.
          Teachers and parents can write numbers, letters, or vocabulary words
          on each card. Print, cut, and laminate for durable sets that support
          daily practice in any subject.
        </p>
      </section>

      {/* Arts and crafts */}
      <section aria-labelledby="arts-crafts" className="mb-12">
        <h2 id="arts-crafts" className="text-2xl font-bold">
          Arts and crafts made simple with free printables
        </h2>
        <p className="mt-3 text-slate-700">
          Whether you need last-minute crafts or structured activities, our
          templates cover colouring, folding, and cutting projects that fit any
          age group. Kids enjoy creating puzzles and cards, while adults can
          adapt pages for scrapbooks, journals, or handmade decorations.
        </p>
      </section>

      {/* Collections */}
      <section aria-labelledby="collections" className="mb-12">
        <h2 id="collections" className="text-2xl font-bold">
          Browse by collection: animals, nature, patterns, and more
        </h2>
        <p className="mt-3 text-slate-700">
          Find themed packs of colouring pages and templates in categories like
          animals, flowers, geometric shapes, and fantasy creatures. Collections
          make it easy to grab a full set of related pages at once so you can
          start your project without hunting around.
        </p>
      </section>

      {/* Scrapbooking */}
      <section aria-labelledby="scrapbooking" className="mb-12">
        <h2 id="scrapbooking" className="text-2xl font-bold">
          Printable templates for scrapbooking and journaling
        </h2>
        <p className="mt-3 text-slate-700">
          Our colouring pages and card templates can be cut, folded, and pasted
          into scrapbooks or journals. Add decorated cards, puzzle cutouts, and
          coloured designs to make your memory books stand out. Pages are clean
          and print perfectly on A4 or Letter paper for easy use in binders and
          albums.
        </p>
      </section>

      {/* Travel activities */}
      <section aria-labelledby="travel-activities" className="mb-12">
        <h2 id="travel-activities" className="text-2xl font-bold">
          Travel-friendly colouring and puzzle activities
        </h2>
        <p className="mt-3 text-slate-700">
          Need screen-free entertainment on a trip? Print out colouring sheets
          and puzzle cutouts before you go. Kids can colour in the car or plane,
          and families can cut and play card games once you arrive. Templates
          are light, packable, and reusable.
        </p>
      </section>

      {/* Print on demand */}
      <section aria-labelledby="print-on-demand" className="mb-12">
        <h2 id="print-on-demand" className="text-2xl font-bold">
          Use templates with home printers and print-on-demand
        </h2>
        <p className="mt-3 text-slate-700">
          Every file exports as a high-resolution PDF or PNG, so you can print
          at home or upload to a professional print-on-demand service. Make
          personal gifts, greeting cards, and even small-batch prototypes
          without investing in custom design software.
        </p>
      </section>

      {/* Teacher resources */}
      <section aria-labelledby="teacher-resources" className="mb-12">
        <h2 id="teacher-resources" className="text-2xl font-bold">
          Free printable resources for teachers
        </h2>
        <p className="mt-3 text-slate-700">
          Teachers often spend hours preparing worksheets and activities. Our
          library of colouring pages, flashcard grids, and puzzle templates
          saves time and supports lesson planning. Printables can be used for
          art, math, language practice, and group games with minimal prep.
        </p>
      </section>

      {/* Card backs */}
      <section aria-labelledby="card-backs" className="mb-12">
        <h2 id="card-backs" className="text-2xl font-bold">
          Printable card backs and tuck box guides
        </h2>
        <p className="mt-3 text-slate-700">
          If you are building a card game, you can download matching back
          designs and tuck box templates to complete your set. Align front and
          back pages, cut along the guides, and fold into a professional-looking
          deck box you can use immediately.
        </p>
      </section>

      {/* FAQ with pure anchors to avoid broken links */}
      <section id="faq" aria-labelledby="faq-title" className="mb-16">
        <h2 id="faq-title" className="text-2xl font-bold">
          Frequently asked questions
        </h2>
        <div className="mt-6 space-y-5">
          <details>
            <summary className="cursor-pointer font-semibold">
              Are the downloads free
            </summary>
            <p className="mt-2 text-slate-700">
              Yes. You can download and print for personal use, classrooms, and
              parties.
            </p>
          </details>
          <details>
            <summary className="cursor-pointer font-semibold">
              Do the pages have shading
            </summary>
            <p className="mt-2 text-slate-700">
              No. Outlines are clean and black so colouring is easy for all
              ages.
            </p>
          </details>
          <details>
            <summary className="cursor-pointer font-semibold">
              Can I use the templates for prototypes
            </summary>
            <p className="mt-2 text-slate-700">
              Yes. Playing card layouts and puzzle cutouts are designed for
              quick prototypes.
            </p>
          </details>
          <details>
            <summary className="cursor-pointer font-semibold">
              Do you support A4 and Letter paper
            </summary>
            <p className="mt-2 text-slate-700">
              Yes. Most downloads include both sizes.
            </p>
          </details>
        </div>
      </section>

      {/* Footer, no external links to avoid 404s during early launch */}
      <footer className="border-t border-slate-200 pt-6 text-sm text-slate-600">
        <p>
          © {new Date().getFullYear()} ColouringCardGames. All rights reserved.
        </p>
        <p className="mt-1">
          For support, contact the site owner using the form that will appear on
          the downloads page.
        </p>
      </footer>

      {/* Minimal JSON-LD for a website, no external URLs to avoid broken references */}
      <script
        type="application/ld+json"
        // Avoid absolute URLs until you confirm the final domain
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Colouring Card Games",
            inLanguage: "en",
            description:
              "Printable colouring pages, greeting cards, playing cards, and puzzle templates. Draw on pages in the browser and export to PDF.",
          }),
        }}
      />
    </main>
  );
}
