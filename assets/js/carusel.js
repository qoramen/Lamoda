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
