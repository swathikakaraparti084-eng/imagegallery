# Image Gallery

A responsive image gallery built with HTML, CSS, and vanilla JavaScript. Browse photos in a grid, filter them by category, and view them full-screen in a lightbox.

![Gallery screenshot](screenshot.png)

## Live Demo

[Add your live link here, e.g. GitHub Pages or Netlify]

## Features

- Responsive grid layout for mobile, tablet, and desktop
- Category filters (All, Nature, City, People)
- Lightbox viewer with next/previous navigation
- Keyboard support: arrow keys to navigate, Esc to close
- Click outside the image to close the lightbox
- Hover zoom effect and caption reveal

## Tech Stack

- HTML5
- CSS3 (Grid, Flexbox, transitions, media queries)
- JavaScript (DOM manipulation, event handling)
- Jest + jsdom (automated testing)

## Project Structure

```
image-gallery/
├── index.html
├── style.css
├── script.js
├── gallery.test.js
├── package.json
├── .gitignore
└── README.md
```

## How to Run

1. Clone the repository:
   `git clone https://github.com/[your-username]/image-gallery.git`
2. Open the folder in VS Code.
3. Open `index.html` in your browser, or use the Live Server extension.

No build step is required.

## How to Add Your Own Images

1. Create an `images/` folder and add your photos.
2. In `index.html`, add a new item inside `<main class="gallery">`:

```html
<figure class="item" data-category="nature">
  <img src="images/your-photo.jpg" alt="Description">
  <figcaption>Description</figcaption>
</figure>
```

3. Set `data-category` to `nature`, `city`, or `people`.

## Testing

### Automated tests

```
npm install
npm test
```

The 7 Jest tests cover filtering, lightbox open/close, next/previous navigation with wrap-around, and keyboard support.

### Manual test cases

| # | Test | Expected Result | Pass |
|---|------|-----------------|------|
| 1 | Open the page | 8 images load in a grid | ✅ |
| 2 | Click "Nature" filter | Only 3 nature images show, button highlighted | ✅ |
| 3 | Click "All" filter | All 8 images show again | ✅ |
| 4 | Hover over an image | Image zooms, caption slides up | ✅ |
| 5 | Click an image | Lightbox opens with image and caption | ✅ |
| 6 | Click Next / Previous | Image changes, wraps around at the ends | ✅ |
| 7 | Press Right / Left arrow keys | Image changes | ✅ |
| 8 | Press Esc | Lightbox closes | ✅ |
| 9 | Click dark area outside image | Lightbox closes | ✅ |
| 10 | Filter "City", open lightbox, click Next | Only city images are cycled | ✅ |
| 11 | Resize to 360px width | No horizontal scroll, layout usable | ✅ |
| 12 | Test in Chrome, Firefox, Edge | Works the same in all | ✅ |

## What I Learned

- Building layouts with CSS Grid and Flexbox
- Filtering elements using data attributes
- Creating a lightbox with JavaScript event handling
- Adding keyboard accessibility
- Writing automated tests with Jest

## Future Improvements

- Image upload feature
- Lazy loading for faster performance
- Search by caption
- Download and share buttons

## Credits

Placeholder images from [Picsum Photos](https://picsum.photos).

## Author

[Your Name] - [GitHub profile or email]
