import { createHome } from '../home.js';
import { createMenu } from '../menu.js';
import { createContact } from '../contact.js';

(function tabSwitch()
    {
        const body = document.getElementById('content');
        const heading = document.createElement('div');


        body.style.backgroundImage = "url(/images/giphy-downsized-large.gif)";
        body.style.backgroundSize = "cover";
        body.style.height = "100vh";
        heading.style.display = "flex";
        heading.style.flexDirection = "row";
        heading.style.justifyContent = "center";
        heading.style.alignItems = "flex-end";
        heading.style.width = "100%";
        heading.style.height = "fit-content";
        heading.style.backgroundColor = "white";
       
        const homeButton = document.createElement('button');
        const menuButton = document.createElement('button');
        const contactButton = document.createElement('button');

        homeButton.textContent = "Home";
        menuButton.textContent = "Menu";
        contactButton.textContent = "Contact";

        heading.appendChild(homeButton);
        heading.appendChild(menuButton);
        heading.appendChild(contactButton);

        body.appendChild(heading);
        let backgroundDiv = createHome();
        body.appendChild(backgroundDiv);

        homeButton.addEventListener('click', () =>
        {
            let secondNode = body.childNodes;
            body.removeChild(secondNode[1]);
            backgroundDiv = createHome();
            body.appendChild(backgroundDiv);
            body.style.backgroundImage = "url(/images/giphy-downsized-large.gif)";
            body.style.backgroundSize = "cover";
    
        });
        menuButton.addEventListener('click', () =>
        {
            let secondNode = body.childNodes;
            body.removeChild(secondNode[1]);
            let newbackgroundDiv = createMenu();
            body.appendChild(newbackgroundDiv);
            body.style.backgroundImage = "url(/images/WelldocumentedOrderlyAfghanhound-max-1mb.gif)";
            body.style.backgroundSize = "cover";
    
        });
        contactButton.addEventListener('click', (backgroundDiv) =>
        {
            let secondNode = body.childNodes;
            body.removeChild(secondNode[1]);
            let newbackgroundDiv = createContact();
            body.appendChild(newbackgroundDiv);
            body.style.backgroundImage = "url(/images/200.gif)";
            body.style.backgroundSize = "cover";
    
        });

    })();