$(document).ready(function(){
    const TeachingTitle = document.querySelectorAll('.teaching .title p')
    const menuBtn = document.querySelector('.menu')
    const titles = document.querySelector('.teaching .title')
    const contents = document.querySelector('.teaching .content')
    const eachContent = document.querySelectorAll('.teaching .content .each')
    
   
    menuBtn.addEventListener('click', function(){
        titles.style.display= 'flex'
        contents.style.display= 'none'
    
       menuBtn.style.display = 'none'
    
    
    })
    
    TeachingTitle.forEach(title => {
        title.addEventListener('click', function(){
    
            TeachingTitle.forEach(title => {
                title.classList.remove('checked')
            })
            title.classList.add('checked')
             
        let alive = title.dataset.forTab;
        titles.style.display= 'none'
        contents.style.display= 'block'
    
       menuBtn.style.display = 'block'
       eachContent.forEach(sss => {
           if(sss.dataset.tab  === alive){
               eachContent.forEach(sss => {
                   sss.classList.remove('alive')
               })
               sss.classList.add('alive')
           }
            })
    
    })})
    })
