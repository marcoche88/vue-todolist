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
            "2021-07-29: Fare la spesa",
            "2021-07-29: Andare in farmacia",
            "2021-07-29: Fare benzina",
            "2021-07-29: Pulire casa"
        ],
        newItem: "",
        newDate: "",
    },
    methods: {
        // rimuove elemento selezionato dalla lista con il metodo splice
        removeItem(index) {
            this.toDoList.splice(index, 1);
        },
        // aggiunge elemento inserito dall'input alla lista
        addItem() {
            // BONUS validazione input
            if (this.newItem && this.newItem.trim() !== "" && this.newDate) {
                const newItemDate = `${this.newDate}: ${this.newItem}`
                this.toDoList.push(newItemDate);
            }
            this.newItem = "";
            this.newDate = "";
        }
    },
    created: function currentDate() {
        const d = new Date();
        const day = d.getDate();
        const year = d.getFullYear();
        const month = ((d.getMonth() + 1).toString().length === 1) ? `0${d.getMonth() + 1}` : d.getMonth() + 1;
        this.newDate = `${year}-${month}-${day}`
    },
});