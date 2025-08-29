# Allie Speers Photography Portfolio

A minimal, elegant photography portfolio featuring a clean homepage carousel and individual gallery pages with lightbox functionality. Built with modern HTML, CSS, and JavaScript.

## 🖼️ Adding New Photos & Galleries

### Step 1: Organize Your Photos
Create a new folder in the `images/` directory:
```
/images/
  /your-gallery-name-2025/
    - photo1.jpg
    - photo2.jpg
    - photo3.jpg
    - photo4.jpg
    - photo5.jpg
    - photo6.jpg
```

**Recommended naming convention:** `shootname-year` (e.g., `mattclairemae-2025`, `urban-2024`)

### Step 2: Create Gallery Page
1. **Copy an existing gallery file** (e.g., `myles_2025.html`)
2. **Rename it** to match your folder (e.g., `new-gallery-2025.html`)
3. **Update the content:**
   - **Page title** (line 6): `<title>Your Gallery Name - Allie Speers</title>`
   - **Gallery title** (line 20): `<h1 class="gallery-title">Your Gallery Name</h1>`
   - **Date** (line 21): `<p class="gallery-date">2025</p>`
   - **Image paths** (lines ~28+): Change `src="images/old-folder/` to `src="images/your-new-folder/`
   - **Alt tags**: Update to descriptive text for each image

### Step 3: Add to Homepage Carousel
Edit `index.html` and add your gallery to the carousel:

```html
<li>
    <a href="your-gallery-name-2025.html" class="gallery-link">
        <figure>
            <img src="images/your-gallery-name-2025/hero-image.jpg" alt="Your Gallery Name">
        </figure>
    </a>
</li>
```

**Tips:**
- Choose your best image as the hero image for the carousel
- Add the new `<li>` block anywhere within the existing `<ul>` in the carousel
- Gallery pages can have varying numbers of images (current galleries range from 3-12 images)

## 📝 Editing Content

### Homepage Text
**File:** `index.html`
- **Your name:** Line 15 - `<h1 class="site-title">Allie Speers<br>Photography</h1>`
- **Tagline:** Line 17 - `<p class="site-description">Learning how to see.</p>`
- **About link:** Line 19 - `<a href="about.html" class="about-link">About Me</a>`
- **Contact email:** Line 100 - `<a href="mailto:ac.speers@gmail.com">Contact</a>`

### Gallery Information
**Files:** Individual gallery HTML files (e.g., `portraits-2024.html`)
- **Gallery title:** `<h1 class="gallery-title">Gallery Name</h1>`
- **Date:** `<p class="gallery-date">Month Year</p>`

### About Page
**File:** `about.html`
- **Profile photo:** Line 27 - `<img src="images/about_me/20-DSC02226.jpg">`
- **Bio text:** Lines 31-38 - Update the `<p>` tags with your story
- Content is centered on the page with left-aligned text
- Contact link automatically appears at the bottom

## 🖥️ Local Development

### Running Locally
```bash
# Navigate to your portfolio folder
cd /path/to/portfolio_site

# Start local server
python3 -m http.server 8000

# View at: http://localhost:8000
```

### Making Changes
1. **Edit files** in your code editor
2. **Save changes** (Cmd+S / Ctrl+S)
3. **Refresh browser** (Cmd+Shift+R / Ctrl+Shift+R for hard refresh)

## 🚀 Publishing Changes

### To GitHub
1. **Add new files** via GitHub web interface (drag & drop)
2. **Edit existing files** using GitHub's built-in editor
3. **Commit changes** with a descriptive message

### Auto-Deploy
- Changes pushed to GitHub automatically deploy to your live site via Netlify
- Updates typically appear within 1-2 minutes

## 📁 File Structure
```
portfolio_site/
├── index.html                      # Homepage with carousel
├── about.html                      # About page with bio
├── lysschrismaternity_2025.html    # Maternity photos
├── singapore_2025.html             # Singapore travel
├── clairemattmae_2025.html        # Portrait session
├── myles_2025.html                # Portrait session
├── denmark_2024.html              # Denmark travel
├── chrislyssengagement_2025.html  # Engagement photos
├── sophie1st_2025.html            # Birthday photos
├── pets_2025.html                 # Pet photography
├── bugs.html                      # Bug photography
├── style.css                      # All styling & responsive design
├── script.js                      # Lightbox & keyboard navigation
├── images/                        # Organized photo folders
│   ├── /about_me/                 # Profile photos
│   ├── /lysschrismaternity_2025/  # Gallery images
│   ├── /singapore_2025/           # Gallery images
│   ├── /clairemattmae_2025/       # Gallery images
│   ├── /myles_2025/               # Gallery images
│   ├── /denmark_2024/             # Gallery images
│   ├── /chrislyssengagement_2025/ # Gallery images
│   ├── /sophie1st_2025/           # Gallery images
│   ├── /pets_2025/                # Gallery images
│   └── /bugs/                     # Gallery images
└── README.md                      # This guide
```

## 🎨 Design Guidelines

### Image Requirements
- **Format:** JPG recommended for photos
- **Size:** Optimized for web (under 2MB each)
- **Dimensions:** Minimum 1200px width recommended
- **Quality:** High quality but web-optimized

### Gallery Best Practices
- **Flexible image count** - galleries currently range from 3-12 images
- **Consistent aspect ratios** work best for grid layout
- **Curate carefully** - quality over quantity
- **Logical organization** by theme, date, or shoot
- **Responsive design** automatically adapts to different screen sizes

## 🔧 Troubleshooting

### Images Not Loading
- Check file paths match folder structure exactly
- Ensure image files are in the correct folder
- Verify file extensions (case sensitive)

### Carousel Issues
- Hard refresh browser (Cmd+Shift+R)
- Check all gallery links point to existing HTML files

### Layout Problems
- Test on different screen sizes
- Verify all HTML tags are properly closed
- Check for typos in file names

## ✨ Features

### Current Portfolio Features
- **Responsive design** - Works perfectly on desktop, tablet, and mobile
- **Lightbox functionality** - Click any image to view full-size
- **Keyboard navigation** - Use arrow keys to navigate through lightbox images
- **Clean typography** - Professional Inter font with careful spacing
- **Fixed positioning** - Header and footer stay in place while browsing
- **Smooth interactions** - Hover effects and transitions throughout

### Lightbox Controls
- **Click image** to open lightbox
- **Click X or press Escape** to close
- **Use arrow keys** to navigate between images
- **Click outside image** to close

## ✨ Tips & Tricks

- **Use descriptive alt tags** for accessibility
- **Keep file names simple** (no spaces or special characters)  
- **Test everything locally** before pushing to GitHub
- **Back up your work** regularly via GitHub
- **Maintain consistent naming** for easier management
- **Image optimization** - Keep photos under 2MB for faster loading

---

**Need help?** All code is organized and commented for easy editing. When in doubt, copy the pattern from existing galleries!