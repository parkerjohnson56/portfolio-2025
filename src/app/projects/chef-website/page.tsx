import ProjectMold from "@/components/ProjectMold";

export default function ChefWebsite() {
    return (
        <ProjectMold 
            title="Chef Website"
            description="A website for a chef"
            image="/images/chef-website.png"
            link="https://pennieskitchen.com/"
            background="For my senior project at Arizona State University, I wanted to put my newly learned skills to the test by building a chef website. After recently learning React at my internship, I decided to use Next.js to make this project shine. The goal was to create a dynamic and engaging website that not only showcased a chef’s background but also incorporated interactive features like an email subscription service and scalable recipe ingredients."
            problem="There was no existing website, so I had to build everything from scratch. I wanted to ensure the site was not only well-structured but also included functional features that demonstrated my proficiency with Next.js and React. The challenge was to integrate an email subscription service that actually worked and allowed users to sign up, automatically sending their information to an Excel spreadsheet. Additionally, I needed to implement a scalable recipe feature that dynamically adjusted ingredient quantities based on the desired serving size."
            process="I started my website process in the same place I begin all my projects—a journal and Figma. I first created a wireframe to plan the layout and user flow before writing any code. To stay organized and on track, I structured the project with week-by-week milestones. In the first week, I focused on building the home page, ensuring it had a clean, visually appealing design while setting up the core structure in Next.js. The second week was dedicated to developing the recipes landing page, which serves as a hub for all available recipes, making it easy for users to browse. In the third week, I created individual recipe pages and implemented the scalable ingredient feature that dynamically adjusts quantities based on user input. By the end of the third week, I added the email subscription service, ensuring sign-ups were automatically sent to a Google Sheets database for easy data management. This was also the first project where I purchased a custom domain, which gave me the opportunity to learn how to register and connect a URL to a deployed Next.js application. The website was successfully deployed via Vercel, allowing for smooth performance and continuous integration. By following a structured timeline and breaking the project into milestones, I was able to refine my development process while strengthening my skills in Next.js, API integration, and user-focused design."
            results="By the end of the project, I had successfully created a fully functional chef website that demonstrated my ability to work with Next.js and React. The email subscription service worked seamlessly, collecting user data in an organized way, while the scalable recipe feature made it easy to adjust ingredient portions dynamically. This project provided valuable hands-on experience in building a responsive and interactive web application while strengthening my skills in frontend development and data integration.

"
        />
    )
}

