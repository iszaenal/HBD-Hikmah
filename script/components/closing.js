(function () {
  window.Components = window.Components || {};

  window.Components.closing = {
    render(container, section) {
      const div = document.createElement("div");
      div.className = "section section-closing";

      div.innerHTML = `
        <p class="closing-text">
          ${section.text || "Okay, now come back and tell me if you liked it."}
        </p>

        <p class="replay-btn" id="replay">
          ${section.replayText || "Or click, if you want to watch it again."}
        </p>

        <p class="last-smile">:)</p>
      `;

      container.appendChild(div);
      return div;
    },

    animate(tl, el) {
      const ideaIn = {
        opacity: 0,
        y: -20,
        rotationX: 5,
        skewX: "15deg"
      };

      tl.from(el.querySelector(".closing-text"), {
        duration: 1,
        ...ideaIn,
      })

      .from(el.querySelector("#replay"), {
        duration: 1,
        opacity: 0,
        y: -20,
      })

      .set(el.querySelector("#replay"), {
        pointerEvents: "auto",
        opacity: 1,
      })

      .from(el.querySelector(".last-smile"), {
        duration: 1,
        ...ideaIn,
      })

      .to(el.querySelector(".last-smile"), {
        duration: 0.5,
        rotation: 90,
      }, "+=1");
    },
  };
})();
