window.onload = function() {
    var $openingTime = document.getElementById('opening-times-' + (new Date()).getDay());
    $openingTime.className += 's-is-today'
};
