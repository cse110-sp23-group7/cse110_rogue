window.addEventListener('load', function () {
    // Hide the options container
    document.getElementById('options-container').style.display = 'none';
});


// Add click event listener to the next button
document.getElementById('next-button').addEventListener('click', function () {
    // Hide the text container
    document.getElementById('text-container').style.display = 'none';

    // Show the options container
    document.getElementById('options-container').style.display = 'block';
});

// Add click event listeners to the option buttons
var optionButtons = document.getElementsByClassName('option-button');
for (var i = 0; i < optionButtons.length; i++) {
    optionButtons[i].addEventListener('click', function () {
        window.location.href = '../html/fortune.html';
    });
}
