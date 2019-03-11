/*

READ AND SAVE SPEED EQUALS TO INPUT
READ AND SAVE TRACK

IF TRACK IS LURUS
    SPEED EQUALS TO 60
IF TRACK IS TURNING
    SPEED EQUALS TO SPEED MINUS SPEED DIVIDE BY 5
IF TRACK IS UP
    SPEED EQUALS TO SPEED MINUS SPEED DIVIDE BY 2
IF TRACK IS DOWN
    SPEED EQUALS TO SPEED MINUS 30 PERCENT OF CURRENT SPEED

DISPLAY SPEED ON TRACK


SAVE KECEPATAN EQUALS TO 60
READ AND SAVE TRACK AS ANY VALUE
SAVE OUTPUT EQUALS TO 0

IF LINTASAN EQUALS TO LURUS
    SET OUTPUT

*/

function carLine(speed, track){
    switch (track){
        case 'lurus':
            speed = speed;
            break;
        case 'belok':
            speed = speed - (speed/5);
            break;
        case 'tanjakan':
            speed = speed - (speed/2);
            break;
        case 'turunan':
            speed = speed + ((speed * 30)/100);
            break;
    }
    return speed;
}

console.log(carLine(60, 'lurus'))
console.log(carLine(60, 'belok'))
console.log(carLine(60, 'tanjakan'))
console.log(carLine(60, 'turunan'))