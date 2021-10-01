export function createHome()
{
    let backgroundDiv = document.createElement('div');
    backgroundDiv.setAttribute('class', 'background');
    backgroundDiv = _createBackground();
    backgroundDiv = _createDescription(backgroundDiv);
    backgroundDiv = _createHours(backgroundDiv);
    backgroundDiv = _createLocation(backgroundDiv);

    function _createBackground(){

    
    backgroundDiv.style.display = "flex";
    backgroundDiv.style.flexDirection = "column";
    backgroundDiv.style.justifyContent = "space-between";
    backgroundDiv.style.alignItems = "center";
    backgroundDiv.style.backgroundColor = "rgba(1.1, 1.1, 1.1, 0.5)";
    backgroundDiv.style.width = "70%";
    backgroundDiv.style.height = "100vh";
    backgroundDiv.style.margin = "30px auto";
    backgroundDiv.style.border = "3px solid white";
    




    const title = document.createElement('h1');
    title.textContent = "IIIREE";
    title.style.borderRadius = "6px";
    title.textAlign = "center";
    title.style.flexBasis = "auto";

    backgroundDiv.appendChild(title);
    return backgroundDiv;
}

   function _createDescription(backgroundDiv){
        const descriptionDiv = document.createElement('div');
    const descriptionParagraph = document.createElement('p');
    descriptionDiv.backgroundColor = "white";
    descriptionParagraph.textContent = "All the island flavors that you crave, are all in one place. You won't be disappointed as the you get swept away by the caribbean spices.";
    descriptionDiv.style.border = "3px solid white";
    descriptionDiv.style.borderRadius = "10px"
    descriptionParagraph.style.color = "white";
    descriptionDiv.style.width = "400px";
    descriptionDiv.appendChild(descriptionParagraph);
    backgroundDiv.appendChild(descriptionDiv);
    return backgroundDiv;
   }


    function _createHours(backgroundDiv){
    const hoursDiv = document.createElement('div');
    hoursDiv.style.width = "300px";
    hoursDiv.style.border = "3px solid white";
    hoursDiv.style.borderRadius = "10px";
    hoursDiv.style.margin = "40px";
    hoursDiv.style.flexBasis = "auto";


    const hoursUL = document.createElement('ul');

    // hoursUL.style.listStyleType = "none";
    const monLI = document.createElement('li');
    const tuesLI = document.createElement('li');
    const wenLI = document.createElement('li');
    const thursLI = document.createElement('li');
    const friLI = document.createElement('li');
    const satLI = document.createElement('li');
    const sunLI = document.createElement('li');

    let monToThursHours = "12:00pm - 8:00pm";
    let friAndSatHours = "12:00pm - 2:00am";
    let sunHours = 'Closed';

    monLI.textContent = `Monday:     ${monToThursHours}`;
    tuesLI.textContent = `Tuesday:   ${monToThursHours}`;
    wenLI.textContent = `Wednesday:  ${monToThursHours}`;
    thursLI.textContent = `Thursday: ${monToThursHours}`;
    friLI.textContent = `Friday:     ${friAndSatHours}`;
    satLI.textContent = `Saturday:   ${friAndSatHours}`;
    sunLI.textContent = `Sunday:     ${sunHours}`;

    hoursUL.appendChild(monLI);
    hoursUL.appendChild(tuesLI);
    hoursUL.appendChild(wenLI);
    hoursUL.appendChild(thursLI);
    hoursUL.appendChild(friLI);
    hoursUL.appendChild(satLI);
    hoursUL.appendChild(sunLI);

    hoursDiv.appendChild(hoursUL);
    backgroundDiv.appendChild(hoursDiv);
    return backgroundDiv;
    }




    function _createLocation(backgroundDiv){
    const locationDiv = document.createElement('div');
    locationDiv.style.width = "300px";
    locationDiv.style.height = "fit-content";
    locationDiv.style.flexBasis = "auto";


    const locationParagraph = document.createElement('p');
    locationParagraph.textContent = "We are located in the paradise of the Caribbean Sea. Find us when you're ready, since X marks the spot.";
    locationDiv.appendChild(locationParagraph);
    locationDiv.style.border = "3px solid white";
    locationDiv.style.borderRadius = "10px";
    backgroundDiv.appendChild(locationDiv);
    return backgroundDiv;
}
    

    return backgroundDiv;
};