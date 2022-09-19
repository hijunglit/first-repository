const quote = document.querySelector('div.quote span:first-child');
const author = document.querySelector('div.quote span:last-child');

const quotes = [
    {
        quote:"The greatest glory in living lies not in never falling, but in rising every time we fall.",
        author:"Nelson Mandela"
    },
    {
        quote:"The way to get started is to quit talking and begin doing. -Walt Disney",
        author:"Walt Disney"
    },
    {
        quote:"Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma, which is living with the results of other people's thinking.",
        author:"Steve Jobs"
    },
    {
        quote:"If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
        author:"Oprah Winfrey"
    },
    {
        quote:"If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
        author:"James Cameron"
    },
    {
        quote:"Life is what happens when you're busy making other plans.",
        author:"John Lennon"
    },
    {
        quote:"When you reach the end of your rope, tie a knot in it and hang on.",
        author:"Franklin D. Roosevelt"
    },
    {
        quote:"Always remember that you are absolutely unique. Just like everyone else.",
        author:"Margaret Mead"
    },
    {
        quote:"It is during our darkest moments that we must focus to see the light.",
        author:"Aristotle"
    },
    {
        quote:"It is during our darkest moments that we must focus to see the light.",
        author:"Ralph Waldo Emerson"
    }
]

function randomQuote() {
    const randomCount = Math.floor(Math.random()*quotes.length);
    quote.innerText = quotes[randomCount].quote;
    author.innerText = quotes[randomCount].author;
}

randomQuote();

// const count = Math.random()*10;
// Math.floor(count);
