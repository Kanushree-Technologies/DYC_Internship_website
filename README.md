# Khandesh Youth Foundation Website

A modern, responsive website for Khandesh Youth Foundation built with HTML, CSS, and JavaScript.

## Project Structure

```
DYC_Internship_website/
├── index.html              # Home page
├── about.html              # About Us page
├── activities.html         # Activities & Programs page
├── events.html             # Upcoming Events page
├── gallery.html            # Photo Gallery page
├── team.html               # Team Members page
├── contact.html            # Contact Us page
├── assets/
│   ├── css/
│   │   ├── web_style.css    # Main stylesheet
│   │   └── mobile.css       # Mobile-specific styles
│   ├── js/
│   │   └── script.js        # JavaScript functionality
│   └── images/             # Images used across the site
├── lang/
│   ├── en.json             # English translations
│   └── mr.json             # Marathi translations
└── README.md               # Project documentation
```

## Features

✅ **Fully Responsive** - Works on desktop, tablet, and mobile devices
✅ **Modern Design** - Clean layout, sticky header, cards, and hero sections
✅ **Navigation Menu** - Desktop menu with mobile hamburger toggle
✅ **Multi-language Support** - English and Marathi using JSON translation files
✅ **Contact Form** - Validates input and shows success feedback
✅ **Page Highlighting** - Active page link is highlighted in navigation
✅ **Mobile Optimizations** - Separate `mobile.css` for smaller screens
✅ **JSON-based i18n** - Language strings are loaded dynamically from `lang/en.json` and `lang/mr.json`
✅ **Console Logging** - Contact form submission logs form data to the browser console

## Pages Included

### 1. **Home (index.html)**
- Hero section with welcome message and CTA
- Mission section with four focus areas
- Featured activities preview
- Upcoming events preview
- Join-us call to action

### 2. **About Us (about.html)**
- Organization overview
- Vision and mission statements
- Core values and impact summary
- Timeline / journey section

### 3. **Activities (activities.html)**
- Activities and programs overview
- Sports, workshops, cultural events, and community programs
- Program benefits and participation information

### 4. **Events (events.html)**
- Upcoming events overview
- Event details with dates and descriptions
- Call to action for event registration

### 5. **Gallery (gallery.html)**
- Photo gallery layout with category previews
- Placeholder images ready for replacement
- Visual showcase of activities and events

### 6. **Team (team.html)**
- Leadership team showcase
- Committee and volunteer overview
- Team member descriptions and roles

### 7. **Contact (contact.html)**
- Contact details and hours
- Functional contact form with validation
- Message success notification

## Getting Started

### 1. **Open the Website**
Use a local server so the translation files can load properly.

### Recommended ways to open:
- Use VS Code Live Server: Right-click `index.html` → Open with Live Server
- Or run a local server from the project folder:
  - `python -m http.server 8000`
  - Then open `http://localhost:8000`
- If Live Server is not available, open `index.html` directly and verify the site loads.

### 2. **Customize the Content**
Edit the HTML files to replace placeholder text with actual content.

**Example: Updating contact information**
```html
<p>📞 Phone</p>
<p><a href="tel:+919876543210">+91 9876 543 210</a></p>
```

### 3. **Visual Customization**

**Colors** - Update the color variables in `assets/css/web_style.css`:
```css
:root {
    --primary-color: #007bff;
    --secondary-color: #ff6b6b;
    --dark-color: #1a1a1a;
    --light-color: #f8f9fa;
}
```

**Font** - Change the default font family in `web_style.css`:
```css
body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
```

### 4. **Add Images**

Place image files in `assets/images/` and update HTML references:
```html
<img src="assets/images/your-image.jpg" alt="Description">
```

## Customization Tips

### 1. **Change Organization Name**
Update "Khandesh Youth Foundation" across all pages to your organization name.

### 2. **Update Navigation Menu**
Modify the links in the `<nav>` section of each HTML file.

### 3. **Adjust Theme Colors**
- Edit `:root` variables in `assets/css/web_style.css`
- Change button and background gradients as needed

### 4. **Add a Logo**
Add a logo image and update `.nav-brand` in the navigation.

### 5. **Update Social Links**
Edit social media links in `contact.html` with your profiles.

## Feature Details

### Contact Form
- Validates name, email, subject, and message fields
- Checks email format before submission
- Shows a success notification on submit
- Logs submitted form data in the browser console

### Language Support
- Loads translations from `lang/en.json` and `lang/mr.json`
- Uses `data-i18n` attributes for dynamic text replacement
- Saves the selected language in localStorage
- Works best when served from a local server

### Mobile Menu
- Hamburger menu appears on small screens
- Toggle menu open/close with the hamburger icon
- Menu closes automatically after clicking a link

### Responsive Design
- Desktop: full-width multi-column layouts
- Tablet: grid layouts and adjusted spacing
- Mobile: vertical stacking and simplified navigation

## Notes
- `assets/css/mobile.css` contains mobile-specific styling.
- `assets/js/script.js` handles translations, navigation behavior, and form validation.
- Keep the `lang/` folder intact for multi-language support.

## Future Enhancements

1. Add a blog/news section
2. Add event filtering and search
3. Add a member registration/login system
4. Integrate email sending for contact requests
5. Add image lightbox for gallery items
