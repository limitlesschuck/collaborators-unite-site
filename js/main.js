/* ── FAQ ACCORDION ─────────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  const btns = document.querySelectorAll('.faq-btn');
  btns.forEach((btn, i) => {
    const body = btn.nextElementSibling;
    const sign = btn.querySelector('.faq-sign');
    if (i === 0) { body.classList.add('open'); sign.textContent = '–'; }
    btn.addEventListener('click', () => {
      const isOpen = body.classList.contains('open');
      document.querySelectorAll('.faq-body').forEach(b => b.classList.remove('open'));
      document.querySelectorAll('.faq-sign').forEach(s => s.textContent = '+');
      if (!isOpen) { body.classList.add('open'); sign.textContent = '–'; }
    });
  });
});

/* ── FORMSPREE AJAX SUBMISSION ─────────────────────────────────────────── */
// Handles both speak and coach forms — shows success message without page reload
['speak-form', 'coach-form'].forEach(id => {
  const form = document.getElementById(id);
  if (!form) return;
  const successId = id.replace('-form', '-success');
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = form.querySelector('[type="submit"]');
    btn.textContent = 'Submitting...';
    btn.disabled = true;
    try {
      const res = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      });
      if (res.ok) {
        form.style.display = 'none';
        document.getElementById(successId).style.display = 'block';
        document.getElementById(successId).scrollIntoView({ behavior: 'smooth', block: 'center' });
      } else {
        btn.textContent = 'Something went wrong. Please try again.';
        btn.disabled = false;
      }
    } catch {
      btn.textContent = 'Something went wrong. Please try again.';
      btn.disabled = false;
    }
  });
});


// Reads speakers.json and renders speaker cards into any element with
// id="speaker-grid". Adds a "More speakers coming soon" card at the end.
// To add a speaker: edit speakers.json and drop their photo in /images/
async function loadSpeakers() {
  const grid = document.getElementById('speaker-grid');
  if (!grid) return;

  try {
    const res = await fetch('/speakers.json');
    if (!res.ok) throw new Error('speakers.json not found');
    const speakers = await res.json();

    grid.innerHTML = speakers.map(s => `
      <div class="speaker-card">
        <img
          class="speaker-photo"
          src="${s.photo}"
          alt="${s.name}"
          onerror="this.style.display='none';this.nextElementSibling.style.display='flex';"
        >
        <div class="speaker-photo" style="display:none;align-items:center;justify-content:center;">
          <span style="font-family:ui-monospace,monospace;font-size:11px;letter-spacing:0.04em;color:var(--navy);opacity:0.5;">photo</span>
        </div>
        <div class="speaker-name">${s.name}</div>
        <div class="speaker-title">${s.title}</div>
      </div>
    `).join('') + `
      <div class="speaker-card-more">
        <div class="speaker-more-icon">+</div>
        <p style="margin:0;font-size:15px;line-height:1.55;color:var(--navy);">
          More speakers being announced soon.
          <a href="https://go.collaboratorsunite.com/optin" style="color:var(--gold-dark);font-weight:700;">Register now</a>
          to be the first to know who's joining us.
        </p>
      </div>
    `;
  } catch (e) {
    console.warn('Could not load speakers.json:', e);
  }
}

loadSpeakers();
