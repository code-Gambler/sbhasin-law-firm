# Copilot instructions for this repo

## Project overview
- Single-page React app (Create React App). Entry is `src/index.js`, which renders `src/App.js`.
- `src/App.js` composes page sections (Banner, Testimonials, Skills, Team, Contact, Footer) as a linear marketing site.
- Content and assets are centralized in `src/data.js` and `src/assets/img/**` and then mapped into UI components.

## Key UI patterns
- Styling is Tailwind CSS; global utility patterns live in `src/index.css` (e.g., `.section`, `.form-control`, `.btn`).
- Theme tokens (colors, fonts, breakpoints) are in `tailwind.config.js` and are referenced via Tailwind class names.
- Navigation uses `react-scroll` with section `id` anchors (`home`, `skills`, `team`, `contact`). When adding a new section, update `navigation` in `src/data.js` and add a matching `id` to the section element.
- Testimonials use Swiper. Slider configuration and pagination live in `src/components/TestimonialSlider.js` and styles are in `src/testimonialSlider.css`.
- The disclaimer modal uses MUI components with inline `sx` styling in `src/components/AutoOpenModal.js`; this is the only part that uses MUI instead of Tailwind.

## Data and integrations
- `src/data.js` defines `navigation`, `testimonials`, `skills`, `team`, and `social` arrays that are mapped in their respective components.
- Appointment form sends email via EmailJS in `src/components/Appointment.js` using `.sendForm` and `useRef`.

## Developer workflows
- Start dev server: `npm start`
- Build: `npm run build`
- Tests (CRA/Jest): `npm test`

## Conventions to follow
- Prefer updating `src/data.js` for content changes rather than hard-coding inside components.
- Keep Tailwind utility class structure consistent with existing components; favor container-based layouts (`container mx-auto`) and section spacing via `.section`.
- Use existing asset directories in `src/assets/img/**` for new images and import them in `src/data.js`.
