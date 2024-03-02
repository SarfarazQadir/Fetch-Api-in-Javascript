var  url="https://v2.jokeapi.dev/joke/Programming,Pun?blacklistFlags=political";

let GenJoke = () => {
    fetch(url)
    .then(data => data.json())
    .then((data) => {
        document.getElementById('joke').innerHTML= data.joke;
        console.log(data.joke);
    })
}