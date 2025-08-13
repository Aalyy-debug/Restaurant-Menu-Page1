
/* script.js — small interactivity for the sample menu */
document.addEventListener('DOMContentLoaded', function(){
  // Mobile nav toggle
  const navToggle = document.getElementById('navToggle');
  const navList = document.getElementById('navList');
  navToggle && navToggle.addEventListener('click', function(){
    const expanded = this.getAttribute('aria-expanded') === 'true';
    this.setAttribute('aria-expanded', String(!expanded));
    navList.classList.toggle('open');
  });

  // Filter buttons
  const buttons = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.dish-card');

  function setActive(btn){
    buttons.forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
  }

  buttons.forEach(btn=>{
    btn.addEventListener('click', function(){
      const filter = this.dataset.filter;
      setActive(this);
      cards.forEach(card=>{
        if(filter === 'all'){
          card.style.display = '';
          return;
        }
        if(card.classList.contains(filter)){
          card.style.display = '';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // Set year in footer
  const y = new Date().getFullYear();
  const yearEl = document.getElementById('year');
  if(yearEl) yearEl.textContent = y;
});
