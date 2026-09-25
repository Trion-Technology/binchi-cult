import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, ArrowUpRight, Instagram, MapPin, Menu, Star } from "lucide-react";

import heroImage from "@/assets/binchi-hero-light.jpg";
import categoryJeans from "@/assets/category-jeans.jpg";
import categoryShirts from "@/assets/category-shirts.jpg";
import categoryTshirts from "@/assets/category-tshirts.jpg";
import lookbookOne from "@/assets/lookbook-light-01.jpg";
import lookbookTwo from "@/assets/lookbook-light-02.jpg";
import lookbookThree from "@/assets/lookbook-light-03.jpg";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "BINCHI CULT — Patan's First Streetwear Destination" },
      {
        name: "description",
        content: "Premium streetwear, heavyweight essentials and limited drops from Patan, Gujarat.",
      },
      { property: "og:title", content: "BINCHI CULT — Patan's First Streetwear Destination" },
      {
        property: "og:description",
        content: "Built in Patan. Worn by the cult. Discover premium streetwear and limited drops.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const reviews = [
  {
    quote: "Premium quality and unique designs. Finally, streetwear in Patan that feels different.",
    name: "Local Guide",
  },
  {
    quote: "The fabric quality is excellent and the collection is genuinely trendy. Loved the service.",
    name: "Verified Customer",
  },
  {
    quote: "Patan’s first real streetwear destination. Fresh fits, great quality and a whole new vibe.",
    name: "BINCHI Customer",
  },
];

function Wordmark({ compact = false }: { compact?: boolean }) {
  if (compact) {
    return (
      <a href="#top" className="nav-wordmark" aria-label="BINCHI CULT home">
        BINCHI CULT.
      </a>
    );
  }

  return (
    <a href="#top" className="inline-flex flex-col font-display uppercase leading-[0.76]" aria-label="BINCHI CULT home">
      <span className="text-4xl">BINCHI</span>
      <span className="text-4xl">CULT</span>
    </a>
  );
}

function SectionLabel({ children, number }: { children: React.ReactNode; number: string }) {
  return (
    <div className="mb-8 flex items-center gap-3 text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-muted-foreground">
      <span className="text-foreground">{number}</span>
      <span className="h-px w-10 bg-border" />
      <span>{children}</span>
    </div>
  );
}

function Index() {
  return (
    <main id="top" className="overflow-hidden bg-background text-foreground">
      <header className="absolute inset-x-0 top-0 z-30 border-b border-border bg-background/90 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-[1480px] items-center justify-between px-5 md:px-10">
          <Wordmark compact />
          <nav className="hidden items-center gap-8 text-xs font-bold uppercase tracking-[0.18em] md:flex" aria-label="Primary navigation">
            <a className="transition-colors hover:text-signal" href="#manifesto">Manifesto</a>
            <a className="transition-colors hover:text-signal" href="#lookbook">Lookbook</a>
            <a className="transition-colors hover:text-signal" href="#store">Store</a>
          </nav>
          <a
            href="#lookbook"
            className="link-underline hidden border border-foreground px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] transition-colors hover:bg-foreground hover:text-background md:inline-flex"
          >
            Shop the drop
          </a>
          <Button asChild variant="ghost" size="icon" className="text-foreground md:hidden">
            <a href="#manifesto" aria-label="Jump to the manifesto"><Menu /></a>
          </Button>
        </div>
      </header>

      <section className="relative grid min-h-[92svh] border-b border-border pt-20 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="relative z-10 flex flex-col items-center justify-center px-5 py-20 text-center md:px-10">
          <p className="mb-9 text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-muted-foreground">
            Est. Patan, Gujarat / 23.8355° N
          </p>
          <h1 className="hero-wordmark" aria-label="BINCHI CULT">
            <span>BINCHI</span>
            <span>CULT.</span>
          </h1>
          <p className="mt-8 text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">Streetwear Clothing Store <span className="mx-2">•</span> Unisex</p>
          <p className="mt-6 max-w-md text-sm leading-7 text-muted-foreground">Patan’s first streetwear destination. Premium fabric. Distinctive design. Made for every wardrobe.</p>
          <Button asChild size="lg" className="mt-9 h-13 rounded-none bg-foreground px-8 font-semibold uppercase tracking-[0.16em] text-background shadow-none hover:bg-foreground/80">
            <a href="#lookbook">Explore collection <ArrowDown /></a>
          </Button>
        </div>
        <div className="relative min-h-[48svh] overflow-hidden border-t border-border lg:border-l lg:border-t-0">
          <img src={heroImage} alt="Bright BINCHI CULT boutique with black clothing racks" width={1536} height={1024} className="absolute inset-0 h-full w-full object-cover" />
          <span className="absolute bottom-5 right-5 bg-background px-4 py-2 text-[0.6rem] font-semibold uppercase tracking-[0.2em]">Patan / Gujarat</span>
        </div>
      </section>

      <section className="border-b border-border px-5 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-[1320px]">
          <div className="mb-8 flex items-end justify-between">
            <SectionLabel number="01">Categories</SectionLabel>
            <p className="mb-8 hidden text-xs uppercase tracking-[0.2em] text-muted-foreground sm:block">Everyday essentials / Refined</p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              ["Shirts", categoryShirts, "Crisp white oversized shirt"],
              ["Jeans", categoryJeans, "Relaxed indigo denim jeans"],
              ["T-shirts", categoryTshirts, "Black and ivory oversized t-shirts"],
            ].map(([label, image, alt]) => (
              <a href="#lookbook" key={label} className="category-tile group relative aspect-[3/4] overflow-hidden bg-secondary">
                <img src={image} alt={alt} width={912} height={1200} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02] motion-reduce:transition-none" />
                <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-background/95 px-5 py-4">
                  <span className="font-display text-2xl">{label}</span><ArrowUpRight className="size-4" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="manifesto" className="border-b border-border px-5 py-24 md:px-10 md:py-36">
        <div className="mx-auto grid max-w-[1320px] gap-12 lg:grid-cols-[0.72fr_2fr]">
          <SectionLabel number="02">Our story</SectionLabel>
          <div>
            <p className="max-w-5xl font-display text-4xl leading-[1.04] md:text-6xl lg:text-7xl">
              We didn’t wait for the culture to reach Patan. <em className="font-normal">We built it here.</em>
            </p>
            <div className="mt-12 grid gap-8 border-t border-border pt-8 text-sm leading-7 text-muted-foreground md:grid-cols-2">
              <p>BINCHI CULT brings considered streetwear to Patan. Premium fabrics, contemporary silhouettes and details designed to last.</p>
              <p>Rooted in Gujarat, informed by the streets. A fresh point of view for a city shaping its own fashion culture.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="lookbook" className="px-5 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-[1480px]">
          <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <SectionLabel number="03">The collection</SectionLabel>
              <h2 className="font-display text-6xl leading-[0.95] md:text-8xl">Uniform for<br /><em>the uncommon.</em></h2>
            </div>
            <p className="max-w-xs text-sm leading-6 text-muted-foreground">Oversized proportions. Hard-wearing cotton. Built to outlive the moment.</p>
          </div>
          <div className="lookbook-grid grid gap-3 md:grid-cols-12 md:grid-rows-2">
            <figure className="lookbook-card md:col-span-5 md:row-span-2">
              <img src={lookbookOne} alt="Oversized black heavyweight tee and relaxed trousers" width={912} height={1200} loading="lazy" />
              <figcaption><span>01 / Core heavyweight tee</span><span>Black</span></figcaption>
            </figure>
            <figure className="lookbook-card md:col-span-4 md:row-span-2">
              <img src={lookbookTwo} alt="Off-white oversized tee and relaxed dark denim" width={912} height={1200} loading="lazy" />
              <figcaption><span>02 / Essential tee</span><span>Ivory</span></figcaption>
            </figure>
            <figure className="lookbook-card aspect-[4/3] md:col-span-3 md:row-span-1">
              <img src={lookbookThree} alt="Black and ivory heavyweight hoodies and tees" width={1200} height={912} loading="lazy" />
              <figcaption><span>03 / Cult layers</span><span>Black</span></figcaption>
            </figure>
            <div className="flex min-h-56 flex-col justify-between border border-border bg-secondary p-7 md:col-span-3 md:row-span-1">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">In store now</span>
              <div>
                <p className="font-display text-4xl">Discover the<br />collection.</p>
                <a href="https://www.instagram.com/binchi.cult/" target="_blank" rel="noreferrer" className="link-underline mt-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em]">Check availability <ArrowUpRight className="size-4" /></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-secondary px-5 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-[1320px]">
          <SectionLabel number="04">Word on the street</SectionLabel>
          <div className="grid border-t border-border md:grid-cols-3">
            {reviews.map((review, index) => (
              <blockquote key={review.name} className="border-b border-border py-8 md:border-b-0 md:border-r md:px-8 first:pl-0 last:border-r-0">
                <div className="mb-6 flex gap-1 text-foreground" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }, (_, star) => <Star key={star} className="size-3 fill-current" />)}
                </div>
                <p className="font-display text-2xl leading-snug">“{review.quote}”</p>
                <footer className="mt-7 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-muted-foreground">0{index + 1} — {review.name}</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section id="store" className="grid border-b border-border lg:grid-cols-2">
        <div className="flex min-h-[520px] flex-col justify-between px-5 py-20 md:px-10 lg:px-[max(2.5rem,calc((100vw-1320px)/2))]">
          <div>
            <SectionLabel number="05">The physical space</SectionLabel>
            <h2 className="font-display text-6xl leading-[0.95] md:text-8xl">Find the<br /><em>cult.</em></h2>
          </div>
          <div className="mt-16 grid gap-8 text-sm sm:grid-cols-2">
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">Location</p>
              <p className="font-semibold leading-6">BINCHI CULT<br />Patan, Gujarat, India</p>
              <a href="https://maps.app.goo.gl/aBZ67LF3xFg5nKZ56" target="_blank" rel="noreferrer" className="link-underline mt-4 inline-flex items-center gap-2 font-semibold uppercase tracking-[0.12em]">Open in maps <ArrowUpRight className="size-4" /></a>
            </div>
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">Store hours</p>
              <p className="leading-7"><span className="text-muted-foreground">Mon–Sat</span> &nbsp;10:00–20:30<br /><span className="text-muted-foreground">Sunday</span> &nbsp;10:30–20:30</p>
            </div>
          </div>
        </div>
        <a href="https://maps.app.goo.gl/aBZ67LF3xFg5nKZ56" target="_blank" rel="noreferrer" className="map-panel group relative min-h-[430px] overflow-hidden border-t border-border lg:border-l lg:border-t-0">
          <div className="map-grid absolute inset-0 opacity-40" />
          <div className="absolute left-[58%] top-[43%] -translate-x-1/2 -translate-y-1/2">
            <div className="gradient-pin relative flex size-16 items-center justify-center rounded-full bg-background"><MapPin /></div>
          </div>
          <div className="absolute bottom-7 left-7 border border-border bg-background px-5 py-4 transition-transform group-hover:-translate-y-1">
            <p className="text-[0.6rem] font-bold uppercase tracking-[0.2em] text-muted-foreground">23.850° N / 72.126° E</p>
            <p className="mt-1 font-display text-xl">Patan / Gujarat</p>
          </div>
        </a>
      </section>

      <section className="relative px-5 py-28 text-center md:px-10 md:py-40">
        <div className="relative z-10 mx-auto max-w-4xl">
          <Instagram className="mx-auto mb-7 size-8" />
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-muted-foreground">Follow the transmission</p>
          <h2 className="mt-5 font-display text-6xl md:text-9xl">@binchi.cult</h2>
          <Button asChild variant="outline" size="lg" className="mt-9 h-13 rounded-none border-foreground bg-transparent px-8 font-semibold uppercase tracking-[0.16em] hover:bg-foreground hover:text-background">
            <a href="https://www.instagram.com/binchi.cult/" target="_blank" rel="noreferrer">Follow the cult <ArrowUpRight /></a>
          </Button>
        </div>
      </section>

      <footer className="border-t border-border bg-secondary px-5 pb-8 pt-14 md:px-10">
        <div className="mx-auto max-w-[1480px]">
          <div className="flex flex-col justify-between gap-10 border-b border-border pb-14 md:flex-row md:items-end">
            <Wordmark />
            <div className="grid grid-cols-2 gap-10 text-xs font-bold uppercase tracking-[0.16em] md:gap-20">
              <div className="flex flex-col gap-3"><span className="text-muted-foreground">Connect</span><a className="hover:text-signal" href="https://www.instagram.com/binchi.cult/" target="_blank" rel="noreferrer">Instagram</a><a className="hover:text-signal" href="https://maps.app.goo.gl/aBZ67LF3xFg5nKZ56" target="_blank" rel="noreferrer">Google Maps</a></div>
              <div className="flex flex-col gap-3"><span className="text-muted-foreground">Visit</span><span>Mon–Sat / 10–8:30</span><span>Sun / 10:30–8:30</span></div>
            </div>
          </div>
          <div className="flex flex-col gap-3 pt-7 text-[0.6rem] font-bold uppercase tracking-[0.18em] text-muted-foreground sm:flex-row sm:justify-between">
            <span>© 2026 BINCHI CULT</span><span>Patan made / Culture driven</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
