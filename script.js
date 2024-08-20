const container = document.createElement('div');
container.className = 'container';
container.style.width = '960px';
container.style.height = '960px';
container.style.backgroundColor = 'pink';
container.style.display = 'flex';
container.style.flexWrap = 'wrap';
document.body.appendChild(container);

function newBox(num = 16) {
    for(let i = 0; i < (num * num); i++) {
        const box = document.createElement('div');
        box.className = 'box';
        box.style.border = '1px solid black';
        box.style.height = box.style.width;
        box.style.flex = '1 0 6%';
        box.style.boxSizing = 'border-box';
        box.style.opacity = 0;
        box.style.flexBasis = `${Math.floor(100 / num)}%`
        container.appendChild(box);
    }
}

function randomColor() {
    return `rgb(${Math.floor(Math.random() * 255)} ${Math.floor(Math.random() * 255)} ${Math.floor(Math.random() * 255)})`;
}

function hover() {
    const boxes = document.querySelectorAll('.box');
    boxes.forEach(box => {
        box.addEventListener('mouseenter', () => {
            box.style.backgroundColor = randomColor();
            box.style.opacity = +box.style.opacity + 0.1;
        })
    })
}


function btnBox (){
    const btn = document.createElement('button');
    btn.style.width = '100px';
    btn.style.height = '30px';
    btn.textContent = 'New grid';
    document.body.insertBefore(btn, container);

    btn.addEventListener('click', () => {
        const delBoxs = document.querySelectorAll('.box');
        delBoxs.forEach(box => {
            box.remove();
        })

        let pocetBoxu;
        do {
        pocetBoxu = Number(prompt('Zadej pocet boxu na radku az 100', 16));
        } while(pocetBoxu > 100);

        newBox(pocetBoxu);
        hover();
    })
}



newBox();
hover();
btnBox();