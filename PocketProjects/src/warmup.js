
const partyHeader = document.getElementById('party');

export const htmlGenerator = (string, htmlElement) => {
    let myP = document.createElement("p");
    myP.innerText = string;
    htmlElement.appendChild(myP) 
};

htmlGenerator('Party Time.', partyHeader);