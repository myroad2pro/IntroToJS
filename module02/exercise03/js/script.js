function init(evt) {
    console.log('Page loaded');

    let span = document.querySelector('#pageStatus');
    span.innerHTML = 'PAGE LOADED';

    let b = document.querySelector('#myButton');
    b.addEventListener('click', function (evt) {
        console.log('x = ' + evt.clientX);
    });

    resize(evt);
    window.onresize = resize;
    window.onscroll = scroll;
    window.onkeydown = processKeyDown;
    //window.onkeyup = processKeyUp;
    window.onclick = processClick;
    window.onmousemove = processMouseMove;
}

function resize(evt) {
    var pageSizeSpan = document.getElementById('pageSize');
    pageSizeSpan.innerHTML = 'Width: ' + window.innerWidth + ' Height: ' + window.innerHeight;

    var screenSizeSpan = document.getElementById('screenSize');
    screenSizeSpan.innerHTML = 'Width: ' + screen.width + ' Height: ' + screen.height;
}

function scroll(evt) {
    var progressBar = document.querySelector('.progress-bar');
    var max = document.body.scrollHeight - window.innerHeight;
    var percent = (window.pageYOffset / max) * 100;
    progressBar.style.width = percent + '%';
    progressBar.setAttribute('aria-valuenow', percent);
}

function processKeyDown(evt){
    var keys = document.querySelector('#keys');
    keys.innerHTML += 'keydown: ' + evt.key + ' code: ' + evt.code + ' Modifiers:';
    var modifiers = '';
    if(evt.shiftKey) modifiers += ' SHIFT';
    if(evt.ctrlKey) modifiers += ' CTRL';
    if(evt.altKey) modifiers += ' ALT';
    if(modifiers === '') modifiers = 'NONE'
    keys.innerHTML += modifiers + '<br>';
}

function processKeyUp(evt){
    var keys = document.querySelector('#keys');
    keys.innerHTML += 'keyup: ' + evt.key + ' code: ' + evt.keyCode + '<br>';
}

function processClick(evt){
    var clicks = document.querySelector('#clicks');
    var target = evt.target.tagName;
    if(target === ''){
        clicks.innerHTML += 'You clicked on the window, not on a particular element!<br>';
    }else{
        clicks.innerHTML += 'Elements clicked id: ' + target + '<br>';
    }

    evt.stopPropagation();
}

function processMouseMove(evt){
    var mousePositions = document.querySelector('#mousePositions');
    mousePositions.innerHTML = 'clientX: ' + evt.clientX + ' client Y: ' + evt.clientY + '<br>'
    + 'pageX: ' + evt.pageX + ' pageY: ' + evt.pageY + '<br>';

    var screenPositions = document.querySelector('#screenPositions');
    screenPositions.innerHTML = 'screenX: ' + evt.screenX + ' screenY: ' + evt.screenY + '<br>';
}