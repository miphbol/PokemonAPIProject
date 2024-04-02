let heracrossInfo = document.getElementById('table');


let spriteImage = document.getElementById('sprite');

let heracrossStats = document.getElementById('stats');

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
        listHeight.width = '80px';
        listHeight.innerText = heracrossHeight;
        heracrossInfo.appendChild(listHeight);

        let listWeight = document.getElementById("tableHeracrossWeight");
        listWeight.width = '80px';
        listWeight.innerText = heracrossWeight;
        heracrossInfo.appendChild(listWeight);

//---------------------------------------------------------//

        let statHP = json.stats[0].base_stat;
        let statATK = json.stats[1].base_stat;
        let statDEF = json.stats[2].base_stat;
        let statSPATK = json.stats[3].base_stat;
        let statSPDEF = json.stats[4].base_stat;
        let statSPE = json.stats[5].base_stat;

        let listHP = document.getElementById("heracrossHP");
        listHP.innerText = statHP;
        heracrossStats.appendChild(listHP);

        let listATK = document.getElementById("heracrossATK");
        listATK.innerText = statATK;
        heracrossStats.appendChild(listATK);

        let listDEF = document.getElementById("heracrossDEF");
        listDEF.innerText = statDEF;
        heracrossStats.appendChild(listDEF);

        let listSPATK = document.getElementById("heracrossSPATK");
        listSPATK.innerText = statSPATK;
        heracrossStats.appendChild(listSPATK);

        let listSPDEF = document.getElementById("heracrossSPDEF");
        listSPDEF.innerText = statSPDEF;
        heracrossStats.appendChild(listSPDEF);

        let listSPE = document.getElementById("heracrossSPE");
        listSPE.innerText = statSPE;
        heracrossStats.appendChild(listSPE);

//----------------------------------------------------------//

        console.log(heracrossSprite);
        spriteImage.src = heracrossSprite;
    })






