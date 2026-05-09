# MindWorx Website

Static marketing site (HTML + CSS + vanilla JS) with a single Vercel Function
(`api/submit.js`) that delivers contact-form submissions to
`mindworxai@gmail.com` via [Resend](https://resend.com).

## Environment variables

The contact form needs these variables set in **Vercel project settings** (and
in a local `.env` file when running `vercel dev`):

| Variable             | Required | Default                                       | Notes |
|----------------------|----------|-----------------------------------------------|-------|
| `RESEND_API_KEY`     | yes      | (none)                                        | Get from the Resend dashboard. |
| `CONTACT_TO_EMAIL`   | no       | `mindworxai@gmail.com`                        | Where contact submissions are delivered. |
| `CONTACT_FROM_EMAIL` | no       | `MindWorx Website <onboarding@resend.dev>`    | Use Resend's sandbox sender until a custom domain is verified. Once `mindworx.ai` (or another domain) is verified in Resend, set this to e.g. `MindWorx <forms@mindworx.ai>`. |

The function sets the email's `Reply-To` header to the submitter's email
address, so hitting **Reply** in Gmail responds directly to the lead.

## Local development

```bash
npm install
vercel dev
```

`vercel dev` is required to run the `/api/submit` route locally. `npx serve`
or any plain static server will return 404 for the form submission.

## Project layout

The site is rendered with React + Babel-on-the-fly via CDN. Each HTML page
loads `js/shared.jsx` (nav, footer, hooks) plus its page-specific bundle. No
build step required.

```
api/
  submit.js          # POST handler that sends contact form to Resend
assets/
  logos/             # third-party logo SVGs (homepage logo strip)
  readysetgo-agent.png       # homepage Products card image
  readysetgo-agent-hero.jpg  # ReadySetGo page hero image
css/
  style.css          # site-wide styles (was design/site-export/styles.css)
  subpages.css      # subpage-specific styles
docs/                # internal docs (SCAN framework, copy archive, etc.)
js/
  shared.jsx        # NavShared, FooterShared, hooks; loaded on every page
  app.jsx           # homepage
  about.jsx
  constellation.jsx
  readysetgo.jsx
  contact.jsx       # contact form (POSTs to /api/submit)
index.html          # home
about.html
constellation.html  # product page (Constellation)
readysetgo.html     # product page (ReadySetGo)
contact.html        # contact form
```

## Contact form contract

All forms post a flat JSON payload to `/api/submit`:

```json
{
  "FullName": "Jane Doe",
  "Email":    "jane@example.com",
  "Phone":    "5551234567",
  "Zip":      "30303",
  "Subject":  "Missing calls when things get busy or after hours",
  "source":   "contact"
}
```

`FullName`, `Email`, and `Phone` (10+ digits) are all required. `source`
identifies which page the submission came from.
