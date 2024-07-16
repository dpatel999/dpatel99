// amplify/data/resource.ts

export const about = {
    name: 'Darshan Patel',
    position: 'Full Stack Developer',
    bio: `Full Stack Developer & Technology Enthusiast: With over 5 years of experience, I specialize in creating high-performance web and mobile applications. I have a proven track record in various industries, from startups to large corporations. When I'm not coding, I enjoy exploring new cafes, savoring a cup of tea, and embracing life's adventures one line of code at a time!`,
    socials: {
        linkedIn: 'https://www.linkedin.com/in/dpatel99',
        mail: 'darshanpatel1902@gmail.com',
        github: 'https://github.com/dpatel999',
    },
    details: {
        firstname: 'Darshan',
        lastname: 'Patel',
        email: 'darshanpatel1902@gmail.com',
        nationality: 'Indian',
        degree: "Bachelor's",
        address: 'British Columbia, Canada',
        interests: 'Motorcycling, Learning about new things',
        experience: '5 Years',
    },
    skills: {
        frontend: [
            'HTML',
            'CSS',
            'Scss',
            'Bootstrap',
            'Tailwind',
            'Javascript',
            'ES6',
            'Typescript',
            'jQuery',
            'React Js',
            'Next Js',
            'Redux',
            'Material UI',
            'Ant Design',
            'Framer Motion',
            'Shadcn'
        ],
        backend: [
            'PHP',
            'Node Js',
            'Firebase',
            'Express.js',
            'GraphQL'
        ],
        tools: ['Git', 'Github', 'Postman', 'Jira', 'Confluence', 'Bitbucket', 'Slack', 'Figma', 'Asana'],
        soft: [
            'Time management',
            'Client/Stakeholders Interactions',
            'Communication',
            'Team Collaboration',
            'Agile Development',
            'Problem-Solving',
            'Critical Thinking'
        ],
    },
};

export const education = [
    {
        title: 'Bachelor of Computing Science',
        location: 'Thompson Rivers University',
        date: '2016 - 2020',
        description: 'Focused on software development, data structures, algorithms, and database management. Graduated with honors.',
    },
    {
        title: 'Diploma - Mathematics',
        location: 'Gujarat State Board of Technical Education',
        date: '2014 - 2016',
        description: 'Specialized in advanced mathematics, statistics, and logical reasoning.',
    },
];

export const work = [
    {
        title: 'Shopify/Next.js Developer',
        location: 'Sleep Country, Vancouver, BC',
        date: 'Jun 2023 - Present',
        description: `- Engineered and transitioned the eCommerce platform to a headless architecture using Shopify and Strapi.
- Utilized AWS services for scalable hosting, serverless functions, and robust data storage solutions.
- Developed and deployed new features for the headless eCommerce site, ensuring seamless integration with third-party APIs.
- Applied best practices for frontend performance optimization, reducing load times and enhancing user experience.
- Conducted cross-browser and device testing to ensure compatibility and responsiveness.
- Managed integrations with various third-party systems, including payment gateways and inventory management systems.
- Implemented DevOps practices, including CI/CD pipelines and infrastructure as code (IaC) using AWS CloudFormation and Terraform.
- Ensured application security through the implementation of OAuth, JWT, and adherence to OWASP standards.
- Collaborated with cross-functional teams to stay abreast of industry trends and emerging technologies.`,
    },
    // Additional work experience objects can be added here...
];

export const projects = [
    {
        projectName: 'PolicyGuru',
        projectDesc: 'PolicyGuru offers affordable bundled insurance services, combining health, auto, home, and life insurance into a single, cost-effective package. Users can easily compare, customize, and purchase comprehensive coverage, benefiting from significant savings and convenience. With intuitive design and dedicated support, we make insurance accessible and affordable for everyone.',
        projectThumbnail: '/projects/assets/policyguru/pg-logo.webp',
        techstack: 'ReactJS, RTK(Redux), antDesign',
        workDone: 'Frontend',
        hostedUrl: 'https://policyguru.org.in/',
        association: 'Policy Guru Pvt. Ltd.',
        images: [
            '/projects/assets/policyguru/pg-one.webp',
            '/projects/assets/policyguru/pg-two.webp',
            '/projects/assets/policyguru/pg-three.webp',
            '/projects/assets/policyguru/pg-four.webp',
            '/projects/assets/policyguru/pg-five.webp',
        ],
    },
    {
        projectName: 'CarePal Secure',
        projectDesc: 'CarePal Secure offers bundled health services, combining insurance coverage with discounts on health-related subscriptions and testing. Users can access comprehensive health plans, receive discounted rates on wellness services and medical tests, and enjoy an all-in-one solution for their health needs. With an easy-to-use platform and exceptional customer support, we make managing health affordable and convenient.',
        projectThumbnail: '/projects/assets/carepalsecure/cs-logo.webp',
        techstack: 'ReactJS, React-Bootstrap, antDesign',
        workDone: 'Frontend',
        hostedUrl: 'https://carepalsecure.com',
        association: 'CarePal Secure Pvt. Ltd.',
        images: [
            '/projects/assets/carepalsecure/cs-one.webp',
            '/projects/assets/carepalsecure/cs-two.webp',
            '/projects/assets/carepalsecure/cs-three.webp',
            '/projects/assets/carepalsecure/cs-four.webp',
        ],
    },
    {
        projectName: 'Impactguru',
        projectDesc: 'Impactguru is an online fundraising platform that empowers people, like you, to give to non-profits, individual causes, social enterprises, and start-ups. Our crowdfunding platform allows you to easily raise money online from individuals and organizations that share your passion, each making small donations that add up to a lot, in turn addressing critical social challenges in India.',
        projectThumbnail: '/projects/assets/impactguru/ig-logo.png',
        techstack: 'React, Bootstrap, Scss, HTML, JavaScript, JQuery, Git, Github, PHP, MySQL',
        workDone: 'Frontend',
        hostedUrl: 'http://impactguru.com',
        association: 'Impactguru Crowdfunding Platform',
        images: [
            '/projects/assets/impactguru/ig-1.webp',
            '/projects/assets/impactguru/ig-2.webp',
            '/projects/assets/impactguru/ig-3.webp',
            '/projects/assets/impactguru/ig-4.webp',
            '/projects/assets/impactguru/ig-5.webp',
            '/projects/assets/impactguru/ig-6.webp',
        ],
    },
    // Additional projects can be added here...
];
