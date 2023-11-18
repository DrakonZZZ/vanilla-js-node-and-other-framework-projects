import { useState, useEffect } from "react";
import "./styles.css";

const quotes = [
  {
    id: 1,
    quote: "Life is 10% what happens to me and 90% of how I react to it.",
    author: "Charles Swindoll",
    color: "#363062"
  },
  {
    id: 2,
    quote:
      "I’ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
    author: "Maya Angelou",
    color: "#F4CE14"
  },
  {
    id: 3,
    quote: "You miss 100% of the shots you don’t take.",
    author: "Wayne Gretzky",
    color: "#FF6969"
  },
  {
    id: 4,
    quote: "There are no traffic jams along the extra mile.",
    author: "Roger Staubach",
    color: "#468B97"
  }
];

export default function App() {
  const [quoteIdx, setQuoteIdx] = useState(0);
  const quote = quotes[quoteIdx];
  const [fade, setFade] = useState(false);

  useEffect(() => {
    setFade(true);
    const timeout = setTimeout(() => {
      setFade(false);
    }, 500);

    return () => clearInterval(timeout);
  }, [quoteIdx]);

  const changeQuote = () => {
    setQuoteIdx((prev) => (prev + 1) % quotes.length);
  };

  return (
    <main style={{ backgroundColor: quote.color }}>
      <section id="quote-box">
        <div className={fade ? "fade" : ""}>
          <p id="text" style={{ color: quote.color }}>
            <span className="quotes" style={{ color: quote.color }}>
              "
            </span>
            {quote.quote}
          </p>
          <p id="author" style={{ color: quote.color }}>
            - {quote.author}
          </p>
        </div>
        <div className="buttons">
          <a
            href="twitter.com/intent/tweet"
            id="tweet-quote"
            style={{ backgroundColor: quote.color }}
          >
            Tweet
          </a>
          <button
            id="new-quote"
            style={{ backgroundColor: quote.color }}
            onClick={changeQuote}
          >
            New quote
          </button>
        </div>
      </section>
      <div className="creator">by Drakonz</div>
    </main>
  );
}
