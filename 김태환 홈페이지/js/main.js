window.onload = function(){
    // navGnb css 직접 바꾸기
    let gnb = document.getElementById('gnb');
    let gnbItems = gnb.getElementsByTagName('li');

    for(var i = 0; i < gnbItems.length; i++){
        gnbItems[i].onmouseover = function(){
            mouseoverGnb(this);
        }
        gnbItems[i].onmouseout = function(){
            mouseoutGnb(this);
        }
    }

    // Recent_broadcast_folio 토글 제어
    // 포트폴리오 컨테이너 (묶고있는 div)를 변수로 선언하세요
    // 포트폴리오 아이템(article)을 변수로 선언하세요
    // 아이템들을 for으로 돌려 제어해보세요
    // 위 navGnb css 직접 바꾸기 부분을 참고하시면 쉬울 거예요

    // Recent_broadcast_folio css 직접 바꾸기
    let Recent_broadcast_Div = document.getElementById('Recent_broadcast');
    let Recent_broadcast_Items = Recent_broadcast_Div.getElementsByTagName("article");

    for(var i = 0; i < Recent_broadcast_Items.length; i++) {
        Recent_broadcast_Items[i].onmouseover = function(){
            mouseover_Recent_broadcast(this);
        }
        Recent_broadcast_Items[i].onmouseout = function(){
            mouseout_Recent_broadcast(this);
        }
    }

    

    // activity css 활용
    let activitySlider = document.getElementById("activitySlider");
    let activityItems = activitySlider.getElementsByTagName("li");
    let btnPrev = document.getElementById("btnActivityPrev");
    let btnNext = document.getElementById("btnActivityNext");

    btnNext.onclick = function(){
        if(activityItems[activityItems.length -1].offsetWidth == '0'){
            for(var i =0; i< activityItems.length; i++){
                if(activityItems[i].offsetWidth != '0'){
                    activityItems[i].classList.toggle("activity-work");
                    activityItems[i].classList.toggle("activity-none");
                    activityItems[i + 4].classList.toggle("activity-work");
                    activityItems[i + 4].classList.toggle("activity-none");
                    break;
                }
            }
        }
    }

    btnPrev.onclick = function(){
        if(activityItems[0].offsetWidth == '0'){
            for(var i = activityItems.length - 1; i > 0; i--){
                if(activityItems[i].offsetWidth != '0'){
                    activityItems[i - 4].classList.toggle("activity-none");
                    activityItems[i - 4].classList.toggle("activity-work");
                    activityItems[i].classList.toggle("activity-work");
                    activityItems[i].classList.toggle("activity-none");
                    break;
                }
            }
        }
    }
}

function mouseoverGnb(parent){ // 마우스 오버시 >> 영어 안 보임, 한글 보임
    let noneChild = parent.getElementsByTagName('a')[0];
    let displayChild = parent.getElementsByTagName('a')[1];

    noneChild.style.display = 'none';
    displayChild.style.display = 'block';
}

function mouseoutGnb(parent){ // 마우스 아웃시 >> 영어 보임, 한글 안 보임
    let displayChild = parent.getElementsByTagName('a')[0];
    let noneChild = parent.getElementsByTagName('a')[1];

    noneChild.style.display = 'none';
    displayChild.style.display = 'block';
}

// 함수를 만들어보세요!
// 위의 함수처럼 부모객체가 매개변수로 들어와요
// perant는 아이템인 article이 되겠죠?
// 그 밑에 있는 a 요소를 제어해보세요
// 위 함수처럼 태그네임에서 몇번째 요소를 꺼낸다는 것을 참고하세요
// 5주차에 배운 classList.toggle(); 을 사용해보세요

function mouseover_Recent_broadcast(parent){ // 마우스 오버시 >> 사진배경이 검게 변함.
    let Recent_broadcast_Background = parent.getElementsByTagName("a")[0];
    Recent_broadcast_Background.classList.toggle('black-layer');
    console.log('On!');
}

function mouseout_Recent_broadcast(parent){ // 마우스 아웃시 >> 사진배경이 정상적으로 돌아옴
    let Recent_broadcast_Background = parent.getElementsByTagName('a')[0];
    Recent_broadcast_Background.classList.toggle('black-layer');
    console.log("off!");
}
//새로고침후 바로 마우스를 올릴경우 반대로 적용이 됨