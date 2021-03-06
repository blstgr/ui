// certs page
let cardMagicGrid = new MagicGrid({
    container: '.m-grid',
    animate: false,
    gutter: 32,
    static: true,
    center: true

});
cardMagicGrid.listen();

let faqMagicGrid = new MagicGrid({
    container: '.m-grid-faq',
    animate: false,
    gutter: 32,
    static: true,
    center: true

});
faqMagicGrid.listen();

let revMagicGrid = new MagicGrid({
    container: '.m-grid-rev',
    animate: false,
    gutter: 32,
    static: true,
    center: true

});
revMagicGrid.listen();
