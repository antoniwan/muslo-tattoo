import "./App.css";

const CharacterGrid = ({ string }) => {
  let charactersMarkup = [];
  string.split("").map((character, index) => {
    if (character !== " ") {
      charactersMarkup.push(
        <div key={`${index}-${character}`} className="character-wrapper">
          <div
            className={`character-item character-item-${character} character-item-${character}-${index}`}
          >
            {character}
          </div>
        </div>
      );
    }
    return true;
  });
  return charactersMarkup;
};

function App() {
  const affirmations = ["do better", "confia en tus sentidos", "eres valioso"];
  const affirmationsString = affirmations.join("");
  return (
    <div className="tattoo-area">
      <div className="tattoo-area-wrapper">
        <CharacterGrid string={affirmationsString} />
      </div>
    </div>
  );
}

export default App;
