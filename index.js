var title = document.querySelector("#title");

var CLICKEd_CLASS = 'clicked';

function handleClick() {
   title.classList.toggle(CLICKEd_CLASS);
}

function init() {
    title.addEventListener("click", handleClick);

}

 init();

