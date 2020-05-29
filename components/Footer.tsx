export function Footer() {
  return (
    <footer>
      <h6>
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
        <p
          style={{
            marginTop: 10,
          }}
        >
          I mean, I am not gonna put a generic message here so you can't
          complain about it. ;3
        </p>
      </h6>
    </footer>
  );
}
