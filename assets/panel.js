// Segments ignite; nothing slides. The ladder fills cell by cell on first view, then holds — the
// same way the app's own meters behave, and the same way the hardware this page is dressed as does.
(function () {
  "use strict";

  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function light(ladder) {
    var cells = ladder.querySelectorAll("span");
    var target = Math.min(parseInt(ladder.dataset.lit, 10) || 0, cells.length);

    if (reduced) {
      for (var i = 0; i < target; i++) cells[i].classList.add("lit");
      return;
    }
    var index = 0;
    (function step() {
      if (index >= target) return;
      cells[index].classList.add("lit");
      index += 1;
      // Slightly uneven timing so it reads as a needle settling rather than a progress bar.
      setTimeout(step, index > target - 4 ? 90 : 34);
    })();
  }

  var ladders = document.querySelectorAll(".ladder");
  if (!ladders.length) return;

  if (!("IntersectionObserver" in window)) {
    ladders.forEach(light);
    return;
  }

  var watcher = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        watcher.unobserve(entry.target);
        light(entry.target);
      });
    },
    { threshold: 0.4 }
  );
  ladders.forEach(function (ladder) {
    watcher.observe(ladder);
  });
})();
