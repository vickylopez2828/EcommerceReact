import Card from '../interfaces/Card'
// import img1 from '../assets/images/bebe.png';
// import img2 from '../assets/images/bblloron.webp';
// import img3 from '../assets/images/camion.png';
// import img4 from '../assets/images/spider.png';
// import img5 from '../assets/images/triciclo.webp';

export const db : Card[] = [
    {
        id: 1,
        image: '/images/bebe.png',
        description:'Muñeca Cry Babies Dressy Bebe Lloron Con Pelo Real...',
        price: 17500.50,
        percentageOff: 30,
        tagText: '% OFF',
        freeShipping: true,
        isOff:true
    },
    {
        id: 2,
        image: '/images/spider.png',
        description:'Muñeco Spiderman Articulado Avengers Grande 23cm En Caja',
        price: 45500.00,
        percentageOff: 10,
        tagText: '% OFF',
        freeShipping: false,
        isOff:true
    },
    {
        id: 3,
        image: '/images/masa.png',
        description:'Set Masa Infantil 2 Potes 4 Moldes Duravit 732',
        price: 24000.00,
        percentageOff: 0,
        tagText: 'NUEVO',
        freeShipping: false,
        isOff:false
    },
    {
        id: 4,
        image: '/images/bloques.png',
        description:'Bloques Para Armar Didácticos Encastrables Set X 70',
        price: 38500.00,
        percentageOff: 25,
        tagText: '% OFF',
        freeShipping: true,
        isOff:true
    },{
        id: 5,
        image: '/images/triciclo.webp',
        description:'Triciclo Infantil Junior Rider Rondi Multi Color',
        price: 40000.00,
        percentageOff: 0,
        tagText: 'NUEVO',
        freeShipping: true,
        isOff:false
    },
    {
        id: 6,
        image: '/images/burako.png',
        description:'Top Toys Burako rummy Beach 912',
        price: 17500.00,
        percentageOff: 30,
        tagText: '% OFF',
        freeShipping: false,
        isOff:true
    },
    {
        id: 7,
        image: '/images/camion.png',
        description:'Top Toys Burako rummy Beach 912',
        price: 17500.00,
        percentageOff: 30,
        tagText: '% OFF',
        freeShipping: false,
        isOff:true
    },
    {
        id: 8,
        image: '/images/spider.png',
        description:'Top Toys Burako rummy Beach 912',
        price: 17500.00,
        percentageOff: 30,
        tagText: '% OFF',
        freeShipping: false,
        isOff:true
    }
]