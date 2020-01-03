const quotes = {
    type: {
        dreamQuote: [
            [
                "You are never too old",
                "The future belong",
                "Dream and give yourself",
                "A room without",
                "Be the change"
            ],
            [
                "to those who believe",
                "to set another goal",
                "permission to envision",
                "books is like a",
                "that you wish to"
            ],
            [
                "or to dream a new dream",
                "a you that you choose to be.",
                "in the beauty of their dreams!",
                "body without a soul",
                "see in the world"
            ]
        ],
        successQuote: [
            [
                "The journey",
                "You can't beat",
                "The only man",
                "If you tell",
                "To be your self in the world that"
            ],

            [
                "of a thousand miles",
                "the person who",
                "who never makes mistakes",
                "the truth you",
                "is constantly trying to make you something else"
            ],

            [
                "begins with a single step.",
                "never gives up!",
                "is the man who never does anything",
                "don't have to remember anything",
                "is the greatest accomplishment"
            ]
        ]
    },
    getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    },
    generator(type) {
        const quotes = this.type[type]
        const quote = []
        for (let index = 0; index < quotes.length; index++) {
            const randInt = this.getRandomInt(quotes[index].length)
            const value = quotes[index][randInt]

            quote.push(value)
        }
        return quote.join(' ')
    },
    generateType() {
        const type = this.type
        const types = document.getElementById('wrapperId').querySelector('.type');
        typeLength = (Object.keys(type).length)
        for (let index = 0; index < typeLength; index++) {
            const typeOption = document.createElement('option')
            typeOption.text = Object.keys(type)[index];
            typeOption.value = Object.keys(type)[index]
            types.add(typeOption)
        }
    }
}


function userInput() {
    let typeOfQuotes = document.getElementById('wrapperId').querySelector('.type').value

    let displayArea = document.getElementById('wrapperId').querySelector('.quotesParagraph')

    let numberOfQuotes = document.getElementById('wrapperId').querySelector('.number').value

    displayArea.innerHTML = '';

    for (var i = 0; i < numberOfQuotes; i++) {
        if (typeOfQuotes === 'dreamQuote') {
            displayArea.innerHTML += '<p>' + quotes.generator('dreamQuote') + '</p>'
        }
        else {
            displayArea.innerHTML += '<p>' + quotes.generator('successQuote') + '</p>'
        }
    }
}

quotes.generateType()
