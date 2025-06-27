document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('serviceSearch');
  const cards = document.querySelectorAll('.category-card');

  searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase();
    cards.forEach(card => {
      const title = card.querySelector('h3').textContent.toLowerCase();
      card.style.display = title.includes(query) ? 'block' : 'none';
    });
  });
});

