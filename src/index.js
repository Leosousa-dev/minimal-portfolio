const acordeon = document.querySelectorAll('.acordeon')
const divs = document.querySelectorAll('.minhas-divs');

acordeon.forEach(()=>{
   const header = document.querySelectorAll('.header');
   header.forEach((header)=>{
      header.addEventListener('click',()=>{
         item.toggleAttribute('open')
      })
   })
})
divs.forEach(div =>{
   div.addEventListener('click',event=>{
   divs.forEach(div =>{
      event.target.toggleAttribute('active')
   })      
   })
})
