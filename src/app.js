const AstronomyPictures = require ('./models/astronomy_pictures');
const SelectView = require ('./views/select_view');
const PictureView = require ('./views/picture_view');

document.addEventListener('DOMContentLoaded', () => {
    const selectElement = document.querySelector('.datepicker');
    const selectView = new SelectView(selectElement);
    selectView.bindEvents();
    
    const infoParagraph = document.querySelector('#info-paragraph')
    const pictureView = new PictureView(infoParagraph);
    pictureView.bindEvents();

    const astronomyPictures = new AstronomyPictures();
    astronomyPictures.bindEvents();
    astronomyPictures.getData();

    const formatNow = function() {
        const d = new Date();
        const year = d.getFullYear();
    
        let month = '' + (d.getMonth() + 1);
        let day = '' + d.getDate();
    
        if (month.length < 2) month = '0' + month;
        if (day.length < 2) day = '0' + day;
    
        return [year, month, day].join('-');
    }
    
})