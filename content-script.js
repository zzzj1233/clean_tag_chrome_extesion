var timer = null

const checkTag = () => {
    var tags = document.getElementsByClassName('mr-4 rounded-xl px-2 py-1 text-xs transition-colors text-label-2 dark:text-dark-label-2 hover:text-label-2 dark:hover:text-dark-label-2 bg-fill-3 dark:bg-dark-fill-3 hover:bg-fill-2 dark:hover:bg-dark-fill-2')

    if (!tags) {
        if (timer !== null)
            clearTimeout(timer)
        timer = setTimeout(checkTag, 2000)
        return
    }

    var contains = [false, false]

    for (let i = 0; i < tags.length; i++) {
        if (tags[i].textContent.indexOf("脑筋急转弯") >= 0) {
            contains[0] = true
        } else if (tags[i].textContent.indexOf("数学") >= 0)
            contains[1] = true
    }

    var ele1 = undefined
    var ele2 = undefined

    if (contains[0]) {
        ele1 = document.createElement('div')
        ele1.textContent = '脑筋急转弯'
        ele1.style.color = 'rgb(255,45, 85,.7)'
    }

    if (contains[1]) {
        ele2 = document.createElement('div')
        ele2.textContent = '数学'
        ele2.style.color = 'rgb(255,45, 85,.7)'
    }

    var parents = document.getElementsByClassName('mt-3 flex items-center space-x-4')

    if (parents) {
        if (ele1)
            parents[0].append(ele1)
        if (ele2)
            parents[0].append(ele2)
    }
}

timer = setTimeout(checkTag, 2000)