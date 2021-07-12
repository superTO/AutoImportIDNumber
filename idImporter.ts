(function () {
    // 將IDNumber改成自己的身分證
    const IDNumber = 'A1234567890';

    document.addEventListener('DOMSubtreeModified', (event) => {
        if (event.target instanceof Element) {
            if (event.target.getAttribute('role') === 'dialog' && event.target.classList.contains('aLF-aPX-axU')) {
                setTimeout(() => {
                    let J = JSON.parse((document.querySelector('#drive-active-item-info') as HTMLElement).innerText);
                    if (/\.pdf$/i.test(J.title)) {
                        let inputEl: HTMLInputElement = (event.target as Element).querySelector('[type="password"]');
    
                        inputEl.value = IDNumber;
                        inputEl.dispatchEvent(new Event('change'));
                    }
                }, 1000);
            }
        }
    });
})();