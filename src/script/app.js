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
    highPost();
    cardPost();
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
            const pDate = document.createElement('p');
            pDate.textContent = post.date
            const pContent = document.createElement('p');
            pContent.textContent = post.content
            const imgPost = document.createElement('img');
            imgPost.setAttribute('src', post.image);
            const aPost = document.createElement('a');
            aPost.setAttribute('href', '#');
            aPost.textContent = 'Seguir leyendo'
            divPost$$.appendChild(namePost);
            divPost$$.appendChild(tittlePost);
            divPost$$.appendChild(pDate);
            divPost$$.appendChild(pContent);
            divPost$$.appendChild(aPost);
            divPost$$.appendChild(imgPost);
            divMain$$.appendChild(divPost$$);
        }
        
        main$$.appendChild(divMain$$);
    })
    
    
    
}

const cardPost = ()=>{
    const main$$ = document.querySelector('main');
    const divMain$$ = document.createElement('div');
    divMain$$.classList.add('card-post');
    divMain$$.innerHTML = `
    <div class="card">
      <img src="..." class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
      <div class="card-footer">
        <small class="text-muted">Last updated 3 mins ago</small>
      </div>
    </div>
    <div class="card">
      <img src="..." class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
      <div class="card-footer">
        <small class="text-muted">Last updated 3 mins ago</small>
      </div>
    </div>
    <div class="card">
      <img src="..." class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
      <div class="card-footer">
        <small class="text-muted">Last updated 3 mins ago</small>
      </div>
    </div>
    <div class="card">
      <img src="..." class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
      <div class="card-footer">
        <small class="text-muted">Last updated 3 mins ago</small>
      </div>
    </div>
    <div class="card">
      <img src="..." class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
      <div class="card-footer">
        <small class="text-muted">Last updated 3 mins ago</small>
      </div>
    </div>
    <div class="card">
      <img src="..." class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
      <div class="card-footer">
        <small class="text-muted">Last updated 3 mins ago</small>
      </div>
    </div>`;
  /* main$$.appendChild(divMain$$); */
  insertAfter(main$$, divMain$$);
}

function insertAfter(e,i){ 
    if(e.nextSibling){ 
        e.parentNode.insertBefore(i,e.nextSibling); 
    } else { 
        e.parentNode.appendChild(i); 
    }
}

const callData = async (type)=>{
    try {
        const res = await fetch('http://localhost:3000/' + type);
        const data = await res.json();
        return data;
    } catch (error) {
        return console.warn(error);
    }
    
}
