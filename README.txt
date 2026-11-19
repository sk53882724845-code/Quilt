VORTEX AI WEBSITE — SETUP
All files are in the ZIP root; there are no nested folders.

Pages: index.html, signup.html, login.html, dashboard.html, apply.html,
pricing.html, docs.html, status.html.
Shared assets: styles.css, app.js, firebase.js, firestore.rules.

FIREBASE SETUP
1. Create a project at https://console.firebase.google.com/
2. Add a Web App and copy its config into firebase.js, replacing YOUR_... values.
3. Authentication > Sign-in method: enable Email/Password.
4. Create a Firestore database and publish firestore.rules.
5. Add your hosting domain to Authentication > Settings > Authorized domains.
6. Host on HTTPS (e.g. GitHub Pages). Do not open pages using file://.

FUNCTIONS
- Firebase email/password signup and login.
- New accounts receive 100 demo credits in Firestore.
- Signed-in users can submit a YouTube channel application.
- Users can read their own profile and application.
- Users cannot edit credits/roles or modify applications through these rules.

LIMITATIONS
- No payment collection or purchase feature is enabled.
- Credit pricing is informational only.
- Application submission does not automatically authorize YouTube or start VORTEX.
- No admin review panel is included yet.
- Status page is a placeholder; it does not monitor QuiltCore3 or VORTEX.
- OAuth tokens, API keys, and service-account private keys must remain on a secure backend.
- Firebase Web App config is designed for client use; never publish private service-account credentials.

Brand: VORTEX AI | Built by Quilt Studio
