const container = document.getElementById("id1");
const root = ReactDOM.createRoot(container);

const image = React.createElement("img", {
    src: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
    style: { width: "200px", borderRadius: "10px" }
});

const textContainer = React.createElement(
    "div",
    { style: { display: "flex", flexDirection: "column", backgroundColor: "brown" } },
    React.createElement(
        "h2",
        { style: { backgroundColor: "lightblue", margin: 0, padding: "10px" } },
        "welcome to react"
    ),
    React.createElement(
        "h2",
        { style: { margin: 0, padding: "10px" } },
        "welcome to react main"
    )
);

const combined = React.createElement(
    "div",
    { style: { display: "flex", alignItems: "center", gap: "20px", justifyContent: "center", padding: "20px" ,backgroundColor:"red"} },
    image,
    textContainer
);

root.render(combined);




