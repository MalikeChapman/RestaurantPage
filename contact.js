export function createContact(){
    let backgroundDiv = document.createElement('div');
    backgroundDiv.setAttribute('class', 'background');
    backgroundDiv = createContactBackground(backgroundDiv);
    backgroundDiv = noContactDiv(backgroundDiv);

    function createContactBackground(backgroundDiv){
        backgroundDiv.style.display = "flex";
        backgroundDiv.style.flexDirection = "column";
        backgroundDiv.style.justifyContent = "flex-start";
        backgroundDiv.style.alignItems = "center";
        
        backgroundDiv.style.backgroundColor = "rgba(1.1, 1.1, 1.1, 0.5)";
        backgroundDiv.style.width = "70%";
        backgroundDiv.style.height = "70vh";
        backgroundDiv.style.margin = "30px auto";
        backgroundDiv.style.border = "3px solid white";

        let contactTitle = document.createElement('h1');
        contactTitle.textContent = "Contacts";
        contactTitle.style.width = "50%";
        contactTitle.style.color = "white";
        contactTitle.style.textAlign = "center";
        backgroundDiv.appendChild(contactTitle);
        return backgroundDiv;

    }

    function noContactDiv(backgroundDiv){
        let noContactD = document.createElement('div');
        noContactD.style.width = "50%";
        noContactD.style.height = "fit-content";
        let ruleUL = document.createElement('ul');
        let rule1 = document.createElement('li');
        let rule2 = document.createElement('li');
        let rule3 = document.createElement('li');
        let paragraph = document.createElement('p');
        paragraph.style.color = "white";
        paragraph.textContent = "Hey everyone, if you want to get in contact with us, please read the rules below before you try. Also, if you ever feel " +
        "confused, just re-read the rules. We will gladly help you if we can.";
        paragraph.style.margin = "10px 20px";
        backgroundDiv.appendChild(paragraph);

        rule1.textContent = "Don't call us ever!";
        rule2.textContent = "We will not give you extra gravy ever!!";
        rule3.textContent = "Always remember rule 1 and rule 2. We will never break that rule for anyone!";
        rule1.style.color = "white";
        rule2.style.color = "white";
        rule3.style.color = "white";

        ruleUL.appendChild(rule1);
        ruleUL.appendChild(rule2);
        ruleUL.appendChild(rule3);
        backgroundDiv.appendChild(ruleUL);
        return backgroundDiv;

        
        
    }
    return backgroundDiv;

};