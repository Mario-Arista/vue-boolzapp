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

            contacts: [
                {
                    name: 'Rag. Filini',
                    avatar: './img/avatar_1.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2024 15:30:55',
                            message: 'Domani giochiamo a tennis?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2024 15:50:00',
                            message: "Va bene ragioniere, però o giochiamo la mattina all'alba o niente",
                            status: 'received'
                        },
                        {
                            date: '10/01/2024 16:15:22',
                            message: "Ci sarà un po' freddino ma va bene...",
                            status: 'sent'
                        },
                    ]

                },

                {
                    name: 'Megadirettore Galattico',
                    avatar: './img/avatar_2.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '19/02/2024 16:30:00',
                            message: 'Fantozzi, è convocato nel mio ufficio domani!',
                            status: 'received'
                        },
                        {
                            date: '19/02/2024 16:30:55',
                            message: 'Per cosa Megadirettore? Se posso chiedere... umilmente...',
                            status: 'sent'
                        },
                        {
                            date: '19/02/2024 16:35:00',
                            message: "Deve nuotare nel mio acquario umano!",
                            status: 'received'
                        },
                        {
                            date: '20/012/2024 15:30:55',
                            message: "Ahhhhh com'è umano lei!",
                            status: 'sent'
                        }
                    ]
                },

                {
                    name: 'Folagra',
                    avatar: './img/avatar_3.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '18/02/2024 10:10:40',
                            message: 'Dobbiamo pensare ad una cogestione che sia proliferante in senso comune',
                            status: 'received'
                        },
                        {
                            date: '18/02/2024 10:20:10',
                            message: 'certo certo',
                            status: 'sent'
                        },
                        {
                            date: '18/02/2024 16:15:22',
                            message: 'E allora cosa dobbiamo fare? È a monte che dobbiamo distruggere!!!',
                            status: 'received'
                        },
                        {
                            date: '18/02/2024 16:16:22',
                            message: 'Hai capito?',
                            status: 'received'
                        }
                    ]
                },
                {
                    name: 'Sig.na Silvani',
                    avatar: './img/avatar_4.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/02/2024 15:30:55',
                            message: 'Io sono stato azzurro di sci!',
                            status: 'sent'
                        },
                        {
                            date: '10/02/2024 15:40:00',
                            message: 'Eh?',
                            status: 'received'
                        },
                        {
                            date: '10/02/2024 15:50:55',
                            message: 'Io sono stato nella nazionale di sci! Ma sono dieci anni che non scio',
                            status: 'sent'
                        },
                        {
                            date: '10/02/2024 15:50:58',
                            message: 'Come?',
                            status: 'received'
                        },
                        {
                            date: '10/02/2024 16:50:55',
                            message: 'Sto dicendo che saranno trenta, trentacinque anni che non vedo un paio di sci!',
                            status: 'sent'
                        },
                    ]
                },
                {
                    name: 'Pina',
                    avatar: './img/avatar_5.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '20/02/2024 08:30:55',
                            message: 'Preparami la frittatona di cipolle stasera!',
                            status: 'sent'
                        },
                        {
                            date: '20/02/2024 08:31:55',
                            message: 'Va bene!',
                            status: 'received'
                        },
                        {
                            date: '20/02/2024 08:35:55',
                            message: 'Con la birra ghiacciata!',
                            status: 'sent'
                        },
                    ],
                },
                {
                    name: 'Mariangela',
                    avatar: './img/avatar_6.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '20/02/2020 08:15:55',
                            message: 'Buongiorno scimmiett... Mariangela mia',
                            status: 'sent'
                        },
                        {
                            date: '20/02/2020 08:17:55',
                            message: 'Ciao papi!',
                            status: 'received'
                        },
                    ]
                },
                {
                    name: 'Guidobaldo Maria Riccardelli',
                    avatar: './img/avatar_7.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '17/02/2024 15:30:55',
                            message: 'Stasera è convocato per il Cineclub! Vedremo un capolavoro assoluto.. la Corazzata Kotiomkin!',
                            status: 'received'
                        },
                        {
                            date: '17/02/2024 15:36:55',
                            message: "Ma stasera c'è Italia Inghilterra",
                            status: 'sent'
                        },
                        {
                            date: '17/02/2024 15:37:55',
                            message: 'Non può mancare!',
                            status: 'received'
                        },
                    ]
                },
                {
                    name: 'Calboni',
                    avatar: './img/avatar_8.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Stasera prendiamo tre scotcs',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: "Cos'è che beviamo, Calboni?",
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Tre scotcs!',
                            status: 'received'
                        }
                    ]
                },
                {
                    name: 'Maestro Canello',
                    avatar: './img/avatar_9.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '31/12/2023 22:30:00',
                            message: "Che capodano fantastico! Grazie maestro!",
                            status: 'sent'
                        }
                    ]
                }
            ]
            


            
        }
    },

    
    created() {

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
                this.filteredContacts = this.contacts.filter(contact =>
                    contact.name.toLowerCase().includes(this.searchedString.toLowerCase())
                );


            } else {

                // reimposto a array originale
                this.filteredContacts = [...this.contacts];

            }


        },

    },

}).mount("#app");