let heracrossInfo = document.getElementById('table');

let spriteImage = document.getElementById('sprite');


var aud = document.getElementById("heracrossbutton").children[0];
    var isPlaying = false;
    aud.pause();

    function playPause() {
    if (isPlaying) {
    aud.pause();
    } else {
    aud.play();
    }
    isPlaying = !isPlaying;
    }

fetch("https://pokeapi.co/api/v2/pokemon/heracross/")
    .then(function (response) {
        console.log(response);
        return response.json();
    })

    .then(function(json) {
        console.log(json);
        let heracrossName = json.name;
        let heracrossSprite = json.sprites.front_default;
        let heracrossID = json.id;
        let heracrossHeight = json.height;
        let heracrossWeight = json.weight;

        let listName = document.getElementById("tableHeracrossName");
        listName.width = '80px';
        listName.innerText = heracrossName;
        heracrossInfo.appendChild(listName);

        let listID = document.getElementById("tableHeracrossID");
        listID.width = '50px';
        listID.innerText = heracrossID;
        heracrossInfo.appendChild(listID);

        let listHeight = document.getElementById("tableHeracrossHeight");
        listHeight.width = '50px';
        listHeight.innerText = heracrossHeight;
        heracrossInfo.appendChild(listHeight);

        let listWeight = document.getElementById("tableHeracrossWeight");
        listWeight.width = '80px';
        listWeight.innerText = heracrossWeight;
        heracrossInfo.appendChild(listWeight);

        console.log(heracrossSprite);
        spriteImage.src = heracrossSprite;
    })


