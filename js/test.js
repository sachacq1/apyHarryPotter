const $form = document.getElementById('form');
const $button = document.getElementById('button')
const $result = document.getElementById('result')

function calculateHouse() {


    let q1 = $form.elements['q1'].value;
    let q2 = $form.elements['q2'].value;
    let q3 = $form.elements['q3'].value;
    let q4 = $form.elements['q4'].value;
    let q5 = $form.elements['q5'].value;

    let gryffindor = 0;
    let ravenclaw = 0;
    let hufflepuff = 0;
    let slytherin = 0;


    if (q1 === 'valentía') {
        gryffindor++;
    } else if (q1 === 'inteligencia') {
        ravenclaw++;
    } else if (q1 === 'lealtad') {
        hufflepuff++;
    } else if (q1 === 'ambición') {
        slytherin++;
    }


    if (q2 === 'rojo') {
        gryffindor++;
    } else if (q2 === 'azul') {
        ravenclaw++;
    } else if (q2 === 'amarillo') {
        hufflepuff++;
    } else if (q2 === 'verde') {
        slytherin++;
    }


    if (q3 === 'aventuras') {
        gryffindor++;
    } else if (q3 === 'lectura') {
        ravenclaw++;
    } else if (q3 === 'ayudar') {
        hufflepuff++;
    } else if (q3 === 'liderar') {
        slytherin++;
    }


    if (q4 === 'león') {
        gryffindor++;
    } else if (q4 === 'águila') {
        ravenclaw++;
    } else if (q4 === 'tejón') {
        hufflepuff++;
    } else if (q4 === 'serpiente') {
        slytherin++;
    }

    if (q5 === 'defensa') {
        gryffindor++;
    } else if (q5 === 'encantamientos') {
        ravenclaw++;
    } else if (q5 === 'herbología') {
        hufflepuff++;
    } else if (q5 === 'pociones') {
        slytherin++;
    }

    let result = '';
    if (gryffindor > ravenclaw && gryffindor > hufflepuff && gryffindor > slytherin) {
        result = 'Gryffindor';
    } else if (ravenclaw > gryffindor && ravenclaw > hufflepuff && ravenclaw > slytherin) {
        result = 'Ravenclaw';
    } else if (hufflepuff > gryffindor && hufflepuff > ravenclaw && hufflepuff > slytherin) {
        result = 'Hufflepuff';
    } else if (slytherin > gryffindor && slytherin > ravenclaw && slytherin > hufflepuff) {
        result = 'Slytherin';
    } else {
        result = 'No se pudo determinar la casa. Intenta de nuevo.';
    }

    document.getElementById('result').innerText = `¡Perteneces a ${result}!`;
}