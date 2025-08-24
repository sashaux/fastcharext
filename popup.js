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
  message.textContent = text;
  message.style.opacity = 1;
  setTimeout(() => {
    message.style.opacity = 0;
  }, 1000);
  setTimeout(() => {
    message.textContent = '';
  }, 1300);
}
