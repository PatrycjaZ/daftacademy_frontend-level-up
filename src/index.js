// import scripts
import scrollToTop from './scripts/scroll-to-top';
import carousel from './scripts/carousel'
import moreProducts from './scripts/more-products';
import footer from './scripts/footer'

// import styles
import './styles/main.scss';

// DOMContentLoaded
document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
    scrollToTop();
    carousel();
    moreProducts();
    footer();
});