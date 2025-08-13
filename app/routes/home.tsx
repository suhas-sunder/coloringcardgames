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
