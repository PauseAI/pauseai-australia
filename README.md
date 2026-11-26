# PauseAI Australia website

The website of PauseAI Australia, at [pauseai.org.au](https://pauseai.org.au). Run by PauseAI Australia; hosted on PauseAI Global's Netlify team.

## Editing a page

Each page is a Markdown file in `src/`:

| Page | File |
|---|---|
| Home | `src/index.md` |
| Why Australia | `src/detail.md` |
| Our progress | `src/progress.md` |

Images go in `src/australia/` and are linked as `/australia/<file name>`.

1. On GitHub, open the file and click the pencil icon to edit it.
2. Make your change, then choose **Create a new branch** and **Propose changes**, and open the pull request.
3. Netlify adds a preview link to the pull request after a minute or two. Check the page there.
4. Merge the pull request. The live site updates a minute or two later.

## Running it on your computer (optional)

With Node 20 or later:

```
npm install
npm run dev
```

Then open http://localhost:8080.

## Domains

- `pauseai.org.au` is the site.
- `pauseai.au` redirects to it (see `netlify.toml`).
- The old `pauseai.info/australia`, `/australia-detail`, `/australia-progress` and `/australia-story` pages redirect here once the new pauseai.info launches.
