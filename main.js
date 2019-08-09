//网站载入效果
setTimeout(function () {
    fsiteloading.classList.remove('active')
}, 1000)

//弹出效果
let specialTag = document.querySelectorAll('[data-x]')
for (let i = 0; i < specialTag.length; i++) {
    specialTag[i].classList.add('offset')
}
//第一项弹出设定
var startID = document.getElementById('siteAboutMe')
setTimeout(function () {
    startID.classList.remove('offset')
}, 1000);

//topNavBar变换
window.onscroll = function () {
    console.log(1)
    if (scrollY > 0) {
        topNavBarStick.classList.add('active')
    }
    else {
        topNavBarStick.classList.remove('active')
    }

    //所视视口导航栏选定效果
    //1.获取滚动三项数据
    let specialTag = document.querySelectorAll('[data-x]')
    let s = []
    for (let i = 0; i < specialTag.length; i++) {
        s[i] = Math.abs(specialTag[i].offsetTop - window.scrollY)

    }
    //2.对比数据选出离得最近的
    var min = 0
    for (let i = 0; i < specialTag.length - 1; i++) {
        if (s[min] > s[i + 1]) {
            min = i + 1
        }
    }

    specialTag[min].classList.remove('offset') //弹出效果

    //3.找到min对应的元素并添加class
    let id = specialTag[min].id
    let highLightA = document.querySelector('.nav ul li a[href="#' + id + '"]')
    let highLightLi = highLightA.parentNode
    let AllLi = highLightLi.parentNode
    let brothersAndHLLi = AllLi.children
    for (let i = 0; i < brothersAndHLLi.length; i++) {
        brothersAndHLLi[i].classList.remove('highlight')
    }
    highLightLi.classList.add('highlight')

    if (s[min] > 500) {
        highLightLi.classList.remove('highlight')
    }

}

//导航菜单效果
let liTags = document.querySelectorAll('.nav ul li')
for (let i = 0; i < liTags.length; i++) {
    liTags[i].onmouseenter = function () {
        liTags[i].classList.add('active')
    }
    liTags[i].onmouseleave = function () {
        liTags[i].classList.remove('active')
    }
}

//导航跳转
let aTags = document.querySelectorAll('.nav ul li a')
for (let i = 0; i < aTags.length; i++) {
    aTags[i].onclick = function (x) {
        x.preventDefault()
        let a = aTags[i]
        let href = a.getAttribute('href')
        let element = document.querySelector(href)
        let targetTop = element.offsetTop - 65
        let currentTop = window.scrollY
        let t = Math.abs(targetTop - currentTop) / 100 * 300
        if (t > 500) {
            t = 500
        }
        //tween
        function animate(time) {
            requestAnimationFrame(animate);
            TWEEN.update(time);
        }
        requestAnimationFrame(animate);

        var coords = { y: currentTop }; // 起始点 (0, 0)
        var tween = new TWEEN.Tween(coords) // 创建一个新的tween用来改变 'coords'
            .to({ y: targetTop }, t) // 在1s内移动至 (300, 200)
            .easing(TWEEN.Easing.Quadratic.InOut) // 使用缓动功能使的动画更加平滑
            .onUpdate(function () { // 在 tween.js 更新 'coords' 后调用
                window.scrollTo(0, coords.y)
            })
            .start(); // 立即开始 tween
    }
}

portfolio1.onclick = function () {
    portfolioBar.className = 'bar stata-1'
}
portfolio2.onclick = function () {
    portfolioBar.className = 'bar stata-2'
}
portfolio3.onclick = function () {
    portfolioBar.className = 'bar stata-3'
}