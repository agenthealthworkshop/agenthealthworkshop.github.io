# AgentHealth · ICLR 2027 workshop proposal

Scientific workshop website for **Agentic AI for Healthcare: From Clinical Intelligence to Biomedical Discovery**.

The page uses a minimal academic layout. All speaker and organizer portraits are visible; biographies, organizing roles, submission policies, and the full schedule expand on demand.

Live site: https://zdh2292390.github.io/agenthealth-iclr2027/

The workshop is at the proposal stage. Participation, talk assignments, dates, and submission plans are tentative until workshop acceptance and participant confirmation.

## Update the website

- Edit `index.html` for the research agenda, contribution policies, dates, and case-clinic description.
- Edit `data.js` for speaker profiles, organizer roles, and program sessions.
- Edit `styles.css` for typography and responsive layout.
- `script.js` renders the participant lists and implements the schedule filters.

This is a static website with no package installation or build step. For a local preview, run `python3 -m http.server 8765` in this directory and open http://localhost:8765/.

GitHub Pages publishes the root of the `main` branch. Committing and pushing an update triggers publication. Keep `.nojekyll` to serve the files directly.

## Portrait sources

Official portrait and profile URLs are recorded in `assets/sources.json`. The photographs are credited to their original institutional or organizational sources; they are not licensed as original website artwork. Participant confirmation and consent to be listed should be completed before the accepted workshop announcement.

## Conference references

- [ICLR 2027 workshop guidelines](https://iclr.cc/Conferences/2027/WorkshopGuidelines)
- [ICLR 2027 call for workshops](https://iclr.cc/Conferences/2027/CallForWorkshops)
- [ICLR 2027 dates](https://iclr.cc/Conferences/2027/Dates)
