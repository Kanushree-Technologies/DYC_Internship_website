# Khandesh Youth Foundation Website

A modern, responsive website for Khandesh Youth Foundation built with HTML, CSS, and JavaScript.

## Project Structure

```
dhule-youth-club/
├── index.html              # Home page
├── about.html              # About Us page
├── activities.html         # Activities & Programs page
├── events.html             # Upcoming Events page
├── gallery.html            # Photo Gallery page
├── team.html               # Team Members page
├── contact.html            # Contact Us page
├── assets/
│   ├── css/
│   │   └── style.css       # Main stylesheet
│   ├── js/
│   │   └── script.js       # JavaScript functionality
│   └── images/             # Image folder (for future use)
├── lang/
│   ├── en.json             # English translations
│   └── mr.json             # Marathi translations
└── README.md               # This file
```

## Features

✅ **Fully Responsive** - Works on desktop, tablet, and mobile devices
✅ **Modern Design** - Clean, professional, and visually appealing
✅ **Navigation Menu** - Smooth navigation with mobile hamburger menu
✅ **Multiple Pages** - Home, About, Activities, Events, Gallery, Team, Contact
✅ **Contact Form** - Working contact form with validation
✅ **Language Switcher** - English and Marathi support with a header toggle
✅ **JSON-based i18n** - Language strings are stored in `lang/en.json` and `lang/mr.json`
✅ **Smooth Animations** - CSS animations and transitions throughout
✅ **Mobile-Friendly** - Optimized for all screen sizes
✅ **SEO Ready** - Proper HTML structure and meta tags

## Pages Included

### 1. **Home (index.html)**
- Hero section with welcome message
- Mission statement with 4 core values
- Featured activities preview
- Upcoming events preview
- Call-to-action section

### 2. **About Us (about.html)**
- Organization overview
- Vision and mission statements
- Core values (6 values with descriptions)
- Journey/timeline of the organization
- Statistics section (1000+ members, 50+ programs, etc.)

### 3. **Activities (activities.html)**
- 6 main activity programs:
  - Sports & Fitness
  - Technology & Innovation
  - Arts & Culture
  - Education & Mentorship
  - Community Service
  - Leadership Development
- Schedule information for each program
- Membership benefits
- Call-to-action for joining

### 4. **Events (events.html)**
- 6 upcoming events with detailed information
- Date, time, and location for each event
- Event descriptions and requirements
- Registration buttons
- Past events section

### 5. **Gallery (gallery.html)**
- 6 gallery categories with placeholder images:
  - Sports Activities
  - Cultural Events
  - Community Service
  - Workshops & Training
  - Club Activities
  - Special Events
- Photo contribution section

### 6. **Team (team.html)**
- 6 leadership team members with details
- Core committee members (4 committees)
- Volunteer section
- Board of Advisors

### 7. **Contact (contact.html)**
- Contact information (address, phone, email, hours)
- Functional contact form
- Department-wise contacts (6 departments)
- FAQ section (6 common questions)

## Getting Started

### 1. **Open the Website**
Open the site using a local server so the multi-language feature can load properly.

### Recommended ways to open:
- Use VS Code Live Server: Right-click `index.html` → Open with Live Server
- Or run a local server from the project folder:
  - `python -m http.server 8000`
  - Then open `http://localhost:8000`
- If Live Server is not available, open `index.html` in the browser and confirm the site loads correctly.

### 2. **Customize the Content**
Edit the HTML files to replace sample content with your actual information:

**Example: Updating contact information**
```html
<!-- Find this in contact.html -->
<p>📞 Phone</p>
<p><a href="tel:+919876543210">+91 9876 543 210</a></p>

<!-- Replace with your actual phone number -->
```

### 3. **Visual Customization**

**Colors** - Edit color variables in `assets/css/style.css`:
```css
:root {
    --primary-color: #007bff;        /* Blue */
    --secondary-color: #ff6b6b;      /* Red */
    --dark-color: #1a1a1a;           /* Dark */
    --light-color: #f8f9fa;          /* Light */
}
```

**Font** - Change the default font in `style.css`:
```css
body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
```

### 4. **Add Images**

Place images in `assets/images/` folder and reference them:
```html
<img src="assets/images/your-image.jpg" alt="Description">
```

To replace gallery placeholders, edit the `.gallery-placeholder` elements in `gallery.html`.

## Customization Tips

### 1. **Change Club Name**
Find and replace "Khandesh Youth Foundation" throughout all files with your club name.

### 2. **Update Navigation Menu**
Edit the links in the `<nav>` section (present in all HTML files).

### 3. **Modify Colors and Theme**
- Edit `:root` variables in `style.css`
- Change gradient colors in buttons and sections
- Adjust text colors as needed

### 4. **Add Your Logo**
Add a logo image and modify the `.nav-brand` section in the navigation.

### 5. **Update Social Media Links**
In `contact.html`, update the social media links:
```html
<a href="https://facebook.com/yourpage">Facebook</a>
```

## Features Explanation

### Contact Form
- The contact form includes validation
- Form data is logged to the browser console
- To enable email sending, you'll need:
  - A backend service (Node.js, PHP, etc.)
  - Or integrate with services like Formspree or EmailJS

### Language Support
- English and Marathi translations are loaded from JSON files in `lang/en.json` and `lang/mr.json`
- Text elements use `data-i18n` attributes for translation
- Selected language is saved in localStorage and persists across pages
- Use a local server (Live Server or `python -m http.server`) to ensure fetch-based loading works correctly

### Mobile Menu
- Automatic hamburger menu on screens < 768px
- Click hamburger icon to toggle menu
- Menu closes when a link is clicked

### Responsive Design
- Desktop: Full width layout
- Tablet: Adjusted grid layouts (768px breakpoint)
- Mobile: Single column layouts (480px breakpoint)

## Recommended Enhancements

1. **Add Real Images**
   - Replace gallery placeholder boxes with actual photos
   - Add a club logo
   - Add team member photos

2. **Implement Email Functionality**
   - Integrate Formspree (free service)
   - Use EmailJS library
   - Set up a backend service

3. **Add More Interactivity**
   - Image lightbox/modal for gallery
   - Event filtering
   - Member directory search

4. **SEO Optimization**
   - Add meta descriptions
   - Add keywords
   - Create sitemap.xml
   - Add Open Graph tags

5. **Analytics**
   - Add Google Analytics
   - Track user engagement

6. **Hosting**
   - Host on GitHub Pages (free)
   - Use Netlify (free tier available)
   - Use traditional web hosting

## File Sizes

- Total HTML files: ~7 files (~80 KB)
- CSS file: ~50 KB
- JavaScript file: ~5 KB
- **Total: ~135 KB** (very lightweight!)

## Browser Compatibility

- Chrome/Edge: ✅ Full support
- Firefox: ✅ Full support
- Safari: ✅ Full support
- Internet Explorer: ⚠️ Partial (CSS Grid may not work)

## Troubleshooting

**Issue: Styles not loading**
- Check that `css/style.css` path is correct
- Clear browser cache (Ctrl+Shift+Del)

**Issue: JavaScript not working**
- Check browser console for errors (F12)
- Ensure `script.js` path is correct
- Check internet connection for external resources

**Issue: Mobile menu not appearing**
- This is normal - appears only on screens < 768px
- Resize your browser window to test

## Future Enhancements

1. Add a blog/news section
2. Create member portal/login
3. Add event calendar integration
4. Implement payment for events/membership
5. Add live chat support
6. Create mobile app

## Support

For questions or issues:
1. Check this README
2. Review the HTML structure
3. Check browser console for errors (F12)
4. Validate HTML at https://validator.w3.org/

## License

This website template is provided as-is for Khandesh Youth Foundation. Feel free to modify and use as needed.

---

**Last Updated:** April 2, 2026
**Website Version:** 1.0
**Status:** ✅ Ready to Deploy
