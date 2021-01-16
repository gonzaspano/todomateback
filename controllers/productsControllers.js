const DUMMY_PRODUCTS = [
    {
        id: "1",
        name: "Mate boca cerrada",
        description: "Mate boca cerrada, color negro y cruelty free.",
        imageUrl: 'https://instagram.faep8-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/p640x640/133881377_2794673574110115_8930963434545296017_n.jpg?_nc_ht=instagram.faep8-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=E6vofH8jAbUAX8ZfKeH&tp=1&oh=9dda0ef347a21d2be3a561920dff52ad&oe=602CCE69',
        stock: 10,
        price: 1500,
        category: "Mates"
    },
    {
        id: "2",
        name: "Mate boca abierta",
        description: "Mate boca abierta, color negro y cruelty free",
        imageUrl: 'https://instagram.faep8-2.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/116706315_2690729371198588_126625973653601009_n.jpg?_nc_ht=instagram.faep8-2.fna.fbcdn.net&_nc_cat=104&_nc_ohc=B3mNaaPIzWoAX8JSifq&tp=1&oh=10f3c9ef407bd447ea90a83d0b988abc&oe=602D2275',
        stock: 5,
        price: 1000,
        category: "Mates"
    },
    {
        id: "3",
        name: "Matera de cuero",
        description: "Matera para transportar kit completo de cuero.",
        imageUrl: 'https://instagram.faep8-2.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/131927293_101893548444320_2987907337449013748_n.jpg?_nc_ht=instagram.faep8-2.fna.fbcdn.net&_nc_cat=108&_nc_ohc=dxAbmZs1rO8AX-qojah&tp=1&oh=1f40ef17ad791101c196b0cdcf307d3d&oe=602E47E9',
        stock: 10,
        price: 2000,
        category: "Materas"
    },
    {
        id: "4",
        name: "Yerbera de cuero",
        description: "Recipiente para transportar la yerba de cuero. Color marron.",
        imageUrl: 'https://instagram.faep8-1.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/123143056_958629307959025_2504080625890482107_n.jpg?_nc_ht=instagram.faep8-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=hKUzjJcMNCIAX9sVGhI&tp=1&oh=66485980ad3d061271aade45f6839e5e&oe=602AD99B',
        stock: 6,
        price: 700,
        category: "Yerberas"
    },
    {
        id: "5",
        name: "Matera",
        description: "Mochila para transportar kit completo de mate.",
        imageUrl: 'https://instagram.faep8-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/p750x750/96724957_624475031479055_7145421688992172511_n.jpg?_nc_ht=instagram.faep8-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=a2OoVOug12cAX80bVOv&tp=1&oh=4a27dc9a63866004d1d8acd8741a78cb&oe=602B1A94',
        stock: 6,
        price: 2500,
        category: "Materas"
    },
] 

const getAll = (req,res,next) => {
    res.json({DUMMY_PRODUCTS})
}

exports.getAll = getAll