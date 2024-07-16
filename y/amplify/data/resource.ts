import { type ClientSchema, a, defineData } from '@aws-amplify/backend';

/*== STEP 1 ===============================================================
The section below creates a Todo database table with a "content" field. Try
adding a new "isDone" field as a boolean. The authorization rule below
specifies that any unauthenticated user can "create", "read", "update", 
and "delete" any "Todo" records.
=========================================================================*/
const schema = a.schema({
  Todo: a
    .model({
      content: a.string(),
    })
    .authorization((allow) => [allow.guest()]),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: 'iam',
  },
});
// amplify/data/resource.ts

// export const projects = [
//   {
//       projectName: "Example Project",
//       projectDesc: "This is an example project.",
//       techstack: "React, TypeScript",
//       workDone: "Developed a component",
//       hostedUrl: "https://example.com",
//       association: "Example Association",
//       impact: "High impact",
//       projectThumbnail: "https://example.com/thumbnail.jpg", // Ensure this field is included
//       images: ["https://example.com/image1.jpg", "https://example.com/image2.jpg"]
//   },
//   // Add more projects as needed
// ];



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



/*== STEP 2 ===============================================================
Go to your frontend source code. From your client-side code, generate a
Data client to make CRUDL requests to your table. (THIS SNIPPET WILL ONLY
WORK IN THE FRONTEND CODE FILE.)

Using JavaScript or Next.js React Server Components, Middleware, Server 
Actions or Pages Router? Review how to generate Data clients for those use
cases: https://docs.amplify.aws/gen2/build-a-backend/data/connect-to-API/
=========================================================================*/

/*
"use client"
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";

const client = generateClient<Schema>() // use this Data client for CRUDL requests
*/

/*== STEP 3 ===============================================================
Fetch records from the database and use them in your frontend component.
(THIS SNIPPET WILL ONLY WORK IN THE FRONTEND CODE FILE.)
=========================================================================*/

/* For example, in a React component, you can use this snippet in your
  function's RETURN statement */
// const { data: todos } = await client.models.Todo.list()

// return <ul>{todos.map(todo => <li key={todo.id}>{todo.content}</li>)}</ul>
