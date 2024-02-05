import React from "react";
import "./styles.css";

export default function App() {
  return (
    <main>
      <Header />
      <AnimalCategory title="Fluffy Fur">
        <Animal emoji="🐕" name="Lucky" description={<p>Very cute dog</p>} />
        <Animal
          emoji="🐈"
          name="Mittens"
          description={<p>A playful kitten</p>}
        />
      </AnimalCategory>
      <AnimalCategory title="Waterproof">
        <Animal
          emoji="🐢"
          name="Archibald"
          description={
            <>
              <p>Super relaxed turtle</p>
              <ul>
                <li>Eats lettuce all the time</li>
                <li>Can sleep in your fridge</li>
              </ul>
            </>
          }
        />
      </AnimalCategory>
      <AnimalCategory title="Wingman">
        <Animal
          emoji="🐣"
          name="Chick Norris"
          description={<p>A nested chick</p>}
        />
      </AnimalCategory>
    </main>
  );
}

function Animal({ emoji, name, description }) {
  return (
    <>
      <h3>
        <AnimalEmoji>{emoji}</AnimalEmoji> {name}
      </h3>
      {description}
      <Button>
        Adopt <strong>{name}</strong>
      </Button>
    </>
  );
}

function AnimalCategory({ title, children }) {
  return (
    <>
      <h2>{title}</h2>
      <section>{children}</section>
    </>
  );
}

function AnimalEmoji({ children }) {
  return <span className="animal-emoji">{children}</span>;
}

function Button({ children }) {
  return (
    <button type="button" className="button">
      {children}
    </button>
  );
}

function Header() {
  return (
    <header>
      <h1>Animal Shelter</h1>
      <p>Please adopt our lovely pets!</p>
    </header>
  );
}
