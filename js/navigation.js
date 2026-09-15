(() => {
const nav=document.querySelector('.navbar');
if(!nav)return;
const links=document.querySelector('.nav-links');
const btn=document.querySelector('.menu-btn');
const setOpen=(open)=>{links?.classList.toggle('open',open);btn?.setAttribute('aria-expanded',String(open));};
links?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>setOpen(false)));
btn?.addEventListener('click',()=>setOpen(!links.classList.contains('open')));
window.addEventListener('resize',()=>{if(innerWidth>760)setOpen(false)});
window.addEventListener('scroll',()=>nav.classList.toggle('scrolled',scrollY>16),{passive:true});
})();
