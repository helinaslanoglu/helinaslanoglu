document.addEventListener("DOMContentLoaded", function () {
  const projectDetails = {
    "Fitness Center App": {
      description:
        "This project was developed as the final assignment for our third-year Architecture course. I designed the user interface for a Fitness Center App using React, integrating the backend and frontend to provide a seamless user experience.",
      date: "May 2025",
      role: "UI Designer & Frontend Developer",
      technologies: "React, HTML, CSS, JavaScript",
    },
    "Zodiac Sign Calculator": {
      description:
        "This simple web page was created as a project for the Web Technologies course to practice form handling and basic HTML/CSS design. The application allows users to enter their birth day, month, and year, and returns their zodiac sign. It was a great way to learn the fundamentals of web forms and layout through a straightforward user interface. Since this project was made for learning purposes only, it is local and has its shortcomings.",
      date: "May 2025",
      role: "Frontend Developer",
      technologies: "HTML, CSS, JavaScript",
    },
    "Integration Test Automation": {
      description:
        "During my internship, I was responsible for writing and maintaining tests for the database, backend, and user interface of the company's systems. I created both cache and API tests, and used DevOps tools like Jenkins to automate test execution and deployment to the live environment. These automated tests run daily at scheduled times, helping to ensure the reliability of the system. I continue to develop new tests and contribute to the ongoing maintenance and quality assurance of the platform.",
      date: "September 2024 - Present",
      role: "Test Engineer Intern",
      technologies: "Jenkins, Azure DevOps, Postman, API Testing",
    },
  };

  const menuToggle = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector(".nav-menu");
  const hamburger = document.querySelector(".hamburger");

  if (menuToggle) {
    menuToggle.addEventListener("click", function () {
      navMenu.classList.toggle("active");
      hamburger.classList.toggle("active");
    });
  }

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      if (navMenu && navMenu.classList.contains("active")) {
        navMenu.classList.remove("active");
        hamburger.classList.remove("active");
      }

      const targetId = this.getAttribute("href");

      if (targetId === "#") return;

      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
        });
      }
    });
  });

  const header = document.querySelector(".header");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  const filterBtns = document.querySelectorAll(".filter-btn");
  const projectCards = document.querySelectorAll(".project-card");

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      filterBtns.forEach((btn) => btn.classList.remove("active"));

      this.classList.add("active");

      const filter = this.getAttribute("data-filter");

      projectCards.forEach((card) => {
        if (filter === "all" || card.getAttribute("data-category") === filter) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    });
  });

  const projectModal = document.querySelector(".project-modal");
  const modalTitle = document.querySelector(".modal-title");
  const modalDescription = document.getElementById("project-description");
  const modalDate = document.getElementById("modal-date");
  const modalRole = document.getElementById("modal-role");
  const modalTechnologies = document.getElementById("modal-technologies");
  const modalClose = document.querySelector(".modal-close");
  const viewButtons = document.querySelectorAll(".project-view-btn");

  viewButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const projectCard = this.closest(".project-info");
      const projectTitle = projectCard.querySelector("h3").textContent;
      const projectImg =
        this.closest(".project-card").querySelector(".project-img img").src;

      modalTitle.textContent = projectTitle;
      document.querySelector(".modal-gallery img").src = projectImg;
      document.querySelector(".modal-gallery img").alt = projectTitle;

      if (projectDetails[projectTitle]) {
        modalDescription.innerHTML = `<p>${projectDetails[projectTitle].description}</p>`;
        modalDate.textContent = projectDetails[projectTitle].date;
        modalRole.textContent = projectDetails[projectTitle].role;
        modalTechnologies.textContent =
          projectDetails[projectTitle].technologies;
      } else {
        modalDescription.innerHTML =
          "<p>Details not available for this project.</p>";
        modalDate.textContent = "N/A";
        modalRole.textContent = "N/A";
        modalTechnologies.textContent = "N/A";
      }

      projectModal.classList.add("active");
      document.body.style.overflow = "hidden";
    });
  });

  if (modalClose) {
    modalClose.addEventListener("click", closeModal);
  }

  projectModal.addEventListener("click", function (e) {
    if (e.target === projectModal) {
      closeModal();
    }
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && projectModal.classList.contains("active")) {
      closeModal();
    }
  });

  function closeModal() {
    projectModal.classList.remove("active");
    document.body.style.overflow = "";
  }

  const goTopBtn = document.querySelector(".go-top");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 500) {
      goTopBtn.classList.add("active");
    } else {
      goTopBtn.classList.remove("active");
    }
  });

  goTopBtn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  const contactForm = document.querySelector(".contact-form");
  const formSuccess = document.querySelector(".form-success");
  const closeSuccess = document.querySelector(".close-success");

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      formSuccess.classList.add("active");

      contactForm.reset();
    });
  }

  if (closeSuccess) {
    closeSuccess.addEventListener("click", function () {
      formSuccess.classList.remove("active");
    });
  }
});
