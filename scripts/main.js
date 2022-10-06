const preloaderWrapper = document.querySelector('.preloader-wrapper');
const vish = document.querySelector('.vis-h');

window.addEventListener('load', function()
{
    preloaderWrapper.classList.add('fade-out-animation');
    vish.classList.add('vis-v');
});
