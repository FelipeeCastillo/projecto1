
// tooltips
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]')
  );
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });

//   scroll
var scrollSpy = new bootstrap.ScrollSpy(document.body, {
    target: '#navbar-example'
  })

