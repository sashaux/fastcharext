const grid = document.getElementById('grid');
const message = document.getElementById('message');

grid.querySelectorAll('.char').forEach(cell => {
  const ch = cell.textContent;
  cell.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(ch);
      showMessage(`Copied ${ch}`);
    } catch (err) {
      showMessage('Failed to copy');
      console.error(err);
    }
  });
});

function showMessage(text) {
  const oldBg = message.style.backgroundColor; // сохраняем текущий фон
  message.textContent = text;
  message.style.backgroundColor = '#A2E4B8';   // задаём подсветку

  setTimeout(() => {
    message.textContent = '';
    message.style.backgroundColor = oldBg;     // возвращаем исходный фон
  }, 1000);
}