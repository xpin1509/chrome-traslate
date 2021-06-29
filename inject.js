function getFontInfo () {
    var anchorNode = window.getSelection().anchorNode

    if (!anchorNode) {
        return alert("请先选中字体！")
    }

    var parent = anchorNode.parentNode

    if (!parent) {
        return alert("选中错误！")
    }

    var attrMap = window.getComputedStyle(parent)

    var attrs = [
        {
            key: 'color',
            name: '颜色'
        },
        {
            key: 'lineHeight',
            name: '行高'
        },
        {
            key: 'fontSize',
            name: '字体大小'
        },
        {
            key: 'fontFamily',
            name: '字体类型'
        }
    ]

    let msg = ''

    attrs.forEach(el => {
        const { key } = el
        el.value = attrMap[key]
        msg += el.name + el.value + '\n'
    })


    alert(msg)
}


chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    // 这里是返回给bg的内容
    sendResponse(getFontInfo())
})