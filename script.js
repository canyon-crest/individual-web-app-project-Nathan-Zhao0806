
const toggleBtn = document.getElementById("button");
if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
        const para = document.getElementById("para");
        if (para) {
            para.toggleAttribute("hidden");
        }
    });
}
console.log('script loaded on', location.pathname);

const btn = document.getElementById('coolbutton');
console.log('coolbutton element', btn);

if (btn) {
  btn.addEventListener('click', () => {
    console.log('coolbutton clicked');
    let cool = document.getElementById('cool');
    let coollist = document.getElementById('coollist');
    console.log('input value:', cool.value, 'coollist element:', coollist);
    if (cool.value.trim() !== '') {
      const colist = document.createElement('li');
      colist.textContent = cool.value;
      coollist.appendChild(colist);
      cool.value = '';
    }
  });
}