# The Collaborators UNITE Experience — Website

## Pages

| File | URL | Purpose |
|------|-----|---------|
| `index.html` | `/` | Main landing page — free registration |
| `optin.html` | `/optin` | Registration form (Systeme.io embed) |
| `vip.html` | `/vip` | VIP upgrade offer — $97 pre-event, $197 during |
| `thank-you.html` | `/thank-you` | Post-registration confirmation |

## Registration Flow

```
CollaboratorsUniteExperience.com  (landing page)
        ↓  CTA clicks
go.collaboratorsunite.com/optin   (Systeme.io — affiliate cookie set via proxy link)
        ↓  after optin
CollaboratorsUniteExperience.com/vip  (VIP offer)
        ↓  upgrades or skips
CollaboratorsUniteExperience.com/thank-you
```

## Design System

All tokens are in `css/styles.css` under `:root`:

| Token | Value | Used For |
|-------|-------|----------|
| `--cream` | `#FEF6E4` | Page backgrounds |
| `--navy` | `#1C2439` | Headlines, dark sections |
| `--offwhite` | `#FBF7F1` | Nav, light section backgrounds |
| `--amber` | `#F9B84A` | CTA buttons, accents |
| `--gold-dark` | `#B47F12` | Hover states, labels |
| `--steel` | `#2E4452` | Card backgrounds on dark sections |

**Fonts:** Outfit (headings) + Source Sans 3 (body) — loaded from Google Fonts

## Editing Content

All page copy is in `content.json`. To update text without touching HTML:
1. Open `content.json`
2. Find the section you want to change
3. Update the text value
4. Re-render (or manually copy the updated text into the HTML)

> Note: The site currently uses static HTML. If you want content.json to auto-render,
> a simple build script can be added to inject JSON values into HTML templates.

## Systeme.io Integration

### Optin form (optin.html)
Replace the placeholder `div#sio-optin-form` with your Systeme.io inline form embed script:
1. Go to your Systeme.io funnel
2. Click your optin step
3. Click "Script"
4. Copy the embed code
5. Paste it in place of the placeholder div

### Order form (vip.html)
Replace the placeholder `div#sio-order-form` with your Systeme.io order form embed script:
1. Go to your Systeme.io funnel
2. Click your order/payment step
3. Click "Script"
4. Copy the embed code
5. Paste it in place of the placeholder div

### Affiliate proxy link
Set up in Systeme.io under Settings > Affiliate Program > Affiliate Proxy Links:
- Label: Collaborators UNITE Experience
- URL: https://CollaboratorsUniteExperience.com
- Domain: go.collaboratorsunite.com

Partners use: `go.collaboratorsunite.com/proxy/XXXXXX?sa=AFFILIATEID`

## Deploying to Vercel

1. Push this folder to a GitHub repository
2. Go to vercel.com and import the repository
3. No build settings needed — Vercel auto-detects static HTML
4. Add custom domain: `CollaboratorsUniteExperience.com`
5. Done

## Adding Speaker Photos

In each speaker card, replace the `.speaker-photo` div with an `<img>` tag:

```html
<!-- Before -->
<div class="speaker-photo"></div>

<!-- After -->
<img class="speaker-photo" src="images/chuck-anderson.jpg" alt="Chuck Anderson">
```

Add photos to an `/images/` folder in the project.

## CTA Links to Update

When Systeme.io funnel is live, update these URLs:
- All "Save My Free Spot" buttons → `https://go.collaboratorsunite.com/optin`
- VIP upgrade buttons → your Systeme.io order page URL
- "No thanks" links on VIP page → `/thank-you.html`
