document.addEventListener('click', function(e) {
    var condition = e.target.getAttribute('data-condition');
    if (condition) {
        document.body.classList.add(condition);
        // document.body.innerHTML = '<a-scene embedded arjs="debugUIEnabled: false; sourceType: webcam;"><a-entity camera></a-entity></a-scene>';
    }
});