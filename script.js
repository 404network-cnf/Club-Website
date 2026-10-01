 const pages = {
    home: [
      ["home-welcome", "Welcome"],
      ["home-pillars", "What We Do"],
      ["home-now", "Current Focus"],
      ["join", "Join"]
    ],
    projects: [
      ["projects-overview", "Overview"],
      ["projects-website", "Club Website"],
      ["projects-workflow", "Development Workflow"],
      ["projects-stack", "Tech Stack"]
    ],
    events: [
      ["events-upcoming", "Upcoming"],
      ["events-format", "Meeting Format"]
    ],
    about: [
      ["about-mission", "Mission"],
      ["about-values", "Values"],
      ["about-team", "Leadership"]
    ],
    contact: [
      ["contact-links", "Links"],
      ["contact-terminal", "Contact Info"]
    ]
  };

  const pageNames = {
    home: "Home",
    projects: "Projects",
    events: "Events",
    about: "About",
    contact: "Contact"
  };

  const tabs = [...document.querySelectorAll(".tab")];
  const pageEls = [...document.querySelectorAll(".page")];
  const explorerTree = document.getElementById("explorerTree");
  const editorScroll = document.getElementById("editorScroll");

  let currentPage = "home";

  function renderExplorer(page) {
    const sections = pages[page];
    explorerTree.innerHTML = `
      <div class="tree-root">▾ Solution '404Network'</div>
      <div class="folder">${pageNames[page]}.cshtml</div>
      ${sections.map(([id, label], index) => `
        <a class="section-link ${index === 0 ? "active" : ""}" href="#${id}" data-section="${id}">
          ${label}
        </a>
      `).join("")}
    `;

    explorerTree.querySelectorAll(".section-link").forEach(link => {
      link.addEventListener("click", e => {
        e.preventDefault();
        const target = document.getElementById(link.dataset.section);
        if (target) {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      });
    });
  }

  function openPage(page, sectionId = null) {
    currentPage = page;

    tabs.forEach(tab => tab.classList.toggle("active", tab.dataset.page === page));
    pageEls.forEach(el => el.classList.toggle("active", el.dataset.page === page));

    renderExplorer(page);

    requestAnimationFrame(() => {
      if (sectionId) {
        const target = document.getElementById(sectionId);
        if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        editorScroll.scrollTo({ top: 0, behavior: "smooth" });
      }
    });
  }

  tabs.forEach(tab => {
    tab.addEventListener("click", () => openPage(tab.dataset.page));
  });

  document.querySelectorAll("[data-open-page]").forEach(el => {
    el.addEventListener("click", () => openPage(el.dataset.openPage));
  });

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", e => {
      const id = anchor.getAttribute("href").slice(1);
      if (!id) return;

      for (const [page, sections] of Object.entries(pages)) {
        if (sections.some(([sectionId]) => sectionId === id)) {
          e.preventDefault();
          openPage(page, id);
          break;
        }
      }
    });
  });

  function setActiveExplorerSection() {
    const links = [...explorerTree.querySelectorAll(".section-link")];
    if (!links.length) return;

    let activeId = pages[currentPage][0][0];
    const visiblePage = document.querySelector(`.page[data-page="${currentPage}"]`);

    visiblePage.querySelectorAll("section").forEach(section => {
      const top = section.getBoundingClientRect().top;
      const editorTop = editorScroll.getBoundingClientRect().top;
      if (top - editorTop < 150) activeId = section.id;
    });

    links.forEach(link => {
      link.classList.toggle("active", link.dataset.section === activeId);
    });
  }

  editorScroll.addEventListener("scroll", setActiveExplorerSection);

  document.getElementById("siteSearch").addEventListener("keydown", e => {
    if (e.key === "Enter") {
      const query = e.currentTarget.value.toLowerCase().trim();
      if (!query) return;

      for (const [page, sections] of Object.entries(pages)) {
        const match = sections.find(([,label]) => label.toLowerCase().includes(query));
        if (match) {
          openPage(page, match[0]);
          return;
        }
      }

      const pageMatch = Object.entries(pageNames).find(([,name]) => name.toLowerCase().includes(query));
      if (pageMatch) openPage(pageMatch[0]);
    }
  });

  document.addEventListener("keydown", e => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "q") {
      e.preventDefault();
      document.getElementById("siteSearch").focus();
    }
  });

  renderExplorer("home");