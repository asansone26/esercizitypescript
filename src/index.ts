type Car = {
    id: number | null;
    marca: string | null;
    modello: string | null;

}
var cars: Car[];
cars = [{ id: 1, marca: "fiat", modello: "bravo" }, { id: 2, marca: "ford", modello: "kuga" }, { id: 3, marca: "lancia", modello: "y" }, { id: 4, marca: "lamborghini", modello: "elett" }, { id: 5, marca: "ferrari", modello: "bomba" }]
function delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));

}
async function stampa() {

    for (let i = 0; i < cars.length; i++) {
        console.log(`macchina ${i+1}\n id:${cars[i].id}\n marca:${cars[i].marca}\n modello:${cars[i].modello}\n`)
        await delay(2000);
    }
    console.log("fine popolamento");
}
console.log("inizio popolamento");
stampa();







    



    
     


