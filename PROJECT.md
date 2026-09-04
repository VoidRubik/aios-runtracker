# RunTracker

Single-page GPS run tracker. Browser Geolocation API + localStorage, no build step, no deps.

**Grade: Built** (server verified serving; GPS path unverified — needs a real device/browser, no headless GPS in this environment).

## What it does

- Start/stop a run; live time, distance (km), speed (km/h), average pace (min/km) while tracking.
- Distance via haversine between successive `watchPosition` fixes (sub-1m jitter ignored).
- On stop, run is saved to `localStorage` (date, duration, distance, avg pace) if it ran >3s and moved.
- Calendar view (prev/next month) highlights days a run was logged.
- Recent-runs list, last 10.

## Run it

```
node projects/RunTracker/server.js
```
Open `http://localhost:3000`. Geolocation requires `localhost` or HTTPS — plain `file://` will not prompt for GPS permission in most browsers, which is why `server.js` exists.

## Files

- `index.html` — entire app: markup, CSS, JS inline. No framework, no npm install.
- `server.js` — stdlib `http`/`fs` static server, one route.

## Verified

- `node --check` on the extracted inline script: passes (no syntax errors).
- `server.js` boots and serves `index.html` with `200` + correct content-type (curl-verified).

## Not verified (needs Bruno, real browser + device)

- Live GPS tracking, `watchPosition` accuracy/behavior on a real phone.
- Calendar/history persistence across real multi-day use.
- Any UI/UX judgment beyond "renders, no console errors" — no design review pass run.
