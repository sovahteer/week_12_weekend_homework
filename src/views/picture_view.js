const PubSub = require ('../helpers/pub_sub');

const PictureView = function(container) {
    this.container = container;
};

PictureView.prototype.bindEvents = function(){
    PubSub.subscribe('Pictures:pictures-ready', (event) => {
        console.log('Container', this, this.container)
        const image = this.container.querySelector('img');
        image.setAttribute('src', event.detail.url); // Not sure if it's event.url or something else first
        console.log('Event', event);
    });
};

module.exports = PictureView;

