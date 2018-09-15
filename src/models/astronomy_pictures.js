const RequestHelper = require ('../helpers/request_helper');
const PubSub = require ('../helpers/pub_sub');
const API_Key = require ('../helpers/api_key');

const AstronomyPictures = function(){
    this.pictures = [];

    AstronomyPictures.prototype.bindEvents = function(){
        PubSub.subscribe('SelectView:onChange', (event) => {
            const pictureIndex = event.detail;
            this.getData(pictureIndex);
        });
    };

    AstronomyPictures.getData = function(pictureDate) {
        const requestHelper = new RequestHelper(`https://api.nasa.gov/planetary/apod?api_key=${API_Key}&date=${pictureDate}`);
        requestHelper.get((data) => {
            PubSub.publish('Pictures:pictures-ready', data);
            this.publishPictures(data)
        })
    }

    AstronomyPictures.publishPictures = function() {
        this.pictureData = data;
        PubSub.publish('Pictures:pictures-ready', this.pictureData);
    }
}

module.exports = AstronomyPictures;

