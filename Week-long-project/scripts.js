console.log('Script is loaded.');

let currentPhoto = 0;

let data = {
    photo: './images/001.jpg',
    title: 'Opening Scene',
    description: 'What happened here, why is this a very nice image'
};

$('#photo').attr('src', data.photo);


$('Document').ready(function () {
    $(".arrows").hover(function () {
        $(this).css("color", "#838584");
    }, function () {
        $(this).css("color", "#363837");
    });
});

//left button steps backwards images
$('#idArrowButtonL').click(function () {
    if (currentPhoto === 0) {
        currentPhoto = 24;
        console.log(currentPhoto);
    } else {
        currentPhoto = currentPhoto - 1;
        console.log(currentPhoto);
    }
});

//left button steps forward images
$('#idArrowButtonR').click(function () {
    if (currentPhoto === 24) {
        currentPhoto = 0;
        console.log(currentPhoto);
    } else {
        currentPhoto = currentPhoto + 1;
        console.log(currentPhoto);
    }
});

// choose which button was clicked
function handler(event) {
    var target = $(event.target);
    if (target.is("button")) {
        target.children().toggle();
    }
};


