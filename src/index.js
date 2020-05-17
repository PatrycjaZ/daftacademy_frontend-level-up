import script from './script.js'
import startFunction from './scripts/main'
import slider from './scripts/slider'
import firstGallery from './scripts/more-products'
import secondGallery from './scripts/second-gallery'
import fetchData from './scripts/fetchData'
import fetchFailed from './scripts/fetchFailed'
import hideLoader from './scripts/loader'
import './styles/main.scss'

document.addEventListener('DOMContentLoaded', function() {
  fetchData().then(res => {
    slider(res.slice(20, 30));
    firstGallery(res);
    secondGallery(res.slice(10, 14));
  }
  ).catch(err => {
    fetchFailed();
  })
  .finally(() => {
    hideLoader();
})
  startFunction();
});