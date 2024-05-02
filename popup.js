document
    .getElementById("translateToEmojisButton")
    .addEventListener("click", function () {
        chrome.tabs.query(
            { active: true, currentWindow: true },

            function (tabs) {
                chrome.tabs.sendMessage(tabs[0].id, {
                    method: "translateToEmojis",
                })
            }
        )
    })

document
    .getElementById("translateToWordsButton")
    .addEventListener("click", function () {
        chrome.tabs.query(
            { active: true, currentWindow: true },

            function (tabs) {
                chrome.tabs.sendMessage(tabs[0].id, {
                    method: "translateToWords",
                })
            }
        )
    })
