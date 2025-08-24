const chars = ['—','–','°','±','·','×','÷','←','↑','→','↓','⇧','⇩','↔','↕','★','☆','♥','☺','☹','✓','✗'];

const grid = document.getElementById('grid');
const message = document.getElementById('message');

chars.forEach(ch => {
  const div = document.createElement('div');
  div.textContent = ch;
  div.className = 'char';
  div.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(ch);
      showMessage(`Copied ${ch}`);
    } catch (err) {
      showMessage('Failed to copy');
      console.error(err);
    }
  });
  grid.appendChild(div);
});

function showMessage(text) {
  message.textContent = text;
  setTimeout(() => {
    message.textContent = '';
  }, 1000);
}
