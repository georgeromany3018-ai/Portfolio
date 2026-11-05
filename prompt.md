# Project: George Romany — Premium 3D Developer Portfolio

Act as a Senior UI/UX Designer, Creative Developer, and Senior Next.js Engineer.

Your task is to design and develop a premium, modern, visually impressive, interactive personal portfolio website for **George Romany — Software Engineer & Full-Stack Web Developer**.

The website must communicate professionalism, technical skills, creativity, and attention to detail.

This is not a generic developer portfolio. It should feel like a premium digital experience with sophisticated animations, interactive elements, and a memorable 3D hero section.

## 1. Technology Stack

Use the following technologies:

- Next.js with App Router.
- React.js.
- TypeScript.
- Tailwind CSS.
- Framer Motion for animations and transitions.
- Three.js / React Three Fiber for 3D rendering.
- React Three Drei for 3D helpers.
- Lucide React for icons.
- next/font/google for the Poppins font.

Use clean, reusable, component-based architecture.

## 2. Visual Identity & Color System

Create a consistent visual identity using the following palette.

### Primary Dark Theme

- Main Background: #0D0E11
- Secondary Background: #0A1112
- Primary Accent: #00F299
- Secondary Green: #00A36C
- Deep Green: #004D34
- Bright Highlight: #2CF766
- Green Surface: #1C5934
- Purple Accent: #8F7CFF
- Primary Text: #FFFFFF
- Secondary Text: #94A3B8
- Muted Text: #617275

### Light Theme

- Main Background: #F8FAFC
- Secondary Background: #FFFFFF
- Primary Accent: #006B4B
- Secondary Accent: #008F63
- Soft Green Surface: #DDF7EC
- Purple Accent: #5B4ACB
- Primary Text: #0D0E11
- Secondary Text: #475569

Use CSS variables or Tailwind theme tokens to manage colors consistently.

The dark theme should be the default theme.

Implement a fully functional Dark/Light Mode toggle and persist the user's preference.

Use green gradients and subtle purple highlights sparingly. Avoid excessive gradients, glowing effects, or oversaturated colors.

## 3. Typography

Use **Poppins** throughout the entire website.

Typography should be:

- Modern and professional.
- Strong and distinctive for headings.
- Highly readable for paragraphs.
- Consistent in size, weight, spacing, and hierarchy.

Use appropriate font weights rather than making all text bold.

## 4. Hero Section — Main Attraction

The Hero Section is the most important part of this project.

Create a visually impressive, immersive hero section featuring a high-quality interactive 3D model.

3D requirements:

- Use React Three Fiber and Three.js.
- Create or integrate a visually sophisticated 3D object/model.
- The 3D model should have smooth animations and subtle rotation.
- Add mouse-responsive movement where appropriate.
- Use realistic lighting, shadows, and depth.
- Integrate the 3D scene naturally into the website's design.
- Keep the scene optimized for performance.
- Provide a graceful fallback for devices that cannot handle 3D rendering.

The hero content should include:

Name: George Romany

Professional Title: Software Engineer | Full-Stack Web Developer

A short, engaging professional introduction based on the supplied profile information.

Primary CTA:

- Explore My Work
- Contact Me

Include subtle animated text, elegant entrance animations, and interactive visual details.

The first impression should be memorable without sacrificing readability or professionalism.

## 5. Website Sections

Build the following sections:

### A. Navigation Bar

- Minimal and modern navigation.
- Logo/name: George Romany.
- Navigation links to all main sections.
- Dark/Light Mode toggle.
- Smooth scrolling.
- Responsive mobile navigation.
- Sticky navigation with subtle scroll effects.

### B. Hero Section

Implement the 3D experience described above.

### C. About Me

Present a concise and professional introduction.

Highlight:

- Full-Stack Web Development.
- React and Next.js.
- Node.js and Express.js.
- Practical application development.
- Previous Document Control experience and transferable professional skills.

### D. Technical Skills

Organize skills into clear categories:

- Frontend Development.
- React Development.
- Backend Development.
- API Integration.
- Forms & Validation.
- Database Fundamentals.
- Tools & Version Control.

Use elegant skill cards, interactive elements, or visual technology representations.

Avoid fake proficiency percentages or arbitrary skill ratings.

### E. Featured Projects

Showcase the projects using premium project cards.

Projects include:

1. E-commerce Web Application.
2. Todo Management Application.

Each project should include:

- Project screenshot or visual preview.
- Project title.
- Short description.
- Technologies used.
- Key features.
- Live Demo link when available.
- GitHub link when available.

Use interactive hover effects and subtle animations.

Do not invent project URLs, screenshots, or features.

### F. Experience & Education

Present professional experience and education using a clean timeline layout.

Include:

- AMIT Learning — MERN Stack Web Development Training.
- Thebes Academy — Management Information Systems.
- Document Control — 7 years of professional experience.

### G. Courses & Certifications

Display the supplied programming courses and certifications in a clean layout.

### H. Contact Section

Create an accessible and attractive contact experience.

Include three communication methods:

1. WhatsApp:
   Open a direct WhatsApp conversation using my phone number.

2. SMS:
   Open the device's default messaging application with my phone number.

3. Email Contact Form:
   Include:
   - Full Name.
   - Email Address.
   - Subject.
   - Message.
   - Send Message button.

Implement proper form validation, loading states, success messages, and error handling.

The email form must actually send messages through a secure server-side implementation. Never expose API keys or private credentials in client-side code.

WhatsApp number: +201055387922

Email: george.romany.dev@gmail.com

### I. Footer

Include:

- Name and professional title.
- Quick navigation links.
- Email and social links.
- Copyright information.
- Back-to-top functionality.

## 6. Animation & Interaction Strategy

Use Framer Motion extensively throughout the website.

Implement:

- Smooth page entrance animations.
- Staggered text and element reveals.
- Scroll-triggered animations.
- Section transitions.
- Interactive hover effects.
- Animated buttons.
- Project card interactions.
- Navigation transitions.
- Subtle background animations.
- Smooth theme transitions.
- Micro-interactions.

Animations should feel premium, fluid, and intentional.

Avoid unnecessary animations that negatively affect performance or user experience.

Respect prefers-reduced-motion accessibility settings.

## 7. Responsive Design

The website must work perfectly on:

- Desktop.
- Laptop.
- Tablet.
- Mobile devices.

Adapt the 3D model, typography, navigation, spacing, cards, and animations to different screen sizes.

Do not simply shrink the desktop layout.

## 8. Performance & Quality

Prioritize:

- Optimized 3D rendering.
- Lazy loading where appropriate.
- Optimized images.
- Code splitting.
- Reusable components.
- Clean TypeScript.
- SEO metadata.
- Semantic HTML.
- Accessibility.
- Fast loading times.

Avoid unnecessary dependencies and excessive client-side rendering.

## 9. Final Design Direction

The final website should combine:

Premium Corporate Design + Futuristic Visual Identity + Interactive 3D + Smooth Motion Design.

It should look like a professionally designed portfolio created by an experienced creative development team.

The design must be visually impressive but remain suitable for real job applications and professional recruiters.

## 10. Implementation Instructions

Before implementing:

1. Analyze the requirements and supplied personal information.
2. Establish the design system and project architecture.
3. Plan the sections and reusable components.
4. Identify the best approach for the 3D hero experience.

Then implement the complete website.

Do not stop at a static mockup or a simple landing page.

All navigation, theme switching, animations, buttons, and contact interactions must work.

Use the supplied personal information as the source of truth. Do not invent experience, qualifications, project results, or external links.

The final result must be production-oriented, responsive, polished, and maintainable.
