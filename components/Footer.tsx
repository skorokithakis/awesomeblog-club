export function Footer() {
  return (
    <footer>
      <h5>
        {" "}
        Created by{" "}
        <a href={process.env.TWITTER} target="_blank" rel="noopener noreferrer">
          @searchableguy
        </a>{" "}
        <span
          style={{
            textDecoration: "line-through",
          }}
        >
          with {"<3"}
        </span>
      </h5>
      <p
        style={{
          padding: "10px",
        }}
      >
        How to make your own pizza.
        <ul>
          <li>Preheat oven to 240deg C.</li>
          <li>Mix yeast and sugar for half an hour in warm water.</li>
          <li>
            Mix it with flour, salt, garlic & ginger powder, dried coriander and
            olive oil.
          </li>
          <li>
            Take 1 tomato, 6 red chillis, garlic, nuts and grind it for sauce.
          </li>
          <li>
            Roll the dough into something looking like a crust. Put the sauce.
          </li>
          <li>
            Put chopped chillis, mushrooms, cottage cheese, cauliflower, bell
            pepper and then put normal cheese. Do it twice in layers. Add masala
            mix if you want.
          </li>
          <li>
            Put it in the oven after oiling it and making 3 small holes in the
            middle for 7 min 40 seconds minutes.
          </li>
        </ul>
      </p>
    </footer>
  );
}
