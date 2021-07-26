(function () {
    // 將IDNumber改成自己的身分證
    const IDNumber = 'A1234567890';

    document.addEventListener('DOMSubtreeModified', (event) => {
        if (event.target instanceof Element) {
            if (event.target.getAttribute('role') === 'dialog' && event.target.classList.contains('aLF-aPX-axU')) {
                setTimeout(() => {
                    let J = JSON.parse((document.querySelector('#drive-active-item-info') as HTMLElement).innerText);
                    if (/\.pdf$/i.test(J.title)) {
                        let inputEl = (event.target as Element).querySelector('[type="password"]') as HTMLInputElement;
    
                        inputEl.value = IDNumber;
                        inputEl.dispatchEvent(new Event('change'));
                    }
                }, 1000);

                let submitEl = (event.target as Element).querySelector('[role="button"]') as HTMLInputElement;
                submitEl.addEventListener('click', () => {}, false);

                setTimeout(() => {
                    submitEl.dispatchEvent(new Event('click'));
                }, 3000);
            }
        }
    });
})();