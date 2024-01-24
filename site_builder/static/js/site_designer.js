// SITE DESIGN PANEL DISPLAY
function openDesigner() {
document.getElementById('site_designer_opener').style.display = "none";
document.getElementById('site_designer_panel_cont').style.left = "0";
}
function closeDesigner() {
document.getElementById('site_designer_opener').style.display = "block";
document.getElementById('site_designer_panel_cont').style.left = "-25vw"
}

// /* OPEN OR CLOSE LAYERS  */
var acc = document.querySelectorAll('.sd_section_cont');
acc.forEach(function(section) {
// Get the first child of the section
var title = section.querySelector('.sd_section_titles');

// Add click event listener to the section title
title.addEventListener('click', function() {
    // Close all other sections before opening the clicked one and change their titles color
    acc.forEach(function(otherSection) {
        if (otherSection !== section) {
            otherSection.classList.remove('active');
            var otherPanel = otherSection.querySelector('.sd_dropdown');
            otherPanel.style.display = 'none';
            otherSection.querySelector('.sd_section_titles').style.color = ''; // Reset color
        }
    });

    // Toggle the active class for the section
    section.classList.toggle('active');

    // Get the panel content inside the section
    var panel = section.querySelector('.sd_dropdown');

    // If the panel is visible, hide it; otherwise, display it
    if (panel.style.display === 'flex') {
        panel.style.display = 'none';
        title.style.color = ''; // Reset color
    } else {
        panel.style.display = 'flex';
        title.style.color = 'var(--white)'; // Change color to white when opened
    }
});
});

// SHOW SELECTED ITEM
document.addEventListener('DOMContentLoaded', function() {
const background_img = document.getElementById('background_img');
const background_color = document.getElementById('background_color');
const background_overlay = document.getElementById('background_overlay');
const infoCard = document.getElementById('info_box');
const info_profile_section = document.getElementById('info_img_section');
const info_title = document.getElementById('info_title');
const info_subtitle = document.getElementById('info_subtitle');
const info_description = document.getElementById('info_description');
const info_socials_cont = document.getElementById('info_socials_cont');

function applyBorderHoverEffect(element, accordionElement, borderStyle) {

    accordionElement.addEventListener('mouseover', function() {
        element.style.outline = `10px ${borderStyle} rgb(60, 179, 113, 0.5)`;
        element.style.outlineOffset = '-10px';
    });

    accordionElement.addEventListener('mouseout', function() {
        element.style.outline = 'none'; // Remove the outline on mouseout
    });
}
applyBorderHoverEffect(background_img, document.getElementById('sd_accordion_background'), 'dashed');
applyBorderHoverEffect(background_color, document.getElementById('sd_accordion_background'), 'dashed');
applyBorderHoverEffect(background_overlay, document.getElementById('sd_accordion_overlay'), 'dashed');
applyBorderHoverEffect(infoCard, document.getElementById('sd_accordion_infoCard'), 'dashed');
applyBorderHoverEffect(info_profile_section, document.getElementById('sd_accordion_mainImg'), 'dashed');
applyBorderHoverEffect(info_title, document.getElementById('sd_accordion_title'), 'dashed');
applyBorderHoverEffect(info_subtitle, document.getElementById('sd_accordion_subtitle'), 'dashed');
applyBorderHoverEffect(info_description, document.getElementById('sd_accordion_description'), 'dashed');
applyBorderHoverEffect(info_socials_cont, document.getElementById('sd_accordion_linksIcons'), 'dashed');
});

//SHOW SELECTED MENU
document.addEventListener('DOMContentLoaded', function() {
function changeAccordionColorOnHover(constElement, accordionElement) {
    constElement.addEventListener('mouseover', function() {
        accordionElement.style.color = 'var(--white)';
    });

    constElement.addEventListener('mouseout', function() {
        accordionElement.style.color = ''; // Reset color to default on mouseout
    });
}
changeAccordionColorOnHover(document.getElementById('background_img'), document.getElementById('sd_accordion_background'));
changeAccordionColorOnHover(document.getElementById('background_color'), document.getElementById('sd_accordion_background'));
changeAccordionColorOnHover(document.getElementById('background_overlay'), document.getElementById('sd_accordion_overlay'));
changeAccordionColorOnHover(document.getElementById('info_box'), document.getElementById('sd_accordion_infoCard'));
changeAccordionColorOnHover(document.getElementById('info_img_cont'), document.getElementById('sd_accordion_mainImg'));
changeAccordionColorOnHover(document.getElementById('info_title'), document.getElementById('sd_accordion_title'));
changeAccordionColorOnHover(document.getElementById('info_subtitle'), document.getElementById('sd_accordion_subtitle'));
changeAccordionColorOnHover(document.getElementById('info_description'), document.getElementById('sd_accordion_description'));
changeAccordionColorOnHover(document.getElementById('info_socials_cont'), document.getElementById('sd_accordion_linksIcons'));
});

// HIGHLIGHT SELECTED ITEM
document.addEventListener('DOMContentLoaded', function() {
const elements = [
    'background_img',
    'background_color',
    'background_overlay',
    'info_box',
    'info_img_section',
    'info_title',
    'info_subtitle',
    'info_description',
    'info_socials_cont'
];
function addOutlineHoverEffect(element, borderStyle) {
    element.addEventListener('mouseover', function() {
        element.style.outline = `10px ${borderStyle} rgb(60, 179, 113, 0.5)`;
        element.style.outlineOffset = '-10px';
    });

    element.addEventListener('mouseout', function() {
        element.style.outline = 'none';
    });
}
elements.forEach(id => {
    const element = document.getElementById(id);
    addOutlineHoverEffect(element, 'dashed');
});
});

// AUTO SCROLL TO SELECTED ITEM
document.addEventListener('DOMContentLoaded', function() {
    const panel = document.getElementById('site_designer_panel');
    const sectionConts = document.querySelectorAll('.sd_section_titles_cont');

    sectionConts.forEach(section => {
        section.addEventListener('click', function() {
            const offsetTop = this.offsetTop - panel.offsetTop;
            panel.scrollTo({ top: offsetTop, behavior: 'smooth' });
        });
    });
});






// BACKGROUND IMAGE URL OR COLOR
document.addEventListener('DOMContentLoaded', function() {
const backgroundUrlBtn = document.getElementById('background_url_btn');
const backgroundColorBtn = document.getElementById('background_color_btn');
const backgroundUrlCont = document.getElementById('background_url_cont');
const backgroundColorCont = document.getElementById('background_color_cont');
const backgroundImg = document.getElementById('background_img');
const backgroundClr = document.getElementById('background_color');

// Initial state: Hide background_color_cont and background_color by default
backgroundColorCont.style.display = 'none';
backgroundClr.style.display = 'none';

backgroundUrlBtn.addEventListener('click', function() {
// Show background_url_cont, hide background_color_cont and background_color
backgroundUrlCont.style.display = 'block';
backgroundColorCont.style.display = 'none';
backgroundClr.style.display = 'none';
backgroundImg.style.display = 'block';

// Update button styles
backgroundUrlBtn.style.color = 'var(--white)';
backgroundUrlBtn.style.backgroundColor = 'var(--black25)';
backgroundColorBtn.style.color = '';
backgroundColorBtn.style.backgroundColor = '';
});

backgroundColorBtn.addEventListener('click', function() {
// Show background_color_cont, hide background_url_cont and background_img
backgroundColorCont.style.display = 'block';
backgroundUrlCont.style.display = 'none';
backgroundImg.style.display = 'none';
backgroundClr.style.display = 'block';

// Update button styles
backgroundColorBtn.style.color = 'var(--white)';
backgroundColorBtn.style.backgroundColor = 'var(--black25)';
backgroundUrlBtn.style.color = '';
backgroundUrlBtn.style.backgroundColor = '';
});
});

// BACKGROUND IMAGE
document.addEventListener('DOMContentLoaded', function() {
const sdBackgroundImgInput = document.getElementById('sd_background_img');
const backgroundImg = document.getElementById('background_img');

sdBackgroundImgInput.addEventListener('input', function() {
const newImageUrl = sdBackgroundImgInput.value.trim();
backgroundImg.src = newImageUrl;
});
});

// BACKGROUNG COLOR
document.addEventListener('DOMContentLoaded', function() {
const backgroundColorInput = document.getElementById('background_color_input');
const backgroundClr = document.getElementById('background_color');

backgroundColorInput.addEventListener('input', function() {
const selectedColor = backgroundColorInput.value;
backgroundClr.style.backgroundColor = selectedColor;
});
});

// BACKGROUND OVERLAY COLOR + OPACITY
document.addEventListener('DOMContentLoaded', function() {
const backgroundOverlay = document.getElementById('background_overlay');
const backgroundColorInput = document.getElementById('sd_background_color');
const backgroundOpacityInput = document.getElementById('sd_background_opacity');

backgroundColorInput.addEventListener('input', updateBackground);
backgroundOpacityInput.addEventListener('input', updateBackground);

function updateBackground() {
const selectedColor = backgroundColorInput.value;
const opacityValue = backgroundOpacityInput.value / 100;
backgroundOverlay.style.backgroundColor = selectedColor;
backgroundOverlay.style.opacity = opacityValue;
}
});







//   INFORMATION CARD - POSITION
document.addEventListener('DOMContentLoaded', function() {
const leftButton = document.getElementById('info_card_position_left');
const centerButton = document.getElementById('info_card_position_center');
const rightButton = document.getElementById('info_card_position_right');
const themeBasic = document.getElementById('theme_basic');

leftButton.addEventListener('click', function() {
themeBasic.style.justifyContent = 'flex-start';
setButtonStyle(leftButton);
});

centerButton.addEventListener('click', function() {
themeBasic.style.justifyContent = 'center';
setButtonStyle(centerButton);
});

rightButton.addEventListener('click', function() {
themeBasic.style.justifyContent = 'flex-end';
setButtonStyle(rightButton);
});

function setButtonStyle(clickedButton) {
const buttons = [leftButton, centerButton, rightButton];
buttons.forEach(button => {
button.style.color = '';
button.style.backgroundColor = '';
});

clickedButton.style.color = 'var(--white)';
clickedButton.style.backgroundColor = 'var(--black25)';
}
});


// INFORMATION CARD - BORDER RADIUS
document.addEventListener('DOMContentLoaded', function() {
const smallButton = document.getElementById('background_borderR_selector_small');
const mediumButton = document.getElementById('background_borderR_selector_medium');
const largeButton = document.getElementById('background_borderR_selector_large');
const infoBox = document.getElementById('info_box');

smallButton.addEventListener('click', function() {
infoBox.style.borderRadius = 'var(--border_small)';
setButtonStyle(smallButton);
});

mediumButton.addEventListener('click', function() {
infoBox.style.borderRadius = 'var(--border_medium)';
setButtonStyle(mediumButton);
});

largeButton.addEventListener('click', function() {
infoBox.style.borderRadius = 'var(--border_large)';
setButtonStyle(largeButton);
});

function setButtonStyle(clickedButton) {
const buttons = [smallButton, mediumButton, largeButton];
buttons.forEach(button => {
button.style.color = '';
button.style.backgroundColor = '';
});

clickedButton.style.color = 'var(--white)';
clickedButton.style.backgroundColor = 'var(--black25)';
}
});

// INFORMATION CARD - BORDER STYLE
document.addEventListener('DOMContentLoaded', function() {
    const borderZeroButton = document.getElementById('info_card_borderZero');
    const borderSolidButton = document.getElementById('info_card_borderSolid');
    const borderDoubleButton = document.getElementById('info_card_borderDouble');
    const borderInsetButton = document.getElementById('info_card_borderInset');
    const borderOutsetButton = document.getElementById('info_card_borderOutset');
    const infoBox = document.getElementById('info_box');
    
    borderZeroButton.addEventListener('click', function() {
    infoBox.style.borderStyle = 'none';
    setButtonStyle(borderZeroButton);
    });
    
    borderSolidButton.addEventListener('click', function() {
    infoBox.style.borderStyle = 'solid';
    setButtonStyle(borderSolidButton);
    });
    
    borderDoubleButton.addEventListener('click', function() {
    infoBox.style.borderStyle = 'double';
    setButtonStyle(borderDoubleButton);
    });
    
    borderInsetButton.addEventListener('click', function() {
    infoBox.style.borderStyle = 'inset';
    setButtonStyle(borderInsetButton);
    });
    
    borderOutsetButton.addEventListener('click', function() {
    infoBox.style.borderStyle = 'outset';
    setButtonStyle(borderOutsetButton);
    });
    
    function setButtonStyle(clickedButton) {
    const buttons = [borderZeroButton, borderSolidButton, borderDoubleButton, borderInsetButton, borderOutsetButton];
    buttons.forEach(button => {
    button.style.color = '';
    button.style.backgroundColor = '';
    });
    
    clickedButton.style.color = 'var(--white)';
    clickedButton.style.backgroundColor = 'var(--black25)';
    }
    });
    
    // INFORMATION CARD - BORDER WIDTH
    document.addEventListener('DOMContentLoaded', function() {
    const borderSizeZeroButton = document.getElementById('info_card_borderSizeZero');
    const borderSizeSmallButton = document.getElementById('info_card_borderSizeSmall');
    const borderSizeMediumButton = document.getElementById('info_card_borderSizeMedium');
    const borderSizeLargeButton = document.getElementById('info_card_borderSizeLarge');
    const infoBox = document.getElementById('info_box');
    
    borderSizeZeroButton.addEventListener('click', function() {
    infoBox.style.borderWidth = '0px';
    setButtonStyle(borderSizeZeroButton);
    });
    
    borderSizeSmallButton.addEventListener('click', function() {
    infoBox.style.borderWidth = '5px';
    setButtonStyle(borderSizeSmallButton);
    });
    
    borderSizeMediumButton.addEventListener('click', function() {
    infoBox.style.borderWidth = '10px';
    setButtonStyle(borderSizeMediumButton);
    });
    
    borderSizeLargeButton.addEventListener('click', function() {
    infoBox.style.borderWidth = '12.5px';
    setButtonStyle(borderSizeLargeButton);
    });
    
    function setButtonStyle(clickedButton) {
    const buttons = [borderSizeZeroButton, borderSizeSmallButton, borderSizeMediumButton, borderSizeLargeButton];
    buttons.forEach(button => {
    button.style.color = '';
    button.style.backgroundColor = '';
    });
    
    clickedButton.style.color = 'var(--white)';
    clickedButton.style.backgroundColor = 'var(--black25)';
    }
    });
    
    // INFORMATION CARD - BORDER COLOR
    document.addEventListener('DOMContentLoaded', function() {
    const borderInput = document.getElementById('info_card_border_color');
    const infoBox = document.getElementById('info_box');
    
    borderInput.addEventListener('input', function(event) {
    infoBox.style.borderColor = event.target.value;
    });
    });

// INFORMATION CARD - BACKGROUND COLOR OR OPACITY
document.addEventListener('DOMContentLoaded', function() {
const carColorInput = document.getElementById('sd_car_color');
const backgroundOpacityInput = document.getElementById('sd_card_background_opacity');
const infoBox = document.getElementById('info_box');

carColorInput.addEventListener('input', updateBackground);
backgroundOpacityInput.addEventListener('input', updateBackground);

function updateBackground() {
const selectedColor = carColorInput.value;
const opacityValue = backgroundOpacityInput.value / 100;
const rgbaColor = hexToRGBA(selectedColor, opacityValue);
infoBox.style.backgroundColor = rgbaColor;
}

function hexToRGBA(hex, opacity) {
hex = hex.replace('#', '');
const r = parseInt(hex.substring(0, 2), 16);
const g = parseInt(hex.substring(2, 4), 16);
const b = parseInt(hex.substring(4, 6), 16);
return `rgba(${r},${g},${b},${opacity})`;
}
});

// INFORMATION CARD - BACKGROUND BLUR
document.addEventListener('DOMContentLoaded', function() {
const noneButton = document.getElementById('background_blur_none');
const smallButton = document.getElementById('background_blur_small');
const mediumButton = document.getElementById('background_blur_medium');
const largeButton = document.getElementById('background_blur_large');
const infoBox = document.getElementById('info_box');

noneButton.addEventListener('click', function() {
infoBox.style.backdropFilter = 'blur(0px)';
setButtonStyle(noneButton);
});

smallButton.addEventListener('click', function() {
infoBox.style.backdropFilter = 'blur(var(--blur_small))';
setButtonStyle(smallButton);
});

mediumButton.addEventListener('click', function() {
infoBox.style.backdropFilter = 'blur(var(--blur_medium))';
setButtonStyle(mediumButton);
});

largeButton.addEventListener('click', function() {
infoBox.style.backdropFilter = 'blur(var(--blur_large))';
setButtonStyle(largeButton);
});

function setButtonStyle(clickedButton) {
const buttons = [noneButton, smallButton, mediumButton, largeButton];
buttons.forEach(button => {
button.style.color = '';
button.style.backgroundColor = '';
});

clickedButton.style.color = 'var(--white)';
clickedButton.style.backgroundColor = 'var(--black25)';
}
});





// INFORMATIONN CARD - IMAGE URL
document.addEventListener('DOMContentLoaded', function() {
const mainImgInput = document.getElementById('sd_main_img');
const infoProfileImg = document.getElementById('info_profile_img');

mainImgInput.addEventListener('input', function() {
const enteredURL = mainImgInput.value;
infoProfileImg.src = enteredURL;
});
});

//   INFORMATION CARD - IMAGE POSITION
document.addEventListener('DOMContentLoaded', function() {
    const leftButton = document.getElementById('main_img_position_left');
    const centerButton = document.getElementById('main_img_position_center');
    const rightButton = document.getElementById('main_img_position_right');
    const info_img_section = document.getElementById('info_img_section');
    
    leftButton.addEventListener('click', function() {
    info_img_section.style.justifyContent = 'flex-start';
    setButtonStyle(leftButton);
    });
    
    centerButton.addEventListener('click', function() {
    info_img_section.style.justifyContent = 'center';
    setButtonStyle(centerButton);
    });
    
    rightButton.addEventListener('click', function() {
    info_img_section.style.justifyContent = 'flex-end';
    setButtonStyle(rightButton);
    });
    
    function setButtonStyle(clickedButton) {
    const buttons = [leftButton, centerButton, rightButton];
    buttons.forEach(button => {
    button.style.color = '';
    button.style.backgroundColor = '';
    });
    
    clickedButton.style.color = 'var(--white)';
    clickedButton.style.backgroundColor = 'var(--black25)';
    }
    });

// INFORMATION CARD - IMAGE SHAPE
document.addEventListener('DOMContentLoaded', function() {
const sq1Button = document.getElementById('main_img_shape_sq1');
const sq2Button = document.getElementById('main_img_shape_sq2');
const sq3Button = document.getElementById('main_img_shape_sq3');
const sq4Button = document.getElementById('main_img_shape_sq4');
const circleButton = document.getElementById('main_img_shape_circle');
const infoImgCont = document.getElementById('info_img_cont');

sq1Button.addEventListener('click', function() {
infoImgCont.style.borderRadius = '0px';
setButtonStyle(sq1Button);
});

sq2Button.addEventListener('click', function() {
infoImgCont.style.borderRadius = 'var(--border_small)';
setButtonStyle(sq2Button);
});

sq3Button.addEventListener('click', function() {
infoImgCont.style.borderRadius = 'var(--border_medium)';
setButtonStyle(sq3Button);
});

sq4Button.addEventListener('click', function() {
infoImgCont.style.borderRadius = 'var(--border_large)';
setButtonStyle(sq4Button);
});

circleButton.addEventListener('click', function() {
infoImgCont.style.borderRadius = 'var(--border_circle)';
setButtonStyle(circleButton);
});

function setButtonStyle(clickedButton) {
const buttons = [sq1Button, sq2Button, sq3Button, sq4Button, circleButton];
buttons.forEach(button => {
button.style.color = '';
button.style.backgroundColor = '';
});

clickedButton.style.color = 'var(--white)';
clickedButton.style.backgroundColor = 'var(--black25)';
}
});


// INFORMATION CARD - IMAGE BORDER STYLE
document.addEventListener('DOMContentLoaded', function() {
const borderZeroButton = document.getElementById('main_img_borderZero');
const borderSolidButton = document.getElementById('main_img_borderSolid');
const borderDoubleButton = document.getElementById('main_img_borderDouble');
const borderInsetButton = document.getElementById('main_img_borderInset');
const borderOutsetButton = document.getElementById('main_img_borderOutset');
const infoImgCont = document.getElementById('info_img_cont');

borderZeroButton.addEventListener('click', function() {
infoImgCont.style.borderStyle = 'none';
setButtonStyle(borderZeroButton);
});

borderSolidButton.addEventListener('click', function() {
infoImgCont.style.borderStyle = 'solid';
setButtonStyle(borderSolidButton);
});

borderDoubleButton.addEventListener('click', function() {
infoImgCont.style.borderStyle = 'double';
setButtonStyle(borderDoubleButton);
});

borderInsetButton.addEventListener('click', function() {
infoImgCont.style.borderStyle = 'inset';
setButtonStyle(borderInsetButton);
});

borderOutsetButton.addEventListener('click', function() {
infoImgCont.style.borderStyle = 'outset';
setButtonStyle(borderOutsetButton);
});

function setButtonStyle(clickedButton) {
const buttons = [borderZeroButton, borderSolidButton, borderDoubleButton, borderInsetButton, borderOutsetButton];
buttons.forEach(button => {
button.style.color = '';
button.style.backgroundColor = '';
});

clickedButton.style.color = 'var(--white)';
clickedButton.style.backgroundColor = 'var(--black25)';
}
});

// INFORMATION CARD - IMAGE BORDER WIDTH
document.addEventListener('DOMContentLoaded', function() {
const borderSizeZeroButton = document.getElementById('main_img_borderSizeZero');
const borderSizeSmallButton = document.getElementById('main_img_borderSizeSmall');
const borderSizeMediumButton = document.getElementById('main_img_borderSizeMedium');
const borderSizeLargeButton = document.getElementById('main_img_borderSizeLarge');
const infoImgCont = document.getElementById('info_img_cont');

borderSizeZeroButton.addEventListener('click', function() {
infoImgCont.style.borderWidth = '0px';
setButtonStyle(borderSizeZeroButton);
});

borderSizeSmallButton.addEventListener('click', function() {
infoImgCont.style.borderWidth = '5px';
setButtonStyle(borderSizeSmallButton);
});

borderSizeMediumButton.addEventListener('click', function() {
infoImgCont.style.borderWidth = '10px';
setButtonStyle(borderSizeMediumButton);
});

borderSizeLargeButton.addEventListener('click', function() {
infoImgCont.style.borderWidth = '12.5px';
setButtonStyle(borderSizeLargeButton);
});

function setButtonStyle(clickedButton) {
const buttons = [borderSizeZeroButton, borderSizeSmallButton, borderSizeMediumButton, borderSizeLargeButton];
buttons.forEach(button => {
button.style.color = '';
button.style.backgroundColor = '';
});

clickedButton.style.color = 'var(--white)';
clickedButton.style.backgroundColor = 'var(--black25)';
}
});

// INFORMATION CARD - IMAGE BORDER COLOR
document.addEventListener('DOMContentLoaded', function() {
const borderInput = document.getElementById('main_img_border_color');
const infoImgCont = document.getElementById('info_img_cont');

borderInput.addEventListener('input', function(event) {
infoImgCont.style.borderColor = event.target.value;
});
});






// INFORMATION CARD - TEXT TITLE
document.addEventListener('DOMContentLoaded', function() {
const mainTitleInput = document.getElementById('sd_main_title');
const infoTitle = document.getElementById('info_title');

mainTitleInput.addEventListener('input', function(event) {
infoTitle.textContent = event.target.value;
});
});

// INFORMATION CARD - TEXT TITLE - STYLE
document.addEventListener('DOMContentLoaded', function() {
const normalButton = document.getElementById('sd_title_style_normal');
const italicButton = document.getElementById('sd_title_style_italic');
const infoTitle = document.getElementById('info_title');

normalButton.addEventListener('click', function() {
infoTitle.style.fontStyle = 'normal';
normalButton.style.color = 'var(--white)';
normalButton.style.backgroundColor = 'var(--black25)';

italicButton.style.color = '';
italicButton.style.backgroundColor = '';
infoTitle.style.fontStyle = 'normal';
});

italicButton.addEventListener('click', function() {
infoTitle.style.fontStyle = 'italic';
italicButton.style.color = 'var(--white)';
italicButton.style.backgroundColor = 'var(--black25)';

normalButton.style.color = '';
normalButton.style.backgroundColor = '';
infoTitle.style.fontStyle = 'italic';
});
});

// INFORMATION CARD - TEXT TITLE - FONT WEIGHT
document.addEventListener('DOMContentLoaded', function() {
const thinButton = document.getElementById('sd_title_weight_thin');
const regularButton = document.getElementById('sd_title_weight_regular');
const boldButton = document.getElementById('sd_title_weight_bold');
const thickButton = document.getElementById('sd_title_weight_thick');
const infoTitle = document.getElementById('info_title');

thinButton.addEventListener('click', function() {
infoTitle.style.fontWeight = '300';
updateButtonStyle(thinButton);
});

regularButton.addEventListener('click', function() {
infoTitle.style.fontWeight = '500';
updateButtonStyle(regularButton);
});

boldButton.addEventListener('click', function() {
infoTitle.style.fontWeight = '700';
updateButtonStyle(boldButton);
});

thickButton.addEventListener('click', function() {
infoTitle.style.fontWeight = '900';
updateButtonStyle(thickButton);
});

function updateButtonStyle(clickedButton) {
const buttons = [thinButton, regularButton, boldButton, thickButton];
buttons.forEach(button => {
button.style.color = '';
button.style.backgroundColor = '';
});
clickedButton.style.color = 'var(--white)';
clickedButton.style.backgroundColor = 'var(--black25)';
}
});


// INFORMATION CARD - TEXT TITLE - ALIGN
document.addEventListener('DOMContentLoaded', function() {
const leftButton = document.getElementById('sd_title_align_left');
const centerButton = document.getElementById('sd_title_align_center');
const rightButton = document.getElementById('sd_title_align_right');
const infoTitle = document.getElementById('info_title');

leftButton.addEventListener('click', function() {
infoTitle.style.textAlign = 'left';
updateButtonStyle(leftButton);
});

centerButton.addEventListener('click', function() {
infoTitle.style.textAlign = 'center';
updateButtonStyle(centerButton);
});

rightButton.addEventListener('click', function() {
infoTitle.style.textAlign = 'right';
updateButtonStyle(rightButton);
});

function updateButtonStyle(clickedButton) {
const buttons = [leftButton, centerButton, rightButton];
buttons.forEach(button => {
button.style.color = '';
button.style.backgroundColor = '';
});
clickedButton.style.color = 'var(--white)';
clickedButton.style.backgroundColor = 'var(--black25)';
}
});


//   INFORMATION CARD - TEXT TITLE - TRANSFORM
document.addEventListener('DOMContentLoaded', function() {
const notransformButton = document.getElementById('sd_title_transform_none');
const capitalizeButton = document.getElementById('sd_title_transform_capitalize');
const lowerButton = document.getElementById('sd_title_transform_lower');
const upperButton = document.getElementById('sd_title_transform_upper');
const infoTitle = document.getElementById('info_title');

notransformButton.addEventListener('click', function() {
infoTitle.style.textTransform = 'none';
updateButtonStyle(capitalizeButton);
});

capitalizeButton.addEventListener('click', function() {
infoTitle.style.textTransform = 'capitalize';
updateButtonStyle(capitalizeButton);
});

lowerButton.addEventListener('click', function() {
infoTitle.style.textTransform = 'lowercase';
updateButtonStyle(lowerButton);
});

upperButton.addEventListener('click', function() {
infoTitle.style.textTransform = 'uppercase';
updateButtonStyle(upperButton);
});

function updateButtonStyle(clickedButton) {
const buttons = [capitalizeButton, lowerButton, upperButton];
buttons.forEach(button => {
button.style.color = '';
button.style.backgroundColor = '';
});
clickedButton.style.color = 'var(--white)';
clickedButton.style.backgroundColor = 'var(--black25)';
}
});


// INFORMATION CARD - TEXT TITLE - TEXT DECORATION
document.addEventListener('DOMContentLoaded', function() {
const noneButton = document.getElementById('sd_title_decorate_none');
const overlineButton = document.getElementById('sd_title_decorate_over');
const strikeButton = document.getElementById('sd_title_decorate_strike');
const underButton = document.getElementById('sd_title_decorate_under');
const bothButton = document.getElementById('sd_title_decorate_both');
const infoTitle = document.getElementById('info_title');

noneButton.addEventListener('click', function() {
setDecoration('none');
updateButtonStyle(noneButton);
});

overlineButton.addEventListener('click', function() {
setDecoration('overline');
updateButtonStyle(overlineButton);
});

strikeButton.addEventListener('click', function() {
setDecoration('line-through');
updateButtonStyle(strikeButton);
});

underButton.addEventListener('click', function() {
setDecoration('underline');
updateButtonStyle(underButton);
});

bothButton.addEventListener('click', function() {
setDecoration('overline underline');
updateButtonStyle(bothButton);
});

function setDecoration(decorationValue) {
infoTitle.style.textDecoration = decorationValue;
}

function updateButtonStyle(clickedButton) {
const buttons = [noneButton, overlineButton, strikeButton, underButton, bothButton];
buttons.forEach(button => {
button.style.color = '';
button.style.backgroundColor = '';
});
clickedButton.style.color = 'var(--white)';
clickedButton.style.backgroundColor = 'var(--black25)';
}
});


// INFORMATION CARD - TEXT TITLE COLOR
document.addEventListener('DOMContentLoaded', function() {
const colorInput = document.getElementById('title_color');
const infoTitle = document.getElementById('info_title');

colorInput.addEventListener('input', function(event) {
const color = event.target.value;
infoTitle.style.color = color;
});
});






// INFORMATION CARD - TEXT SUBTITLE
document.addEventListener('DOMContentLoaded', function() {
const mainsubtitleInput = document.getElementById('sd_main_subtitle');
const infosubtitle = document.getElementById('info_subtitle');

mainsubtitleInput.addEventListener('input', function(event) {
infosubtitle.textContent = event.target.value;
});
});

// INFORMATION CARD - TEXT SUBTITLE - STYLE
document.addEventListener('DOMContentLoaded', function() {
const normalButton = document.getElementById('sd_subtitle_style_normal');
const italicButton = document.getElementById('sd_subtitle_style_italic');
const infosubtitle = document.getElementById('info_subtitle');

normalButton.addEventListener('click', function() {
infosubtitle.style.fontStyle = 'normal';
normalButton.style.color = 'var(--white)';
normalButton.style.backgroundColor = 'var(--black25)';

italicButton.style.color = '';
italicButton.style.backgroundColor = '';
infosubtitle.style.fontStyle = 'normal';
});

italicButton.addEventListener('click', function() {
infosubtitle.style.fontStyle = 'italic';
italicButton.style.color = 'var(--white)';
italicButton.style.backgroundColor = 'var(--black25)';

normalButton.style.color = '';
normalButton.style.backgroundColor = '';
infosubtitle.style.fontStyle = 'italic';
});
});

// INFORMATION CARD - TEXT SUBTITLE - FONT WEIGHT
document.addEventListener('DOMContentLoaded', function() {
const thinButton = document.getElementById('sd_subtitle_weight_thin');
const regularButton = document.getElementById('sd_subtitle_weight_regular');
const boldButton = document.getElementById('sd_subtitle_weight_bold');
const thickButton = document.getElementById('sd_subtitle_weight_thick');
const infosubtitle = document.getElementById('info_subtitle');

thinButton.addEventListener('click', function() {
infosubtitle.style.fontWeight = '300';
updateButtonStyle(thinButton);
});

regularButton.addEventListener('click', function() {
infosubtitle.style.fontWeight = '500';
updateButtonStyle(regularButton);
});

boldButton.addEventListener('click', function() {
infosubtitle.style.fontWeight = '700';
updateButtonStyle(boldButton);
});

thickButton.addEventListener('click', function() {
infosubtitle.style.fontWeight = '900';
updateButtonStyle(thickButton);
});

function updateButtonStyle(clickedButton) {
const buttons = [thinButton, regularButton, boldButton, thickButton];
buttons.forEach(button => {
button.style.color = '';
button.style.backgroundColor = '';
});
clickedButton.style.color = 'var(--white)';
clickedButton.style.backgroundColor = 'var(--black25)';
}
});


// INFORMATION CARD - TEXT SUBTITLE - ALIGN
document.addEventListener('DOMContentLoaded', function() {
const leftButton = document.getElementById('sd_subtitle_align_left');
const centerButton = document.getElementById('sd_subtitle_align_center');
const rightButton = document.getElementById('sd_subtitle_align_right');
const infosubtitle = document.getElementById('info_subtitle');

leftButton.addEventListener('click', function() {
infosubtitle.style.textAlign = 'left';
updateButtonStyle(leftButton);
});

centerButton.addEventListener('click', function() {
infosubtitle.style.textAlign = 'center';
updateButtonStyle(centerButton);
});

rightButton.addEventListener('click', function() {
infosubtitle.style.textAlign = 'right';
updateButtonStyle(rightButton);
});

function updateButtonStyle(clickedButton) {
const buttons = [leftButton, centerButton, rightButton];
buttons.forEach(button => {
button.style.color = '';
button.style.backgroundColor = '';
});
clickedButton.style.color = 'var(--white)';
clickedButton.style.backgroundColor = 'var(--black25)';
}
});


//   INFORMATION CARD - TEXT SUBTITLE - TRANSFORM
document.addEventListener('DOMContentLoaded', function() {
const notransformButton = document.getElementById('sd_subtitle_transform_none');
const capitalizeButton = document.getElementById('sd_subtitle_transform_capitalize');
const lowerButton = document.getElementById('sd_subtitle_transform_lower');
const upperButton = document.getElementById('sd_subtitle_transform_upper');
const infosubtitle = document.getElementById('info_subtitle');

notransformButton.addEventListener('click', function() {
infosubtitle.style.textTransform = 'none';
updateButtonStyle(notransformButton);
});

capitalizeButton.addEventListener('click', function() {
infosubtitle.style.textTransform = 'capitalize';
updateButtonStyle(capitalizeButton);
});

lowerButton.addEventListener('click', function() {
infosubtitle.style.textTransform = 'lowercase';
updateButtonStyle(lowerButton);
});

upperButton.addEventListener('click', function() {
infosubtitle.style.textTransform = 'uppercase';
updateButtonStyle(upperButton);
});

function updateButtonStyle(clickedButton) {
const buttons = [notransformButton, capitalizeButton, lowerButton, upperButton];
buttons.forEach(button => {
button.style.color = '';
button.style.backgroundColor = '';
});
clickedButton.style.color = 'var(--white)';
clickedButton.style.backgroundColor = 'var(--black25)';
}
});


// INFORMATION CARD - TEXT SUBTITLE - TEXT DECORATION
document.addEventListener('DOMContentLoaded', function() {
const noneButton = document.getElementById('sd_subtitle_decorate_none');
const overlineButton = document.getElementById('sd_subtitle_decorate_over');
const strikeButton = document.getElementById('sd_subtitle_decorate_strike');
const underButton = document.getElementById('sd_subtitle_decorate_under');
const bothButton = document.getElementById('sd_subtitle_decorate_both');
const infosubtitle = document.getElementById('info_subtitle');

noneButton.addEventListener('click', function() {
setDecoration('none');
updateButtonStyle(noneButton);
});

overlineButton.addEventListener('click', function() {
setDecoration('overline');
updateButtonStyle(overlineButton);
});

strikeButton.addEventListener('click', function() {
setDecoration('line-through');
updateButtonStyle(strikeButton);
});

underButton.addEventListener('click', function() {
setDecoration('underline');
updateButtonStyle(underButton);
});

bothButton.addEventListener('click', function() {
setDecoration('overline underline');
updateButtonStyle(bothButton);
});

function setDecoration(decorationValue) {
infosubtitle.style.textDecoration = decorationValue;
}

function updateButtonStyle(clickedButton) {
const buttons = [noneButton, overlineButton, strikeButton, underButton, bothButton];
buttons.forEach(button => {
button.style.color = '';
button.style.backgroundColor = '';
});
clickedButton.style.color = 'var(--white)';
clickedButton.style.backgroundColor = 'var(--black25)';
}
});


// INFORMATION CARD - TEXT SUBTITLE COLOR
document.addEventListener('DOMContentLoaded', function() {
const colorInput = document.getElementById('sd_subtitle_color');
const infosubtitle = document.getElementById('info_subtitle');

colorInput.addEventListener('input', function(event) {
const color = event.target.value;
infosubtitle.style.color = color;
});
});





// INFORMATION CARD - TEXT DESCRIPTION
document.addEventListener('DOMContentLoaded', function() {
const maindescriptionInput = document.getElementById('sd_main_description');
const infodescription = document.getElementById('info_description');

maindescriptionInput.addEventListener('input', function(event) {
    infodescription.textContent = event.target.value;
});
});

// INFORMATION CARD - TEXT DESCRIPTION - STYLE
document.addEventListener('DOMContentLoaded', function() {
const normalButton = document.getElementById('sd_description_style_normal');
const italicButton = document.getElementById('sd_description_style_italic');
const infodescription = document.getElementById('info_description');

normalButton.addEventListener('click', function() {
    infodescription.style.fontStyle = 'normal';
    normalButton.style.color = 'var(--white)';
    normalButton.style.backgroundColor = 'var(--black25)';
    
    italicButton.style.color = '';
    italicButton.style.backgroundColor = '';
    infodescription.style.fontStyle = 'normal';
});

italicButton.addEventListener('click', function() {
    infodescription.style.fontStyle = 'italic';
    italicButton.style.color = 'var(--white)';
    italicButton.style.backgroundColor = 'var(--black25)';
    
    normalButton.style.color = '';
    normalButton.style.backgroundColor = '';
    infodescription.style.fontStyle = 'italic';
});
});

// INFORMATION CARD - TEXT DESCRIPTION - FONT WEIGHT
document.addEventListener('DOMContentLoaded', function() {
const thinButton = document.getElementById('sd_description_weight_thin');
const regularButton = document.getElementById('sd_description_weight_regular');
const boldButton = document.getElementById('sd_description_weight_bold');
const thickButton = document.getElementById('sd_description_weight_thick');
const infodescription = document.getElementById('info_description');

thinButton.addEventListener('click', function() {
    infodescription.style.fontWeight = '300';
    updateButtonStyle(thinButton);
});

regularButton.addEventListener('click', function() {
    infodescription.style.fontWeight = '500';
    updateButtonStyle(regularButton);
});

boldButton.addEventListener('click', function() {
    infodescription.style.fontWeight = '700';
    updateButtonStyle(boldButton);
});

thickButton.addEventListener('click', function() {
    infodescription.style.fontWeight = '900';
    updateButtonStyle(thickButton);
});

function updateButtonStyle(clickedButton) {
    const buttons = [thinButton, regularButton, boldButton, thickButton];
    buttons.forEach(button => {
    button.style.color = '';
    button.style.backgroundColor = '';
    });
    clickedButton.style.color = 'var(--white)';
    clickedButton.style.backgroundColor = 'var(--black25)';
}
});


// INFORMATION CARD - TEXT DESCRIPTION - ALIGN
document.addEventListener('DOMContentLoaded', function() {
const leftButton = document.getElementById('sd_description_align_left');
const centerButton = document.getElementById('sd_description_align_center');
const rightButton = document.getElementById('sd_description_align_right');
const infodescription = document.getElementById('info_description');

leftButton.addEventListener('click', function() {
    infodescription.style.textAlign = 'left';
    updateButtonStyle(leftButton);
});

centerButton.addEventListener('click', function() {
    infodescription.style.textAlign = 'center';
    updateButtonStyle(centerButton);
});

rightButton.addEventListener('click', function() {
    infodescription.style.textAlign = 'right';
    updateButtonStyle(rightButton);
});

function updateButtonStyle(clickedButton) {
    const buttons = [leftButton, centerButton, rightButton];
    buttons.forEach(button => {
    button.style.color = '';
    button.style.backgroundColor = '';
    });
    clickedButton.style.color = 'var(--white)';
    clickedButton.style.backgroundColor = 'var(--black25)';
}
});


//   INFORMATION CARD - TEXT DESCRIPTION - TRANSFORM
document.addEventListener('DOMContentLoaded', function() {
const notransformButton = document.getElementById('sd_description_transform_none');
const capitalizeButton = document.getElementById('sd_description_transform_capitalize');
const lowerButton = document.getElementById('sd_description_transform_lower');
const upperButton = document.getElementById('sd_description_transform_upper');
const infodescription = document.getElementById('info_description');

notransformButton.addEventListener('click', function() {
    infodescription.style.textTransform = 'none';
    updateButtonStyle(notransformButton);
});

capitalizeButton.addEventListener('click', function() {
    infodescription.style.textTransform = 'capitalize';
    updateButtonStyle(capitalizeButton);
});

lowerButton.addEventListener('click', function() {
    infodescription.style.textTransform = 'lowercase';
    updateButtonStyle(lowerButton);
});

upperButton.addEventListener('click', function() {
    infodescription.style.textTransform = 'uppercase';
    updateButtonStyle(upperButton);
});

function updateButtonStyle(clickedButton) {
    const buttons = [notransformButton, capitalizeButton, lowerButton, upperButton];
    buttons.forEach(button => {
    button.style.color = '';
    button.style.backgroundColor = '';
    });
    clickedButton.style.color = 'var(--white)';
    clickedButton.style.backgroundColor = 'var(--black25)';
}
});


// INFORMATION CARD - TEXT DESCRIPTION - TEXT DECORATION
document.addEventListener('DOMContentLoaded', function() {
const noneButton = document.getElementById('sd_description_decorate_none');
const overlineButton = document.getElementById('sd_description_decorate_over');
const strikeButton = document.getElementById('sd_description_decorate_strike');
const underButton = document.getElementById('sd_description_decorate_under');
const bothButton = document.getElementById('sd_description_decorate_both');
const infodescription = document.getElementById('info_description');

noneButton.addEventListener('click', function() {
    setDecoration('none');
    updateButtonStyle(noneButton);
    });

overlineButton.addEventListener('click', function() {
    setDecoration('overline');
    updateButtonStyle(overlineButton);
});

strikeButton.addEventListener('click', function() {
    setDecoration('line-through');
    updateButtonStyle(strikeButton);
});

underButton.addEventListener('click', function() {
    setDecoration('underline');
    updateButtonStyle(underButton);
});

bothButton.addEventListener('click', function() {
    setDecoration('overline underline');
    updateButtonStyle(bothButton);
});

function setDecoration(decorationValue) {
    infodescription.style.textDecoration = decorationValue;
}

function updateButtonStyle(clickedButton) {
    const buttons = [noneButton, overlineButton, strikeButton, underButton, bothButton];
    buttons.forEach(button => {
    button.style.color = '';
    button.style.backgroundColor = '';
    });
    clickedButton.style.color = 'var(--white)';
    clickedButton.style.backgroundColor = 'var(--black25)';
}
});


// INFORMATION CARD - TEXT DESCRIPTION COLOR
document.addEventListener('DOMContentLoaded', function() {
const colorInput = document.getElementById('sd_description_color');
const infodescription = document.getElementById('info_description');

colorInput.addEventListener('input', function(event) {
    const color = event.target.value;
    infodescription.style.color = color;
});
});





// INFORMATION CARD - LINK ICONS 
document.addEventListener("DOMContentLoaded", function() {
    const selectors = ["sd_icon_selector1", "sd_icon_selector2", "sd_icon_selector3", "sd_icon_selector4"];
    const icons = ["social_icon1", "social_icon2", "social_icon3", "social_icon4"];

    selectors.forEach((selector, index) => {
        const sdIconSelector = document.getElementById(selector);
        const socialIcon = document.getElementById(icons[index]);

        sdIconSelector.addEventListener("change", function() {
            const selectedValue = sdIconSelector.value;
            const iconClass = selectedValue !== "0" ? `fa-brands fa-${selectedValue}` : "";

            if (selectedValue === "envelope") {
                socialIcon.className = "fa-regular fa-envelope social_icons";
            } else {
                socialIcon.className = `fa-brands ${iconClass} social_icons`;
            }
        });
    });
});

// INFORTION CARD - LINK ICONS - URL
document.addEventListener("DOMContentLoaded", function() {
    const urlInputs = ["sd_icon_url1", "sd_icon_url2", "sd_icon_url3", "sd_icon_url4"];
    const iconLinks = ["icon_url1", "icon_url2", "icon_url3", "icon_url4"];

    urlInputs.forEach((inputId, index) => {
        const sdIconUrl = document.getElementById(inputId);
        const iconUrl = document.getElementById(iconLinks[index]);

        sdIconUrl.addEventListener("input", function() {
            iconUrl.setAttribute("href", sdIconUrl.value);
        });
    });
});

// INFORTION CARD - LINK ICONS - ICON
document.addEventListener("DOMContentLoaded", function() {
    const sdIconColor = document.getElementById("sd_icon_color");
    const socialIcons = document.querySelectorAll(".social_icons");

    sdIconColor.addEventListener("input", function() {
        socialIcons.forEach(icon => {
            icon.style.color = sdIconColor.value;
        });
    });
});

// INFORMATION CARD - LINK ICONS - BACKGROUND VISIBILITY
document.addEventListener("DOMContentLoaded", function() {
    const noneButton = document.getElementById("icons_background_none");
    const visibleButton = document.getElementById("icons_background_visible");
    const socialIconConts = document.querySelectorAll(".social_icon_cont");
    const visibilityOpt = document.getElementById("icons_background_visibility_opt");

    noneButton.addEventListener("click", function() {
        socialIconConts.forEach(function(socialIconCont) {
            socialIconCont.style.backgroundColor = "transparent";
        });
        visibilityOpt.style.display = "none";
        noneButton.style.color = "var(--white)";
        noneButton.style.backgroundColor = "var(--black25)";
        visibleButton.style.color = ""; 
        visibleButton.style.backgroundColor = "";
        visibleButton.classList.remove("active");
        noneButton.classList.add("active");
    });

    visibleButton.addEventListener("click", function() {
        socialIconConts.forEach(function(socialIconCont) {
            socialIconCont.style.backgroundColor = "var(--white25)";
        });
        visibilityOpt.style.display = "block";
        visibleButton.style.color = "var(--white)";
        visibleButton.style.backgroundColor = "var(--black25)";
        noneButton.style.color = ""; 
        noneButton.style.backgroundColor = ""; 
        noneButton.classList.remove("active");
        visibleButton.classList.add("active");
    });
});


// INFORMATION CARD - LINK ICONS - BACKGROUND COLOR
document.addEventListener("DOMContentLoaded", function() {
    const backgroundColorInput = document.getElementById("sd_icon_background_color");
    const socialIconConts = document.querySelectorAll(".social_icon_cont");

    backgroundColorInput.addEventListener("input", function() {
        const color = backgroundColorInput.value;
        socialIconConts.forEach(function(socialIconCont) {
            socialIconCont.style.backgroundColor = color;
        });
    });
});

// INFORMATION CARD - LINK ICONS - BACKGROUND SHAPE
document.addEventListener("DOMContentLoaded", function() {
    const selectors = ["icons_background_square", "icons_background_sq2", "icons_background_sq3", "icons_background_sq4", "icons_background_circle"];
    const socialIconConts = document.querySelectorAll(".social_icon_cont");

    selectors.forEach(selectorId => {
        const button = document.getElementById(selectorId);
        button.addEventListener("click", function() {
            selectors.forEach(id => {
                const otherButton = document.getElementById(id);
                if (id === selectorId) {
                    otherButton.style.color = "var(--white)";
                    otherButton.style.backgroundColor = "var(--black25)";
                } else {
                    otherButton.style.color = "";
                    otherButton.style.backgroundColor = "";
                }
            });

            socialIconConts.forEach(socialIconCont => {
                socialIconCont.style.borderRadius = ""; // Reset all styles

                switch (selectorId) {
                    case "icons_background_square":
                        socialIconCont.style.borderRadius = "0px";
                        break;
                    case "icons_background_sq2":
                        socialIconCont.style.borderRadius = "var(--border_small)";
                        break;
                    case "icons_background_sq3":
                        socialIconCont.style.borderRadius = "var(--border_medium)";
                        break;
                    case "icons_background_sq4":
                        socialIconCont.style.borderRadius = "var(--border_large)";
                        break;
                    case "icons_background_circle":
                        socialIconCont.style.borderRadius = "var(--border_circle)";
                        break;
                    default:
                        break;
                }
            });
        });
    });
});



// INFORMATION CARD - LINK ICONS - BORDER STYLE + COLOR + WIDTH
document.addEventListener("DOMContentLoaded", function() {
    const styleSelectors = ["icons_borderNone", "icons_borderSolid", "icons_borderDouble", "icons_borderInset", "icons_borderOutset"];
    const widthSelectors = ["icons_borderWidthSmall", "icons_borderWidthMedium", "icons_borderWidthLarge"];
    const socialIconConts = document.querySelectorAll(".social_icon_cont");
    const borderOpt = document.getElementById("icons_border_opt");
    const borderColorInput = document.getElementById("sd_icon_border_color");

    styleSelectors.forEach(selectorId => {
        const button = document.getElementById(selectorId);
        if (button) {
            button.addEventListener("click", function() {
                styleSelectors.forEach(id => {
                    const otherButton = document.getElementById(id);
                    if (id === selectorId) {
                        otherButton.style.color = "var(--white)";
                        otherButton.style.backgroundColor = "var(--black25)";
                    } else {
                        otherButton.style.color = "";
                        otherButton.style.backgroundColor = "";
                    }
                });

                socialIconConts.forEach(socialIconCont => {
                    switch (selectorId) {
                        case "icons_borderNone":
                            socialIconCont.style.outlineStyle = "none";
                            borderOpt.style.display = "none";
                            break;
                        case "icons_borderSolid":
                            socialIconCont.style.outlineStyle = "solid";
                            borderOpt.style.display = "block";
                            break;
                        case "icons_borderDouble":
                            socialIconCont.style.outlineStyle = "double";
                            borderOpt.style.display = "block";
                            break;
                        case "icons_borderInset":
                            socialIconCont.style.outlineStyle = "inset";
                            borderOpt.style.display = "block";
                            break;
                        case "icons_borderOutset":
                            socialIconCont.style.outlineStyle = "outset";
                            borderOpt.style.display = "block";
                            break;
                        default:
                            break;
                    }
                });
            });
        }
    });

    widthSelectors.forEach(selectorId => {
        const button = document.getElementById(selectorId);
        if (button) {
            button.addEventListener("click", function() {
                widthSelectors.forEach(id => {
                    const otherButton = document.getElementById(id);
                    if (id === selectorId) {
                        otherButton.style.color = "var(--white)";
                        otherButton.style.backgroundColor = "var(--black25)";
                    } else {
                        otherButton.style.color = "";
                        otherButton.style.backgroundColor = "";
                    }
                });

                socialIconConts.forEach(socialIconCont => {
                    switch (selectorId) {
                        case "icons_borderWidthSmall":
                            socialIconCont.style.outlineWidth = "4px";
                            socialIconCont.style.outlineOffset = "-4px";
                            break;
                        case "icons_borderWidthMedium":
                            socialIconCont.style.outlineWidth = "8px";
                            socialIconCont.style.outlineOffset = "-8px";
                            break;
                        case "icons_borderWidthLarge":
                            socialIconCont.style.outlineWidth = "12px";
                            socialIconCont.style.outlineOffset = "-px"; // Please provide a value for large
                            break;
                        default:
                            break;
                    }
                });
            });
        }
    });

    if (borderColorInput) {
        borderColorInput.addEventListener("input", function() {
            const selectedColor = borderColorInput.value;
            socialIconConts.forEach(socialIconCont => {
                socialIconCont.style.outlineColor = selectedColor;
            });
        });
    }
});

















