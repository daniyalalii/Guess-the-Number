let gameTrue = true;
let score = 0;
let number = Math.floor(Math.random() * 101);

document.querySelector(".btn").addEventListener("click", () => {
    if (!gameTrue) {
        return;
    }
    let input = parseInt(document.querySelector("input").value);
    let result = document.querySelector(".result");
    let h = document.createElement('h2');
    result.innerHTML = "";

    if (isNaN(input)) {
        h.textContent = "Please inter a valid number";
    }
    else if (input > number) {
        h.innerHTML = `Enter a lower number`;
        score++;
    }
    else if (input < number) {
        h.innerHTML = `Enter a higher number`;
        score++;
    }
    else if (input == number) {
        h.innerHTML = `Correct Guess, Your took ${score+1} attempts`;
        gameTrue = false;
    }
    result.appendChild(h);
}
);





