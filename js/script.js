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
            { text: "2021-07-29: Fare la spesa", done: false },
            { text: "2021-07-29: Andare in farmacia", done: false },
            { text: "2021-07-29: Fare benzina", done: false },
            { text: "2021-07-29: Pulire casa", done: false }
        ],
        newItem: "",
        newDate: "",
        isActive: true,
        searchItem: "",
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
                this.toDoList.push({ text: newItemDate, done: false });
                this.toggleAddInput();
            } else {
                this.newItem = "";
                this.currentDate();
            }
        },
        // inserisce nei data di vue la data corrente
        currentDate() {
            const d = new Date();
            const day = d.getDate();
            const year = d.getFullYear();
            const month = ((d.getMonth() + 1).toString().length === 1) ? `0${d.getMonth() + 1}` : d.getMonth() + 1;
            this.newDate = `${year}-${month}-${day}`;
        },
        // attiva/disattiva inserimento input 
        toggleAddInput() {
            this.isActive = !this.isActive;
            this.newItem = "";
            this.currentDate();
        },
        // ricerca sulla lista 
        filterItem(item) {
            if (!this.searchItem || this.searchItem.trim() === "") {
                return true;
            }
            const currentItem = item.toLowerCase();
            return currentItem.includes(this.searchItem.toLowerCase()) ? true : false;
        },
        // toggle checkbox 
        toggleDone(index) {
            this.toDoList = this.toDoList.map((item, i) => {
                if (i === index) {
                    return { text: item.text, done: !item.done };
                } else {
                    return item;
                }
            });
        },
        // ritorna vero o falso se l'elemento della lista è stato selezionato
        isSelected(index) {
            return this.toDoList[index].done;
        },
        selectAll() {
            this.toDoList = this.toDoList.map((item) => {
                return { text: item.text, done: true };
            });
        },
        deselectAll() {
            this.toDoList = this.toDoList.map((item) => {
                return { text: item.text, done: false };
            });
        },
        deleteAll() {
            this.toDoList = [];
        },
    },
    // richiama la funzione currentDate all'avvio della pagina
    created() {
        this.currentDate();
    },
});