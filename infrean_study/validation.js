window.addEventListener('load', function () {
	clearMessages();

	var formElem = document.querySelector('form');
	//false가 리턴되면 form 전송이 안되도록 막음
	formElem.onsubmit = submitForm;

	//월 추가
	var selectInput = document.querySelector('select[name="birth-month"]');
	for (var i = 1; i <= 12; i++) {
		var option = document.createElement('option');
		option.innerHTML = i + '월';
		option.value = i;

		selectInput.appendChild(option);
	}
});

function clearMessages() {
	var messages = document.getElementsByClassName('alert-message');
	for (var i = 0; i < messages.length; i++) {
		messages[i].style.display = 'none';
	}
}

function showMessage(inputElement, message) {
	var messageElem = inputElement.parentNode.querySelector('span');

	messageElem.style.display = 'inline';
	messageElem.innerText = message;

	inputElement.focus();
}

function submitForm() {
	//account info
	var accountInput = document.querySelector('input[name="account"]');
	var passwordInput = document.querySelector('input[name="password"]');
	var passwordConfirmInput = document.querySelector('input[name="password2"]');

	//select 타입 - 월 선택
	var selectInput = document.querySelector('select[name="birth-month"]');
	//radio 버튼 - 성별 선택 (체크된 버튼 값을 가져옴)
	var radioInput = document.querySelector('input[name="gender"]:checked');
	//checkbox - 사이트 이용약관 (체크박스가 선택되었는지만 확인)
	var checkInput = document.querySelector('input[name="agree"]');

	console.log(accountInput.value);
	console.log(passwordInput.value);
	console.log(passwordConfirmInput.value);

	console.log(selectInput.value);
	console.log(radioInput.value);
	console.log(checkInput.value);

	var success = true;
	if (accountInput.value.length < 6) {
		showMessage(accountInput, '아이디는 6자리 이상이어야 합니다.');
		success = false;
	}
	if (passwordInput.value.length < 10) {
		showMessage(passwordInput, '비밀번호는 10자리 이상이어야 합니다.');
		success = false;
	}
	if (passwordConfirmInput.value !== passwordInput) {
		showMessage(passwordConfirmInput, '비밀번호가 일치하지 않습니다.');
		success = false;
	}
	return success;
}
