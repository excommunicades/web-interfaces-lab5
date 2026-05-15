var MenuPage = (function () {

    var menuItems = [
        { icon: '☕', title: 'Еспресо', description: 'Класичний насичений еспресо з щільною крема-пінкою. Зерна середнього обсмаження.', price: '45 ₴' },
        { icon: '🥛', title: 'Капучіно', description: 'Еспресо з ніжною молочною пінкою. Ідеальний баланс кави та молока.', price: '75 ₴' },
        { icon: '🍫', title: 'Мокко', description: 'Поєднання еспресо, шоколаду та збитого молока. Солодкий та насичений смак.', price: '85 ₴' },
        { icon: '🧊', title: 'Айс Латте', description: 'Холодний латте з подвійною порцією еспресо та льодом. Освіжає у спеку.', price: '80 ₴' },
        { icon: '🍵', title: 'Матча Латте', description: 'Японський зелений чай матча з вівсяним молоком. М\'який та кремовий.', price: '90 ₴' },
        { icon: '🥐', title: 'Круасан', description: 'Свіжий масляний круасан щоденної випічки. Хрусткий зовні, ніжний всередині.', price: '55 ₴' }
    ];

    function render() {
        var cards = menuItems.map(function (item) {
            return CardComponent.renderMenuCard(item);
        });

        return '<section class="menu-section">' +
            '<h2>Наше меню</h2>' +
            CardListComponent.render(cards) +
        '</section>';
    }

    return {
        render: render
    };
})();
