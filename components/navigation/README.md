# Navigation Components

This directory contains navigation components used across the website.

## Navbar

The `Navbar` component is the main navigation bar for the website. It features:

- Responsive design (mobile and desktop views)
- Dynamic state changes based on scroll position
- Two button states:
  - Two buttons when at the top of the page (Login and Get Started)
  - Single CTA button when scrolled (Start Validating)
- Matching styling with the main CTA button from the hero section

### Usage

```tsx
import { Navbar } from "@/components/navigation"

export default function Layout() {
  return (
    <>
      <Navbar />
      {/* Your content here */}
    </>
  )
}
```

### Customization

The Navbar uses the same styling as the CTA button in the hero section. You can customize the menu items by editing the `menuItems` array in `navbar.tsx`.

```tsx
const menuItems = [
  { name: "Features", href: "#link" },
  { name: "Solution", href: "#link" },
  { name: "Pricing", href: "#link" },
  { name: "About", href: "#link" }
]
```

### Additional Notes

- The `Navbar` component was previously known as `HeroHeader` and located in `components/layout/hero-header.tsx`
- All navigation-related components should be placed in this directory 