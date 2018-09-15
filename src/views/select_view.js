const PubSub = require ('../helpers/pub_sub');

const SelectView = function(selectElement) {
    this.selectElement = selectElement;
};

SelectView.prototype.bindEvents = function() {
    PubSub.subscribe('Pictures:pictures-ready', (event) => {
        // this.somethingMeaningful(event.detail);
    });

    this.selectElement.addEventListener('onChange', (event) => {
        const selectedIndex = event.target.value;
        PubSub.publish('SelectView:change', selectedIndex);
    });
};

module.exports = SelectView;