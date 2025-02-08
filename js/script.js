// 返回顶部功能
window.addEventListener('scroll', function() {
    const backButton = document.getElementById('backToTop');
    if (window.pageYOffset > 300) {
        backButton.style.opacity = '1';
    } else {
        backButton.style.opacity = '0';
    }
});

document.getElementById('backToTop').addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// 平滑滚动导航
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


window.addEventListener('scroll', function() {
    const backButton = document.getElementById('midbuy');
});

document.getElementById('midbuy').addEventListener('click', function() {
	var scrollHeight = document.documentElement.scrollHeight;
    window.scrollTo({
        top: scrollHeight/2,
        behavior: 'smooth'
    });
});


window.addEventListener('scroll', function() {
    const backButton = document.getElementById('tophist');
});

document.getElementById('tophist').addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

window.addEventListener('scroll', function() {
    const backButton = document.getElementById('info');
});

document.getElementById('info').addEventListener('click', function() {
	var scrollHeight = document.documentElement.scrollHeight;
    window.scrollTo({
        top: scrollHeight,
        behavior: 'smooth'
    });
});