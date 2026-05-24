
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('change', () => {
    document.body.dataset.theme = themeToggle.checked ? 'dark' : '';
});


function openModal(id) { 
    document.getElementById(id + '-modal').classList.add('active'); 
}
function closeModal(id) { 
    document.getElementById(id + '-modal').classList.remove('active'); 
}


function paginateItems(containerId, paginationId, itemsPerPage) {
    const container = document.getElementById(containerId);
    const pagination = document.getElementById(paginationId);
    const items = Array.from(container.children);
    const totalPages = Math.ceil(items.length / itemsPerPage);

    
    pagination.innerHTML = '';

    for (let i = 0; i < totalPages; i++) {
        const btn = document.createElement('button');
        btn.textContent = i + 1;
        btn.onclick = () => {
            items.forEach((item, idx) => {
                
                item.style.display = (idx >= i * itemsPerPage && idx < (i + 1) * itemsPerPage) ? 'block' : 'none';
            });
        };
        pagination.appendChild(btn);
    }

    
    if (totalPages > 0) {
        pagination.querySelector('button').click();
    }
}


const movies = [
   {
      title:"Алиса в Пограничье", category:"series", img:"https://i.pinimg.com/736x/dd/ce/bd/ddcebd9de29162124d26d25fc5fcfa89.jpg", rating:"7.7", desc:"Японский сериал о смертельных играх в параллельном мире."
   },
   {
      title:"Милый дом", category:"series", img:"https://i.pinimg.com/736x/85/ad/71/85ad71907223318324654654335591d8.jpg", rating:"7.4", desc:"Корейская дорама о выживании в апокалипсисе."
   },
   {
      title:"Бойцовский клуб", category:"film", img:"https://i.pinimg.com/736x/56/77/17/56771786e07eef68b20ffe20920eb052.jpg", rating:"8.6", desc:"Культовый фильм о бунте против общества."
   },
   {
      title:"Код Гиас", category:"anime", img:"https://i.pinimg.com/1200x/5c/f5/5c/5cf55c91d6193949bfeb8e7fcb7ec00f.jpg", rating:"8.7", desc:"Аниме о гении, получившем силу подчинения."
   },
   {
      title:"Очень странные дела", category:"series", img:"https://i.pinimg.com/736x/c7/8e/3f/c78e3f53be68badae98091f903217f86.jpg", rating:"7.7", desc:"Американский сериал о влеянии паралельных вселенных."
   },
   {
      title:"Гарри Поттер", category:"series", img:"https://i.pinimg.com/736x/32/dd/bf/32ddbf2068dfadb567eea04b830ec1b0.jpg", rating:"8.3", desc:"Оильм о Гарри Поттере рассказывает о юном волшебнике, который борется с тёмным магом Волан-де-Мортом и его приспешниками. ."
   },
   {
      title:"Человек Паук", category:"series", img:"https://i.pinimg.com/736x/db/03/32/db0332c8281295913f0e333feafd0c5e.jpg", rating:"7.8", desc:"Человек-паук — это супергерой, который после укуса генетически модифицированного паука приобретает сверхчеловеческие способности."
   },
   {
      title:"Крик", category:"series", img:"https://i.pinimg.com/736x/34/45/f9/3445f99762d5c6d805331a8552fca348.jpg", rating:"7.3", desc:"Американский слэшер о маньяке в маске, который терроризирует жителей вымышленного городка Вудсборо. ."
   },
   {
      title:"Человек бензопила", category:"series", img:"https://i.pinimg.com/736x/42/fd/83/42fd838c7d3d44aaeb67bcf6744459dc.jpg", rating:"8.5", desc:".«Человек-бензопила» — манга и аниме о подростке по имени Дэндзи, который получает демонические способности после смерти. "
   },
   {
      title:"Во все тяжкие", category:"series", img:"https://i.pinimg.com/736x/66/20/1c/66201c81c7cb74d07c1858f6dd50ed3a.jpg", rating:"8.9", desc:"Сериал «Во все тяжкие»рассказывает о 50-летнем учителе химии Уолтере Уайте, который узнаёт о неоперабельном раке лёгких."
   },
   {
      title:"Декстер", category:"series", img:"https://i.pinimg.com/736x/e9/63/57/e96357e79cdbfffefc3c6c5d0f42baec.jpg", rating:"8.3", desc:".Декстер» — американский криминальный сериал о серийном убийце Декстере Моргане, который ведёт двойную жизнь."
   },
   {
      title:"Пацаны", category:"series", img:"https://i.pinimg.com/736x/e5/51/1c/e5511c06e950c31f6b88364a1349bd7c.jpg", rating:"8.3", desc:"Сериал «Пацаны» — американский супергеройский телесериал, который рассказывает о команде мстителей, борющихся с супергероями, злоупотребляющими своими способностями. ."
   },
   {
      title:"Mr.Robot", category:"series", img:"https://i.pinimg.com/736x/00/ca/03/00ca03d3f1c9a1dccabab88541b7d9bb.jpg", rating:"8.5", desc:".«Мистер Робот» (Mr. Robot) — американский телесериал в жанре психологического триллера, созданный Сэмом Эсмейлом."
   },
   {
      title:"Токийский гуль", category:"series", img:"https://i.pinimg.com/736x/15/e2/40/15e240d03821f3ed5f16ce7571bcbbde.jpg", rating:"7.1", desc:"«Токийский гуль» (Tokyo Ghoul) — аниме-сериал в жанрах ужасов, фэнтези, боевика, триллера и драмы, основанный на одноимённой манге Суи Исиды.."
   },
   {
      title:"Поезд в Пусан", category:"series", img:"https://i.pinimg.com/736x/20/67/fe/2067fe907f9d666f19acaf36db409174.jpg", rating:"7.2", desc:"«Поезд в Пусан» — южнокорейский фильм ужасов о зомби-апокалипсисе. Режиссёр — Ён Сан-хо."
   },
   { title:"Тетрадь смерти", category:"series", img:"https://i.pinimg.com/1200x/13/9b/cf/139bcfcf09db4b59fcc97e2abc422f55.jpg", rating:"8.6", desc:"«Тетрадь смерти» (Death Note) — это манга и аниме о старшекласснике Лайте Ягами, который находит тетрадь, позволяющую убивать людей. Он решает использовать её, чтобы построить «справедливый» мир без преступников." },
   { title:"Сваты", category:"series", img:"https://i.pinimg.com/736x/b3/8a/b5/b38ab5410eec7787474e78dab0789df7.jpg", rating:"8", desc:"«Сваты» — комедийный сериал, который рассказывает о взаимоотношениях двух семей." },
   { title:"Re:zero", category:"series", img:"https://i.pinimg.com/736x/d6/0a/23/d60a23885882c70d89f0f4e50946030b.jpg", rating:"8.5", desc:"«Re:Zero — Жизнь с нуля в альтернативном мире» (Re:Zero kara Hajimeru Isekai Seikatsu) — аниме-сериал 2016 года в жанре фэнтези, приключений и драмы.Сюжет рассказывает о подростке Субару Нацуки, который неожиданно переносится в фэнтезийный мир, напоминающий средневековую Европу." },
   { title:"Страшная воля богов", category:"series", img:"https://i.pinimg.com/736x/4e/c1/4c/4ec14cca1c88ef586b44f856cef05cad.jpg", rating:"6.6", desc:"«Страшная воля богов» (Kamisama no iu tori, 2014) — японский фильм в жанре ужасов и фантастики, снятый режиссёром Такаси Миике. Основан на первой арке одноимённой манги Мунэюки Канэсиро и Акэдзи Фудзимуры. ." },
   { title:"Слендер Мен", category:"series", img:"https://i.pinimg.com/736x/bc/57/f7/bc57f751824199aafb0a185c5d348455.jpg", rating:"4.3", desc:"«Слендермен» (Slender Man, 2018) — фильм ужасов о сверхъестественном, основанный на городской легенде о мистическом персонаже Слендермене ." },
   { title:"Мы все мертвы", category:"series", img:"https://i.pinimg.com/736x/5d/58/b3/5d58b32a5314847b5136604e88e5d82b.jpg", rating:"7.7", desc:"«Мы все мертвы» — южнокорейский сериал в жанре хоррор-триллера, вышедший на стриминговом сервисе Netflix в 2022 году. Основан на вебтуне (корейском онлайн-комиксе) под названием «Сейчас в нашей школе»." },
   { title:"Брат", category:"series", img:"https://i.pinimg.com/1200x/08/56/17/085617b649fb1ee81fe4b3a2677d3a78.jpg", rating:"8.4", desc:"«Брат» (1997) — криминальная драма Алексея Балабанова о молодом человеке, который после службы в армии сталкивается с жестокостью и предательством в постсоветской России." },
   { title:"Слово пацана", category:"series", img:"https://i.pinimg.com/736x/1c/73/65/1c7365fad5898d5050fb23101f969854.jpg", rating:"8.1", desc:"«Слово пацана. Кровь на асфальте» — российский криминальный сериал о молодёжных группировках Казани конца 1980-х годов. Основан на книге Роберта Гараева «Слово пацана. Криминальный Татарстан 1970–2010-х»." },
   { title:"Игра в кальмара", category:"series", img:"https://i.pinimg.com/736x/5c/76/da/5c76da0a634915df528dd34b4638bbe4.jpg", rating:"7.7", desc:"«Игра в кальмара» — южнокорейский сериал о группе людей, которые из-за финансовых трудностей принимают участие в тайном турнире на выживание. Участники проходят серию детских игр, ставших смертельно опасными, за шанс выиграть крупный денежный приз." },
   { title:"Евангелион", category:"series", img:"https://i.pinimg.com/736x/5e/fd/ad/5efdada61cd092e7966affbad3998dd8.jpg", rating:"9.1", desc:"«Евангелион»  — культовое аниме-сериал 1995–1996 годов. Это не просто история о гигантских роботах и борьбе с угрозами, а сложное философское и психологическое произведение, исследующее темы экзистенциального кризиса, идентичности, отношений между людьми и природы реальности. ." },
];

const actors = [
   {
      name:"Брэд Питт", country:"США", img:"https://i.pinimg.com/736x/1c/30/8c/1c308c577cd9fd1771083153b09434d1.jpg", bio:"Актёр, продюсер. «Бойцовский клуб», «Троя»."
   },
   {
      name:"Чон Джон-со", country:"Южная Корея", img:"https://i.pinimg.com/736x/9f/40/b6/9f40b63e654561b40735b6f6874ee59d.jpg", bio:"Звезда корейского кино."
   },
   {
      name:"Кэнто Ямадзаки", country:"Япония", img:"https://i.pinimg.com/736x/83/20/49/832049e2d074ca008ca1acbccae7ad77.jpg", bio:"Японский актёр и модель"
   },
   {
      name:"Карл Урбан", country:"Новая Зеландия", img:"https://i.pinimg.com/1200x/39/1f/c1/391fc145f1ab5813ab493ec18f590d06.jpg", bio:"новозеландский актёр кино и телевидения"
   },
   {
      name:"Энтони Старр", country:"Новая Зеландия", img:"https://i.pinimg.com/1200x/03/fc/a6/03fca6c364a65652fdffd4a899f8117c.jpg", bio:"новозеландский актёр кино и телевидения"
   },
   {
      name:"Федор Добронравов", country:"Россия", img:"https://i.pinimg.com/736x/d2/14/81/d21481acdc9dcb79695c02ce524ca1a6.jpg", bio:"Советский и российский актёр театра, кино, телевидения"
   },
   {
      name:"Киллиан Мёрфи", country:"Ирландия", img:"https://i.pinimg.com/736x/ef/3f/85/ef3f8510610093b9552e98586f278ddf.jpg", bio:"ирландский актёр, обладатель премии «Оскар» за лучшую мужскую роль в фильме «Оппенгеймер»."
   },
   {
      name:"Mellstroy", country:"Белорусь", img:"https://i.pinimg.com/736x/c3/30/7e/c3307ede7da48217020d56f467e7257f.jpg", bio:"белорусский стример и блогер."
   },
   {
      name:"Марк Робнртович(madk1d)", country:"Россия", img:"https://i.pinimg.com/736x/de/f2/c4/def2c4d86d92c3fbcbfe5f2e282d3360.jpg", bio:"Российский музыкант и рэпер"
   },
   {
      name:"Кобяков", country:"Белорусь", img:"https://i.pinimg.com/736x/83/72/a8/8372a85dd540c2e5f4095bca6b6e8329.jpg", bio:"белорусский видеоблогер, певец и телеведущий, бывший участник команды Влада Бумаги (А4)"
   },
   {
      name:"Влад А4", country:"Белорусь", img:"https://i.pinimg.com/1200x/7b/8b/10/7b8b10becacc3a83ad4252edd3789f32.jpg", bio:"белорусский видеоблогер, певец и инфлюенсер, известный своими роликами на YouTube."
   },
   {
      name:"Глент", country:"Белорусь", img:"https://i.pinimg.com/736x/22/87/64/22876448ff952969fbbb964fc7e9b79e.jpg", bio:"популярный русскоязычный видеоблогер."
   },

   
];
const moviesGrid = document.getElementById('movies-grid');
const actorsGrid = document.getElementById('actors-grid');


function renderMovies(filter='all') {
    moviesGrid.innerHTML = movies
        .filter(m => filter === 'all' || m.category === filter)
        .map(m => `
            <div class='movie-card'>
                <img src='${m.img}' alt='${m.title}'>
                <h3>${m.title}</h3>
                <p>Оценка:${m.rating}</p>
                <p>${m.desc}</p>
            </div>
        `).join('');

    
    paginateItems('movies-grid', 'movie-pagination', 5);
}


actorsGrid.innerHTML = actors.map(a => `
    <div class='actor-card'>
        <img src='${a.img}' alt='${a.name}'>
        <h4>${a.name} (${a.country})</h4>
        <p>${a.bio}</p>
    </div>
`).join('');


renderMovies(); 
paginateItems('actors-grid', 'actor-pagination', 3); 


document.getElementById('category-filter').addEventListener('change', e => renderMovies(e.target.value));
function openModal(id) {
  const modal = document.getElementById(`${id}-modal`);
  modal.style.display = 'block';
}


function closeModal(id) {
  const modal = document.getElementById(`${id}-modal`);
  modal.style.display = 'none';
}


window.onclick = function(event) {
  if (event.target.classList.contains('modal')) {
    event.target.style.display = 'none';
  }
};
function openModal(id) {
    const modal = document.getElementById(`${id}-modal`);
    modal.style.display = 'block'; 
}


function closeModal(id) {
    const modal = document.getElementById(`${id}-modal`);
    modal.style.display = 'none'; 
}


window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
    }
};