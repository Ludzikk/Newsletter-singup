const popupBox = document.querySelector(".popup");
const popupBg = document.querySelector(".popup__bg");
const popupBtn = document.querySelector(".popup__btn");
const popupEmail = document.querySelector(".popup__email");
const subBtn = document.querySelector(".sub-btn");
const input = document.querySelector(".main__input");
const errorMsg = document.querySelector(".error-message");

const addListeners = () => {
	popupBtn.addEventListener("click", () => {
		togglePopup();
		resetInput();
		resetErrors();
	});
	subBtn.addEventListener("click", togglePopup);
	input.addEventListener("keyup", resetErrors);
};

const togglePopup = () => {
	const validateEmail = input.value;
	if (
		input.value !== "" &&
		validateEmail
			.toLowerCase()
			.match(
				/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
			)
	) {
		popupBg.classList.toggle("active");
		popupBox.classList.toggle("active-popup");
		popupEmail.textContent = input.value;
	} else if (input.value === "") {
		input.classList.add("error-input");
		errorMsg.classList.add("active");
		errorMsg.textContent = "Empty";
	} else {
		input.classList.add("error-input");
		errorMsg.classList.add("active");
		errorMsg.textContent = "Valid email required";
	}
};

const resetInput = () => {
	input.value = "";
};

const resetErrors = () => {
	input.classList.remove("error-input");
	errorMsg.classList.remove("active");
};

addListeners();
