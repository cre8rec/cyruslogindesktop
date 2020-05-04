
var input = document.querySelector('.username')
var password = document.querySelector('.password')
var avatar = document.getElementById('avatar')
var mouth = document.querySelector('.mouth')
var running = document.querySelector('.running')

input.addEventListener('focus', function(){
                       avatar.src = 'img/1.png';
                       });
input.addEventListener('input', function(e) {
                    var value = e.target.value;
                    var pos = value.length + 1 ;
                    avatar.src = 'img/'+ pos +'.png';
    if (pos >= 17){
        avatar.src = 'img/17.png'
    }
    });

input.addEventListener('keydown', enter => {
    if(event.key === 'Enter') {
    return password.focus();
    } 
})

password.addEventListener('focus', function(){
    avatar.src = 'img/blink1.png';
});

password.addEventListener('input', function(e) {
    var value = e.target.value;
    var pos = value.length + 1 ;
    avatar.src = 'img/blink' + pos + '.png';
        if (pos >= 4){
            avatar.src = 'img/blink4.png'
        }
});

password.addEventListener('keydown', enter => {if(event.key === 'Enter') {
    avatar.src = 'img/1.png'
    mouth.style.webkitAnimationPlayState = 'running';
    running.style.webkitAnimationPlayState = 'running';
    password.blur();
    setTimeout(location.reload.bind(location), 4000);
    } 
})
