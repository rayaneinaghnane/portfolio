# Rayane Inaghnane - Premium Portfolio Website

A cinematic, minimalist portfolio website for **Rayane Inaghnane**, a Moroccan documentary filmmaker, visual artist, creative director, and multimedia engineer.

## Overview

This portfolio website is designed with a documentary filmmaker's aesthetic in mind, inspired by:
- **A24** - Minimalist, artistic brand identity
- **Leica** - Timeless design principles
- **Apple** - Clean, intentional design
- **Contemporary Documentary Photography** - Visual storytelling

## Features

✨ **Design & Aesthetics**
- Cinematic, minimalist design with generous white space
- Dark/light neutral palette with warm accents (#d4af37)
- Smooth animations and transitions
- Parallax scrolling effects
- Responsive design for all devices
- Accessibility compliant

⚡ **Performance**
- Fast loading times
- Optimized for SEO
- Mobile-first responsive design
- Lazy loading for images
- Smooth scroll behavior

🎬 **Sections**
- Hero Section - Full-screen cinematic landing
- About Me - Personal biography and mission
- Experience - Professional timeline
- Education - Academic credentials
- Skills - Expertise organized by category
- Languages - Proficiency levels with progress bars
- Projects - Portfolio grid with project details
- Festivals & Awards - Recognition timeline
- Workshops & Training - Professional development
- Associations - Professional memberships
- Interests - Personal passions
- Contact - Multiple contact options and social links
- Footer - Copyright and credits

## Project Structure

```
portfolio_rayane/
├── index.html                 # Main HTML file
├── css/
│   └── styles.css            # Complete styling (responsive & accessible)
├── js/
│   └── script.js             # Interactive features & animations
├── assets/
│   ├── images/              # Image placeholders (add your own)
│   ├── fonts/               # Custom fonts (if needed)
│   └── videos/              # Video backgrounds (optional)
├── README.md                 # This file
├── .gitignore               # Git ignore file
├── robots.txt               # SEO robots directive
└── sitemap.xml              # XML sitemap for SEO

```

## Installation & Setup

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- A code editor (VS Code recommended)
- Optional: Node.js for local server and build tools

### Local Development

1. **Clone or download the project:**
   ```bash
   git clone [repository-url]
   cd portfolio_rayane
   ```

2. **Open in browser:**
   - Simply open `index.html` in your web browser
   - Or use a local server:

3. **Using Python (if installed):**
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Python 2
   python -m SimpleHTTPServer 8000
   ```
   Then visit: `http://localhost:8000`

4. **Using Node.js (if installed):**
   ```bash
   npm install -g http-server
   http-server
   ```
   Then visit the URL displayed in terminal

## Customization

### Update Personal Information
Edit `index.html` and update:
- Name and introduction
- Contact information (email, phone)
- Social media links
- Project descriptions
- Education details
- Experience information

### Customize Colors
Edit `css/styles.css` and modify the CSS variables:
```css
:root {
    --primary-dark: #0a0a0a;
    --accent-warm: #d4af37;
    /* Update other colors as needed */
}
```

### Add Images
1. Place images in `assets/images/`
2. Update placeholders in HTML:
   ```html
   <img src="assets/images/your-image.jpg" alt="Description">
   ```

### Add Videos
1. Place videos in `assets/videos/`
2. Update hero section or project sections with video backgrounds

### Modify Typography
The site uses Google Fonts:
- **Playfair Display** - Headlines and display text
- **Inter** - Body text and labels

To change fonts, edit the `<link>` in `index.html` and update CSS variables.

## Deployment

### GitHub Pages (Recommended)
1. Push to GitHub repository
2. Go to Settings → Pages
3. Select main branch as source
4. Site will be available at: `https://yourusername.github.io/portfolio_rayane`

### Netlify (Easy & Recommended)
1. Connect GitHub repository to Netlify
2. Set build command: (leave empty for static site)
3. Set publish directory: `.` (root)
4. Deploy automatically on push

### Vercel
1. Import project to Vercel
2. Configure and deploy
3. Get automatic SSL and CDN

### Traditional Hosting
1. Upload files via FTP to your hosting provider
2. Ensure `index.html` is in root directory
3. Access via your domain

## SEO Optimization

The site includes:
- ✅ Meta tags for search engines
- ✅ Open Graph tags for social sharing
- ✅ Semantic HTML structure
- ✅ Robots.txt for crawl directives
- ✅ XML sitemap (create via: https://www.xml-sitemaps.com/)
- ✅ Fast loading times
- ✅ Mobile responsiveness
- ✅ Accessible navigation

### Additional SEO Tips
- Update `robots.txt` with your sitemap URL
- Generate XML sitemap and submit to Google Search Console
- Add analytics tracking (Google Analytics)
- Optimize images for web (compress & format)
- Add structured data (Schema markup)

## Accessibility Features

- ✅ Semantic HTML5 elements
- ✅ ARIA labels where needed
- ✅ Keyboard navigation support
- ✅ Focus indicators
- ✅ Color contrast compliance (WCAG AA)
- ✅ Respects `prefers-reduced-motion`
- ✅ Alt text for images
- ✅ Proper heading hierarchy

## Browser Support

- Chrome/Chromium (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Tips

1. **Optimize Images:**
   - Use WebP format for better compression
   - Compress JPEG/PNG files
   - Serve responsive images with srcset

2. **Lazy Loading:**
   - Images load only when visible
   - Implemented via Intersection Observer

3. **Caching:**
   - Set proper cache headers
   - Consider service worker for offline support

4. **Minification:**
   - Minify CSS and JavaScript for production
   - Use tools like:
     - CSS Minifier: https://minifier.org/
     - JS Minifier: https://www.minifycode.com/

## Analytics Setup

Add Google Analytics:
```html
<!-- Add before closing </head> tag -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

## Responsive Breakpoints

- **Desktop:** 1024px and above
- **Tablet:** 768px - 1023px
- **Mobile:** Below 768px
- **Small Mobile:** 480px and below

## File Sizes

- `index.html` - ~40KB
- `css/styles.css` - ~35KB
- `js/script.js` - ~8KB
- **Total (uncompressed):** ~83KB
- **With compression:** ~25KB

## Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with Grid, Flexbox, CSS Variables
- **Vanilla JavaScript** - No dependencies (lightweight)
- **Google Fonts** - Playfair Display, Inter
- **Intersection Observer** - For animations on scroll
- **Responsive Design** - Mobile-first approach

## Browser DevTools Tips

- Use Lighthouse audit for performance analysis
- Check mobile responsiveness in Device Toolbar
- Monitor Network tab for load times
- Use Accessibility tree to verify semantic structure

## Future Enhancements

- [ ] Add blog/articles section
- [ ] Implement contact form with backend
- [ ] Add dark/light mode toggle
- [ ] Integrate with CMS (Contentful, Sanity)
- [ ] Add video embeds with lazy loading
- [ ] Implement filtering for project gallery
- [ ] Add client testimonials section
- [ ] Create admin dashboard for updates
- [ ] Setup CI/CD pipeline for auto-deployment

## Troubleshooting

### Page not loading styles?
- Check CSS file path in HTML
- Clear browser cache (Ctrl+Shift+Delete)
- Check browser console for errors

### Images not displaying?
- Verify image file paths
- Check file exists in `assets/images/`
- Ensure file extensions are correct

### Mobile menu not working?
- Check JavaScript is enabled
- Verify script.js is properly linked
- Check for JavaScript errors in console

### Slow performance?
- Compress images further
- Minimize CSS and JavaScript
- Enable caching headers
- Use CDN for static assets

## License

This portfolio template is available for personal use. Feel free to customize for your own portfolio.

## Support & Feedback

For issues or suggestions, please:
1. Check the troubleshooting section
2. Verify all files are in correct directories
3. Clear browser cache and try again
4. Check browser console for errors

## Credits

**Design & Development:** Rayane Inaghnane
**Fonts:** Google Fonts
**Inspiration:** A24, Leica, Apple, Contemporary Documentary Photography

---

**Last Updated:** 2025
**Version:** 1.0.0
**Status:** Production Ready

Enjoy your new portfolio website! 🎬✨
