window.onload = ()=>{
    showHeader();
    showContent();
    showFooter();
    
}

const showHeader = ()=>{
    const head$$ = document.createElement('header');
    document.body.appendChild(head$$);
    const nav$$ = document.createElement('nav');
    head$$.appendChild(nav$$);
    creatLogo();
    createNav();
    createSearch();
}

const showContent = ()=>{
    const main$$ = document.createElement('main');
    document.body.appendChild(main$$);
    sliderCenter();
}

const showFooter = ()=>{
    const footer$$ = document.createElement('footer');
    document.body.appendChild(footer$$);
}




const creatLogo = ()=>{
    const nav$$ = document.querySelector('nav');
    const h1$$ = document.createElement('h1');
    h1$$.classList.add('logo')
    h1$$.textContent = 'Time To Play';
    nav$$.appendChild(h1$$);   
}

const createNav = ()=>{

    const nav$$ = document.querySelector('nav');
    const ul$$ = document.createElement('ul');

    for (let i = 0; i < 4; i++) {
    const li$$ = document.createElement('li');
    const a$$ = document.createElement('a');
    a$$.classList.add('a-nav');

    if (i == 0) {
        a$$.textContent = 'New';
    }else if (i == 1) {
        a$$.textContent = 'Special'
    } else if(i == 2){
        a$$.textContent = 'Retro'
    }else{
        a$$.textContent = 'Contacto'
    }
    li$$.appendChild(a$$);
    ul$$.appendChild(li$$);
        
    }
    nav$$.appendChild(ul$$);
}

const createSearch = ()=>{
    const nav$$ = document.querySelector('nav');
    const input$$ = document.createElement('input');
    input$$.classList.add('inp-nav');
    const btn$$ = document.createElement('button');
    btn$$.classList.add('btn-search');
    const i$$ = document.createElement('i');
    i$$.classList.add('bx', 'bx-search');

    nav$$.appendChild(input$$);
    btn$$.appendChild(i$$);
    nav$$.appendChild(btn$$);
    

}

const sliderCenter = ()=>{
    const main$$ = document.querySelector('main');
    const divMain$$ = document.createElement('div');
    divMain$$.classList.add('carousel', 'slide');
    divMain$$.setAttribute('data-bs-ride', 'carousel')
    const divInner$$ = document.createElement('div');
    divInner$$.classList.add('carousel-inner');
    divInner$$.innerHTML = '<div class="carousel-item active"><img src="/src/assets/img/mario.png" class="d-block w-100" alt="..."></div><div class="carousel-item"><img src="/src/assets/img/Cyberpunk.jpg" class="d-block w-100" alt="..."></div><div class="carousel-item"><img src="/src/assets/img/ff7.jpg" class="d-block w-100" alt="..."></div>'
    divMain$$.appendChild(divInner$$);
    main$$.appendChild(divMain$$);
}