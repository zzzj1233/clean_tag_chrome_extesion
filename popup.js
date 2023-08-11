document.addEventListener('DOMContentLoaded', function () {
    var cleanButton = document.getElementById('cleanButton');
    cleanButton.addEventListener('click', function () {
        chrome.tabs.query({active: true}, function (tabs) {
            chrome.scripting.executeScript({
                target: {tabId: tabs[0].id},
                files: ["clean.js"],
            })
        })

    });
});
