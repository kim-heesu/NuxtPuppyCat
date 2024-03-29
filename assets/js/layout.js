function docPosition() {
    let docInner = document.querySelector('.docSlider-inner');
    docInner.style.marginLeft = -docInner.clientWidth / 2 + 'px';
}

function headerVisible() {
    if (document.querySelector('.main-visual-col').classList.contains('docSlider-current')) {
        document.querySelector('header').style.opacity = '0';
    } else {
        document.querySelector('header').style.opacity = '1';
    }
}

function mobileCheck() {
    let browserWidth = document.body.clientWidth;

    if (browserWidth <= 1024) {
        // 모바일 기기체크
        let navUserAgent = navigator.userAgent.toLowerCase();

        let appGoogle = document.querySelectorAll('.app-google');
        let appStore = document.querySelectorAll('.app-store');

        function controlDisplay(target, nonTarget) {
            for (let i = 0; i < target.length; i++) {
                target[i].style.display = 'block';
                nonTarget[i].style.display = 'none';
            }
        }
        if (navUserAgent.indexOf('android') > -1) {
            //안드로이드
            controlDisplay(appGoogle, appStore);
        } else if (navUserAgent.indexOf('iphone') > -1 || navUserAgent.indexOf('ipad') > -1 || navUserAgent.indexOf('ipod') > -1) {
            //IOS
            controlDisplay(appStore, appGoogle);
        } else {
            // 그외
            controlDisplay(appGoogle, appStore);
        }
    } else {
        function controlDisplay() {
            for (let i = 0; i < target.length; i++) {
                appGoogle[i].style.display = 'block';
                appStore[i].style.display = 'block';
            }
        }
    }
}

function startRoller() {
    let betweenDistance = 1; //이동 크기 - 정수여야 함

    originalID = window.setInterval(betweenRollCallback, parseInt(1000 / 80), betweenDistance, document.querySelector('#roller1'));
    cloneID = window.setInterval(betweenRollCallback, parseInt(1000 / 80), betweenDistance, document.querySelector('#roller2'));

    original_reverseID = window.setInterval(betweenRollCallbackReverse, parseInt(1000 / 80), betweenDistance, document.querySelector('#roller-reverse1'));
    clone_reverseID = window.setInterval(betweenRollCallbackReverse, parseInt(1000 / 80), betweenDistance, document.querySelector('#roller-reverse2'));
}

//롤링 정지
function stopRoller() {
    clearInterval(originalID);
    clearInterval(cloneID);
    clearInterval(original_reverseID);
    clearInterval(clone_reverseID);
}

//인터벌 애니메이션 함수(공용)
function betweenRollCallback(d, roller) {
    //인터벌 메서드로 애니메이션 생성
    let rollerWidth = document.querySelector('.roller ul').offsetWidth; //회전 배너 너비값

    let left = parseInt(roller.style.left);
    roller.style.left = left - d + 'px'; //이동
    //조건부 위치 리셋
    if (rollerWidth + (left - d) <= 0) {
        roller.style.left = rollerWidth + 'px';
    }
}

//인터벌 애니메이션 함수(공용) - 반대로 롤링
function betweenRollCallbackReverse(d, roller) {
    //인터벌 메서드로 애니메이션 생성
    let rollerWidth = document.querySelector('.roller-reverse ul').offsetWidth; //회전 배너 너비값

    let right = parseInt(roller.style.right);
    roller.style.right = right - d + 'px'; //이동
    //조건부 위치 리셋
    if (rollerWidth + (right - d) <= 0) {
        roller.style.right = rollerWidth + 'px';
    }
}

let original_reverseID, clone_reverseID;

function animateElement(element, targetTop, duration, callback) {
    const startTop = element.offsetLeft;
    const distance = targetTop - startTop;
    const startTime = performance.now();

    function step(timestamp) {
        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const currentPosition = startTop + distance * progress;
        element.style.left = currentPosition + 'px';

        if (progress < 1) {
            window.requestAnimationFrame(step);
        } else {
            if (typeof callback === 'function') {
                callback();
            }
        }
    }

    window.requestAnimationFrame(step);
}

function RollingList(listName) {
    let targetList = 0;
    let ulElement = document.querySelector(listName).querySelector('ul');
    let liElements = ulElement.getElementsByTagName('li');

    setInterval(function () {
        targetList = liElements[0];
        animateElement(ulElement, -targetList.offsetWidth, 1000, function () {
            ulElement.appendChild(liElements[0].cloneNode(true));
            ulElement.style.left = '0px';
            ulElement.removeChild(liElements[0]);
        });
    }, 5000);
}

window.addEventListener('load', function () {
    /*docslider*/
    docSlider.init({
        afterChange: function () {
            headerVisible();
        },
    });
    docPosition();
    headerVisible();

    RollingList('.rolling-mobile');

    document.querySelector('.lottie-cat').innerHTML = '<lottie-player src="/assets/img/lottie_puppy_cat.json" background="transparent" speed=".9" loop autoplay></lottie-player>';
    document.querySelector('.lottie-dog').innerHTML = '<lottie-player src="/assets/img/lottie_puppy_dog.json" background="transparent" speed=".9" loop autoplay></lottie-player>';

    document.querySelector('.lottie-banner-cat').innerHTML = '<lottie-player src="/assets/img/lottie_puppy_banner_cat.json" background="transparent" speed=".9" loop autoplay></lottie-player>';
    document.querySelector('.lottie-banner-round').innerHTML = '<lottie-player src="/assets/img/lottie_puppy_banner_round.json" background="transparent" speed=".9" loop autoplay></lottie-player>';

    // mobileCheck();

    let pathSearch = window.location;
    let originUrl = window.location.origin + window.location.pathname;

    // modal open
    let btnModalOpen = document.querySelectorAll('.btn-modal-open');
    for (let i = 0; i < btnModalOpen.length; i++) {
        btnModalOpen[i].addEventListener('click', function () {
            docSlider.enable(false);

            let thisName = this.dataset.name;
            document.querySelector('#' + thisName).classList.add('active');
        });
    }

    // modal close
    function modalClose(target) {
        for (let i = 0; i < target.length; i++) {
            target[i].addEventListener('click', function () {
                docSlider.enable(true);
                window.history.replaceState(null, null, originUrl);
                this.closest('.modal').classList.remove('active');
            });
        }
    }

    let btnModalClose = document.querySelectorAll('.btn-modal-close');
    let btnModalDimmed = document.querySelectorAll('.dimmed');
    modalClose(btnModalClose);
    modalClose(btnModalDimmed);

    if (pathSearch.search == '?privacy=true') {
        document.querySelector('#modalPrivacy').classList.add('active');
        docSlider.enable(false);
    }

    //롤링 배너 원본 생성
    let roller = document.querySelector('.roller');
    roller.id = 'roller1';

    let roller_reverse = document.querySelector('.roller-reverse');
    roller_reverse.id = 'roller-reverse1';

    //롤링 배너 복제본 생성
    let clone = roller.cloneNode(true);
    clone.id = 'roller2';

    let clone_reverse = roller_reverse.cloneNode(true);
    clone_reverse.id = 'roller-reverse2';

    // 필요한 부분에 부착
    document.querySelector('.rolling-banner .wrap').appendChild(clone);
    document.querySelector('.wrap-reverse').appendChild(clone_reverse);

    //원본, 복제본 배너 위치 지정
    document.querySelector('#roller1').style.left = '0px';
    document.querySelector('#roller2').style.left = document.querySelector('.roller ul').offsetWidth + 'px';

    document.querySelector('#roller-reverse1').style.right = '0px';
    document.querySelector('#roller-reverse2').style.right = document.querySelector('.roller-reverse ul').offsetWidth + 'px';

    //클래스 할당
    roller.classList.add('original');
    clone.classList.add('clone');

    roller_reverse.classList.add('original-reverse');
    clone_reverse.classList.add('clone-reverse');

    startRoller();
});

window.addEventListener('resize', function () {
    docPosition();
    // mobileCheck();

    //리사이즈 시 원본, 복제본 배너 위치 재지정
    document.querySelector('#roller1').style.left = '0px';
    document.querySelector('#roller2').style.left = document.querySelector('.roller ul').offsetWidth + 'px';

    document.querySelector('#roller-reverse1').style.right = '0px';
    document.querySelector('#roller-reverse2').style.right = document.querySelector('.roller-reverse ul').offsetWidth + 'px';

    // 실행되고 있던 roller관련 setInterval 제거
    stopRoller();
    // roller setInterval 재실행
    startRoller();
});
