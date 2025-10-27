let parent  = document.getElementById("container");
const root = ReactDOM.createRoot(parent);
const h2 = React.createElement("h2",{style:{backgroundColor:"red",color:"white"}}, "Hello World");
root.render(h2);


const profile = React.createElement("div",{style:{backgroundColor:"purple",color:"white"}}, [
    React.createElement("h2",{style:{backgroundColor:"red",color:"white"}}, "Name: Ansh Tyagi"),
        React.createElement("p",{style:{backgroundColor:"green",color:"white"}}, "Rollno: 2300320130052"),
        React.createElement("p",{style:{backgroundColor:"green",color:"white"}}, "Branch: IT"),
        React.createElement("p",{style:{backgroundColor:"green",color:"white"}}, "Section: C"),
        React.createElement("p",{style:{backgroundColor:"green",color:"white"}}, "College: ABES ENGINEERING COLLEGE"),
    React.createElement("img",{src:"https://plus.unsplash.com/premium_photo-1673029926899-2625d5f4b71a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8",style:{width:"100px",height:"100px"}}),
]);
root.render(profile);
