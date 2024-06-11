//준비이벤트
//html이 로드 되면 실행
$(function () {
    //modal 띄우기
    //#logo 클릭시 액션 발생
    $('#logo').click(function () {
        //action 값
        $('#layerPop').fadeIn(300)
    })

    //#layerPop button 클릭시 액션 발생
    $('#layerPop button').click(function () {
        $('#layerPop').fadeOut(300)
    })
    //header를 클릭시 'fixed' class이름 추가
    $('header').click(function () {
        $(this).addClass('fixed')
    })

    //윈도우 스크롤 이벤트
    $(window).scroll(function () {
        let scroll = $(window).scrollTop()

        console.log(scroll)

        if (scroll >= 100) {
            //스크롤이 100px 이상이면 'fixed' 클래스 이름 추가
            $('header').addClass('fixed')
        } else {
            //스크롤이 100px 이하이면 'fixed' 클래스 이름 제거
            $('header').removeClass('fixed')
        }
    })
    //메뉴 클릭시 해당 섹션으로 이동(메뉴클릭 or top 버튼)
    $(".navbar a, footer a[href='#wrap']").on('click', function (event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== '') {
            // Prevent default anchor click behavior
            event.preventDefault()

            // Store hash
            var hash = this.hash

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate(
                {
                    scrollTop: $(hash).offset().top,
                },
                900,
                function () {
                    // Add hash (#) to URL when done scrolling (default click behavior)
                    window.location.hash = hash
                },
            )
        } // End if
    })
    //AOS를 이용한 parallax scrolling
    AOS.init({
        // key: value,
        offset: 120,
        delay: 0,
        duration: 1000,
        easing: 'ease-in-out',
        mirror: false,
        once: false,
        anchorPlacement: 'top-center',
    })
})
