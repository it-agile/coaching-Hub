(function () {
  var navToggle = document.querySelector(".nav-toggle");
  var mobileNav = document.getElementById("mobile-nav");

  if (navToggle && mobileNav) {
    navToggle.addEventListener("click", function () {
      var isOpen = mobileNav.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
      navToggle.innerHTML = isOpen
        ? '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18M6 6l12 12"/></svg>'
        : '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12h16M4 6h16M4 18h16"/></svg>';
      navToggle.setAttribute("aria-label", isOpen ? "Menü schließen" : "Menü öffnen");
    });

    mobileNav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        mobileNav.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
        navToggle.innerHTML =
          '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12h16M4 6h16M4 18h16"/></svg>';
        navToggle.setAttribute("aria-label", "Menü öffnen");
      });
    });
  }

  var featured = document.getElementById("featured-coach");
  if (!featured) return;

  var featuredImg = featured.querySelector(".featured-coach-img img");
  var featuredQuote = featured.querySelector(".quote");
  var featuredName = featured.querySelector(".name");
  var featuredRole = featured.querySelector(".role");
  var featuredBio = featured.querySelector(".bio");
  var featuredTags = featured.querySelector(".tag-row");

  document.querySelectorAll(".coach-card").forEach(function (card) {
    card.addEventListener("click", function () {
      var data = card.dataset;

      document.querySelectorAll(".coach-card").forEach(function (c) {
        c.classList.remove("active");
      });
      card.classList.add("active");

      featuredImg.src = data.image;
      featuredImg.alt = "Portrait von " + data.name;
      featuredQuote.textContent = "„" + data.quote + "“";
      featuredName.textContent = data.name;
      featuredRole.textContent = data.role;
      featuredBio.textContent = data.bio;

      featuredTags.innerHTML = "";
      data.focus.split("|").forEach(function (f) {
        var span = document.createElement("span");
        span.className = "tag";
        span.textContent = f;
        featuredTags.appendChild(span);
      });

      document.getElementById("coaches").scrollIntoView({ behavior: "smooth" });
    });
  });
})();
