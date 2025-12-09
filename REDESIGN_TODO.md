# REDESIGN TODO: Warm Accents with Terracotta and Gold

## Overview

Apply warm accents (terracotta and gold) throughout the project to create a more inviting and premium feel. This involves updating color variables, Tailwind config, and applying the new palette to key components.

## Tasks

- [x] Defining Terracotta and Gold variables in globals.css
- [x] Updating tailwind.config.ts to include new color ranges
- [x] Updating Navbar with warm accents
- [x] Applying warm accents to Navbar links and mobile menu
- [x] Updating Home Page with diversified color palette
- [x] Applying new color palette to Home Page sections
- [x] Updating ProductCard badges and hover effects

## Notes

- Terracotta: Use --brand-secondary-600 to --brand-secondary-400 for warm earth tones
- Gold: Use --brand-accent-500 to --brand-accent-300 for metallic highlights
- Ensure accessibility and contrast ratios are maintained
- Test in both light and dark modes
- Update hover states and interactive elements accordingly

## Files to Update

- `src/app/globals.css` - Define new color variables
- `tailwind.config.ts` - Add new color ranges to Tailwind
- `src/app/components/Navbar/index.tsx` - Apply warm accents
- `src/app/page.tsx` - Update Home Page sections
- `src/app/components/ProductCard/index.tsx` - Update badges and hovers

## Dependencies

- Ensure Tailwind config is updated before applying to components
- Test components individually after updates
- Run development server to verify changes

## Testing

- [x] Light mode appearance
- [x] Dark mode appearance
- [x] Hover states and interactions
- [x] Mobile responsiveness
- [x] Accessibility compliance

## Completion Criteria

- All components use the new warm accent palette
- Consistent application across light and dark modes
- Improved visual hierarchy with terracotta and gold accents
- No breaking changes to existing functionality
