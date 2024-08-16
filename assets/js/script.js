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

const slideField = document.querySelector('.ex__slider-inner');
const slides = document.querySelectorAll('.ex__slide');
const next = document.querySelector('.ex__slider-next');
const prev = document.querySelector('.ex__slider-prev');
let index = 0;
const visibleSlides = 6;

next.addEventListener('click', () => {
    index++;
    if (index > slides.length - visibleSlides) {
        index = 0;
    }

    prev.style.visibility = 'visible'
    slideField.style.transform = `translateX(-${index * 200}px)`;
});

prev.addEventListener('click', () => {
    index--;
    if (index < 0) {
        index = slides.length - visibleSlides;
    }
    slideField.style.transform = `translateX(-${index * 200}px)`;
});


const hoverDiv1 = document.getElementById('hover__div-1'),
    hoverDiv2 = document.getElementById('hover__div-2'),
    hoverDiv3 = document.getElementById('hover__div-3'),
    hoverDiv4 = document.getElementById('hover__div-4'),
    hoverDiv5 = document.getElementById('hover__div-5'),
    hoverDiv6 = document.getElementById('hover__div-6'),
    hoverDiv7 = document.getElementById('hover__div-7'),
    hoverDiv8 = document.getElementById('hover__div-8'),
    hoverDiv9 = document.getElementById('hover__div-9'),
    hoverDiv10 = document.getElementById('hover__div-10'),
    hoverDiv11 = document.getElementById('hover__div-11'),
    hoverDiv12 = document.getElementById('hover__div-12')

const array = [hoverDiv1, hoverDiv2, hoverDiv3, hoverDiv4, hoverDiv5, hoverDiv6, hoverDiv7, hoverDiv8, hoverDiv9, hoverDiv10, hoverDiv11, hoverDiv12]

for (let i = 0; i < array.length; i++) {

    array[1].addEventListener('mouseover', function () {

        const Div1 = document.getElementById('first'),
            Div2 = document.getElementById('second'),
            Div3 = document.getElementById('third')
    
        const span1 = document.getElementById('span1'),
            span2 = document.getElementById('span2'),
            span3 = document.getElementById('span3')
    
        const ctrl1 = document.getElementById('hover__ctrl-1')
    
        const Img1 = document.getElementById('1-1'),
            Img2 = document.getElementById('1-2'),
            Img3 = document.getElementById('1-3'),
            activeImg = document.getElementById('active')
    
        ctrl1.style.display = 'block'
    
        Div1.addEventListener('mouseover', function () {
            activeImg.style.display = 'none';
            Img1.style.display = 'block'
            span1.style.borderColor = '#aaa'
        })
        Div1.addEventListener('mouseout', function () {
            activeImg.style.display = 'block';
            Img1.style.display = 'none'
            span1.style.borderColor = '#d6d6d6b6'
        })
    
        Div2.addEventListener('mouseover', function () {
            activeImg.style.display = 'none';
            Img2.style.display = 'block'
            span2.style.borderColor = '#aaa'
        })
        Div2.addEventListener('mouseout', function () {
            activeImg.style.display = 'block';
            Img2.style.display = 'none'
            span2.style.borderColor = '#d6d6d6b6'
        })
    
        Div3.addEventListener('mouseover', function () {
            activeImg.style.display = 'none';
            Img3.style.display = 'block'
            span3.style.borderColor = '#aaa'
        })
        Div3.addEventListener('mouseout', function () {
            activeImg.style.display = 'block';
            Img3.style.display = 'none'
            span3.style.borderColor = '#d6d6d6b6'
        })
    })
    
    array[i].addEventListener('mouseout', function () {
    
        const ctrl1 = document.getElementById('hover__ctrl-1')
    
        ctrl1.style.display = 'none'
    })
}



