## 1. General Development Rules

- Always inspect the existing project structure before making changes.
- Do not recreate or overwrite the project unnecessarily.
- Follow the existing architecture and coding conventions.
- Write clean, readable, maintainable TypeScript code.
- Use reusable components whenever appropriate.
- Keep components focused and avoid unnecessary complexity.
- Do not introduce unnecessary dependencies.

## 2. Technology Restrictions

-Use Next.js App Router.
-Use TypeScript with strict typing.
-Use Tailwind CSS for styling.
-Use Framer Motion / Motion for React for interface animations.
-Use React Three Fiber and Three.js for the interactive 3D hero.
-Use Lucide React for icons.
-Follow the versions and APIs already installed in the repository.
-Check official documentation when version-specific behavior is uncertain.
-Do not install unnecessary libraries.
-Do not replace existing dependencies without a clear reason.
-Do not mix incompatible versions of React, Next.js, or 3D dependencies.



## 3. Design System Rules

- Follow the approved color palette strictly.
- Maintain consistent spacing, typography, border radii, and visual hierarchy.
- Support both Dark Mode and Light Mode.
- Dark Mode is the default.
- Use the approved green palette as the primary visual identity.
- Use purple only as a secondary accent.
- Avoid random colors and inconsistent gradients.
- Never use generic default UI components without adapting them to the design system.

## 4. Animation Rules

- Use Framer Motion for UI animations.
- Keep animations smooth, elegant, and consistent.
- Use scroll-triggered animations appropriately.
- Avoid excessive animation repetition.
- Avoid unnecessary layout shifts.
- Respect reduced-motion preferences.
- Optimize animation performance.
- Do not animate every element just for decoration.

## 5. 3D Rules

- The Hero 3D model is a major part of the website identity.
- Maintain realistic lighting, depth, and smooth movement.
- Optimize rendering and asset loading.
- Avoid unnecessary high-poly models.
- Avoid performance-heavy effects on mobile devices.
- Provide a fallback when WebGL is unavailable.
- Keep 3D rendering isolated in reusable components.

## 6. Responsive Rules

- Mobile-first development.
- Test all major sections on mobile, tablet, and desktop.
- Avoid horizontal overflow.
- Ensure readable typography and proper spacing.
- Adapt animations and 3D rendering to device capabilities.
- Mobile interactions must work without hover.

## 7. Code Quality Rules

- Use meaningful component and variable names.
- Avoid duplicated code.
- Avoid unnecessary useEffect and useState.
- Keep business logic separate from presentation where appropriate.
- Handle loading, empty, and error states.
- Use proper TypeScript types.
- Avoid `any` unless absolutely necessary.
- Do not leave broken imports or unused components.
- Do not ignore TypeScript or build errors.

## 8. Functionality Rules

- Every button must have a real purpose.
- Every navigation link must work.
- Theme switching must work correctly.
- WhatsApp and SMS links must use the correct phone number.
- Email form must have real validation and a working sending mechanism.
- Never display fake success messages.
- Do not create fake project links or social profiles.
- Do not use placeholder functionality in the final implementation.

## 9. Content Accuracy

- Use only the supplied personal information.
- Do not invent employment history, achievements, certifications, or technical expertise.
- Preserve the distinction between professional experience and training.
- Do not exaggerate backend development experience.
- Keep all dates and project descriptions accurate.
- Flag conflicting or missing information instead of silently inventing details.

## 10. SEO & Accessibility

- Add appropriate page metadata.
- Use semantic HTML.
- Provide meaningful alt text.
- Ensure keyboard navigation.
- Maintain accessible color contrast.
- Use accessible labels for form controls.
- Respect reduced-motion preferences.

## 11. Project Safety Rules

- Never delete existing files without verifying they are unused.
- Never modify unrelated functionality.
- Never replace working components without a clear reason.
- Do not perform large-scale refactoring without approval.
- Do not remove dependencies unless they are confirmed unnecessary.
- Keep changes focused on the requested task.

## 12. Workflow Rules

- Work in small, logical implementation stages.
- Explain the purpose of significant changes.
- Verify changes after implementation.
- Run linting and production build checks when possible.
- Fix errors introduced by your changes.
- Do not claim that something works unless it has been tested.
- Ask for approval before making major architectural or design changes.

()file

## 13. Main Resource of Data

- /data/George.Romany.CV.data.json
- data/profile_image.jpg

## FINAL RULE

Quality, visual consistency, performance, functionality, and maintainability are more important than unnecessary complexity.
