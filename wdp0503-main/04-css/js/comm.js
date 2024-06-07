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
        $('header').addClass('fixed')
    })
})
