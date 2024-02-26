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
            filteredContacts: [],

            // Variabile booleana per cambiare tema (light / dark)
            darkTheme: false,
            

            contacts: [
                {
                    name: 'Rag. Filini',
                    avatar: './img/avatar_1.jpg',
                    visible: true,
                    random: "Batti lei?!",
                    messages: [
                        {
                            date: '10/01/2024 15:30:55',
                            message: 'Domani giochiamo a tennis?',
                            status: 'sent',
                            showedFilter: false
                        },
                        {
                            date: '10/01/2024 15:50:00',
                            message: "Va bene ragioniere, però o giochiamo la mattina all'alba o niente",
                            status: 'received',
                            showedFilter: false
                        },
                        {
                            date: '10/01/2024 16:15:22',
                            message: "Ci sarà un po' freddino ma va bene...",
                            status: 'sent',
                            showedFilter: false
                        },
                    ]

                },

                {
                    name: 'Megadirettore Galattico',
                    avatar: './img/avatar_2.jpg',
                    visible: true,
                    random: "Fantozzi, è licenziato!",
                    messages: [
                        {
                            date: '19/02/2024 16:30:00',
                            message: 'Fantozzi, è convocato nel mio ufficio domani!',
                            status: 'received',
                            showedFilter: false
                        },
                        {
                            date: '19/02/2024 16:30:55',
                            message: 'Per cosa Megadirettore? Se posso chiedere... umilmente...',
                            status: 'sent',
                            showedFilter: false
                        },
                        {
                            date: '19/02/2024 16:35:00',
                            message: "Deve nuotare nel mio acquario umano!",
                            status: 'received',
                            showedFilter: false
                        },
                        {
                            date: '20/012/2024 15:30:55',
                            message: "Ahhhhh com'è umano lei!",
                            status: 'sent',
                            showedFilter: false
                        }
                    ]
                },

                {
                    name: 'Folagra',
                    avatar: './img/avatar_3.jpg',
                    visible: true,
                    random: "Viva la classe operaia!",
                    messages: [
                        {
                            date: '18/02/2024 10:10:40',
                            message: 'Dobbiamo pensare ad una cogestione che sia proliferante in senso comune',
                            status: 'received',
                            showedFilter: false
                        },
                        {
                            date: '18/02/2024 10:20:10',
                            message: 'certo certo',
                            status: 'sent',
                            showedFilter: false
                        },
                        {
                            date: '18/02/2024 16:15:22',
                            message: 'E allora cosa dobbiamo fare? È a monte che dobbiamo distruggere!!!',
                            status: 'received',
                            showedFilter: false
                        },
                        {
                            date: '18/02/2024 16:16:22',
                            message: 'Hai capito?',
                            status: 'received',
                            showedFilter: false
                        }
                    ]
                },
                {
                    name: 'Sig.na Silvani',
                    avatar: './img/avatar_4.jpg',
                    visible: true,
                    random: "Fantocci",
                    messages: [
                        {
                            date: '10/02/2024 15:30:55',
                            message: 'Io sono stato azzurro di sci!',
                            status: 'sent',
                            showedFilter: false
                        },
                        {
                            date: '10/02/2024 15:40:00',
                            message: 'Eh?',
                            status: 'received',
                            showedFilter: false
                        },
                        {
                            date: '10/02/2024 15:50:55',
                            message: 'Io sono stato nella nazionale di sci! Ma sono dieci anni che non scio',
                            status: 'sent',
                            showedFilter: false
                        },
                        {
                            date: '10/02/2024 15:50:58',
                            message: 'Come?',
                            status: 'received',
                            showedFilter: false
                        },
                        {
                            date: '10/02/2024 16:50:55',
                            message: 'Sto dicendo che saranno trenta, trentacinque anni che non vedo un paio di sci!',
                            status: 'sent',
                            showedFilter: false
                        },
                    ]
                },
                {
                    name: 'Pina',
                    avatar: './img/avatar_5.jpg',
                    visible: true,
                    random: "Ugo, ma che ti è successo?",
                    messages: [
                        {
                            date: '20/02/2024 08:30:55',
                            message: 'Preparami la frittatona di cipolle stasera!',
                            status: 'sent',
                            showedFilter: false
                        },
                        {
                            date: '20/02/2024 08:31:55',
                            message: 'Va bene!',
                            status: 'received',
                            showedFilter: false
                        },
                        {
                            date: '20/02/2024 08:35:55',
                            message: 'Con la birra ghiacciata!',
                            status: 'sent',
                            showedFilter: false
                        },
                    ],
                },
                {
                    name: 'Mariangela',
                    avatar: './img/avatar_6.jpg',
                    visible: true,
                    random: "Papinoooooo",
                    messages: [
                        {
                            date: '20/02/2020 08:15:55',
                            message: 'Buongiorno scimmiett... Mariangela mia',
                            status: 'sent',
                            showedFilter: false
                        },
                        {
                            date: '20/02/2020 08:17:55',
                            message: 'Ciao papi!',
                            status: 'received',
                            showedFilter: false
                        },
                    ]
                },
                {
                    name: 'Guidobaldo Maria Riccardelli',
                    avatar: './img/avatar_7.jpg',
                    visible: true,
                    random: "Che capolavoro la Corazzata Kotiomkin!",
                    messages: [
                        {
                            date: '17/02/2024 15:30:55',
                            message: 'Stasera è convocato per il Cineclub! Vedremo un capolavoro assoluto.. la Corazzata Kotiomkin!',
                            status: 'received',
                            showedFilter: false
                        },
                        {
                            date: '17/02/2024 15:36:55',
                            message: "Ma stasera c'è Italia Inghilterra",
                            status: 'sent',
                            showedFilter: false
                        },
                        {
                            date: '17/02/2024 15:37:55',
                            message: 'Non può mancare!',
                            status: 'received',
                            showedFilter: false
                        },
                    ]
                },
                {
                    name: 'Calboni',
                    avatar: './img/avatar_8.jpg',
                    visible: true,
                    random: "Si dice scotcs",
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Stasera prendiamo tre scotcs',
                            status: 'received',
                            showedFilter: false
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: "Cos'è che beviamo, Calboni?",
                            status: 'sent',
                            showedFilter: false
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Tre scotcs!',
                            status: 'received',
                            showedFilter: false
                        }
                    ]
                },
                {
                    name: 'Maestro Canello',
                    avatar: './img/avatar_9.jpg',
                    visible: true,
                    random: "Vuole un autografo?",
                    messages: [
                        {
                            date: '31/12/2023 22:30:00',
                            message: "Che capodano fantastico! Grazie maestro!",
                            status: 'sent',
                            showedFilter: false
                        }
                    ]
                }
            ]
            


            
        }
    },

    
    created() {

        // Mi copio tutti i contatti anche nei filtrati che all'inizio saranno gli stessi
        this.filteredContacts = [...this.contacts];

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
                this.filteredContacts[this.indexForFriend].messages.push({
                    date: '23/02/2024 18:30:55',
                    message: this.myMessage,
                    status: 'sent',
                    showedFilter: false,
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
            this.filteredContacts[this.indexForFriend].messages.push({
                date: '23/02/2024 18:30:56',
                message: this.contacts[this.indexForFriend].random,
                status: 'received',
                showedFilter: false
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

        // Funzione per mostare pop up per cancellare messaggi
        myFilter(messageIndex) {
            
            this.filteredContacts[this.indexForFriend].messages[messageIndex].showedFilter = !this.filteredContacts[this.indexForFriend].messages[messageIndex].showedFilter;
            
        },

        // Funzione per cancellare messaggi
        deleteMessage(messageIndex) {

            // Ottengo il contatto attivo
            const activeContact = this.filteredContacts[this.indexForFriend];

            // Rimuovo il messaggio dall'array messages del contatto attivo
            activeContact.messages.splice(messageIndex, 1);
        },

        // Funzione per cambiare tema
        changeTheme() {
            this.darkTheme = !this.darkTheme;
        }

    },

}).mount("#app");