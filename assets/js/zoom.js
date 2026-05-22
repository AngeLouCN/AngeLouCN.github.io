// Initialize medium zoom.
$(document).ready(function () {
  medium_zoom = mediumZoom("[data-zoomable]", {
    margin: 48,
    background: getComputedStyle(document.documentElement).getPropertyValue("--global-bg-color") + "ee",
  });
});
