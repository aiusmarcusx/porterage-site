// The connection comes up stage by stage on load, then holds; after that, the rail lamp follows
// the stage being read. Both are state changes on the instrument — nothing slides.
(function () {
  "use strict";

  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  var taps = document.querySelectorAll(".path li");
  Array.prototype.forEach.call(taps, function (li, i) {
    if (reduced) {
      li.classList.add("is-lit");
      return;
    }
    setTimeout(function () { li.classList.add("is-lit"); }, 200 + i * 150);
  });

  var links = {};
  Array.prototype.forEach.call(document.querySelectorAll(".stagerail a"), function (a) {
    links[a.getAttribute("href").slice(1)] = a;
  });
  var sections = Array.prototype.filter.call(document.querySelectorAll(".stage, #fix"), function (s) {
    return links[s.id];
  });
  if (!sections.length || !("IntersectionObserver" in window)) return;

  var inBand = {};

  function mark() {
    var current = null;
    for (var i = 0; i < sections.length; i++) {
      if (inBand[sections[i].id]) { current = sections[i].id; break; }
    }
    if (!current) return;
    Object.keys(links).forEach(function (id) {
      if (id === current) links[id].setAttribute("aria-current", "step");
      else links[id].removeAttribute("aria-current");
    });
  }

  // A thin band across the upper middle of the viewport: whichever stage crosses it is the one
  // being read. Leaving the band empty keeps the last lamp lit rather than flickering off.
  var watcher = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) { inBand[e.target.id] = e.isIntersecting; });
    mark();
  }, { rootMargin: "-35% 0px -55% 0px" });

  sections.forEach(function (s) { watcher.observe(s); });
})();
