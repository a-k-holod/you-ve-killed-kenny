document.addEventListener('DOMContentLoaded', function () {

    class Kenny {
        side;
        placement;

        constructor(side, placement) {
            this.side = side;
            this.placement = placement;
        }

    }



    // const containerWidth = containerElement.offsetWidth;
    // const kennyWidth = kennyElement.offsetWidth;

    const directions = ['top', 'right', 'bottom', 'left'];

    function getRandomDirection() {
        const randomIndex = Math.floor(Math.random() * directions.length);
        return directions[randomIndex];
    }


    const kennyElement = document.querySelector('.kenny');
    const container = document.querySelector('#container');
    let kennyImg = document.createElement('img');
    let kennyContainer = document.createElement('div');
    kennyContainer.classList.add('kenny-container');

    kennyContainer.appendChild(kennyImg);
    // kennyContainer.style.transform = "rotate(-105deg)";

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

            console.log(window.innerHeight);
            // console.log(Math.floor(Math.random() * 100));
            // console.log(Math.floor(Math.random() * 100) *10);
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
            kennyContainer.style.left = getRandomArbitrary(0, 90) + '%';
            kennyContainer.style.top = '100%';
            // kennyContainer.style.bottom = '0';
        }

        style.innerHTML = keyframes;
        document.head.appendChild(style);


        // kennyContainer.style.margin = 'auto';
        kennyContainer.style.animationName = 'slide-in-out-' + initSide;

            // if ($k.placement === 'top') {
        //     kennyImg.style.top = '100px';
        // } else if ($k.placement === 'bottom') {
        //     kennyImg.style.bottom = '100px';
        // }
        container.appendChild(kennyContainer);
    }
    kennyImg.addEventListener('animationend', function() {
        // Remove the element from the DOM
        container.parentNode.removeChild(kennyContainer);
    });
    addKenny();
    setInterval(addKenny, 10000);
});


function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}
// document.addEventListener('DOMContentLoaded', function () {
//     const kennyElement = document.querySelector('.kenny');
//     const containerElement = document.querySelector('#container');
//     const containerWidth = containerElement.offsetWidth;
//     const kennyWidth = kennyElement.offsetWidth;
//
//     const directions = ['top', 'right', 'bottom', 'left'];
//
//     function getRandomDirection() {
//         const randomIndex = Math.floor(Math.random() * directions.length);
//         return directions[randomIndex];
//     }
//
//     const initSide = getRandomDirection();
//     function randomInRange(min, max) {
//         return Math.floor(Math.random() * (max - min + 1)) + min;
//     }
//
//     function animateKenny() {
//         console.log(initSide);
//         const startLeft = randomInRange(-kennyWidth, containerWidth - kennyWidth);
//         kennyElement.style.setProperty('--kenny-' + initSide, `${startLeft}px`);
//
//             //`${startLeft}px`;
//     }
//
//     animateKenny();
//     setInterval(animateKenny(), 10000); // Repeat every 14 seconds (same duration as animation)
//
// });
