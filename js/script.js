const {createApp} = Vue;

createApp({
    
    data() {
        return {

            // contatore per amici
            indexForFriend: 0,

            // variabile per v-model per aggiungere mio messaggio che scrivo
            myMessage: "",

            // messaggio di risposta random per tutti gli amici vuoto
            randomMessageForAll: "",

            // variabile per v-model per cercare amico 
            searchedString: "",
            // Array vuoto in cui mettere contatti da filtrare che parte da stringa
            filteredContacts: "", 
            // Copia per backup di tutti i contatti 
            originalContacts: "", 

            contacts: [
                {
                    name: 'Michele',
                    avatar: './img/avatar_1.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: './img/avatar_2.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: './img/avatar_3.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro B.',
                    avatar: './img/avatar_4.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro L.',
                    avatar: './img/avatar_5.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Claudia',
                    avatar: './img/avatar_6.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Federico',
                    avatar: './img/avatar_7.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Davide',
                    avatar: './img/avatar_8.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received'
                        }
                    ],
                }
            ]
            


            
        }
    },

    
    mounted() {

        // Mi copio tutti i contatti originali in array di backup
        this.originalContacts = this.contacts;

        // Mi copio tutti i contatti anche nei filtrati che all'inizio saranno gli stessi
        this.filteredContacts = this.contacts;

    },

    methods: {

        // Funzione che al click mi fa vedere la conversazione 
        showConversation(index) {
            this.indexForFriend = index;
        },
    
        // Funzione che aggiunge un mio messaggio nella chat aperta
        addMessage() {

            // Verifico che l'input del messaggio non sia vuoto
            if (this.myMessage.trim() !== '') {

                // Aggiungo il messaggio inviato dall'utente
                this.contacts[this.indexForFriend].messages.push({
                    date: '23/02/2024 18:30:55',
                    message: this.myMessage,
                    status: 'sent'
                });

                // Pulisco l'input del messaggio dopo l'invio
                this.myMessage = '';
    
                // Chiamo la funzione per aggiungere una risposta casuale dopo 1 sec.
                setTimeout(this.addRandomAnswer, 1000);
            }

        },
    
        // Funzione per aggiungere una risposta casuale per tutti
        addRandomAnswer() {

            // Aggiungo risposta casuale sia nella data che nel messaggio
            this.contacts[this.indexForFriend].messages.push({
                date: '23/02/2024 18:30:56',
                message: 'Bene, ma non benissimo!!!',
                status: 'received'
            });

        },

        // Funzione per cercare amici per nome
        searchFriend() {

            // Verifico che l'input del messaggio non sia vuoto
            if (this.searchedString.trim() !== '') {

                // Filtro i contatti in base alla stringa cercata
                this.filteredContacts = this.originalContacts.filter(function(contact) {
                    return contact.name.toLowerCase().includes(this.searchedString.toLowerCase());
                });

            } else {

                // reimposto a array di backup
                this.filteredContacts = this.originalContacts;

            }


        },

    },

}).mount("#app");