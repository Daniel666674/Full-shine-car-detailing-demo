const burger=document.querySelector('.burger'),nav=document.querySelector('nav');
if(burger){burger.addEventListener('click',()=>{const o=nav.classList.toggle('open');burger.setAttribute('aria-expanded',o)})}
document.querySelectorAll('.tabs button').forEach(b=>b.addEventListener('click',()=>{
  document.querySelectorAll('.tabs button,.tabpane').forEach(e=>e.classList.remove('on'));
  b.classList.add('on');document.getElementById(b.dataset.t).classList.add('on');
}));
const f=document.getElementById('cform');
if(f){f.addEventListener('submit',e=>{e.preventDefault();
  const d=new FormData(f);
  const t=`Hola Full Shine, soy ${d.get('n')}. Servicio: ${d.get('s')}. Vehículo: ${d.get('v')}. ${d.get('m')}`;
  window.open('https://wa.me/573001828095?text='+encodeURIComponent(t),'_blank');
})}

const cr=document.getElementById('cmprange');if(cr){cr.addEventListener('input',()=>document.getElementById('cmp').style.setProperty('--pos',cr.value+'%'))}
