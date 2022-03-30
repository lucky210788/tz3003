function showHideBlocks() {
    const button = document.querySelector('.read-more-btn');
    const blocks = document.querySelectorAll('.small-block');
    let isOpen = false;

    button.addEventListener('click', () => {
        button.classList.toggle('read-more-btn__open');
        if (!isOpen) {
            blocks.forEach(block => {
                if (block.classList.contains('small-block__mob')) {
                    block.classList.remove('small-block__mob');
                }
            })
        } else {
            blocks.forEach((block, i) => {
                if (i > 3) {
                    block.classList.add('small-block__mob');
                }
            })
        }

        isOpen = !isOpen;
    });
}

showHideBlocks();
