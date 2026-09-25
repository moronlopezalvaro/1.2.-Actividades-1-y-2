console.log('script1.js ejecutado');
 
for (let i = 0; i < 500; i++) {
  console.log('script1 contando: ' + i);
}
document.getElementById('titulo').innerText = 'Cambiado por script1';