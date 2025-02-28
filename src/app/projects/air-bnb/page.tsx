import ProjectMold from "@/components/ProjectMold";

export default function AirBnb() {
    return (
        <ProjectMold 
            title="Air BnB Search Bar"
            description="An Air BnB site with search bar functionality"
            image="/images/air-bnb.png"
            link="https://parkerjohnson56.github.io/AirBnb-Search/"
            background="During my internship at Global Tech, I worked on an Airbnb mock website to practice responsive web design and JavaScript functionality. We were provided with a starter codebase, but the goal was to make the site fully responsive and implement a functional search bar using JavaScript and objects. This project helped me improve my skills in front-end development, focusing on both UI responsiveness and JavaScript logic."
            problem="The original site was static and lacked interactivity. It wasn't responsive, meaning it didn't adjust well to different screen sizes, and the search bar didn't function. My task was to make the site work across various devices and add JavaScript functionality so users could filter listings based on their search input."
            process="I started by analyzing the provided source code to understand its structure. Next, I worked on coding the search bar functionality using JavaScript and objects to filter Airbnb listings based on user input. I created an array of listing objects, each containing details like location, price, and availability. The JavaScript function searched through this data and displayed matching results. After the functionality was in place, I focused on making the site responsive by using CSS flexbox and media queries to adjust the layout for different screen sizes. Finally, I tested the site on multiple devices to ensure that both the responsiveness and search functionality worked as expected."
            results="By the end of the project, the site was fully responsive, adapting smoothly to different screen sizes. The search bar functioned properly, allowing users to enter a location and see relevant listings. This project helped me gain a deeper understanding of JavaScript objects, DOM manipulation, and how to build a responsive layout."
        />
    )
}
