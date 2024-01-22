//apertura finestra box ricerca text
document.getElementById('searchIcon').addEventListener('click',()=>{
    document.getElementById('searchExpand').classList.toggle('d-none');
    document.getElementById('searchExpand').classList.toggle('d-flex');
})
//perdita di focus non funziona perche???
document.getElementById('searchExpand').addEventListener('blur',()=>{
    document.getElementById('searchExpand').classList.toggle('d-none');
    document.getElementById('searchExpand').classList.toggle('d-flex');
})

//traccio le liste film
let listPin=document.getElementsByClassName('defaultList');
// mostro le liste presenti a schermo con l'effetto al caricamento della pagina
window.addEventListener('load',()=>{
    //verifico la posizione 
    for (const iterator of listPin) {
        if((window.innerHeight-100)>iterator.offsetTop){
            iterator.classList.add('showEffect');
        }
    }
})
window.addEventListener('scroll',()=>{
    //mostro le liste una volta che lo scroll ha raggiunto la posizione della lista
    for (const iterator of listPin) {  
        if((window.pageYOffset+window.innerHeight-300)>iterator.offsetTop){
            iterator.classList.add('showEffect');
        }
    }
  });

  let numeroColonne=5; //
  let listMovie=document.querySelectorAll('div.myCaroselRow>div');
  //semi nascondere la settima colonna
//   listMovie[numeroColonne].classList.add('semiHiddenCard');

//nascondo tutte le imggini in piu
  for (let index = (numeroColonne+1); index < listMovie.length; index++) {
    listMovie[index].classList.add('d-none');
  }
  console.log(document.querySelectorAll('div.myCaroselRow>div>img')[6].src);
// addevent sul button
document.getElementById('nextIcon').addEventListener('click',()=>{
    console.log('hai click');
    for (const iterator of listMovie) {
       iterator.classList.add('scorrimento') 
    }
})