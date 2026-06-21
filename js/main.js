const OWNER_EMAIL = "owenobergmedia@outlook.com"; // Change this to your real email before publishing.

document.querySelectorAll('#year').forEach(el => {
  el.textContent = new Date().getFullYear();
});

const displayEmail = document.getElementById('displayEmail');
if (displayEmail) displayEmail.textContent = OWNER_EMAIL;

const form = document.getElementById('quoteForm');
if (form) {
  const params = new URLSearchParams(window.location.search);
  const requestedService = params.get('service');
  if (requestedService) document.getElementById('service').value = requestedService;

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const service = document.getElementById('service').value;
    const date = document.getElementById('date').value;
    const location = document.getElementById('location').value;
    const details = document.getElementById('details').value;

    const subject = `Quote Request - ${service}`;
    const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0APhone: ${phone}%0D%0AService: ${service}%0D%0AEvent Date: ${date}%0D%0ALocation: ${location}%0D%0A%0D%0ADetails:%0D%0A${encodeURIComponent(details)}`;

    window.location.href = `mailto:${OWNER_EMAIL}?subject=${encodeURIComponent(subject)}&body=${body}`;
  });
}

const filters = document.querySelectorAll('.filter');
const galleryItems = document.querySelectorAll('.portfolio-gallery .photo-placeholder');
filters.forEach(button => {
  button.addEventListener('click', () => {
    filters.forEach(b => b.classList.remove('active'));
    button.classList.add('active');

    const filter = button.dataset.filter;
    galleryItems.forEach(item => {
      const match = filter === 'all' || item.dataset.category === filter;
      item.style.display = match ? 'grid' : 'none';
    });
  });
});
