// copy.js
document.addEventListener('click', function(e){
  const btn = e.target.closest('[data-copy-target]');
  if(!btn) return;
  const selector = btn.getAttribute('data-copy-target');
  const target = document.querySelector(selector);
  if(!target) return;
  const text = target.textContent.trim();
  navigator.clipboard.writeText(text).then(()=>{
    const orig = btn.textContent;
    btn.textContent = 'Skopírované!';
    setTimeout(()=>btn.textContent = orig,1500);
  }).catch(()=>{
    alert('Kopírovanie zlyhalo. Skopírujte manuálne: ' + text);
  });
});
