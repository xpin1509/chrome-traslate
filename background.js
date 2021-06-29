chrome.contextMenus.create({
    type: 'normal',
    title: '查看字体',
    contexts: ['selection'],
    onclick: function(info) {
        // const href = `https://translate.google.cn/?sl=en&tl=zh-CN&text=${info.selectionText}%0A&op=translate`
        // window.open(href)

        chrome.tabs.query({
            active: true,
            currentWindow: true
        }, (tabs) => {
            let message = {
                info: '点击了'
            }
            chrome.tabs.sendMessage(tabs[0].id, message, res => {
                // if (res.code === 0) {
                //     alert(res.msg || '')
                // } else {
                //     alert(res)
                // }
            })
        })
    } 
})
