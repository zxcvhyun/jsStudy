window.addEventListener('load', function () {
	var carousels = this.document.getElementsByClassName('carousel');

	//--- 캐러셀 이번트를 등록하는 로직 - 페이지 로딩 완료
	for (var i = 0; i < carousels.length; i++) {
		addEventToCarousel(carousels[i]);
	}
});

function addEventToCarousel(carouselElem) {
	var ulElem = carouselElem.querySelector('ul');
	var liElems = ulElem.querySelectorAll('li');
	console.log(liElems);

	//--- 캐러셀의 ul 너비 값을 li 개수 만큼 조정함 
	var liWidth = liElems[0].clientWidth;		   // 현재 li의 너비값
	var adjustedWidth = liElems.length * liWidth;  // 이미지 개수 * li의 width<600px> 

	ulElem.style.width = adjustedWidth + 'px';     // css에서 설정한 ul의 10000px이 2400px로 변경 됨

	//--- 슬라이드 버튼 이벤트 등록
	var slideButtons = carouselElem.querySelectorAll('.slide');
	for (var i = 0; i < slideButtons.length; i++) {
		slideButtons[i].addEventListener(
			'click', // 슬라이드 버튼 클릭시
			createListenerSlide(carouselElem) // 슬라이드 버튼에 등록할 이벤트리스너를 클로저 형태로 저장할 함수
		);
	}
}
//--- 클로저로 만든 이유는 carouselElem가 여기서 이벤트가 호출 될때 바뀌지 않고 계속 사용되기 위함
//--- 슬라이드 버튼 클릭시 
function createListenerSlide(carouselElem) {
	//--- 클릭 이벤트가 발생했을때 이 함수가 호출
	return function (event) {
		var clickedButton = event.currentTarget;    // currentTarget : 현재 클릭한 버튼 가져옴(left or right)

		var liElems = carouselElem.querySelectorAll('li'); 
		var liCount = liElems.length;				// 이미지의 개수를 가져옴(li의 수를 카운트)
		// 이미지의 인덱스 (순번)
		var currentIndex = carouselElem.attributes.data.value; // .carousel 의 data 속성에서 현재 이미지 index를 가져옴

		//---슬라이드 버튼 체크
		//1. 오른쪽 클릭이고 오른쪽에 남은 이미지가 있다면 
		if (
			clickedButton.className.includes('right') &&
			currentIndex < liCount - 1
		) {
			currentIndex++; 					    // 현재 이미지 index를 1 증가시키고
			scrollDiv(carouselElem, currentIndex);  // 오른쪽 방향으로 스크롤

		//2. 왼쪽 클릭이고 왼쪽에 남은 이미지가 있다면
		} else if (clickedButton.className.includes('left') && currentIndex > 0) {
			currentIndex--; 						// 현재 이미지 index를 1 감소시키고
			scrollDiv(carouselElem, currentIndex);  // 왼쪽 방향으로 스크롤
		}

		//--- ui 업데이트
		// 인디케이터 업데이트
		updateIndicator(carouselElem, currentIndex);
		// 슬라이드 보여줌 여부 업데이트
		updateSlideButtonVisible(carouselElem, currentIndex, liCount);

		// 현재 이미지 index값을.carousel의 data 속성에 업데이트
		carouselElem.attributes.data.value = currentIndex;
	};
}

//--- 스크롤 
function scrollDiv(carouselElem, nextIndex) {
	var scrollable = carouselElem.querySelector('div'); // ul 상위의 div 요소를 가져옴
	// 몇 픽셀 이동해야 하는지
	var liWidth = scrollable.clientWidth; // li 하나의 너비(600px) 를 가져옴
	var newLeft = liWidth * nextIndex;    // 이미지 index * li 너비 = 새 스크롤 x 위치
	//HTMLElement.scrollTo 함수를 사용해서 div 요소를 새 스크롤 x 위치로 스크롤 함 
	scrollable.scrollTo({ left: newLeft, behavior: 'smooth' }); // <div>요소.scrollTo({left: 새 스크롤 x 위치, behavior:'smooth})
}

//--- 인디케이터를 현재 이미지 index에 맞게 조정
function updateIndicator(carouselElem, currentIndex) {
	var indicators = carouselElem.querySelectorAll('footer > div');

	for (var i = 0; i < indicators.length; i++) {
		// 현재 이미지 index와 일치하는 순번의 div 에만 class 속성으로 active 값 부여
		if (currentIndex == i) {
			indicators[i].className = 'active'; 
		} else {
			indicators[i].className = '';
		}
	}
}
              
function updateSlideButtonVisible(carouselElem, currentIndex, liCount) {
	var left = carouselElem.querySelectorAll('.slide-left');   // 왼쪽버튼
	var right = carouselElem.querySelectorAll('.slide-right'); // 오른쪽버튼

	//--- 슬라이드 버튼을 현재 이미지  idex에 맞게 숨기거나 보여줌
	// 맨 왼쪽 이미지라면, 왼쪽 버튼이 display: none , 그렇지 않으면 block
	if (currentIndex > 0) {
		left[0].style.display = 'block';
	} else {
		// 왼쪽으로 못 감
		left[0].style.display = 'none';
	}

	// 맨 오른쪽 이미지라면, 오른쪽 버튼이 display: none , 그렇지 않으면 block
	if (currentIndex < liCount - 1) {
		right[0].style.display = 'block';
	} else {
		//오른쪽으로 못 감
		right[0].style.display = 'none';
	}
}
