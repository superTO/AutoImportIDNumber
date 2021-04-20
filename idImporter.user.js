// ==UserScript==
// @name         Auto import ID number
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  when opening PDF auto import ID number.
// @author       Adokun
// @match        https://mail.google.com/*
// @grant        none
// ==/UserScript==


(function () {
    // 將IDNumber改成自己的身分證
    const IDNumber = 'A1234567890';

    document.addEventListener('DOMSubtreeModified', (event) => {
        if (event.target.getAttribute('role') === 'dialog' && event.target.classList.contains('aLF-aPX-axU')) {
            setTimeout(() => {
                let J = JSON.parse(document.querySelector('#drive-active-item-info').innerText);
                if (/\.pdf$/i.test(J.title)) {
                    let inputEl = event.target.querySelector('[type="password"]');

                    inputEl.value = IDNumber;
                    inputEl.dispatchEvent(new Event('change'));
                }
            }, 1000);
        }
    });
})();

/**
 * @description 在 inputEl 觸發 keydown event (key = 'Enter'),會因為isTrusted = false失敗
 */
// inputEl.addEventListener('change', function (bb) {
//     console.log(bb);
//     setTimeout(() => {
//         var e = new Event("keydown");
//         // e.key = "Enter";
//         // e.code = "Enter";
//         // e.which = 13;
//         // e.keyCode = 13;
//         // e.bubbles = true;
//         // e.cancelBubble = true;
//         // e.cancelable = true;
//         // e.composed = true;
//         // e.location = 3;
//         /**
//          * The isTrusted read-only property of the Event interface is a boolean that is true when the event was generated by a user action,
//          * and false when the event was created or modified by a script or dispatched via dispatchEvent.
//          */
//         // e.isTrusted = true;
//         inputEl.dispatchEvent(e);
//     }, 1000);
// }, false);


/**
 * @description submitEl(送出的按鈕) 是使用<div role="button"> 但沒有click event或其他event 送出密碼
 */

// setTimeout(() => {
//     let submitEl = ev.target.querySelector('.aLF-aPX-a1E-JD-Zc');
//     // submitEl.addEventListener('click', function (e) {
//     //     console.log(e);
//     // }, false);

//     // submitEl.dispatchEvent('click');

//     for (var key in submitEl) {
//         if (key.search('on') === 0) {
//             submitEl.addEventListener(key.slice(2), function (e) {
//                 console.log(e);
//             }, false)
//         }
//     }
//     //console.log(submitEl);
// }, 3000);