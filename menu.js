export function createMenu(){
    let backgroundDiv = document.createElement('div');
    backgroundDiv.setAttribute('class', 'background');
    backgroundDiv = createMenuBackground(backgroundDiv);
    backgroundDiv = addAppetizerItems(backgroundDiv);

    function createMenuBackground(backgroundDiv){
        backgroundDiv.style.display = "flex";
        backgroundDiv.style.flexDirection = "column";
        backgroundDiv.style.justifyContent = "flex-start";
        backgroundDiv.style.alignItems = "center";
        backgroundDiv.style.backgroundColor = "rgba(1.1, 1.1, 1.1, 0.5)";
        backgroundDiv.style.width = "70%";
        backgroundDiv.style.height = "190vh";
        backgroundDiv.style.margin = "30px auto";
        backgroundDiv.style.border = "3px solid white";

        const title = document.createElement('h1');
        title.textContent = "Menu";
        title.style.color = "white";
        backgroundDiv.appendChild(title);
    
            return backgroundDiv;
        }
    function addAppetizerItems(backgroundDiv){
        const appetizerDiv = document.createElement('div');
        appetizerDiv.style.display = "flex";
        appetizerDiv.style.flexDirection = "row";
        appetizerDiv.style.justifyContent = "space-around";
        appetizerDiv.style.width = "70%";
        appetizerDiv.style.height = "fit-content";
        appetizerDiv.style.flexWrap = "wrap";

        const appetizer1 = document.createElement('div');
        const appetizer2 = document.createElement('div');
        const appetizer3 = document.createElement('div');
        const appetizer4 = document.createElement('div');
        const appetizer5 = document.createElement('div');

        appetizer1.setAttribute('class', "appetizer");
        appetizer2.setAttribute('class', "appetizer");
        appetizer3.setAttribute('class', "appetizer");
        appetizer4.setAttribute('class', "appetizer");
        appetizer5.setAttribute('class', "appetizer");
        const appetizerTitle = document.createElement('h1');
        appetizerTitle.textContent = "Appetizers";
        appetizerTitle.style.width = "50%";
        appetizerTitle.style.textAlign = "center";
        appetizerTitle.style.color = "white";
        appetizerTitle.style.flexBasis = "100%";
        appetizerDiv.appendChild(appetizerTitle);


        appetizerDiv.appendChild(appetizer1);
        appetizerDiv.appendChild(appetizer2);
        appetizerDiv.appendChild(appetizer3);
        appetizerDiv.appendChild(appetizer4);
        appetizerDiv.appendChild(appetizer5);



        const allApps = appetizerDiv.querySelectorAll("div");
        console.log(allApps.length);
        for(let i = 0; i < allApps.length; i++){
            allApps[i].style.width = "250px";
            allApps[i].style.height = "fit-content";
            allApps[i].style.border = "3px solid white";
            allApps[i].style.borderRadius = "10px";
            allApps[i].style.boxShadow = "10px 10px";
            console.log(allApps[i]);
    
        };

        const appTitle = document.createElement('h3');
        appTitle.textContent = "Jerk Salmon Tostadas";
        appetizer1.appendChild(appTitle);
        appTitle.style.color = "white";
        appTitle.style.width = "250px";
        appTitle.style.textAlign = "center";
        const photoDiv = document.createElement('div');
        const appPhoto = document.createElement('img');
        appPhoto.setAttribute('alt', "");
        appPhoto.setAttribute('src', "/images/images.jpeg");
        appPhoto.style.width = "250px";
        appPhoto.style.height = "250px";
        photoDiv.style.width = "250px";
        photoDiv.appendChild(appPhoto);
        appetizer1.appendChild(photoDiv);

        const appUL = document.createElement('ul');
        const appDescription = document.createElement('li');
        const appCalories = document.createElement('li');
        const appCost = document.createElement('li');

        appDescription.textContent = "Our take on tostadas featuring a fiery jerk salmon topped with veggies and spices.";
        appCalories.textContent = "708 Calories";
        appCost.textContent = "$11.99";
        appUL.appendChild(appDescription);
        appUL.appendChild(appCalories);
        appUL.appendChild(appCost);
        appUL.style.width = "200px";
        appUL.style.textAlign = "center";
        appUL.style.display = "flex";
        appUL.style.flexDirection = "column";
        appUL.style.justifyContent= "flex-start";

        appetizer1.appendChild(appUL);

        const app2Title = document.createElement('h3');
        app2Title.textContent = "Ackee and Saltfish";
        appetizer2.appendChild(app2Title);
        app2Title.style.color = "white";
        app2Title.style.width = "250px";
        app2Title.style.textAlign = "center";
        const photoDiv2 = document.createElement('div');
        const app2Photo = document.createElement('img');
        app2Photo.setAttribute('alt', "");
        app2Photo.setAttribute('src', "/images/ackee.jpg");
        app2Photo.style.width = "250px";
        app2Photo.style.height = "250px";
        photoDiv2.style.width = "250px";
        photoDiv2.appendChild(app2Photo);
        appetizer2.appendChild(photoDiv2);

        const appUL2 = document.createElement('ul');
        const appDescription2 = document.createElement('li');
        const appCalories2 = document.createElement('li');
        const appCost2 = document.createElement('li');

        appDescription2.textContent = "You could never go wrong with some ackee and saltfish. So we did just that by bringing a new take to the old classic";
        appCalories2.textContent = "202 Calories";
        appCost2.textContent = "$14.99";
        appUL2.appendChild(appDescription2);
        appUL2.appendChild(appCalories2);
        appUL2.appendChild(appCost2);
        appUL2.style.width = "200px";
        appUL2.style.textAlign = "center";
        appUL2.style.display = "flex";
        appUL2.style.flexDirection = "column";
        appUL2.style.justifyContent= "flex-start";

        appetizer2.appendChild(appUL2);

        const appTitle3 = document.createElement('h3');
        appTitle3.textContent = "Jerk Mango Wings";
        appetizer3.appendChild(appTitle3);
        appTitle3.style.color = "white";
        appTitle3.style.width = "250px";
        appTitle3.style.textAlign = "center";
        const photoDiv3 = document.createElement('div');
        const appPhoto3 = document.createElement('img');
        appPhoto3.setAttribute('alt', "");
        appPhoto3.setAttribute('src', "/images/jerk.jpeg");
        appPhoto3.style.width = "250px";
        appPhoto3.style.height = "250px";
        photoDiv3.style.width = "250px";
        photoDiv3.appendChild(appPhoto3);
        appetizer3.appendChild(photoDiv3);

        const appUL3 = document.createElement('ul');
        const appDescription3 = document.createElement('li');
        const appCalories3 = document.createElement('li');
        const appCost3 = document.createElement('li');

        appDescription3.textContent = "Did someone say jerk and wings? You know we did. Come enjoy some zesty jerk and sweet mango wings!";
        appCalories3.textContent = "689 Calories";
        appCost3.textContent = "$12.99";
        appUL3.appendChild(appDescription3);
        appUL3.appendChild(appCalories3);
        appUL3.appendChild(appCost3);
        appUL3.style.width = "200px";
        appUL3.style.textAlign = "center";
        appUL3.style.display = "flex";
        appUL3.style.flexDirection = "column";
        appUL3.style.justifyContent= "flex-start";

        appetizer3.appendChild(appUL3);

        const appTitle4 = document.createElement('h3');
        appTitle4.textContent = "Fried Dumplings";
        appetizer4.appendChild(appTitle4);
        appTitle4.style.color = "white";
        appTitle4.style.width = "250px";
        appTitle4.style.textAlign = "center";
        const photoDiv4 = document.createElement('div');
        const appPhoto4 = document.createElement('img');
        appPhoto4.setAttribute('alt', "");
        appPhoto4.setAttribute('src', "/images/fried.jpg");
        appPhoto4.style.width = "250px";
        appPhoto4.style.height = "250px";
        photoDiv4.style.width = "250px";
        photoDiv4.appendChild(appPhoto4);
        appetizer4.appendChild(photoDiv4);

        const appUL4 = document.createElement('ul');
        const appDescription4 = document.createElement('li');
        const appCalories4 = document.createElement('li');
        const appCost4 = document.createElement('li');

        appDescription4.textContent = "Fried dumpling! Get your fried dumplings here and forever. We got you on this one.";
        appCalories4.textContent = "730 Calories";
        appCost4.textContent = "$4.99";
        appUL4.appendChild(appDescription4);
        appUL4.appendChild(appCalories4);
        appUL4.appendChild(appCost4);
        appUL4.style.width = "200px";
        appUL4.style.textAlign = "center";
        appUL4.style.display = "flex";
        appUL4.style.flexDirection = "column";
        appUL4.style.justifyContent= "flex-start";

        appetizer4.appendChild(appUL4);

        const appTitle5 = document.createElement('h3');
        appTitle5.textContent = "Spicy Caribbean Shrimp";
        appetizer5.appendChild(appTitle5);
        appTitle5.style.color = "white";
        appTitle5.style.width = "250px";
        appTitle5.style.textAlign = "center";
        const photoDiv5 = document.createElement('div');
        const appPhoto5 = document.createElement('img');
        appPhoto5.setAttribute('alt', "");
        appPhoto5.setAttribute('src', "/images/shrimp.jpeg");
        appPhoto5.style.width = "250px";
        appPhoto5.style.height = "250px";
        photoDiv5.style.width = "250px";
        photoDiv5.appendChild(appPhoto5);
        appetizer5.appendChild(photoDiv5);

        const appUL5 = document.createElement('ul');
        const appDescription5 = document.createElement('li');
        const appCalories5 = document.createElement('li');
        const appCost5 = document.createElement('li');

        appDescription5.textContent = "Spicy caribbean Shrimp, yes please!! We have what you need and there's a lot of it. We can't help but share.";
        appCalories4.textContent = "430 Calories";
        appCost5.textContent = "$13.99";
        appUL5.appendChild(appDescription5);
        appUL4.appendChild(appCalories5);
        appUL5.appendChild(appCost5);
        appUL5.style.width = "200px";
        appUL5.style.textAlign = "center";
        appUL5.style.display = "flex";
        appUL5.style.flexDirection = "column";
        appUL5.style.justifyContent= "flex-start";

        appetizer5.appendChild(appUL5);

        const entreeTitle = document.createElement('h1');
        entreeTitle.textContent = "Entrees";
        entreeTitle.style.width = "50%";
        entreeTitle.style.textAlign = "center";
        entreeTitle.style.flexBasis = "100";
        entreeTitle.style.color = "white";
        appetizerDiv.appendChild(entreeTitle);










        backgroundDiv.appendChild(appetizerDiv);

        return backgroundDiv;
    }
    return backgroundDiv;
};