document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var header = document.querySelector('.site-header');

  if (toggle && header) {
    toggle.addEventListener('click', function () {
      var isOpen = header.classList.toggle('nav-open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    document.querySelectorAll('.mobile-nav a').forEach(function (link) {
      link.addEventListener('click', function () {
        header.classList.remove('nav-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  var contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      var name = contactForm.name.value.trim();
      var company = contactForm.company.value.trim();
      var email = contactForm.email.value.trim();
      var teamsize = contactForm.teamsize.value;
      var message = contactForm.message.value.trim();

      var subject = 'New inquiry from ' + (company || name || 'website');

      var bodyLines = [
        'Name: ' + name,
        'Company: ' + company,
        'Email: ' + email,
        'Team size: ' + teamsize,
        '',
        'Message:',
        message
      ];

      var mailto = 'mailto:hello@abovesupport.com'
        + '?subject=' + encodeURIComponent(subject)
        + '&body=' + encodeURIComponent(bodyLines.join('\n'));

      window.location.href = mailto;
    });
  }
});
