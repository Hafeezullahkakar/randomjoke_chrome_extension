fetch("https://icanhazdadjoke.com/slack")
    .then(data => data.json())
    .then(jdata => {
        const jokeD = jdata.attachments[0].text;
        console.log("attatchments: ", jokeD)
        const j = document.getElementById("joke")
        j.innerHTML = jokeD;

    })