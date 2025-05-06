# PRD: AI Market Analyst - Hero Demo Page Redesign (DevStudio Inspired)

## 1. Introduction & Goal

This document outlines the requirements and plan for redesigning the `app/hero-demo/page.tsx`. The goal is to create a visually compelling, brand-aligned, and highly effective hero section that clearly communicates the value proposition of the "AI Market Analyst" tool. This redesign will draw heavily from the user-provided analysis of the "DevStudio" landing page, focusing on its ultra-clean aesthetic, typographic excellence, and strategic use of color and space.

**Primary Objectives:**

*   Visually communicate "Innovative & Accessible AI."
*   Emphasize the prime value proposition: "Real user language at scale."
*   Convey the core benefit: "Perform better market research at 100x the speed."
*   Align with the "AI Market Analyst" brand strategy, targeting primarily Solo Technical Founders.
*   Serve as a high-quality benchmark for future landing page development.

## 2. Core Design Principles (Inspired by "DevStudio" Analysis)

The redesign will adhere to the following principles:

*   **Overall Aesthetic:** Ultra-clean, "modern-SaaS" look. Huge white canvas (#FFFFFF), almost no borders, and abundant "air" or negative space to keep cognitive load low and push all attention to the headline and CTA.
*   **Color Palette:** Predominantly neutral (95% pure white background, near-black text like #0A0A0A or #171717). A single, cool accent color (e.g., a blue-violet like #4F46E5 or #6366F1) will be used deliberately and energetically for icons, links, and small UI states. Color intensity will ramp up gradually in sections *below* the hero.
*   **Typography:**
    *   **Headline:** Extra-bold, wide-tracking, using an Inter-like sans-serif font. Primarily lowercase. Font size around 60-64px. A subtle gradient may be applied to the headline text.
    *   **Body/Sub-headline:** Light weight, roomy line-height, using an Inter-like sans-serif font. Font size around 18px.
    *   The weight contrast and generous line-height should make the page feel both strong (headline) and effortless (body).
*   **Layout:** Perfectly centered, single-column hero content.
*   **Iconography (Accent Icon):** The primary accent icon (e.g., next to the headline) will be treated like type: vector, filled with a linear gradient of the accent hue, subtle drop shadow (blur 4-6px, ~10% opacity), height matching the headline's cap-height, baseline-aligned, and with a slight 2-3° clockwise rotation for dynamism.
*   **CTA Treatment:** Black button (#0A0A0A or #171717) on a white background, relatively small footprint, placed logically where the eye finishes reading the sub-headline.
*   **Spacing:** Generous vertical rhythm using an 8pt grid derivative (e.g., 8px, 16px, 24px, 32px, 64px multiples for padding, margins, and gaps) to keep the layout calm and structured.
*   **Imagery (Progression for full page, hero context):** The hero may include small, overlapping circular avatars (human touch) if desired. Client logos (social proof) will be grayscale in the section immediately following the hero. Product screens ("proof of craft") would appear further down.
*   **Overall Impression:** "Vercel × Apple" – stark minimalism, a single electric accent, and luxurious spacing. Shared soft-shadow/rounded-corner language for elements (though minimal in the hero itself).

## 3. Brand Alignment: "AI Market Analyst"

*   **Product:** "Your Reddit Research Superpower."
*   **Core Message Focus:** Transform hours of scrolling into actionable insights in minutes with unquestionable reliability.
*   **Visuals for "Superpower":** Subtle, abstract elements suggesting transformation, clarity from complexity, speed, and insight. This could be a faint, stylized data stream background, or an abstract representation of a lens focusing.
*   **Visuals for "Real User Language at Scale":** Hinted at through typography or very subtle background textures that evoke multiple voices/texts being distilled into clear insights.
*   **Accent Icon (Placeholder):** User will provide logos. The icon next to the headline should be a placeholder for now but designed to fit the style (vector, gradient, etc.). It should conceptually align with insight, analysis, speed, or a spark.

## 4. Current State of `app/hero-demo/page.tsx`

The page currently consists of:

```tsx
\"use client\"; // Assuming this demo might have client-side interactions eventually

import { HeroSection } from \"@/components/blocks/hero-section-1\";

export default function HeroDemoPage() {
  return (
    <HeroSection />
  );
}
```

It uses a generic `HeroSection` component from `@/components/blocks/hero-section-1`. This component will likely need to be heavily modified or replaced to meet the specific design requirements.

## 5. Proposed Redesign for `app/hero-demo/page.tsx`

The following describes the target state for the hero section on this page.

### 5.1. Overall Page & Hero Container

*   **Background:** Full `bg-white`. The main container for the hero content will be `min-h-screen flex flex-col items-center justify-center text-center py-16 md:py-24 px-4`.
*   **Structure:** A single, focused column for all hero content.

### 5.2. Navigation Bar (Minimal or Absent for Demo Focus)

*   For this specific hero demo page, a full navigation bar might be omitted to keep the focus entirely on the hero message, aligning with the "tiny and out of the way" principle from the DevStudio analysis for the main nav.
*   If a minimal brand mark is desired, it would be a small placeholder logo top-left or centered far above the main content.

### 5.3. Testimonial Avatars (Optional, as per DevStudio)

*   **Placement:** If included, a small group of 3-5 overlapping circular avatars (e.g., each 40x40px or 48x48px) can be placed subtly above the main headline.
*   **Content:** Placeholders for now: `/placeholder.svg?width=48&height=48&query=professional_avatar_face_neutral_expression`
*   **Styling:** Soft shadows if any, ensuring they don't distract from the headline.

### 5.4. Headline

*   **Text (Example, focusing on benefit & audience):** "unlock reddit's insights. 100x faster." OR "real user language. actionable insights. instantly." (Needs to be refined with user). All lowercase.
*   **Styling:**
    *   Font: Inter (or a very close alternative like Poppins if Inter is not available/doesn't achieve the exact roundness).
    *   Weight: Extra-bold (e.g., `font-extrabold` or `font-black`).
    *   Size: Large, responsive (e.g., `text-5xl md:text-6xl lg:text-7xl`).
    *   Tracking: Wide (e.g., `tracking-tight` or slightly wider like `tracking-normal` depending on font, aiming for the DevStudio feel).
    *   Color: Near-black (e.g., `text-slate-900`). A subtle linear gradient (e.g., from a slightly lighter near-black to a darker near-black, or incorporating a hint of the accent color if desired, though the example was primarily monochrome text).
    *   Line Height: Comfortable but impactful (e.g., `leading-tight` or `leading-none`).
    *   Margin: `mb-6` or `mb-8`.
*   **Accent Icon (Next to or integrated within the headline):**
    *   Placeholder: A simple shape like a spark or abstract bolt. `/placeholder.svg?width=64&height=64&query=stylized_spark_icon_accent_gradient` (dimensions to match cap-height).
    *   Styling: As per Core Design Principles (gradient fill with accent hue, slight rotation, baseline aligned).

### 5.5. Sub-headline

*   **Text (Example, elaborating on value):** "Stop guessing. Start validating. Our AI analyzes thousands of Reddit conversations, extracting authentic user language to give you trustworthy product insights in minutes, not weeks." (Needs to be refined with user).
*   **Styling:**
    *   Font: Inter (or alternative).
    *   Weight: Light (e.g., `font-light` or `font-normal`).
    *   Size: Medium (e.g., `text-lg md:text-xl`).
    *   Color: A slightly lighter shade of near-black or dark gray (e.g., `text-slate-700`).
    *   Line Height: Roomy (e.g., `leading-relaxed`).
    *   Max Width: Applied to ensure readability (e.g., `max-w-2xl lg:max-w-3xl mx-auto`).
    *   Margin: `mb-8` or `mb-10`.

### 5.6. Call to Action (CTA) Button

*   **Text (Example):** "Start Validating for Free" or "Request Early Access"
*   **Styling:**
    *   Background: Near-black (e.g., `bg-slate-900 hover:bg-slate-800`).
    *   Text Color: White (e.g., `text-white`).
    *   Font: Inter (or alternative), semi-bold.
    *   Padding: Generous enough for a good click target but maintaining a "small footprint" feel (e.g., `py-3 px-6` or `py-4 px-8`).
    *   Border Radius: Subtle rounding (e.g., `rounded-md` or `rounded-lg`).
    *   Shadows: Minimal, if any.
    *   Placement: Directly below the sub-headline.

### 5.7. Social Proof Hint (Text for below CTA, leading to next section)

*   **Text (Example):** "Trusted by forward-thinking founders & marketers" (This would lead into a separate social proof logo section *below* the hero fold).
*   **Styling:** Small, light text (e.g., `text-sm text-slate-500 mt-12`).

## 6. Font and Color Palette Specification

*   **Primary Font:** Inter (fallback to Poppins or Nunito if Inter doesn't achieve the desired roundness/smoothness from the screenshot). Weights: Light/Normal for body, Extra-Bold/Black for headlines.
*   **Primary Background:** `#FFFFFF` (White).
*   **Primary Text Color:** `#0A0A0A` or `#171717` (Near-black).
*   **Secondary Text Color:** `#64748B` (Slate 500) or `#475569` (Slate 600) for sub-headlines/muted text.
*   **Accent Color:** A cool blue-violet. Examples:
    *   Tailwind `indigo-600` (#4F46E5)
    *   Tailwind `violet-600` (#7C3AED)
    *   Or a custom shade like `#5D5FEF`.
    *(Exact shade to be confirmed)*.

## 7. Implementation Plan / Next Steps

1.  **Setup Global Styles (if necessary):** Ensure Inter font is loaded and set as the default sans-serif font in `tailwind.config.ts` and `globals.css`.
2.  **Create/Refactor Hero Component:**
    *   Evaluate if `@/components/blocks/hero-section-1` can be refactored.
    *   More likely: Create a new component `components/hero-demo/hero-layout.tsx` and `components/hero-demo/hero-content.tsx` (or a single hero component) specifically for this page to implement the precise design.
3.  **Implement Hero Structure:** Background, centering, main container.
4.  **Implement Headline:** Typography, content placeholders, gradient style, placeholder accent icon.
5.  **Implement Sub-headline:** Typography, content placeholders.
6.  **Implement CTA Button:** Styling and text.
7.  **Implement Optional Avatars & Social Proof Hint.**
8.  **Iterate:** Review with user, refine text, colors, and spacing.

## 8. Open Questions & Discussion Points

*   Final headline and sub-headline copy.
*   Specific accent color hex code.
*   Decision on including testimonial avatars in this specific demo hero.
*   Confirm if any minimal navigation/branding is needed directly on the hero demo page.
*   Source for the Inter-like font and method of inclusion (e.g., Google Fonts, local).
*   Specifics of the headline gradient.

---
This PRD will guide the development of the `app/hero-demo/page.tsx`.
We will tackle the implementation section by section. 