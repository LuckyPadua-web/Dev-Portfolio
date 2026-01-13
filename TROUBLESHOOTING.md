# Troubleshooting Guide

## Fixed Issues

### ✅ Font Awesome 403 Error - FIXED

**Problem:** `a2e0e6b1d1.js:1 Failed to load resource: the server responded with a status of 403`

**Solution:**

- Removed the Font Awesome Kit script that was causing 403 error
- Using only the CDN link: `https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css`
- Icons should now load properly

## How to Test

1. **Clear Browser Cache:**

   - Press `Ctrl + Shift + Delete` (Windows)
   - Clear cached images and files
   - Close and reopen browser

2. **Hard Refresh:**

   - Press `Ctrl + F5` (Windows)
   - Or `Shift + F5`

3. **Check Console:**

   - Press `F12` to open Developer Tools
   - Go to Console tab
   - Should see no red errors

4. **Test Icons:**
   - All Font Awesome icons should be visible
   - Navigation menu icon
   - Contact section icons (email, phone, location)
   - Social media icons (Facebook, GitHub)
   - Skill card icons

## Common Issues & Solutions

### Layout Not Working Properly

**Issue:** Elements overlapping or misaligned

**Solutions:**

1. Clear browser cache and hard refresh
2. Check if all CSS is loading:

   - Open Developer Tools (F12)
   - Go to Network tab
   - Reload page
   - Look for `style.css` (should be status 200)

3. Check if images exist:
   - Make sure `img/Glenn.png`, `img/Glenn1.png`, `img/Lucky.png`, `img/Lucky1.png` exist
   - Images should be in the `img` folder

### Icons Not Showing

**Issue:** Font Awesome icons appear as boxes or don't show

**Solutions:**

1. Font Awesome CDN is loaded in `<head>`:

   ```html
   <link
     rel="stylesheet"
     href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
   />
   ```

2. Check internet connection (CDN requires internet)

3. Try alternative CDN:
   ```html
   <link
     rel="stylesheet"
     href="https://use.fontawesome.com/releases/v6.5.0/css/all.css"
   />
   ```

### Animations Not Working

**Issue:** Typing animation or scroll effects not working

**Solutions:**

1. Check if `script.js` is loaded:
   - Should be at bottom of `index.html` before `</body>`
2. Check browser console for JavaScript errors

3. Make sure JavaScript is enabled in browser

### Contact Section Not Displaying

**Issue:** Contact section layout broken

**Solutions:**

1. Make sure images exist in `img/` folder:

   - `img/Glenn1.png`
   - `img/Lucky1.png`

2. Check CSS is loading properly

3. Try viewing on different browser

## File Structure Check

Your project should have this structure:

```
Dev-Portfolio/
├── index.html
├── style.css
├── script.js
├── README.md
├── TROUBLESHOOTING.md
└── img/
    ├── Glenn.png
    ├── Glenn1.png
    ├── Lucky.png
    └── Lucky1.png
```

## Browser Compatibility

Tested and working on:

- ✅ Google Chrome (latest)
- ✅ Mozilla Firefox (latest)
- ✅ Microsoft Edge (latest)
- ✅ Safari (latest)

## Performance Tips

1. **Optimize Images:**

   - Recommended size: 500x500px for profile images
   - Format: PNG or JPG
   - Compress images to reduce file size

2. **Clear Browser Cache Regularly:**

   - Especially after making changes

3. **Use Local Font Awesome (Optional):**
   - Download Font Awesome files locally
   - Include in your project
   - No internet required

## Need More Help?

If issues persist:

1. Check browser console (F12) for errors
2. Verify all files are in correct locations
3. Make sure XAMPP Apache server is running
4. Try accessing via: `http://localhost/Dev-Portfolio/`

## Contact

For support, contact:

- Glenard Pagurayan: glenard2308@gmail.com
- Lucky Padua: luckypadua4@gmail.com
