export function createMenu(){
    let backgroundDiv = document.createElement('div');
    backgroundDiv.setAttribute('class', 'background');
    backgroundDiv = createMenuBackground(backgroundDiv);

    function createMenuBackground(backgroundDiv){
        backgroundDiv.style.display = "flex";
        backgroundDiv.style.flexDirection = "column";
        backgroundDiv.style.justifyContent = "flex-start";
        backgroundDiv.style.alignItems = "center";
        backgroundDiv.style.backgroundColor = "rgba(1.1, 1.1, 1.1, 0.5)";
        backgroundDiv.style.width = "70%";
        backgroundDiv.style.height = "100vh";
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
        appetizerDiv.style.justifyContent = "flex-start";
        appetizerDiv.style.width = "70%";
        appetizerDiv.style.height = "fit-content";

        const appetizer1 = document.createElement('div');
        const appetizer2 = document.createElement('div');
        const appetizer3 = document.createElement('div');
        const appetizer4 = document.createElement('div');
        const appetizer5 = document.createElement('div');

        appetizer1.style.width = "200px";
        appetizer1.style.height = "fit-content";

    }
    return backgroundDiv;
};