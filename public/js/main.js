fetch('JSON/data.json?nocache=' + Date.now())
  .then(res => {
    if (!res.ok) {
      throw new Error('Failed to fetch data.json');
    }
    return res.json();
  })
  .then(cards => {
    const textElements = document.querySelectorAll('.card-text');
    const valueElements = document.querySelectorAll('.card-title');

    cards.forEach((card, index) => {
      if (textElements[index] && valueElements[index]) {
        textElements[index].textContent = card.label;
        valueElements[index].textContent = card.value;
      }
    });
  })
  .catch(err => {
    console.error('Error loading dashboard cards:', err);
  });
