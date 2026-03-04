
const toggleBtn = document.getElementById("button");
if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
        const para = document.getElementById("para");
        if (para) {
            para.toggleAttribute("hidden");
        }
    });
}

const btn = document.getElementById('coolbutton');
if (btn) {
  btn.addEventListener('click', () => {

    let Cool = document.getElementById('cool');
    let Coollist = document.getElementById('coollist');
    if (Cool.value.trim() !== '') {
      const colist = document.createElement('li');
      colist.textContent = Cool.value;
      Coollist.appendChild(colist);
      Cool.value = '';
    }
  });
}