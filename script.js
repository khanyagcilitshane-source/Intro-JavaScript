const button = document.querySelector('button');
const heading = document.querySelector('h1');
const  moodParagraph = document.querySelector('p');

// 1.Take the button and wait for a prompt using the addEventListener
button.addEventListener("click", function() {
    // 2. Waiting on the prompt to be triggered using "click"
    // 3. When the prompt is triggered, a name will be asked
    const name = prompt("What is your name?");
    // 4. The heading with change due to the textContent
    heading.textContent = `Hi, ${name}!`;


    const mood = prompt("How are you today?");
    moodParagraph.textContent = `Today mood: ${mood}`;
    button.textContent = "Click me again!";
    // console.log allows us to see the output in the console vis insept
    console.log("The button has been clicked!");
    console.log("IT WORKS!");
}
)