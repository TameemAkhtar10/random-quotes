const users = [
  {
    fullName: "Aarav Mehta",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    profession: "UX Designer",
    description: "Designs apps that feel human. Loves coffee & pixel-perfect details.",
    tags: ["UI/UX", "Design Systems", "Freelancer"]
  },
  {
    fullName: "Emily Carter",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    profession: "Software Engineer",
    description: "Writes clean code and breaks things just to fix them better.",
    tags: ["React", "TypeScript", "Open Source", "Tech Speaker"]
  },
  {
    fullName: "Lucas Hernandez",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    profession: "Product Manager",
    description: "Builds products people love. Obsessed with roadmaps & GRPR.",
    tags: ["Product", "Scrum", "UX Research"]
  },
  {
    fullName: "Sofia Williams",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    profession: "Frontend Developer",
    description: "Converts coffee into beautiful web pages.",
    tags: ["JavaScript", "CSS", "Accessibility"]
  },
  {
    fullName: "Ryan Kim",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    profession: "Mobile App Developer",
    description: "Builds beautiful apps. Android fanboy. Loves Flutter.",
    tags: ["Flutter", "Kotlin", "UI Animations"]
  },
  {
    fullName: "Mia Johnson",
    image: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7",
    profession: "Data Scientist",
    description: "Finding stories in numbers & magic in machine learning.",
    tags: ["Python", "Machine Learning", "AI"]
  },
  {
    fullName: "Ethan Brown",
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",
    profession: "Cybersecurity Expert",
    description: "Protects systems from cyber villains & midnight hackers.",
    tags: ["Security", "Networking", "Ethical Hacking"]
  },
  {
    fullName: "Aisha Khan",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    profession: "Content Creator",
    description: "Creates content that inspires millions on the internet.",
    tags: ["Storytelling", "Video Editing", "Branding"]
  },
  {
    fullName: "Noah Smith",
    image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12",
    profession: "Full Stack Developer",
    description: "Writes code from database to pixels — end to end!",
    tags: ["Node.js", "React", "MongoDB"]
  },
  {
    fullName: "Olivia Martin",
    image: "https://images.unsplash.com/photo-1554151228-14d9def656e4",
    profession: "Digital Marketer",
    description: "Turns clicks into customers. Ad budget magician.",
    tags: ["SEO", "Ads", "Brand Strategy"]
  }
];

let sum = "";
users.forEach (function (elem){
  
sum = sum +`  <div class="card">
<img src="${elem.image}" alt="">
<h2>${elem.fullName}</h2>
<h3>${elem.profession}</h3>
<p>${elem.description}</p>
  </div>`
})
let main = document.querySelector ('main');
main.innerHTML = sum;