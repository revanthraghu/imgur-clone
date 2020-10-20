window.onload = () => {
    console.log('hello');
    document.body.scrollTop = 0;
};

let navbar = document.querySelector('nav');
let contentWrapper = document.querySelector('.contentWrapper');
let prevPos = 0;

addEventListener(
    'scroll',
    () => {
        let bottomPadding = Number(
            window
                .getComputedStyle(navbar)
                .getPropertyValue('padding-bottom')
                .slice(0, -2)
        );
        let currPos = document.body.scrollTop;
        if (currPos > prevPos) {
            if (currPos < 168 && bottomPadding > 0) {
                contentWrapper.style.marginTop = 50;
                navbar.style.zIndex = 0;
                navbar.style.paddingBottom = bottomPadding - 5;
            }
            if (currPos > 168 && bottomPadding > 0) {
                navbar.style.paddingBottom = 0;
            }
        } else {
            if (currPos < 168 && bottomPadding < 250) {
                contentWrapper.style.marginTop = -50;
                navbar.style.zIndex = -1;
                navbar.style.paddingBottom = bottomPadding + 5;
            }
            if (currPos === 0 && bottomPadding < 250) {
                navbar.style.paddingBottom = 250;
            }
        }
        prevPos = currPos;
        // if (document.body.scrollTop < 168) {
        //     if (bottomPadding > 0) {
        //         navbar.style.paddingBottom = bottomPadding - 10;
        //         contentWrapper.style.marginTop =
        //             Number(
        //                 window
        //                     .getComputedStyle(contentWrapper)
        //                     .getPropertyValue('margin-top')
        //                     .slice(0, -2)
        //             ) + 5;
        //     }
        //     if (bottomPadding < 20) {
        //         navbar.style.zIndex = 0;
        //         contentWrapper.style.marginTop = '50px';
        //     }
        // } else {
        //     if (bottomPadding > 0) {
        //         navbar.style.zIndex = 0;
        //         contentWrapper.style.marginTop = '50px';
        //         navbar.style.paddingBottom = bottomPadding - 10;
        //         contentWrapper.style.marginTop =
        //             Number(
        //                 window
        //                     .getComputedStyle(contentWrapper)
        //                     .getPropertyValue('margin-top')
        //                     .slice(0, -2)
        //             ) + 5;
        //     }
        // }
    },
    false
);
