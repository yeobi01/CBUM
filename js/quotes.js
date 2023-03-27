const quotes = [
    {
    quote: `\nSimple. If it shakes, it's fat.`,
    author: 'Arnold Alois Schwarzenegger'
    },
    {
    quote: `\nIf you don't find the time, if you don't do the work, you don't get the results.`,
    author: 'Arnold Alois Schwarzenegger'
    },
    {
    quote: '\nAnyone can be healthier and stronger. It merely requires dedication and effort.',
    author: 'Lou Ferrigno'
    },
    {
    quote: '\nTrue toughness is not measured by the size of your muscles,\n but by your ability to endure difficult situations and persevere to the end.',
    author: 'Jay Cutler'
    },
    {
    quote: '\nNothing is impossible. You have not dreamed it yet.',
    author: 'Frank Zane'
    },
    {
    quote: `\nBodybuilding is not just about building a body, it's about building a philosophy of life.`,
    author: 'Steve Reeves'
    },
    {
    quote: '\nSuccess is the result of hard work and diligent effort.',
    author: 'Ronnie Coleman'
    },
    {
    quote: '\nThe first step to changing yourself is getting up and moving.',
    author: 'Kai Greene'
    },
    {
    quote: '\nWithout consistent effort and perseverance, it is difficult to achieve your goals.',
    author: 'Phil Heath'
    },
    {
    quote: '\nTo achieve success in bodybuilding requires passion, sacrifice, and dedication.',
    author: 'Rich Gaspari'
    }
];

const quote = document.querySelector("#quote");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote + '\n - ' + todaysQuote.author + ' - ';