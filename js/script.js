/*
Descrizione:
Rifare l'esercizio della to do list come fatto assieme in classe:
- stampare in pagina un item per ogni elemento contenuto in un array
- ogni item ha una "x" associata: cliccando su di essa, l'item viene rimosso dalla lista
- predisporre un input per aggiungere un nuovo item alla lista: ciccando su un pulsante,
il testo digitato viene aggiunto alla lista.
BONUS 1: Fare un controllo di validazione per non aggiungere degli item vuoti.
BONUS 2: Dedicarsi alla parte grafica aggiungendo un tocco personale e gestendo anche
il mobile.
*/

Vue.config.devtools = true;

const app = new Vue({
    el: "#root",
    data: {
        toDoList: [
            "Fare la spesa",
            "Andare in farmacia",
            "Fare benzina",
            "Pulire casa"
        ],
    },
    methods: {
        // rimuove elemento selezionato dalla lista con il metodo splice
        removeItem(index) {
            this.toDoList.splice(index, 1);
        },
    },
});