# File Ownership — Who Edits What

## Your Files (Chuck owns — never overwritten by ZIP updates)

| File / Folder | What it contains |
|---|---|
| `speakers.json` | Speaker roster — name, title, photo path |
| `images/` | Speaker headshots and any other photos |

### Adding a speaker
1. Drop their headshot into `/images/` — name it `firstname-lastname.jpg`
2. Open `speakers.json` and add one entry:
```json
{
  "name": "First Last",
  "title": "Their Title",
  "photo": "images/firstname-lastname.jpg"
}
```
3. Save, then push:
```powershell
git add .
git commit -m "Add speaker: First Last"
git push
```
The speaker grid on the landing page and apply-to-speak page updates automatically.

---

## My Files (Claude owns — updated via ZIP)

| File | What it contains |
|---|---|
| `index.html` | Main landing page |
| `vip.html` | VIP offer page |
| `optin.html` | Registration form page |
| `thank-you.html` | Post-registration confirmation |
| `apply-to-speak.html` | Speaker/sponsor application page |
| `apply-to-coach.html` | Featured Coach application page |
| `privacy.html` | Privacy Policy |
| `terms.html` | Terms & Conditions |
| `css/styles.css` | Shared design system |
| `js/main.js` | FAQ accordion + speaker renderer |
| `content.json` | Structured content for all pages |
| `package.json` | Railway/Node start command |
| `vercel.json` | URL rewrites (kept for reference) |
| `README.md` | General project documentation |
| `README-files.md` | This file |

---

## ZIP Update Rule

When Claude delivers a ZIP update, it contains **only files from the "My Files" list above**.
Your `speakers.json` and `images/` folder are **never included** in ZIP updates and will never be overwritten.

Always extract the ZIP, copy the changed files into your local repo folder, then push — your owned files are untouched.
