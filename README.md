# 404 Network Website

> **404 Network — Club Not Found**  
> Build. Learn. Connect.

This repository contains the website for **404 Network**, a computer science student organization at the University of Wisconsin–Green Bay.

The website is designed to do more than provide information about the club. **The interface itself is meant to explain who we are and what we do before a visitor reads a single paragraph.**

404 Network is centered around building projects, learning new technologies, developing professional skills, and connecting computer science students. Because of that, we wanted the website to feel less like a traditional student organization website and more like a **software development workspace**.

## Design Concept

The site is heavily inspired by **Microsoft Visual Studio Community**.

Instead of presenting visitors with a conventional navigation bar and a collection of disconnected webpages, the website is designed to resemble an open software solution.

The idea is simple:

**404 Network builds things, so our website should look like a place where things are built.**

The Visual Studio-inspired interface gives the site a familiar environment for computer science students while also immediately communicating the technical identity of the organization.

The interface uses the general structure of an IDE:

```text
404 Network
│
├── Toolbar
│   ├── Join 404
│   ├── GitHub
│   ├── Events
│   ├── Projects
│   └── Contact
│
├── Solution Explorer
│   └── Current Page
│       ├── Section
│       ├── Section
│       └── Section
│
└── Editor
    ├── Home.cshtml
    ├── Projects.cshtml
    ├── Events.cshtml
    ├── About.cshtml
    └── Contact.cshtml
```

The structure is intentionally familiar to anyone who has worked inside an IDE, but it should still be understandable to visitors without a programming background.

---

# Navigation

## Editor Tabs

The primary pages of the website are represented as **open editor tabs**.

Current tabs include:

- `Home.cshtml`
- `Projects.cshtml`
- `Events.cshtml`
- `About.cshtml`
- `Contact.cshtml`

Rather than navigating to an entirely different-looking page, selecting a tab changes the content displayed in the central **editor workspace**.

This mirrors opening different files inside Visual Studio.

Each tab represents a major area of the organization.

### `Home.cshtml`

Introduces 404 Network and answers the most important question:

**What does this club actually do?**

The Home page establishes the club around three ideas:

- **Build Projects** — gain practical experience working on collaborative software.
- **Grow Professionally** — learn about internships, careers, interviews, and the transition from school into industry.
- **Find Your Network** — meet other computer science students and collaborate across different experience levels.

### `Projects.cshtml`

Shows what the club is currently building and explains how members can contribute.

Projects are not intended to just be finished products. They are opportunities for members to experience development practices such as:

```text
Issue
  ↓
Branch
  ↓
Development
  ↓
Pull Request
  ↓
Code Review
  ↓
Merge
```

Members can participate at different experience levels while learning