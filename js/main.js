document.addEventListener('DOMContentLoaded', () => {
    let controller = new ScrollMagic.Controller();

    let timeline1 = new TimelineMax();
    let timeline2 = new TimelineMax();
    let timeline3 = new TimelineMax();
    let timeline4 = new TimelineMax();

    timeline1
        .from('.section_1_01', 4, {
            y: -100,
            x: -150,
            ease: Power3.easeInOut
        }, '-=3')
        .from('.section_1_02', 4, {
            y: -100,
            x: -200,
            ease: Power3.easeInOut
        }, '-=3')
        .from('.section_1_03', 4, {
            y: -50,
            x: -400,
            ease: Power3.easeInOut
        }, '-=3')
        .from('.section_1_04', 4, {
            y: -70,
            x: -400,
            ease: Power3.easeInOut
        }, '-=3')
        .from('.section_1_05', 4, {
            y: -200,
            x: -400,
            ease: Power3.easeInOut
        }, '-=3')
        .from('.section_1_06', 4, {
            y: -50,
            x: -400,
            ease: Power3.easeInOut
        }, '-=3')
        .from('.section_1_07', 4, {
            y: 200,
            x: -400,
            ease: Power3.easeInOut
        }, '-=3')
        .from('.section_1_08', 4, {
            y: 100,
            x: -400,
            ease: Power3.easeInOut
        }, '-=3')
        .from('.section_1_09', 4, {
            y: 100,
            x: -150,
            ease: Power3.easeInOut
        }, '-=3')

    let scene1 = new ScrollMagic.Scene({
        triggerElement: '.first-section',
        duration: '100%',
        triggerHook: 0,
        offset: '300'
    })
        .setTween(timeline1)
        .setPin('.first-section')
        .addTo(controller);

    //------------------------------------------------------------------------------//


    timeline2
        .to('.top .image-container', 4, {
            height: 0
        })


    let scene2 = new ScrollMagic.Scene({
        triggerElement: '.second-section',
        duration: '100%',
        triggerHook: 0,
        offset: '100'
    })
        .setTween(timeline2)
        .setPin('.second-section')
        .addTo(controller);

    //-------------------------------------------------------

    timeline3
        .to(
            '.section_3_01', 4, {
            y: -250,
            ease: Power3.easeInOut
        }
        )
        .to(
            '.section_3_02', 4, {
            y: -200,
            ease: Power3.easeInOut
        },
            "-=4"
        )
        .to(
            '.section_3_03', 4, {
            y: 0,
            ease: Power3.easeInOut
        },
            "-=4"
        )
        .to(
            '.section_3_04', 4, {
            y: -150,
            ease: Power3.easeInOut
        },
            "-=4"
        )
        .to(
            '.section_3_05', 4, {
            y: 200,
            ease: Power3.easeInOut
        },
            "-=4"
        )
        .to(
            '.section_3_06', 4, {
            y: 400,
            ease: Power3.easeInOut
        },
            "-=4"
        )

    let scene3 = new ScrollMagic.Scene({
        triggerElement: '.third-section',
        duration: '100%',
        triggerHook: 0,
        offset: '0'
    })
        .setTween(timeline3)
        .setPin('.second-section')
        .addTo(controller);


    timeline4
        .to(
            '.section_4_01', 4, {
            autoAlpha: 0
        },
        )
        .from(
            '.section_4_02', 4, {
            autoAlpha: 0
        }, "-=4"
        )
        .from(
            '.section_4_03', 4, {
            autoAlpha: 0
        },
        )
        .from(
            '.section_4_04', 4, {
            autoAlpha: 0
        }, 
        )

    let scene4 = new ScrollMagic.Scene({
        triggerElement: '.forth-section',
        duration: '100%',
        triggerHook: 0,
        offset: '300'
    })
        .setTween(timeline4)
        .setPin('.forth-section')
        .addTo(controller);

})

//-------------------------------------------------------------------