class Quote {
    constructor(quotes) {
        this.quotes = quotes
        this.beginning = quotes[0]
        this.middle = quotes[1]
        this.end = quotes[2]
    }
    getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }
    generator() {
        const quote = []
        for (let index = 0; index < this.quotes.length; index++) {
            const randInt = this.getRandomInt(this.quotes[index].length)
            const value = this.quotes[index][randInt]
            quote.push(value)
        }
        this.quoteF1 = quote[0]
        this.quoteF2 = quote[1]
        this.quoteF3 = quote[2]
        
        return quote.join(' ')
    }
}

class Display extends Quote {
    displayBeginning() {
        const quoteBeginning = document.getElementById('begin')
        for (let index = 0; index < this.beginning.length; index++) {
            quoteBeginning.innerHTML += "<li> " + this.beginning[index] + " </li>"
        }
    }
    displayMiddle() {
        const quoteMiddle = document.getElementById('middle')
        for (let index = 0; index < this.middle.length; index++) {
            quoteMiddle.innerHTML += "<li> " + this.middle[index] + " </li>"
        }
    }
    displayEnd() {
        const quoteEnd = document.getElementById('end')
        for (let index = 0; index < this.end.length; index++) {
            quoteEnd.innerHTML += "<li> " + this.end[index] + " </li>"
        }
    }
    displayAll() {
        const quoteAll = document.getElementById
            ('quoteParagraph')
        const quoteBeginning = document.getElementById('begin')
        const quoteMiddle = document.getElementById('middle')
        const quoteEnd = document.getElementById('end')

        quoteBeginning.innerHTML = ''
        quoteMiddle.innerHTML = ''
        quoteEnd.innerHTML = ''
        quoteAll.innerHTML = this.generator()

        for (let index = 0; index < this.beginning.length; index++) {
            if (this.quoteF1 !== this.beginning[index]) {
                quoteBeginning.innerHTML += '<li>' + this.beginning[index] + '</li>'
            }
            else {
                quoteBeginning.innerHTML += '<li style="background-color: red;">' + '<span style="color: white;">' + this.beginning[index] + '</span></li>'
            }
        }

        for (let index = 0; index < this.middle.length; index++) {
            if (this.quoteF2 !== this.middle[index]) {
                quoteMiddle.innerHTML += '<li>' + this.middle[index] + '</li>'
            }
            else {
                quoteMiddle.innerHTML += '<li style="background-color: red;">' + '<span style="color: white;">' + this.middle[index] + '</span> </li>'
            }
        }

        for (let index = 0; index < this.end.length; index++) {
            if (this.quoteF3 !== this.end[index]) {
                quoteEnd.innerHTML += '<li>' + this.end[index] + '</li>'
            }
            else {
                quoteEnd.innerHTML += '<li style="background-color: red;">' + '<span style="color: white;">' + this.end[index] + '</span></li>'
            }
        }
    }
}

const quote = new Display([
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
])

quote.displayBeginning()

quote.displayMiddle()

quote.displayEnd()
