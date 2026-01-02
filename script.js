let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
Array.from(buttons).forEach(button => {
    button.addEventListener('click', (e) => {
        let value = e.target.innerHTML;

        if (value === '=') {
            try {
                let finalString = string
                    .replace(/×/g, '*')
                    .replace(/÷/g, '/');

                string = eval(finalString);
                input.value = string;
            } catch {
                input.value = "Error";
                string = "";
            }
        }
        else if (value === 'AC') {
            string = "";
            input.value = "";
        }
        else if (value === 'DEL') {
            string = string.slice(0, -1);
            input.value = string;
        }
        else {
            string += value;
            input.value = string;
        }
    });
});
