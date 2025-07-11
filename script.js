




function matchesToTake(match) {
    let matchesNumber = match;
    const button = document.getElementById('soumettre');
    const input = document.getElementById('allumettes');
    const texte = document.getElementById('text')
    let info = document.createElement('p')
    info.classList.add('info')

    button.addEventListener('click', function (event) {
        event.preventDefault();

        const matchMinus = parseInt(input.value);


        if (matchMinus < 1 || matchMinus > 6) {
            texte.textContent= "Veuillez entrer un nombre entre 1 et 6.";
        } else if (matchMinus > matchesNumber) {
            texte.textContent = "Il ne reste que " + matchesNumber + " allumette(s).";
        } else {
            matchesNumber -= matchMinus;
            texte.textContent = "Il reste " + matchesNumber + " allumette(s).";

            if (matchesNumber === 0) {
                texte.textContent = " Vous avez gagné ! 🎉";
                       }
        }

        input.value = ""; 
    });
}

matchesToTake(50);