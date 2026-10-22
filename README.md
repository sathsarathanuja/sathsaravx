# Sathsara VX — Portfolio

Personal portfolio of Thanuja Sathsara: projects, experience, skills, engineering notes, and writing.

Built with React 19, Vite, Tailwind CSS v4, Framer Motion, and React Router.

## Getting started

```bash
npm install
npm run dev      # local dev server
npm run build    # production build into dist/
npm run preview  # serve the production build
npm run lint     # oxlint
```

## Configuration

Optional environment variables (create a `.env` file):

| Variable | Purpose |
| --- | --- |
| `VITE_GITHUB_URL` | GitHub profile link in the navbar |
| `VITE_LINKEDIN_URL` | LinkedIn profile link in the navbar |
| `VITE_RESUME_URL` | Resume link; the Resume button stays hidden until this is set |

## Editing content

- `src/data/portfolioData.js` — projects, blog posts, education, social links
- `src/data/projectData.js` — project case studies (keyed by project id)
- `src/data/engineeringData.js` — engineering notebook topics
- `public/certificate.jpg` — degree certificate shown on the About page

Project and article links set to placeholders (`https://example.com`, `https://github.com`) are hidden automatically until real URLs are added.

## Deployment

The site uses client-side routing, so the host must serve `index.html` for unknown paths (e.g. a Vercel/Netlify rewrite) or deep links like `/projects/1` will 404 on refresh.
