let menuToogle = document.querySelector('.menuToogle');
let navigation = document.querySelector('.navigation');

menuToogle.onclick = function(){
  navigation.classList.toggle('active');
}