function toggleContent(button) {
    const content = button.nextElementSibling;

    if (content.classList.contains('show')) {
        content.classList.remove('show');
        button.textContent = 'Launch Intel';
    } else {
        content.classList.add('show');
        button.textContent = 'Abort Intel';
    }
}