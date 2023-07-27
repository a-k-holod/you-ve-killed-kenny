const kennyElement = document.querySelector('.kenny');
let moveKenny = true;
let interval;
document.addEventListener('DOMContentLoaded', function () {

    if (moveKenny) {
        createAndMoveKenny();
    }

});

function createAndMoveKenny() {

    class Kenny {
        side;
        placement;

        constructor(side, placement) {
            this.side = side;
            this.placement = placement;
        }

    }

    const directions = ['top', 'right', 'bottom', 'left'];

    function getRandomDirection() {
        const randomIndex = Math.floor(Math.random() * directions.length);
        return directions[randomIndex];
    }
    const container = document.querySelector('#container');

    let kennyImg = document.createElement('img');
    let kennyContainer = document.createElement('div');
    kennyContainer.classList.add('kenny-container');

    kennyContainer.appendChild(kennyImg);
    // kennyContainer.style.transform = "rotate(-105deg)";

    //addCharacter? > addKenny
    function addKenny() {

        let initSide = getRandomDirection();
        // initSide = 'right';

        console.log('add Kenny');
        console.log(initSide);
        let k = new Kenny(initSide);


        kennyImg.className = 'kenny img';
        kennyImg.src = '155260.svg';


        let keyframes = ``;
        console.log(k);
        const style = document.createElement('style');
// set initial position based on the Kenny object properties
        if (k.side === 'right') {
            // kennyImg.style.transform = 'rotate(-105deg)'; // start on the right edge of the screen

            keyframes = `
          @keyframes slide-in-out-${initSide}
            {
                45%, 70% 
                {
                    transform: translateX(-55%);
                }
                20%
                {
                    transform: translateX(-60%);
                }
            }
        `;
            kennyImg.style.transform = "rotate(310deg)";
            kennyContainer.style.left = '100%'; // start on the right edge of the screen
            kennyContainer.style.top = getRandomArbitrary(0, 90) + '%';

        } else if (k.side === 'left') {
            keyframes = `
          @keyframes slide-in-out-${initSide}
            {
                20%
                {
                    transform: translateX(60%);
                }
                45%, 70% 
                {
                    transform: translateX(55%);
                }
               
            }
        `;
            kennyImg.style.transform = "rotate(-310deg)";
            kennyContainer.style.left = '-100px'; // start on the left edge of the screen
            kennyContainer.style.top = getRandomArbitrary(0, 90) + '%';
        } else if (k.side === 'top') {
            keyframes = `
          @keyframes slide-in-out-${initSide}
            {
                20%
                {
                    transform: translateY(60%);
                }
                45%, 70% 
                {
                    transform: translateY(55%);
                }
               
            }
        `;
            kennyImg.style.transform = "rotate(-180deg)";
            kennyContainer.style.left = getRandomArbitrary(0, 90) + '%';
            kennyContainer.style.top = '-100px';

        } else if (k.side === 'bottom') {
            keyframes = `
          @keyframes slide-in-out-${initSide}
            {
                
                20%
                {
                    transform: translateY(-60%);
                }
                45%, 70% 
                {
                    transform: translateY(-55%);
                }
            }
        `;

            kennyImg.style.transform = "rotate(0deg)";
            kennyContainer.style.left = getRandomArbitrary(0, 90) + '%';
            kennyContainer.style.top = '100%';
            // kennyContainer.style.bottom = '0';
        }

        style.innerHTML = keyframes;
        document.head.appendChild(style);

        kennyContainer.style.animationName = 'slide-in-out-' + initSide;
        container.appendChild(kennyContainer);
    }
    kennyImg.addEventListener('animationend', function() {
        // Remove the element from the DOM
        container.parentNode.removeChild(kennyContainer);
    });

    if (moveKenny) {
        addKenny();
        interval = setInterval(addKenny, 10000);
    } else {
        return;
    }
}

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

document.addEventListener('click', function(event) {
    if (event.target.classList.contains('kenny')&& !event.target.classList.contains('dead')) {
        moveKenny = false;
        clearInterval(interval);
        // event.preventDefault();
        let kennyContainer = document.querySelector(".kenny-container");
        // kennyContainer.style.animation = "none";
        // kennyContainer.style.position = "fixed";
        // kennyContainer.style.left = event.clientX + "px";
        // kennyContainer.style.top = event.clientY + "px";
        kennyContainer.style.animationPlayState = "paused";
        const deadKenny = 'Alter-egos-dead-kenny.webp';
        for (const child of kennyContainer.children) {
            child.setAttribute('src', deadKenny);
            child.classList.add('dead');
        }
        createStan();
    }
});

function createStan(){
    const container = document.querySelector('#container');

    // function to set animation and side based on elem and container

    let eel = document.createElement('h1');
    eel.innerHTML = "tets";
    container.appendChild(eel);
}


