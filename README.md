This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Lucky Shrub
Lucky Shrub is a fictitious garden center in Taos, NM that sells both indoor and outdoor plants. The previous version of the site was a class project for one of the courses in Meta's Frontend Developer Professional Certificate on Coursera. It was written in only HTML, CSS, and a small amount of vanilla JavaScript.

Over the past week, I created this revamped version of the site so I could better understand modern web development technologies, preparing myself for a career Frontend development. My biggest challenges were learning how NextJS and React work together--especially the newest version of NextJS--and figuring out mobile design with MUI. My most enjoyable moments were being able to get the hang of Tailwind so fast and realizing that TypeScript is not as intimidating as I originally anticipated.

It would be cool to eventually turn this website into a fullstack project with interactive shopping cart and MongoDB. However, my primary focus is improving my Front-End skills, so the fullstack version will have to wait until I'm more comfortable with the Front-End.

## Technologies Used
**NextJS**: As a framework built on top of React, NextJS allows for pre-rendering and server-side rendering, which provides the advantage of optimizing the website for better SEO and initial loading performance.

All of my pages received Google Lighthouse scores of 100 , with the exception of 97 Accessibility, thanks to all of the helpful features.

**TypeScript**: This super set of JavaScript introduces static types, making code more robust and easier to maintain by catching potential problems early in the development cycle. It also enhances code readability and predictability.

Even though TyeScript requires a bit more time to write. I feel like I avoided most of the bugs thanks to TypeScript not letting me complete a task sloppily.

**React**: A JavaScript library for building user interfaces, React allows for component-based architecture. This means that the UI can be split into independent, reusable pieces which makes the code more organized and easier to manage.

I like React's functional, component-based approach to problem solving to minimize the amount of code in one file and to make it easier to debug in small pieces.

**Tailwind CSS**: This utility-first CSS framework is highly customizable and provides low-level utility classes to build custom designs. It promotes component consistency and can improve productivity by reducing the amount of CSS a developer has to write.

I originally did not understand the appeal Tailwind, compared to other forms of CSS, but it's an in-demand tool that I needed to learn. The class system was intuitive and flexible, with freedom to customize. I found it easier to do responsive design than writing a bunch of media queries.

**Material UI**: Material UI is an open-source React component library that implements Google's Material Design. Material UI is beautiful by design and features a suite of customization options that make it easy to implement your own custom design system on top of our components.

I wanted the mobile experience to be as user friendly as possible. Previously, I did mobile design manually with CSS Grid. However, using a UI library looks much more familiar to mobile users and the general consensus was that the mobile experience with MUI is more enjoyable.

---
## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
