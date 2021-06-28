chrome.contextMenus.create({
    type: 'normal',
    title: '用谷歌翻译一下吧',
    contexts: ['selection'],
    onclick: function(info) {
        console.log(info)
        const href = `https://translate.google.cn/?sl=en&tl=zh-CN&text=${info.selectionText}%0A&op=translate`
        window.open(href)
    } 
})