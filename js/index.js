let btn = document.querySelector('#menu');
let menu = document.querySelector('.menu');
let black = document.querySelector('.black');
let pasiv = document.querySelector('active')



btn.addEventListener(('click'),function(){
	menu.classList.toggle('open')
	black.classList.toggle('active')
	
	
})
black.addEventListener(('click'),function(){
	black.classList.remove('active')
	menu.classList.remove('open')
})