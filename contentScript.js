// make the announcements and agenda always
const panelRight = document.querySelector('.panel_right');

if (panelRight) {
    const announcements = panelRight.querySelector('.panel_title:nth-child(1)');
    // first panel title --> Anakoinwseis
    if (announcements) {
        announcements.classList.add('active');

        const announcementsContent = document.querySelector('.panel_content:nth-child(2)');

        // content panel gia tis anakoinwseis
        if (announcementsContent) {
            announcementsContent.style.display = 'block';
            
        }
    }


    const agendaa = panelRight.querySelector('.panel_title:nth-child(3)')

    if(agendaa) {
        agendaa.classList.add('active');

        agendaaContent = document.querySelector('.panel_content:nth-child(4)');

        if(agendaaContent) {
            agendaaContent.style.display = 'block';
        }
    }
    
}

// Get the first element from the panel_left
const panelLeft = document.querySelector('.panel_left');

if(panelLeft) {
    const firstPanelTitleL = panelLeft.querySelector('.panel_title:nth-child(1)');

    if(firstPanelTitleL) {
        const panelContent = document.querySelector('.panel_content_open');
        
        if(panelContent) {
            panelContent.style.display = 'none';
        }
    }
}

// version of extension at the top left
// Create a <p> element for the text
const versionText = document.createElement('p');

versionText.textContent = 'version 0.1.0';
versionText.style.position = 'fixed';
versionText.style.bottom = '20px';
versionText.style.right = '0';
versionText.style.margin = '20px'; // Adjust the margin as needed
versionText.style.fontSize = '16px';
versionText.style.fontWeight = 'bold';
versionText.style.color = 'white'; // Change text color as desired

// append the created element to the body
document.body.appendChild(versionText);


const poweredByText = document.createElement('p');

poweredByText.textContent = 'Powered by cs.unipi students';
poweredByText.style.position = 'fixed';
poweredByText.style.bottom = '0';
poweredByText.style.right = '0';
poweredByText.style.margin = '20px'; // Adjust the margin as needed
poweredByText.style.fontSize = '16px';
poweredByText.style.fontWeight = 'bold';
poweredByText.style.color = 'white'; // Change text color as desired

document.body.appendChild(poweredByText);

// hide footer
const footer = document.getElementById('footer');

// check if the footer exists and hide it
if (footer) {
    footer.style.display = 'none';
}





// anakoinwseis apo panel_right se panel_left:

const announcementsTitle = panelRight.querySelector('p');
const announcementsContent = panelRight.querySelector('.panel_content:nth-child(2)');

// Move announcements content to panel_left
if (panelLeft && panelRight && announcementsContent) {
    panelLeft.appendChild(announcementsTitle); // Move the element
    panelLeft.appendChild(announcementsContent); // Move the element
}

// agenda apo panel_right se panel_left

const agendaTitle = panelRight.querySelector('p');
const agendaContent = panelRight.querySelector('.panel_content:nth-child(2)');
// Move "Ανακοινώσεις" content to panel_left
if (panelLeft && panelRight && agendaContent) {
    panelLeft.appendChild(agendaTitle); // Move the element
    panelLeft.appendChild(agendaContent); // Move the element
}








// create and initialize the side menu
function initializeSideMenu() {
    // toggle button
    const toggleButton = document.createElement('button');
    toggleButton.textContent = 'Toggle Menu';
    toggleButton.style.position = 'fixed';
    toggleButton.style.top = '0';
    toggleButton.style.left = '0';
    toggleButton.style.margin = '30px'; 
    toggleButton.style.fontSize = '16px';
    toggleButton.style.fontWeight = 'bold';
    toggleButton.style.color = 'black'; 

    // create a side menu container
    const sideMenuContainer = document.createElement('div');
    sideMenuContainer.classList.add('side-menu-container'); // Add a class for styling purposes
    sideMenuContainer.style.display = 'none'; // Initially hide the side menu

    // append toggleButton to the body
    document.body.appendChild(toggleButton);

    // append sideMenuContainer to the body
    document.body.appendChild(sideMenuContainer);

    // move content from .leftnav to side menu container
    const leftNavContent = document.querySelector('.leftnav');
    if (leftNavContent) {
        sideMenuContainer.appendChild(leftNavContent);
    }

    // toggle side menu
    function toggleMenu() {
        if (sideMenuContainer.style.display === 'none') {
            sideMenuContainer.style.display = 'block'; // display the side menu
            sideMenuContainer.style.position = 'fixed';
            sideMenuContainer.style.top = '30px';
            sideMenuContainer.style.left = '0';
            sideMenuContainer.style.margin = '20px'; 
            sideMenuContainer.style.fontSize = '16px';
            sideMenuContainer.style.fontWeight = 'bold';
            sideMenuContainer.style.color = 'white';
        } else {
            sideMenuContainer.style.display = 'none'; 
        }
    }

    // add click event listener to the toggleButton
    toggleButton.addEventListener('click', toggleMenu);
}

initializeSideMenu();






// add hr after each announcement of lesson
const smallerDivs = document.querySelectorAll('.custom_list');

smallerDivs.forEach(div => {
    const hrElement = document.createElement('hr');
    div.insertAdjacentElement('afterend', hrElement);
});
















