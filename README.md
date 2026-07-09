# BitLinks — URL Shortener

BitLinks is a full-stack URL shortener built with **Next.js (App Router)** and **MongoDB**. Paste a long URL, pick your own custom slug, and get a short, shareable link that redirects visitors to the original destination.

## Features

- 🔗 **Custom short links** — choose your own slug instead of a random string
- ⚡ **Instant redirection** — dynamic `[shorturl]` route looks up the destination in MongoDB and redirects server-side
- 🚫 **Duplicate protection** — the API rejects a slug that's already taken instead of overwriting it
- 🎨 **Modern responsive UI** — built with Tailwind CSS v4, includes Home, About, Shorten, and Contact pages
- 🗄️ **MongoDB persistence** — links are stored in a `bitlinks` database via a pooled connection client

## Tech Stack

| Layer      | Technology                        |
|------------|-------------------------------------|
| Framework  | Next.js 16 (App Router, Turbopack)  |
| UI         | React 19, Tailwind CSS 4             |
| Database   | MongoDB (official Node.js driver)   |
| Linting    | ESLint (`eslint-config-next`)       |

## Project Structure

```
bitlinks-url-shortner/
├── app/
│   ├── [shorturl]/
│   │   └── page.js          # Looks up a slug in MongoDB and redirects
│   ├── about/
│   │   └── page.js          # About page
│   ├── api/
│   │   └── generate/
│   │       └── route.js     # POST endpoint that creates a new short link
│   ├── contact/
│   │   └── page.js          # Contact form (UI only, no backend wiring yet)
│   ├── shorten/
│   │   └── page.js          # Form to submit a URL + custom slug
│   ├── layout.js            # Root layout (Navbar + fonts)
│   ├── page.js               # Landing page
│   └── globals.css
├── components/
│   └── Navbar.js
├── lib/
│   └── mongodb.js           # MongoDB client connection (pooled in dev)
├── public/                  # Static assets
├── package.json
└── next.config.mjs
```

## How It Works

1. On `/shorten`, the user submits a destination URL and a preferred slug.
2. The form `POST`s that data to `/api/generate`.
3. The API route checks MongoDB's `url` collection for an existing document with the same `shorturl`. If found, it returns an error instead of overwriting the link.
4. Otherwise, it inserts a new document `{ url, shorturl }` into the `bitlinks` database.
5. When anyone visits `yourdomain.com/<shorturl>`, the dynamic `app/[shorturl]/page.js` route queries MongoDB for a matching document and issues a server-side redirect to the original URL — or falls back to the homepage if the slug doesn't exist.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- A MongoDB instance (local or [MongoDB Atlas](https://www.mongodb.com/atlas))

### Installation

```bash
git clone https://github.com/Hasnain-jaffer/bitlinks-url-shortner.git
cd bitlinks-url-shortner
npm install
```

### Environment Variables

Create a `.env.local` file in the project root:

```bash
MONGODB_URI=your_mongodb_connection_string
NEXT_PUBLIC_HOST=http://localhost:3000
```

- `MONGODB_URI` — connection string for your MongoDB database
- `NEXT_PUBLIC_HOST` — the base URL used to build generated short links and as the fallback redirect target

### Running the App

```bash
npm run dev
```

Open **http://localhost:3000** in your browser. Go to `/shorten` to create your first short link.

## Roadmap

The About page describes an analytics-driven, branded-link platform — some of that is still ahead:

- [ ] Click tracking and analytics dashboard (visits, referrers, locations)
- [ ] Random slug generation as an alternative to custom slugs
- [ ] Contact form backend (currently logs to console only)
- [ ] User accounts to manage and edit personal links
- [ ] Link expiration / deactivation
- [ ] Rate limiting and abuse protection on `/api/generate`

## Contributing

Contributions, issues, and feature requests are welcome. Feel free to open an issue or submit a pull request.

## License

This project is licensed under the ISC License.

## Author

**Hasnain Jaffer**
- GitHub: [@Hasnain-jaffer](https://github.com/Hasnain-jaffer)
