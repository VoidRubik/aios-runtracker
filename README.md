# RunTracker

Single-page GPS run tracker. Start and stop a run with live time, distance, speed, and average pace; review past runs on a calendar.

![RunTracker in progress](docs/screenshots/demo.gif)

## What it does

- **Live run screen** — elapsed time, distance, current speed, average pace, updating as you move.
- **Distance** via the haversine formula between `watchPosition` fixes, with sub-1-metre jitter ignored so a stationary phone doesn't accumulate drift.
- **On stop**, runs longer than 3 seconds that actually moved are saved to `localStorage`.
- **Calendar view** highlights days with a logged run; a recent-runs list shows the last 10.

## Stack

`index.html` is the entire app — markup, CSS, and JS inline, no framework, no `npm install`. `server.js` is a 21-line standard-library static server, needed only because the Geolocation API requires `localhost` or HTTPS — `file://` won't prompt for GPS.

## Run

```
node server.js      # → http://localhost:3000
```

## Status

**Partial.** The code is complete and verified to the extent a desktop allows: `node --check` passes on the inline script, and `server.js` serves with correct status and content-type. Live GPS accuracy, `watchPosition` behaviour, and multi-day history persistence are **unverified on a real phone** — that field test is the remaining work.
