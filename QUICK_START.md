# 🚀 QUICK START GUIDE

## Welcome to Your Premium Portfolio!

This guide will help you get started with running, customizing, and deploying your portfolio website.

---

## ⚡ Quick Setup (5 minutes)

### 1. **Open the Site Locally**

**Option A: Using Python (Easiest)**
```bash
# Navigate to your portfolio folder
cd /Users/rayane/Desktop/portfolio_rayane

# Start local server
python -m http.server 8000

# Visit in browser: http://localhost:8000
```

**Option B: Using Node.js**
```bash
npm install -g http-server
http-server

# Visit the URL shown in terminal
```

**Option C: Just Open in Browser**
- Double-click `index.html` in your portfolio folder
- Note: Some features work better with a server

---

## ✏️ Customizing Your Portfolio (30 minutes)

### Step 1: Update Personal Information

Open `index.html` in your text editor and update:

**Line 31-34: Name and Introduction**
```html
<h1 class="hero-title">Rayane Inaghnane</h1>
<div class="hero-subtitle">
    <span class="subtitle-line">Documentary Filmmaker</span>
```

**Line 98-101: About Section**
```html
<p>Based in Rabat, Morocco, I am a 23-year-old filmmaker...</p>
```

**Line 118-122: Contact Information**
```html
<div class="info-card">
    <h3>Contact</h3>
    <p><a href="mailto:rayaneinagh01@gmail.com">rayaneinagh01@gmail.com</a></p>
    <p><a href="tel:+212642784087">+212 642 784087</a></p>
</div>
```

### Step 2: Update Social Media Links

Find sections in HTML and update URLs:

**Search for:** `href="https://instagram.com"`

Replace with:
- Instagram: `https://instagram.com/yourprofile`
- LinkedIn: `https://linkedin.com/in/yourprofile`
- Vimeo: `https://vimeo.com/yourprofile`
- Behance: `https://behance.net/yourprofile`
- YouTube: `https://youtube.com/c/yourprofile`

### Step 3: Update Projects

Find the Projects section (around line 430) and modify:

```html
<div class="project-card">
    <div class="project-image">
        <div class="project-placeholder"></div>
        <div class="project-overlay">
            <h3>Your Project Name</h3>
            <p>Project Type</p>
        </div>
    </div>
    <div class="project-info">
        <h3>Your Project Name</h3>
        <p class="project-type">Type</p>
        <p class="project-description">Your description here</p>
        <p class="project-role">Your role</p>
    </div>
</div>
```

### Step 4: Add Your Images

1. Create folders for images in `assets/images/`:
   - `hero-portrait.jpg`
   - `project-1.jpg`
   - `project-2.jpg`
   - etc.

2. Update the placeholder divs to use your images:
```html
<!-- Replace this: -->
<div class="hero-image-placeholder"></div>

<!-- With this: -->
<img src="assets/images/hero-portrait.jpg" alt="Rayane Inaghnane Portrait" class="hero-image">
```

3. Add this CSS to `css/styles.css`:
```css
.hero-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
}
```

---

## 🎨 Customizing Colors & Fonts

### Change Color Scheme

Open `css/styles.css` and find `:root` (around line 10):

```css
:root {
    /* Change these colors */
    --primary-dark: #0a0a0a;        /* Main background */
    --accent-warm: #d4af37;         /* Gold/highlight color */
    --text-secondary: #b3b3b3;      /* Secondary text */
    --border-color: #333333;        /* Borders */
}
```

Popular color combinations:
- **Luxury:** Gold (#d4af37) on Black (#0a0a0a)
- **Modern:** Copper (#b87333) on Dark Gray (#1a1a1a)
- **Minimal:** Silver (#c0c0c0) on White (#ffffff)
- **Bold:** Coral (#ff7f50) on Dark (#0d0d0d)

### Change Fonts

In `index.html`, find Google Fonts link (around line 10):

Current fonts: `Playfair Display` (headings) + `Inter` (body)

Replace with:
```html
<!-- Option: Elegant -->
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&family=Lato:wght@300;400;700&display=swap" rel="stylesheet">

<!-- Option: Modern -->
<link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet">
```

Then update CSS:
```css
:root {
    --font-display: 'Cormorant Garamond', serif;
    --font-body: 'Lato', sans-serif;
}
```

---

## 🌐 Deploy to the Web (10 minutes)

### Recommended: Netlify

1. Visit https://netlify.com
2. Sign up with GitHub
3. Click "New site from Git"
4. Select your repository
5. Netlify auto-configures everything
6. Your site goes live! 🎉

### Alternative: GitHub Pages

1. Create GitHub account
2. Create repository named `portfolio`
3. Push files to GitHub
4. Enable Pages in Settings
5. Visit: `https://yourusername.github.io/portfolio`

---

## 🔍 Testing Your Site

### Before Publishing:

- [ ] Test on mobile (Chrome DevTools: `Ctrl+Shift+I` → `Ctrl+Shift+M`)
- [ ] Check all links work
- [ ] Verify email/phone links
- [ ] Test social media links
- [ ] Check for typos
- [ ] Verify images load

### Check Performance:

Visit: https://pagespeed.web.dev/
- Enter your domain
- Get optimization suggestions
- Aim for 90+ score

---

## 📝 Adding Your Content

### Experience Section
Find "Experience" in HTML and add your jobs:

```html
<div class="timeline-item">
    <div class="timeline-marker"></div>
    <div class="timeline-content">
        <h3>Your Job Title</h3>
        <p class="company">Company Name</p>
        <p class="period">Start – End</p>
        <ul class="responsibilities">
            <li>Responsibility 1</li>
            <li>Responsibility 2</li>
        </ul>
    </div>
</div>
```

### Education Section
Update your education timeline similarly.

### Skills Section
Add/remove skill badges:

```html
<span class="skill-badge">Your Skill</span>
```

---

## 🐛 Common Issues & Fixes

**Q: Site looks different locally vs deployed?**
- A: Clear browser cache: `Ctrl+Shift+Delete`

**Q: Images not showing?**
- A: Check file path in HTML matches actual file location
- Use relative paths like: `assets/images/photo.jpg`

**Q: Mobile menu not working?**
- A: Check `js/script.js` is linked in HTML
- Verify JavaScript is enabled in browser

**Q: Styles look wrong?**
- A: Verify `css/styles.css` path in HTML is correct
- Check CSS file is in `css/` folder

**Q: Email links not working?**
- A: Format should be: `mailto:email@example.com`
- Phone: `tel:+1234567890`

---

## 📱 Mobile Optimization

Your site is already mobile-responsive! To test:

1. Open in browser
2. Press `F12` (or `Cmd+Option+I` on Mac)
3. Click device icon (top-left of DevTools)
4. Select different devices to test

---

## 🔐 Before Going Live

- [ ] Update meta description in HTML
- [ ] Check all links are correct
- [ ] Verify phone/email are correct
- [ ] Update social media links
- [ ] Add your real images
- [ ] Test on multiple browsers
- [ ] Check mobile version
- [ ] Verify contact form (if using)

---

## 📊 After Publishing

1. **Submit to Google:**
   - Visit https://search.google.com/search-console
   - Add your domain
   - Submit sitemap.xml

2. **Add Analytics:**
   - Create account: https://analytics.google.com
   - Add tracking code to `index.html`

3. **Monitor Performance:**
   - Check monthly rankings
   - Fix broken links
   - Update content regularly

---

## 🎯 Next Steps

### Immediate (This Week):
- [ ] Customize all text content
- [ ] Add your professional photos
- [ ] Update all social media links
- [ ] Deploy to web hosting

### Short Term (This Month):
- [ ] Submit to Google Search Console
- [ ] Set up analytics tracking
- [ ] Test mobile experience
- [ ] Get feedback from colleagues

### Long Term (Ongoing):
- [ ] Update projects regularly
- [ ] Add new experiences
- [ ] Share on social media
- [ ] Network with other creators

---

## 📞 Helpful Resources

- **HTML Tutorial:** https://www.w3schools.com/html/
- **CSS Tutorial:** https://www.w3schools.com/css/
- **SEO Guide:** https://developers.google.com/search
- **Design Inspiration:** https://www.awwwards.com/
- **Performance Tools:** https://pagespeed.web.dev/

---

## 🎬 You're All Set!

Your premium portfolio is ready! Remember:

✨ **Key Success Factors:**
1. Keep content updated
2. Showcase your best work
3. Tell your story authentically
4. Engage on social media
5. Network consistently

---

## 📞 Quick Reference

**Files to edit:**
- `index.html` - Content & structure
- `css/styles.css` - Colors & fonts
- `js/script.js` - Interactions

**Deployment:**
- GitHub Pages: Free, built-in CDN
- Netlify: Recommended, easy setup
- Vercel: Fast, modern platform

**Next URL:**
- Local: `http://localhost:8000`
- Production: `https://your-domain.com`

---

**Congratulations! Your cinematic portfolio is ready to impress the world! 🎥✨**

Need help? Check README.md for detailed documentation.

---

**Version:** 1.0.0  
**Last Updated:** 2025-06-26
