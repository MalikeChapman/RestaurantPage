export function createContact(){
    let backgroundDiv = document.createElement('div');
    backgroundDiv.setAttribute('class', 'background');
    backgroundDiv = createContactBackground(backgroundDiv);

    function createContactBackground(backgroundDiv){
        backgroundDiv.style.display = "flex";
        backgroundDiv.style.flexDirection = "column";
        backgroundDiv.style.justifyContent = "flex-start";
        backgroundDiv.style.alignItems = "center";
        
        backgroundDiv.style.backgroundColor = "rgba(1.1, 1.1, 1.1, 0.5)";
        backgroundDiv.style.width = "70%";
        backgroundDiv.style.height = "100vh";
        backgroundDiv.style.margin = "30px auto";
        backgroundDiv.style.border = "3px solid white";
        return backgroundDiv;

    }
    return backgroundDiv;

};