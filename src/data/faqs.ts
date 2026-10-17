/** FAQ shown on /faq. Answers are short HTML; link to the docs for detail. */
export type Faq = { q: string; a: string };
export type FaqGroup = { topic: string; items: Faq[] };

export const FAQS: FaqGroup[] = [
  {
    topic: 'Getting started',
    items: [
      {
        q: 'Can I try QCut before buying it?',
        a: 'Yes. Click <b>Try theme</b> on the Theme Store listing to add QCut to your theme library and preview it with your own products. You only pay when you publish it.',
      },
      {
        q: 'Will my store look like the demo store?',
        a: 'The layout, colors and fonts match the demo. The demo’s images, text and fit data don’t transfer, so you’ll see placeholders until you add your own — and the fit line appears once your products have the <code>custom.fit_position</code> metafield. See <a href="/docs/getting-started/install">Install QCut</a>.',
      },
      {
        q: 'Which menus does QCut use?',
        a: 'The header uses your <b>Main menu</b> and the footer uses your <b>Footer menu</b> from <b>Online Store &gt; Navigation</b>. You can choose different menus in the header and footer sections.',
      },
      {
        q: 'How do I change the logo and favicon?',
        a: 'Upload the logo in the <b>Header</b> section (<b>Logo image</b>) and the favicon in <b>Theme settings &gt; Favicon</b>. Without a logo image, the header shows a text wordmark — change it with <b>Wordmark text</b>. The footer has its own <b>Logo image</b> setting.',
      },
    ],
  },
  {
    topic: 'Presets and design',
    items: [
      {
        q: 'What’s the difference between the QCut, Rivet and Drape presets?',
        a: 'Each preset has its own color schemes, fonts, fit line style, header, footer and home, product and collection templates. QCut is for everyday menswear basics on stone and orange, Rivet for raw denim and workwear on dark indigo with zones named Skinny to Relaxed, and Drape for womenswear on blush, with pill buttons and cards that show where a hem falls. See <a href="/docs/getting-started/theme-settings#presets">Presets</a>.',
      },
      {
        q: 'Can I switch presets after installing?',
        a: 'A preset is a starting point, not a separate theme: every setting can be changed afterward. To start from a different preset’s templates, add QCut again from the Theme Store with that style selected, and compare the two copies in your theme library.',
      },
      {
        q: 'How do I change colors and fonts?',
        a: 'In <b>Theme settings</b>, edit the <b>color schemes</b> and pick fonts for headings, body text and measurements. Every section has a <b>Color scheme</b> setting, so a change to a scheme updates every section that uses it. Each scheme also sets the <b>Fit marker</b> and <b>Second marker</b> colors. See <a href="/docs/getting-started/theme-settings">Theme settings</a>.',
      },
      {
        q: 'Why don’t I see the newsletter form in the footer?',
        a: 'QCut shows one signup form per page. When a page has a <b>Newsletter</b> section, the footer’s form hides itself on that page.',
      },
      {
        q: 'How do I add a badge such as “Bestseller” to a product card?',
        a: 'Add a product tag starting with <code>badge:</code>, for example <code>badge:Bestseller</code>. Sale badges appear automatically when a product has a compare-at price.',
      },
    ],
  },
  {
    topic: 'The fit line',
    items: [
      {
        q: 'What is the fit line?',
        a: 'A horizontal line from close to oversized with a marker showing where a product sits on it. It appears on product cards, the product page, quick view, the cart, search and the fit sections, and shoppers can drag it to pick a size. See <a href="/docs/fit-line/how-the-fit-line-works">How the fit line works</a>.',
      },
      {
        q: 'Why doesn’t a product show a fit line?',
        a: 'The line needs the product’s <code>custom.fit_position</code> metafield — a whole number from 0 (close) to 100 (oversized). Create the definition in <b>Settings &gt; Custom data &gt; Products</b> and fill it in on each product. Products without it simply show no line.',
      },
      {
        q: 'Which metafields do I need to set up?',
        a: 'Only <code>custom.fit_position</code> is needed for the line. Optional ones add more: <code>custom.measurements</code> for the measurement tables, <code>custom.model_info</code> for the model’s height and size, <code>custom.fit_secondary</code> for a second marker, <code>custom.fit_size_step</code> for how far the marker moves per size, and <code>custom.length_position</code> with <code>custom.length_falls</code> for length mode. See <a href="/docs/fit-line/fit-data">Fit data</a>.',
      },
      {
        q: 'Can I rename Close, Regular, Relaxed and Oversized?',
        a: 'Yes. Enter four names, comma separated and from close to loose, in <b>Zone names</b> in <b>Theme settings &gt; Fit line</b>. To rename the zone for one product only, use its <code>custom.fit_label</code> metafield.',
      },
      {
        q: 'How does the fit line pick a size?',
        a: 'The line is drawn for one wearer: the shopper, from a body measurement they enter or the size they saved in the size finder, or else the model from <code>custom.model_info</code>, or else the middle size. Each size up or down moves the marker by the <b>Size step</b> in <b>Theme settings &gt; Shapes and sizes</b>, or by the product’s <code>custom.fit_size_step</code>. Set the step to 0 to keep the marker fixed.',
      },
      {
        q: 'How do I let shoppers filter by fit?',
        a: 'In the Search &amp; Discovery app, add a product metafield filter on <code>custom.fit_zone</code> (single line text, with values that match your zone names). QCut draws it as zones on a ruler. Paste its parameter, for example <code>filter.p.m.custom.fit_zone</code>, in <b>Fit filter</b> under <b>Theme settings &gt; Shapes and sizes</b> and in the header’s <b>Shop by fit</b> settings to link zone names and menus to it.',
      },
    ],
  },
  {
    topic: 'Sizing',
    items: [
      {
        q: 'Where does the size guide come from?',
        a: 'From the product’s <code>custom.measurements</code> metafield (JSON with garment and body tables). Its rows must match the product’s <b>Size</b> option values. The tables appear in the measurement panel and in the size guide drawer, opened from the <b>Size guide</b> button next to the Size option.',
      },
      {
        q: 'How does the size finder remember a shopper’s size?',
        a: 'The <b>Size finder</b> section asks two questions and saves the result in the shopper’s browser. Their size is then marked on every product page, and the fit line is drawn for them.',
      },
      {
        q: 'What does “Looser than last viewed” on a product card mean?',
        a: 'Product cards and rows mark the fit of the product the shopper last looked at, so they can see at a glance whether another piece sits looser or closer.',
      },
    ],
  },
  {
    topic: 'Products and cart',
    items: [
      {
        q: 'How do I show review stars?',
        a: 'Install a review app that writes Shopify’s standard <code>reviews.rating</code> metafield. Stars then appear on cards and the product page. Add the app’s review widget as an app block on the product page.',
      },
      {
        q: 'Does QCut support subscriptions?',
        a: 'Yes. Install a subscription app that creates selling plans, then assign the <b>subscription</b> product template. The chosen plan shows on the product page and in the cart.',
      },
      {
        q: 'Why doesn’t the bundle builder discount the price?',
        a: 'The bundle builder shows the discount, but the price change comes from a discount you create in <b>Discounts</b> — for example an automatic discount on three items from the collection.',
      },
      {
        q: 'The free shipping meter says “free”, but checkout charges shipping.',
        a: 'The meter is a message only. Create the matching free shipping rate in <b>Settings &gt; Shipping and delivery</b>.',
      },
      {
        q: 'How do I show pickup availability?',
        a: 'Turn on local pickup for a location in <b>Settings &gt; Shipping and delivery</b>, then add the <b>Pickup availability</b> block to the product page.',
      },
    ],
  },
  {
    topic: 'Updates and support',
    items: [
      {
        q: 'Will I lose my changes when I update the theme?',
        a: 'No — settings, sections and content carry over, and so do your metafields, which live on your products. Code edits don’t, so keep custom code in the <b>Custom liquid</b> section or block where possible. See <a href="/docs/support/updating">Updating QCut</a>.',
      },
      {
        q: 'Can you enter my fit data or customize the theme for me?',
        a: 'Theme support covers setup questions and bugs, including how the fit line and its metafields work — not entering product data or custom work. For custom features, hire a Shopify Partner. See our <a href="/docs/support/support-policy">support policy</a>.',
      },
      {
        q: 'How do I contact support?',
        a: 'Use the <a href="/support">support form</a>. We reply within two business days.',
      },
    ],
  },
];
