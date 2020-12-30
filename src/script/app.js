window.onload = ()=>{
    showHeader();
    showContent();
    showFooter();
    actionBurguer();
    
}

const showHeader = ()=>{
    const head$$ = document.createElement('header');
    head$$.classList.add('header-main');
    document.body.appendChild(head$$);
    const nav$$ = document.createElement('nav');
    nav$$.classList.add('nav-bar')
    head$$.appendChild(nav$$);
    createLogo();
    createNav();
    navBurguer();
    
}

const showContent = ()=>{
    const main$$ = document.createElement('main');
    document.body.appendChild(main$$);
    sliderCenter();
    highPost();
    cardPost();
}

const showFooter = ()=>{
    const footer$$ = document.createElement('footer');
    document.body.appendChild(footer$$);
}




const createLogo = ()=>{
    const nav$$ = document.querySelector('nav');
    const h1$$ = document.createElement('h1');
    h1$$.classList.add('logo')
    h1$$.innerHTML = 'Time To Play';
    nav$$.appendChild(h1$$);   
}

const createNav = ()=>{

    const nav$$ = document.querySelector('nav');
    const container$$ = document.createElement('div');
    container$$.classList.add('container-full');
    const ul$$ = document.createElement('ul');

    for (let i = 0; i < 4; i++) {
    const li$$ = document.createElement('li');
    const a$$ = document.createElement('a');
    a$$.classList.add('a-nav');

    if (i == 0) {
        a$$.textContent = 'Videojuegos';
    }else if (i == 1) {
        a$$.textContent = 'Especiales'
    } else if(i == 2){
        a$$.textContent = 'Retro'
    }else{
        a$$.textContent = 'Analisis'
    }
    li$$.appendChild(a$$);
    ul$$.appendChild(li$$);
        
    }
    container$$.appendChild(ul$$);
    nav$$.appendChild(container$$);
    
}

const navBurguer = ()=>{
  const nav$$ = document.querySelector('nav');
  const container$$ = document.createElement('div');
  container$$.classList.add('container-collapse');
  const spanActiveOne$$ = document.createElement('span');
  const spanActiveTwo$$ = document.createElement('span');
  const spanActiveThr$$ = document.createElement('span');
  container$$.appendChild(spanActiveOne$$);
  container$$.appendChild(spanActiveTwo$$);
  container$$.appendChild(spanActiveThr$$);
  nav$$.appendChild(container$$);
}

const actionBurguer = ()=>{
  const span$$ = document.querySelector('.container-collapse');
  span$$.addEventListener('click', ()=>{
    span$$.classList.toggle('open');
  })
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
    divInner$$.innerHTML = `<div class="carousel-item active">
    <img src="/src/assets/img/mario.png" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
    <img src="/src/assets/img/Cyberpunk.jpg" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
    <img src="/src/assets/img/ff7.jpg" class="d-block w-100" alt="...">
    </div>`;
    divMain$$.appendChild(divInner$$);
    main$$.appendChild(divMain$$);
}

const highPost = ()=>{
    const main$$ = document.querySelector('main');
    const divMain$$ = document.createElement('div');
    divMain$$.classList.add('highPost');

    callData('highPosts').then(dataPost =>{
        
        for (const post of dataPost) {
            const divPost$$ = document.createElement('div');
            divPost$$.classList.add('item-post');
            const namePost = document.createElement('h4');
            namePost.textContent = post.name;
            const tittlePost = document.createElement('h1');
            tittlePost.textContent = post.tittle;
            const imgPost = document.createElement('img');
            imgPost.setAttribute('src', post.image);
            const aPost = document.createElement('a');
            aPost.setAttribute('href', '#');
            imgPost.appendChild(aPost);
            divPost$$.appendChild(imgPost);
            divPost$$.appendChild(namePost);
            divPost$$.appendChild(tittlePost);
            divMain$$.appendChild(divPost$$);
        }
        
        main$$.appendChild(divMain$$);
    })
    
    
    
}

const cardPost = ()=>{
    const main$$ = document.querySelector('main');
    console.log(main$$)
    const divMain$$ = document.createElement('div');
    divMain$$.classList.add('card-post');

    callData('posts').then(postData =>{
        for (const post of postData) {
            const card$$ = document.createElement('div');
            card$$.classList.add('card');
            const imgCard$$ = document.createElement('img');
            imgCard$$.classList.add('card-img-top');
            imgCard$$.setAttribute('src', post.image);
            card$$.appendChild(imgCard$$);
            divMain$$.appendChild(card$$);
            const cardBody$$ = document.createElement('div');
            cardBody$$.classList.add('card-body');
            const h5Card$$ = document.createElement('h5');
            h5Card$$.textContent = post.tittle;
            const pCard$$ = document.createElement('p');
            pCard$$.textContent = post.content;
            const aCard$$ = document.createElement('a');
            aCard$$.setAttribute('href', '#');
            aCard$$.textContent = 'Seguir leyendo';
            cardBody$$.appendChild(h5Card$$);
            cardBody$$.appendChild(pCard$$);
            cardBody$$.appendChild(aCard$$);
            card$$.appendChild(cardBody$$);
            const cardFooter$$ = document.createElement('div');
            cardFooter$$.classList.add('card-footer');
            const smallCard$$ = document.createElement('small');
            smallCard$$.classList.add('text-muted');
            smallCard$$.textContent = post.date;
            cardFooter$$.appendChild(smallCard$$);
            card$$.appendChild(cardFooter$$);
            divMain$$.appendChild(card$$);
        }
       main$$.appendChild(divMain$$);
    })

}

/* function insertAfter(e,i){ 
    if(e.nextSibling){ 
        e.parentNode.insertBefore(i,e.nextSibling); 
    } else { 
        e.parentNode.appendChild(i); 
    }
} */

const callData = async (type)=>{
    try {
        const res = await fetch('http://localhost:3000/' + type);
        const data = await res.json();
        return data;
    } catch (error) {
        return console.warn(error);
    }
    
}
