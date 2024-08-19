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

// Ads Carusel

const slider1 = document.getElementById('slider1'),
    slider2 = document.getElementById('slider2'),
    slider3 = document.getElementById('slider3')

const next1 = document.getElementById('next1')
const next2 = document.getElementById('next2')
const prev2 = document.getElementById('prev2')
const prev3 = document.getElementById('prev3')

next1.addEventListener('click', function () {
    slider1.style.right = '867px'
    slider2.style.right = '867px'
    slider3.style.right = '867px'
})

next2.addEventListener('click', function () {
    slider1.style.right = '1734px'
    slider2.style.right = '1734px'
    slider3.style.right = '1734px'
})

prev2.addEventListener('click', function () {
    slider1.style.right = '0'
    slider2.style.right = '0'
    slider3.style.right = '0'
})

prev3.addEventListener('click', function () {
    slider1.style.right = '867px'
    slider2.style.right = '867px'
    slider3.style.right = '867px'
})

// const slideField = document.querySelector('.ex__slider-inner');
// const slides = document.querySelectorAll('.ex__slide');
// const next = document.querySelector('.ex__slider-next');
// const prev = document.querySelector('.ex__slider-prev');
// let index = 0;
// const visibleSlides = 6;

// next.addEventListener('click', () => {
//     index++;
//     if (index > slides.length - visibleSlides) {
//         index = 0;
//     }

//     slideField.style.transform = `translateX(-${index * 200}px)`;
// });

// prev.addEventListener('click', () => {
//     index--;
//     if (index < 0) {
//         index = slides.length - visibleSlides;
//     }
//     slideField.style.transform = `translateX(-${index * 200}px)`;
// });

const carousel = document.getElementById('carousel');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');

let offset = 0;
const slideWidth = 200; // Slide eni + margin
const totalSlides = 12; // Slaydlar soni
const visibleSlides = Math.floor(1200 / slideWidth); // Ko'rinadigan slaydlar soni
const maxOffset = slideWidth * (totalSlides - visibleSlides); // Maksimal siljish

nextBtn.addEventListener('click', () => {
    if (offset < maxOffset) {
        offset += slideWidth;
        carousel.style.transform = `translateX(-${offset}px)`;
    }
});

prevBtn.addEventListener('click', () => {
    if (offset > 0) {
        offset -= slideWidth;
        carousel.style.transform = `translateX(-${offset}px)`;
    }
});

const carousel1 = document.getElementById('carousel1');
const nextBtn1 = document.getElementById('next1Btn');
const prevBtn1 = document.getElementById('prev1Btn');

let offset1 = 0;
const slideWidth1 = 200; // Slide eni + margin
const totalSlides1 = 12; // Slaydlar soni
const visibleSlides1 = Math.floor(1200 / slideWidth1); // Ko'rinadigan slaydlar soni
const maxOffset1 = slideWidth1 * (totalSlides1 - visibleSlides1); // Maksimal siljish

nextBtn1.addEventListener('click', () => {
    if (offset1 < maxOffset1) {
        offset1 += slideWidth1;
        carousel1.style.transform = `translateX(-${offset1}px)`;
    }
});

prevBtn1.addEventListener('click', () => {
    if (offset1 > 0) {
        offset1 -= slideWidth1;
        carousel1.style.transform = `translateX(-${offset1}px)`;
    }
});

const slider21 = document.getElementById('slider21'),
    slider22 = document.getElementById('slider22'),
    slider23 = document.getElementById('slider23')

const next21 = document.getElementById('next21')
const next22 = document.getElementById('next22')
const prev22 = document.getElementById('prev22')
const prev23 = document.getElementById('prev23')

next21.addEventListener('click', function () {
    slider21.style.right = '867px'
    slider22.style.right = '867px'
    slider23.style.right = '867px'
})

next22.addEventListener('click', function () {
    slider21.style.right = '1734px'
    slider22.style.right = '1734px'
    slider23.style.right = '1734px'
})

prev22.addEventListener('click', function () {
    slider21.style.right = '0'
    slider22.style.right = '0'
    slider23.style.right = '0'
})

prev23.addEventListener('click', function () {
    slider21.style.right = '867px'
    slider22.style.right = '867px'
    slider23.style.right = '867px'
})

let currentIndex = 0;
const slidess = document.querySelectorAll('.slidee');
const totalSlidess = slidess.length;

const carousell = document.getElementById('carouseel');

function showNextSlide() {
    currentIndex = (currentIndex + 1) % totalSlidess;
    const offsett = -currentIndex * 50;
    carousell.style.transform = `translateX(${offsett}%)`;
}

setInterval(showNextSlide, 3000);
