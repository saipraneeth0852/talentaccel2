# TalentAccel — Admin Panel & Feature Guide

---

## 1. Overview

The TalentAccel website now includes:

- **Admin Panel** — Manage all website content from a protected dashboard
- **Careers Page** — Job listings with a full application form
- **Trusted By Marquee** — Scrolling client/company names by industry

---

## 2. Firebase Setup (One-Time)

### Step 1 — Enable Authentication
1. Go to [Firebase Console](https://console.firebase.google.com) → your project **talentaccel**
2. Navigate to **Authentication → Sign-in method**
3. Enable **Email/Password**
4. Go to **Authentication → Users → Add user**
5. Enter your admin email & password → click **Add User**

### Step 2 — Create Firestore Database
1. Go to **Firestore Database → Create database**
2. Start in **Production mode**
3. Choose a region (e.g. `asia-south1` for India)

### Step 3 — Set Firestore Rules
Go to **Firestore → Rules** and paste:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Public read for website content
    match /services/{doc} { allow read: if true; allow write: if request.auth != null; }
    match /industries/{doc} { allow read: if true; allow write: if request.auth != null; }
    match /caseStudies/{doc} { allow read: if true; allow write: if request.auth != null; }
    match /blogs/{doc} { allow read: if true; allow write: if request.auth != null; }
    // Job applications — write only (applicants can't read others' submissions)
    match /jobApplications/{doc} { allow read, write: if request.auth != null; }
  }
}
```

### Step 4 — Set Storage Rules
Go to **Storage → Rules** and paste:

```
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /{allPaths=**} {
      allow read: if true;
      allow write: if request.auth != null;
    }
  }
}
```

---

## 3. Admin Panel

### Accessing the Admin Panel

| URL | Page |
|-----|------|
| `/admin/login` | Login page |
| `/admin` | Dashboard |
| `/admin/services` | Manage Services |
| `/admin/industries` | Manage Industries |
| `/admin/case-studies` | Manage Case Studies |
| `/admin/blogs` | Manage Blog Posts |

### Login
Navigate to `yourdomain.com/admin/login` and sign in with the admin credentials created in Step 1 above.

---

## 4. Managing Content

### Services
Fields: **Title**, **Description**, **Bullets** (one per line), **Icon Name**

- Icon name must be a valid [Lucide icon](https://lucide.dev/icons/) in PascalCase
- Examples: `Users`, `Globe`, `Calculator`, `Settings`, `UserCheck`

### Industries
Fields: **Label**, **Icon Name**

- Examples: `Code`, `Brain`, `Landmark`, `Radio`, `Cpu`, `Rocket`

### Case Studies
Fields: **Tag**, **Title**, **Description**, **Metrics**, **Cover Image**

- Cover image can be uploaded directly (stored in Firebase Storage) or pasted as a URL
- Metrics example: `15 Engineers · 40% Faster Hiring · 2 Months`

### Blog Posts
Fields: **Tag**, **Read Time**, **Title**, **Description/Excerpt**, **Full Content**, **Cover Image**

- Description is the short preview shown in the blog listing
- Full Content is the complete article body
- Cover image supports upload or URL

---

## 5. Firestore Data Structure

```
services/
  └── {id}: { title, desc, bullets[], icon, order, createdAt, updatedAt }

industries/
  └── {id}: { label, icon, order, createdAt, updatedAt }

caseStudies/
  └── {id}: { tag, title, description, metrics, imageUrl, order, createdAt, updatedAt }

blogs/
  └── {id}: { tag, title, description, content, readTime, imageUrl, order, createdAt, updatedAt }

jobApplications/
  └── {id}: { name, email, phone, position, experience, currentCompany,
               currentCtc, expectedCtc, noticePeriod, linkedin, portfolio,
               coverLetter, resumeUrl, status, createdAt }
```

---

## 6. Careers Page (`/careers`)

The careers page includes:
- Open job listings (currently hardcoded — can be moved to Firestore later)
- A full application form with:
  - Personal info (name, email, phone, LinkedIn)
  - Role selection (dropdown of all open positions)
  - Experience & current company
  - CTC (current & expected) and notice period
  - Resume upload (PDF/DOC, max 5 MB) — stored in Firebase Storage
  - Portfolio URL & cover letter

All submitted applications are saved to the `jobApplications` Firestore collection and can be reviewed from the Firebase Console.

---

## 7. Trusted By Section

The homepage "Trusted By" section now shows a **right-to-left scrolling marquee** of client company names grouped by industry:

- Electronics
- Telecom
- Emerging Technologies
- Aerospace & Defense
- Manufacturing
- IT Products & Services

To update the company names, edit `src/components/TrustedBy.tsx` — the `clients` array at the top of the file.

---

## 8. Local Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
# → http://localhost:8080

# Build for production
npm run build
```

---

## 9. File Reference

| File | Purpose |
|------|---------|
| `src/lib/firebase.ts` | Firebase config & exports |
| `src/contexts/AuthContext.tsx` | Auth state & login/logout |
| `src/components/ProtectedRoute.tsx` | Guards admin routes |
| `src/pages/admin/AdminLogin.tsx` | Login screen |
| `src/pages/admin/AdminLayout.tsx` | Admin sidebar layout |
| `src/pages/admin/AdminDashboard.tsx` | Content count overview |
| `src/pages/admin/AdminServices.tsx` | Services CRUD |
| `src/pages/admin/AdminIndustries.tsx` | Industries CRUD |
| `src/pages/admin/AdminCaseStudies.tsx` | Case Studies CRUD |
| `src/pages/admin/AdminBlogs.tsx` | Blog Posts CRUD |
| `src/pages/Careers.tsx` | Careers page |
| `src/components/TrustedBy.tsx` | Scrolling marquee |

---

*TalentAccel · Internal Documentation*
