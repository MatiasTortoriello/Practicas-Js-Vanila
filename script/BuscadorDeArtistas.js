/////BUSCADOR DE ARTISTAS

/*<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="main.css">
</head>
<body>
    <div class="container">
        <form action="#" id="form">
            <input type="text" class="searh" placeholder="Search artist" id="artist">
        </form>
        <div class="card">
            <img src="https://www.theaudiodb.com/images/media/artist/thumb/vifn4f1617650128.jpg" alt="Artist Photo" class="card__img" id="artistPhoto">
            <label class="card__title" id="artistName">Emimem</label>
            <div class="card__info">
                <p class="card__paragraph" id="artistInfo">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur distinctio odio delectus sequi voluptatibus tempore excepturi, fugit et quia itaque hic modi id aperiam quisquam ipsam accusamus voluptatum veritatis sint?</p>
            </div>
        </div>
    </div>
    <script src="main.js"></script>
</body>
</html>


/////////////////////////////////////////////////////////////JS
let form = document.getElementById('form');
let input = document.getElementById('artist');

let artistInfo = document.getElementById('artistInfo');
let artistPhoto = document.getElementById('artistPhoto');
let artistName = document.getElementById('artistName');

form.addEventListener('submit', async e => {
    e.preventDefault();
    try {
        
        let userInput = input.value.toLowerCase();
        artistFetch = fetch(`https://theaudiodb.com/api/v1/json/1/search.php?s=${userInput}`);
        [response] = await Promise.all([artistFetch]);
        data = await response.json();

        if (data.artists === null) {
            alert("No existe el artista");
        } else {
           let artist = data.artists[0];
           artistPhoto.src = artist.strArtistThumb;
           artistInfo.innerText = artist.strBiographyES;
           artistName.innerText = artist.strArtist;
        }

    } catch (err) {
        alert("UPS! ha ocurrido un error");
    }
});



///////////////////////////////////////////////////SASS


@import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap');

body{
    background: #2d3436;
    font-family: 'Lato', sans-serif;
}
.container{
    display: flex;
    flex-direction: column;
    align-items: center;
    
    margin: 5rem;
}

.searh{
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    width: 20rem;
    height: 2rem;
    padding: 1rem;
    margin-bottom: 2rem;
    background: #ffeaa7;
    border: none;
    border-radius: 3px;
    outline: none;
    font-size: 2rem;
    color: #2d3436;
}

.card{
    width: 40rem;
    &__img{
        width: 100%;
        border-radius: 3px;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }
    &__title{
        background: #ffeaa7;
        font-size: 3rem;
        padding: .5rem;
        border-radius: 2px;
        font-weight: bold;
        text-transform: uppercase;
        display: inline-block;
        transform: rotate(11deg) translateY(-5rem);
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        color: #2d3436;
    }
    &__info{
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        background: #ffeaa7;
        padding: 1.5rem;
    }
    &__paragraph{
        font-size: 1.3rem;
    }
}*/
