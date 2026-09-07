const menu=document.querySelector('.menu-toggle'),nav=document.querySelector('.nav-links'),links=document.querySelectorAll('.nav-links a');
menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));});
links.forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu.setAttribute('aria-expanded','false');}));
document.getElementById('year').textContent=new Date().getFullYear();
