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
  setTimeout(() => {
    message.textContent = '';
  }, 1000);
}
