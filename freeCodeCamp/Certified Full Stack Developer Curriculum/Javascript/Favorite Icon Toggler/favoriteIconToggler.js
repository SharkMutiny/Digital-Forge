const favoriteIcons = document.querySelectorAll('.favorite-icon');

favoriteIcons.forEach(icon => {
    icon.addEventListener('click', () => {
        icon.classList.toggle('filled');
        if (icon.classList.contains('filled')) {
            icon.innerHTML = '&#10084;';
        } else {
            icon.innerHTML = '&#9825;';
        }
    });
});
