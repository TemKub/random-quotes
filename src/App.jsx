import { useState, useEffect } from "react";
import "./App.css";
import quotes from "./quotes";

function App() {

    const [quote, setQuote] = useState(null);
    const [loading, setLoading] = useState(true);

    function getRandomQuote() {
        setLoading(true);

        setTimeout(() => {
            const randomIndex = Math.floor(Math.random() * quotes.length);
            const randomQuote = quotes[randomIndex];

            setQuote(randomQuote);
            setLoading(false);
        }, 1000);
    }

    useEffect(() => {
        getRandomQuote();
    }, []);

    return (
        <div className="container">
            <h1>Цитаты Стетхема</h1>

            {quote && (
                <div className="quote-card">
                    <p className="quote-text">{quote.text}</p>
                    <p className="quote-author">{quote.author}</p>

                    <button className="quote-button" onClick={getRandomQuote}>
                        Выдать мудрость
                    </button>
                </div>
            )}
        </div>
    );
}

export default App;