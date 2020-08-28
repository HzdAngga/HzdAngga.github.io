console.log(document.getElementById("audio").src)
let count = 0

function counter(wadah) {
    if (count === 0 && wadah === "ff15") {
        document.getElementById("score").innerHTML =  Number(document.getElementById("score").innerHTML) + 20
    } else if (count === 1 && wadah === "ff8") {
        document.getElementById("score").innerHTML =  Number(document.getElementById("score").innerHTML) + 20
    } else if (count === 2 && wadah === "ff10-2") {
        document.getElementById("score").innerHTML =  Number(document.getElementById("score").innerHTML) + 20
    } else if (count === 3 && wadah === "ff7") {
        document.getElementById("score").innerHTML =  Number(document.getElementById("score").innerHTML) + 20
    } else if (count === 4 && wadah === "ff12") {
        document.getElementById("score").innerHTML =  Number(document.getElementById("score").innerHTML) + 20
    }
    if (count >= 4) {
        if (document.getElementById("score").innerHTML == 100) {
            document.getElementById("h3").innerHTML = '<b>PERFECT SCORE!!!</b> <a href="./index3.html">Click for your rewards OwOb</a>'
        } else {
            document.getElementById("h3").innerHTML = "Nice try XDD, Come Again ^^"
        }    
    }
    console.log(count)
    count += 1
    autoplay()
}

function autoplay() {
    document.getElementById("audio").src = document.getElementById(`${count}`).src
    document.getElementById("audio").load()
}


let click = document.getElementsByClassName("img")
for (let a = 0; a < click.length; a++) {
    click[a].addEventListener("click", () => {counter(click[a].id)})
}


