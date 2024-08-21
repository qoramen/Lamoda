// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%/
// ---------------- Navigation Panel Categories Script  ----------------/
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%/


function NavbarCategories() {
    const categoryNew = document.getElementById('category-new');
    const categoryGirl = document.getElementById('category-girl');
    const categoryBoy = document.getElementById('category-boy');
    const categoryBaby = document.getElementById('category-baby');
    const categoryBrand = document.getElementById('category-brand');
    const categoryPremium = document.getElementById('category-premium');
    const categorySport = document.getElementById('category-sport');

    categoryNew.addEventListener('mouseover', function () {
        const categoryNewsDiv = document.querySelector('.news');
        categoryNewsDiv.classList.toggle('hidden')
        categoryNewsDiv.addEventListener('mouseover', function () {
            categoryNewsDiv.classList.toggle('hidden')
        })
    })

    categoryNew.addEventListener('mouseout', function () {
        const categoryNewsDiv = document.querySelector('.news');
        categoryNewsDiv.classList.toggle('hidden')
        categoryNewsDiv.addEventListener('mouseout', function () {
            categoryNewsDiv.classList.toggle('hidden')
        })
    })

    categoryGirl.addEventListener('mouseover', function () {
        const categoryGirlsDiv = document.querySelector('.girls');
        categoryGirlsDiv.classList.toggle('hidden')
        categoryGirlsDiv.addEventListener('mouseover', function () {
            categoryGirlsDiv.classList.toggle('hidden')
        })
    })

    categoryGirl.addEventListener('mouseout', function () {
        const categoryGirlsDiv = document.querySelector('.girls');
        categoryGirlsDiv.classList.toggle('hidden')
        categoryGirlsDiv.addEventListener('mouseout', function () {
            categoryGirlsDiv.classList.toggle('hidden')
        })
    })

    categoryBoy.addEventListener('mouseover', function () {
        const categoryBoysDiv = document.querySelector('.boys');
        categoryBoysDiv.classList.toggle('hidden')
        categoryBoysDiv.addEventListener('mouseover', function () {
            categoryBoysDiv.classList.toggle('hidden')
        })
    })

    categoryBoy.addEventListener('mouseout', function () {
        const categoryBoysDiv = document.querySelector('.boys');
        categoryBoysDiv.classList.toggle('hidden')
        categoryBoysDiv.addEventListener('mouseout', function () {
            categoryBoysDiv.classList.toggle('hidden')
        })
    })

    categoryBaby.addEventListener('mouseover', function () {
        const categoryBabiesDiv = document.querySelector('.babies');
        categoryBabiesDiv.classList.toggle('hidden')
        categoryBabiesDiv.addEventListener('mouseover', function () {
            categoryBabiesDiv.classList.toggle('hidden')
        })
    })

    categoryBaby.addEventListener('mouseout', function () {
        const categoryBabiesDiv = document.querySelector('.babies');
        categoryBabiesDiv.classList.toggle('hidden')
        categoryBabiesDiv.addEventListener('mouseout', function () {
            categoryBabiesDiv.classList.toggle('hidden')
        })
    })

    categoryBrand.addEventListener('mouseover', function () {
        const categoryBrandsDiv = document.querySelector('.brands');
        categoryBrandsDiv.classList.toggle('hidden')
        categoryBrandsDiv.addEventListener('mouseover', function () {
            categoryBrandsDiv.classList.toggle('hidden')
        })
    })

    categoryBrand.addEventListener('mouseout', function () {
        const categoryBrandsDiv = document.querySelector('.brands');
        categoryBrandsDiv.classList.toggle('hidden')
        categoryBrandsDiv.addEventListener('mouseout', function () {
            categoryBrandsDiv.classList.toggle('hidden')
        })
    })

    categoryPremium.addEventListener('mouseover', function () {
        const categoryPremiumDiv = document.querySelector('.premium');
        categoryPremiumDiv.classList.toggle('hidden')
        categoryPremiumDiv.addEventListener('mouseover', function () {
            categoryPremiumDiv.classList.toggle('hidden')
        })
    })

    categoryPremium.addEventListener('mouseout', function () {
        const categoryPremiumDiv = document.querySelector('.premium');
        categoryPremiumDiv.classList.toggle('hidden')
        categoryPremiumDiv.addEventListener('mouseout', function () {
            categoryPremiumDiv.classList.toggle('hidden')
        })
    })

    categorySport.addEventListener('mouseover', function () {
        const categorySportsDiv = document.querySelector('.sports');
        categorySportsDiv.classList.toggle('hidden')
        categorySportsDiv.addEventListener('mouseover', function () {
            categorySportsDiv.classList.toggle('hidden')
        })
    })

    categorySport.addEventListener('mouseout', function () {
        const categorySportsDiv = document.querySelector('.sports');
        categorySportsDiv.classList.toggle('hidden')
        categorySportsDiv.addEventListener('mouseout', function () {
            categorySportsDiv.classList.toggle('hidden')
        })
    })
}
NavbarCategories()
{
    // function NavbarCategories() {
    //     const categories = [
    //         { trigger: 'category-new', target: '.news' },
    //         { trigger: 'category-girl', target: '.girls' },
    //         { trigger: 'category-boy', target: '.boys' },
    //         { trigger: 'category-baby', target: '.babies' },
    //         { trigger: 'category-brand', target: '.brands' },
    //         { trigger: 'category-premium', target: '.premium' },
    //         { trigger: 'category-sport', target: '.sports' },
    //     ];

    //     categories.forEach(category => {
    //         const triggerElement = document.getElementById(category.trigger);
    //         const targetDiv = document.querySelector(category.target);

    //         triggerElement.addEventListener('mouseover', () => {
    //             targetDiv.classList.remove('hidden');
    //         });

    //         triggerElement.addEventListener('mouseout', () => {
    //             targetDiv.classList.add('hidden');
    //         });

    //         targetDiv.addEventListener('mouseover', () => {
    //             targetDiv.classList.remove('hidden');
    //         });

    //         targetDiv.addEventListener('mouseout', () => {
    //             targetDiv.classList.add('hidden');
    //         });
    //     });
    // }

    // NavbarCategories();
}
const logIn = document.getElementById('logInBtn')
const profile = document.querySelector('.profile')
const logOut = document.getElementById('logOutBtn')
const logo = document.querySelector('.logo')

logIn.addEventListener('click', function () {
    logIn.style.display = 'none'
    profile.style.display = 'block'
    logo.style.margin = '0 40px 0 0' 
    logOut.addEventListener('click', function() {
        logIn.style.display = 'block'
        profile.style.display = 'none'
        logo.style.margin = '0 80px 0 0'
    })
})





// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%/
// ---------------- First Exclusive Clothes Script ----------------/
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%/


{
    const exclusiveFirstCarousel = document.getElementById('exclusiveFirstCarousel');
    const exclusiveFirstNext = document.getElementById('exclusiveFirstNext');
    const exclusiveFirstPrev = document.getElementById('exclusiveFirstPrev');

    let exclusiveFirstOffset = 0;
    const exclusiveFirstSlideWidth = 202;
    const exclusiveFirstTotalSlides = 12;
    const exclusiveFirstVisibleSlides = Math.floor(1400 / exclusiveFirstSlideWidth); // Ko'rinadigan slaydlar soni
    const exclusiveFirstMaxOffset = exclusiveFirstSlideWidth * (exclusiveFirstTotalSlides - exclusiveFirstVisibleSlides); // Maksimal siljish

    exclusiveFirstNext.addEventListener('click', () => {
        if (exclusiveFirstOffset < exclusiveFirstMaxOffset) {
            exclusiveFirstOffset += exclusiveFirstSlideWidth;
            exclusiveFirstCarousel.style.transform = `translateX(-${exclusiveFirstOffset}px)`;
        }
    });

    exclusiveFirstPrev.addEventListener('click', () => {
        if (exclusiveFirstOffset > 0) {
            exclusiveFirstOffset -= exclusiveFirstSlideWidth;
            exclusiveFirstCarousel.style.transform = `translateX(-${exclusiveFirstOffset}px)`;
        }
    });
}
{
    const hoverDivs = Array.from(document.querySelectorAll('[id^=exhover__div-]'));

    hoverDivs.forEach((hoverDiv, index) => {
        hoverDiv.addEventListener('mouseover', function () {
            const hoverCtrl = document.getElementById(`exhover__ctrl-${index + 1}`);
            const activeImg = document.getElementById(`exactive${index + 1}`);
            const divs = [document.getElementById(`exdiv${index + 1}1`), document.getElementById(`exdiv${index + 1}2`), document.getElementById(`exdiv${index + 1}3`)];
            const imgs = [document.getElementById(`eximg${index + 1}1`), document.getElementById(`eximg${index + 1}2`), document.getElementById(`eximg${index + 1}3`)];

            hoverCtrl.style.display = 'block';

            divs.forEach((div, imgIndex) => {
                div.addEventListener('mouseover', function () {
                    activeImg.style.display = 'none';
                    imgs[imgIndex].style.display = 'block';
                });
                div.addEventListener('mouseout', function () {
                    activeImg.style.display = 'block';
                    imgs[imgIndex].style.display = 'none';
                });
            });
        });

        hoverDiv.addEventListener('mouseout', function () {
            const hoverCtrl = document.getElementById(`exhover__ctrl-${index + 1}`);
            hoverCtrl.style.display = 'none';
        });
    });
}

// Both Exclusive Clothes Script
{
    const favorites = [];

    for (let i = 1; i <= 24; i++) {
        favorites.push(document.getElementById(`fav${i}`));
    }

    favorites.forEach(favorite => {
        favorite.addEventListener('click', function () {
            if (favorite.classList.contains('fav')) {
                favorite.classList.toggle('favChosen');
            }
        });
    });
}


// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%/
// ---------------- Second Exclusive Script ----------------/
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%/


{
    const exclusiveSecondCarousel = document.getElementById('exclusiveSecondCarousel');
    const exclusiveSecondNext = document.getElementById('exclusiveSecondNext');
    const exclusiveSecondPrev = document.getElementById('exclusiveSecondPrev');

    let exclusiveSecondOffset = 0;
    const exclusiveSecondSlideWidth = 202;
    const exclusiveSecondTotalSlides = 12;
    const exclusiveSecondtVisibleSlides = Math.floor(1400 / exclusiveSecondSlideWidth);
    const exclusiveSecondMaxOffset = exclusiveSecondSlideWidth * (exclusiveSecondTotalSlides - exclusiveSecondtVisibleSlides);

    exclusiveSecondNext.addEventListener('click', () => {
        if (exclusiveSecondOffset < exclusiveSecondMaxOffset) {
            exclusiveSecondOffset += exclusiveSecondSlideWidth;
            exclusiveSecondCarousel.style.transform = `translateX(-${exclusiveSecondOffset}px)`;
        }
    });

    exclusiveSecondPrev.addEventListener('click', () => {
        if (exclusiveSecondOffset > 0) {
            exclusiveSecondOffset -= exclusiveSecondSlideWidth;
            exclusiveSecondCarousel.style.transform = `translateX(-${exclusiveSecondOffset}px)`;
        }
    });
}
{
    const hoverDivvs = Array.from(document.querySelectorAll('[id^=pophover__div-]'));

    hoverDivvs.forEach((hoverDiv, index) => {
        hoverDiv.addEventListener('mouseover', function () {
            const hoverCtrl = document.getElementById(`pophover__ctrl-${index + 1}`);
            const activeImg = document.getElementById(`popactive${index + 1}`);
            const divs = [document.getElementById(`popdiv${index + 1}1`), document.getElementById(`popdiv${index + 1}2`), document.getElementById(`popdiv${index + 1}3`)];
            const imgs = [document.getElementById(`popimg${index + 1}1`), document.getElementById(`popimg${index + 1}2`), document.getElementById(`popimg${index + 1}3`)];

            hoverCtrl.style.display = 'block';

            divs.forEach((div, imgIndex) => {
                div.addEventListener('mouseover', function () {
                    activeImg.style.display = 'none';
                    imgs[imgIndex].style.display = 'block';
                });
                div.addEventListener('mouseout', function () {
                    activeImg.style.display = 'block';
                    imgs[imgIndex].style.display = 'none';
                });
            });
        });

        hoverDiv.addEventListener('mouseout', function () {
            const hoverCtrl = document.getElementById(`pophover__ctrl-${index + 1}`);
            hoverCtrl.style.display = 'none';
        });
    });
}


// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%/
// ---------------- Application Script ----------------/
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%/


{
    let currentIndex = 0;
    const slidess = document.querySelectorAll('.rec__app-slide');
    const totalSlidess = slidess.length;

    const carousell = document.getElementById('rec__app-carousel');

    function showNextSlide() {
        currentIndex = (currentIndex + 1) % totalSlidess;
        const offsett = -currentIndex * 50;
        carousell.style.transform = `translateX(${offsett}%)`;
    }

    setInterval(showNextSlide, 3000);
}


// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%/
// ---------------- Footer Navigation Panel Script ----------------/
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%/

{
    {
        const p1Elements = document.querySelectorAll('.q')
        const div1Elements = document.querySelectorAll('.a1');

        p1Elements[0].classList.add('working');
        div1Elements[0].classList.add('active');

        p1Elements.forEach(p => {
            p.addEventListener('click', function () {
                document.querySelector('.q.working')?.classList.remove('working');
                document.querySelector('.a1.active')?.classList.remove('active');

                p.classList.add('working');

                const index = p.getAttribute('data-index');
                div1Elements[index].classList.add('active');
            });
        });
    }

    {
        const p2Elements = document.querySelectorAll('.n')
        const div2Elements = document.querySelectorAll('.a2');

        p2Elements[0].classList.add('working');
        div2Elements[0].classList.add('active');

        p2Elements.forEach(p => {
            p.addEventListener('click', function () {
                document.querySelector('.n.working')?.classList.remove('working');
                document.querySelector('.a2.active')?.classList.remove('active');

                p.classList.add('working');

                const n = p.getAttribute('data-n');
                div2Elements[n].classList.add('active');
            });
        });
    }

    {
        const p3Elements = document.querySelectorAll('.d')
        const div3Elements = document.querySelectorAll('.a3');

        p3Elements[0].classList.add('working');
        div3Elements[0].classList.add('active');

        p3Elements.forEach(p => {
            p.addEventListener('click', function () {
                document.querySelector('.d.working')?.classList.remove('working');
                document.querySelector('.a3.active')?.classList.remove('active');

                p.classList.add('working');

                const d = p.getAttribute('data-d');
                div3Elements[d].classList.add('active');
            });
        });
    }

    {
        const p4Elements = document.querySelectorAll('.e')
        const div4Elements = document.querySelectorAll('.a4');

        p4Elements[0].classList.add('working');
        div4Elements[0].classList.add('active');

        p4Elements.forEach(p => {
            p.addEventListener('click', function () {

                document.querySelector('.e.working')?.classList.remove('working');
                document.querySelector('.a4.active')?.classList.remove('active');

                p.classList.add('working');

                const e = p.getAttribute('data-e');
                div4Elements[e].classList.add('active');
            });
        });
    }

    {
        const p5Elements = document.querySelectorAll('.x')
        const div5Elements = document.querySelectorAll('.a5');

        p5Elements[0].classList.add('working');
        div5Elements[0].classList.add('active');

        p5Elements.forEach(p => {
            p.addEventListener('click', function () {
                document.querySelector('.x.working')?.classList.remove('working');
                document.querySelector('.a5.active')?.classList.remove('active');

                p.classList.add('working');

                const x = p.getAttribute('data-x');
                div5Elements[x].classList.add('active');
            });
        });
    }

    {
        const p6Elements = document.querySelectorAll('.c')
        const div6Elements = document.querySelectorAll('.a6');

        p6Elements[0].classList.add('working');
        div6Elements[0].classList.add('active');

        p6Elements.forEach(p => {
            p.addEventListener('click', function () {
                document.querySelector('.c.working')?.classList.remove('working');
                document.querySelector('.a6.active')?.classList.remove('active');

                p.classList.add('working');

                const c = p.getAttribute('data-c');
                div6Elements[c].classList.add('active');
            });
        });
    }

    {
        const liElements = document.querySelectorAll('.list')
        const liDivElements = document.querySelectorAll('.footer__nav');

        liElements[6].classList.add('current');
        liDivElements[6].classList.add('current');

        liElements.forEach(span => {
            span.addEventListener('click', function () {
                document.querySelector('.list.current')?.classList.remove('current');
                document.querySelector('.footer__nav.current')?.classList.remove('current');

                span.classList.add('current');

                const i = span.getAttribute('data-i');
                liDivElements[i].classList.add('current');
            });
        });
    }
}