# 🚀 InfinityFree + Hostinger Domain Setup Guide

## Your Setup

- **Domain**: neko-sysdev.online (purchased from Hostinger)
- **Hosting**: InfinityFree (free hosting)
- **Task**: Connect domain to InfinityFree and upload website

---

## 📋 STEP-BY-STEP GUIDE

### PART 1: Create InfinityFree Account & Get Nameservers

#### Step 1: Sign Up to InfinityFree

1. Go to: **https://infinityfree.com**
2. Click **"Sign Up"** (top right)
3. Enter your email and create password
4. Verify your email

#### Step 2: Create New Account (Hosting)

1. After login, click **"Create Account"**
2. Enter domain: **neko-sysdev.online**
3. Choose a subdomain username (e.g., `nekosysdev`)
4. Accept terms and click **"Create Account"**
5. Wait 2-5 minutes for account creation

#### Step 3: Get InfinityFree Nameservers

After account is created, you'll see:

```
Nameserver 1: ns1.byet.org
Nameserver 2: ns2.byet.org
Nameserver 3: ns3.byet.org
Nameserver 4: ns4.byet.org
Nameserver 5: ns5.byet.org
```

**⚠️ IMPORTANT**: Copy these nameservers! You'll need them for Hostinger.

---

### PART 2: Point Hostinger Domain to InfinityFree

#### Step 1: Login to Hostinger

1. Go to: **https://www.hostinger.com**
2. Login with your account
3. Go to **"Domains"** section

#### Step 2: Manage Domain

1. Find **neko-sysdev.online** in your domain list
2. Click **"Manage"** or **⚙️ gear icon**

#### Step 3: Change Nameservers

1. Look for **"Nameservers"** or **"DNS"** section
2. Click **"Change Nameservers"**
3. Select **"Use custom nameservers"**
4. Enter InfinityFree nameservers:
   ```
   Nameserver 1: ns1.byet.org
   Nameserver 2: ns2.byet.org
   Nameserver 3: ns3.byet.org
   Nameserver 4: ns4.byet.org
   Nameserver 5: ns5.byet.org
   ```
5. Click **"Save"** or **"Change Nameservers"**

#### ⏰ Wait Time

- Nameserver propagation takes **2-24 hours**
- Usually works in **2-6 hours**
- You can check status at: https://www.whatsmydns.net/#NS/neko-sysdev.online

---

### PART 3: Upload Website to InfinityFree

#### Step 1: Access Control Panel

1. Login to InfinityFree
2. Click **"Control Panel"** for neko-sysdev.online
3. You'll be redirected to **Vistapanel** (cPanel alternative)

#### Step 2: Open File Manager

1. In Vistapanel, find **"File Manager"**
2. Click to open
3. Navigate to **htdocs** folder (NOT htdocs/htdocs)
4. Delete any default files (index.html, default.php)

#### Step 3: Upload Your Files

You have 2 options:

**Option A: Upload via File Manager (Recommended)**

1. In File Manager, click **"Upload"** button
2. Upload these files one by one:
   - index.html
   - style.css
   - script.js
   - .htaccess
   - robots.txt
   - sitemap.xml
   - 404.html
3. Create **img** folder:
   - Click **"New Folder"**
   - Name it **img**
   - Enter img folder
   - Upload all images (Glenn.png, Glenn1.png, Lucky.png, Lucky1.png, Neko.ico)

**Option B: Upload via FTP**

1. In Vistapanel, go to **"FTP Accounts"**
2. Find your FTP credentials:
   ```
   Host: ftpupload.net (or ftp.neko-sysdev.online)
   Username: [shown in FTP accounts]
   Password: [same as control panel password]
   Port: 21
   ```
3. Use FileZilla or any FTP client
4. Connect and upload files to **htdocs** folder

#### Step 4: Set File Permissions

1. In File Manager, select **.htaccess**
2. Right-click → **"Change Permissions"** or **"CHMOD"**
3. Set to **644**
4. Do same for all files (644)
5. Folders (htdocs, img) should be **755**

---

### PART 4: Configure InfinityFree Settings

#### Enable SSL Certificate (HTTPS)

1. In Vistapanel, find **"SSL Certificates"**
2. InfinityFree provides FREE SSL from **GoGetSSL**
3. Click **"Install SSL Certificate"**
4. Wait 5-10 minutes for activation
5. Your site will be accessible via HTTPS

#### Check .htaccess Compatibility

InfinityFree supports .htaccess but some features might differ:

- ✅ HTTPS redirect works
- ✅ Browser caching works
- ✅ GZIP compression works
- ✅ Directory protection works

---

### PART 5: Verify Deployment

#### Test Your Website

After nameservers propagate (2-24 hours), test:

1. **Basic Access**:

   - http://neko-sysdev.online
   - https://neko-sysdev.online (after SSL installed)

2. **Check Files**:

   - https://neko-sysdev.online/robots.txt
   - https://neko-sysdev.online/sitemap.xml
   - https://neko-sysdev.online/404.html (type wrong URL)

3. **Test Features**:

   - Mobile menu (burger icon)
   - Project accordion
   - Floating contact button
   - All navigation links
   - Email/phone links

4. **Check Console** (F12 → Console):
   - Should have NO errors
   - All images should load
   - Font Awesome icons should show

---

## 🔧 INFINITYFREE SPECIFIC NOTES

### Limitations (Free Plan)

- ❌ No email hosting (use external like Gmail)
- ❌ No custom error pages initially (404.html will work after setup)
- ✅ Unlimited bandwidth
- ✅ Unlimited disk space
- ✅ Free SSL certificate
- ✅ Support for PHP, MySQL

### Important Settings

1. **Error Reporting**: Disable in production
2. **Directory Index**: index.html will load automatically
3. **PHP Version**: Use latest (8.x if available)

### File Upload Limits

- Max file size: 10MB per file
- Use FTP for larger files
- Compress images before upload

---

## 📱 TEMPORARY ACCESS (While Nameservers Propagate)

While waiting for nameservers to propagate, you can access via:

```
http://nekosysdev.epizy.com
```

(Replace `nekosysdev` with your chosen subdomain)

This lets you test the site before domain is fully connected.

---

## ⚠️ TROUBLESHOOTING

### Problem: Nameservers not updating

**Solution**:

- Wait 24 hours full
- Check at: https://www.whatsmydns.net/#NS/neko-sysdev.online
- Contact Hostinger support if still not working

### Problem: Site shows "queued" or "pending"

**Solution**:

- InfinityFree has creation queue during peak hours
- Wait 10-30 minutes
- Check InfinityFree dashboard for status

### Problem: 403 Forbidden error

**Solution**:

- Make sure index.html is in htdocs (not htdocs/htdocs)
- Check file permissions (644 for files, 755 for folders)
- Make sure files are uploaded correctly

### Problem: Images not loading

**Solution**:

- Verify img/ folder is in htdocs
- Check image filenames match exactly (case-sensitive)
- Check file permissions (644)

### Problem: .htaccess not working

**Solution**:

- InfinityFree supports .htaccess
- Check for syntax errors
- Some directives might be restricted
- Test without .htaccess first, then add back

### Problem: SSL not working

**Solution**:

- Wait 15-30 minutes after installation
- SSL can take up to 72 hours to fully activate
- Force HTTPS in .htaccess only after SSL is active

---

## 📊 INFINITYFREE CONTROL PANEL LOCATIONS

Common tools in Vistapanel:

| Task             | Location                              |
| ---------------- | ------------------------------------- |
| Upload files     | **File Manager** → htdocs             |
| FTP credentials  | **FTP Accounts**                      |
| SSL certificate  | **SSL Certificates**                  |
| Error logs       | **Error Logs** (for debugging)        |
| Database         | **MySQL Databases** (if needed later) |
| Domain settings  | **Domain Management**                 |
| Email forwarding | **Email Routing**                     |

---

## 🎯 QUICK CHECKLIST

### Before Upload

- [x] All files ready (index.html, style.css, script.js, etc.)
- [x] Images verified in img/ folder
- [x] .htaccess file included
- [x] robots.txt with correct domain
- [x] sitemap.xml with correct domain

### During Setup

- [ ] InfinityFree account created
- [ ] Hosting account for neko-sysdev.online created
- [ ] Nameservers copied from InfinityFree
- [ ] Nameservers changed in Hostinger
- [ ] Files uploaded to htdocs folder
- [ ] File permissions set (644/755)
- [ ] SSL certificate installed

### After Deployment

- [ ] Website accessible via domain
- [ ] HTTPS working (SSL active)
- [ ] All links working
- [ ] Mobile responsive
- [ ] Images loading
- [ ] Contact form/links working
- [ ] robots.txt accessible
- [ ] sitemap.xml accessible

---

## 📞 SUPPORT RESOURCES

**InfinityFree Support**:

- Forum: https://forum.infinityfree.com
- Knowledge Base: https://forum.infinityfree.com/docs

**Hostinger Support**:

- Live Chat: Available in Hostinger dashboard
- Help Center: https://support.hostinger.com

**Your Website Issues**:

- Glenard: glenard2308@gmail.com
- Lucky: luckypadua4@gmail.com

---

## 💡 PRO TIPS

1. **Backup**: Keep local copy of all files always
2. **Testing**: Use temporary subdomain (nekosysdev.epizy.com) for testing
3. **SSL**: Wait for SSL before enabling HTTPS redirect in .htaccess
4. **Images**: Compress images to < 500KB each for faster loading
5. **Monitoring**: Check error logs in Vistapanel if issues occur
6. **Updates**: Update via File Manager or FTP anytime

---

## 🚀 TIMELINE ESTIMATE

| Task                         | Time                            |
| ---------------------------- | ------------------------------- |
| Create InfinityFree account  | 5 minutes                       |
| Get nameservers              | Instant                         |
| Change Hostinger nameservers | 2 minutes                       |
| Nameserver propagation       | **2-24 hours** ⏰               |
| Upload files                 | 10-15 minutes                   |
| Install SSL                  | 10-30 minutes                   |
| Testing                      | 15 minutes                      |
| **TOTAL**                    | **3-25 hours** (mostly waiting) |

---

## ✨ YOU'RE ALL SET!

Follow this guide step-by-step and your website will be live on **neko-sysdev.online** using InfinityFree hosting!

**Good luck! 🎊**

---

Last Updated: January 17, 2026
Setup Type: InfinityFree (Free Hosting) + Hostinger (Domain)
Status: Ready to Deploy ✅
