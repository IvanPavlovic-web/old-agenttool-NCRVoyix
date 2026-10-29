# Agent Tool | Voyix

A browser-only support utility for composing ticket notes, summaries, and email drafts.

## Run locally

Open `index.html` in a browser, or serve this folder over HTTP:

```powershell
python -m http.server 8000
```

Then open `http://localhost:8000`.

Clipboard access works in secure browser contexts such as `localhost` and GitHub Pages.

## Public deployment

The GitHub Actions workflow publishes the static site to GitHub Pages whenever changes are pushed to `main`.
The expected URL is `https://ivanpavlovic-web.github.io/old-agenttool-NCRVoyix/`.

The public version intentionally excludes security-weakening system commands and company-only SharePoint links,
employee email addresses, and internal network paths. Email drafts open without preset recipients so the user can
choose an appropriate recipient.

This static site does not send form data to a server. Avoid entering real customer or confidential information on a
public website.
