const RequestHelper = require ('../helpers/request_helper');
const PubSub = require ('../helpers/pub_sub');
const API_Key = require ('../helpers/api_key');
const DateHelper = require ('../helpers/date-helper');

const AstronomyPictures = function(){

    AstronomyPictures.prototype.bindEvents = function(){
        PubSub.subscribe('SelectView:change', (event) => {
            const pictureIndex = event.detail;
            this.getData(pictureIndex);
        });
    };

    AstronomyPictures.prototype.getData = function(pictureDate) {
        const requestHelper = new RequestHelper(`https://api.nasa.gov/planetary/apod?api_key=${API_Key}&date=${DateHelper.formatDate(pictureDate)}`);
        requestHelper.get((data) => {
            PubSub.publish('Pictures:pictures-ready', data);
            this.publishPictures(data)
            console.log('Data Got!', data);
        })
    }

    AstronomyPictures.prototype.publishPictures = function(data) {
        this.pictureData = data;
        PubSub.publish('Pictures:pictures-ready', this.pictureData)
    }
}

module.exports = AstronomyPictures;

