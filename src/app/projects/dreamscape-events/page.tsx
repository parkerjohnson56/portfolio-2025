import ProjectMold from "@/components/ProjectMold";

export default function DreamscapeEvents() {
    return (
        <ProjectMold 
            title="Dreamscape Events"
            description="An interactive event planning website with minigames"
            image="/images/dreamscape-events.png"
            link="https://parkerjohnson56.github.io/Dreamscape-Events/"
            background="For my JavaScript class in college, I built a mock website for a business called Dreamscape Events to showcase my ability to work with the DOM and JavaScript. This project focused on interactive functionality rather than responsiveness, allowing me to apply what I had learned about manipulating the DOM to create engaging user experiences."
            problem="There was no website to begin with, so I had to build everything from scratch. The challenge was to create a fully functional site and use JavaScript to add form validation, an interactive minigame, and a package carousel that dynamically updated the content. The goal was to demonstrate my ability to structure a webpage and integrate JavaScript for a more dynamic user experience."
            process="I started by building the site structure using HTML and CSS, designing a clean layout that would later be enhanced with JavaScript functionality. Once the foundation was set, I focused on writing JavaScript to implement three key features. First, I added form validation to ensure that required fields like name, email, and event details were properly filled before submission. Next, I created a small fortune teller minigame where users had to guess and match a randomly generated number, with the DOM updating to provide instant feedback. Lastly, I built a package carousel that allowed users to browse different event packages by clicking arrows, dynamically changing the displayed content using JavaScript. After completing these features, I tested the site to ensure everything worked as expected and made final refinements to improve functionality."
            results="By the end of the project, I had created a fully functional website from scratch with interactive elements that showcased my ability to use JavaScript effectively. The form validation ensured smoother user input, the minigame provided an engaging experience, and the package carousel made browsing options seamless. This project gave me hands-on experience in building a complete site and integrating JavaScript to enhance user interaction."
        />
    )
}
