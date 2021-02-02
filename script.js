const testimonialsContainer = document.querySelector('.testimonials-container')
const testimonial = document.querySelector('.testimonial')
const userImage = document.querySelector('.user-image')
const username = document.querySelector('.username')
const role = document.querySelector('.role')

const testimonials = [
    {
        name: 'Brad Traversy',
        position: 'Full stack Web Developer and Instructor at Traversy Media',
        photo: 'https://img-b.udemycdn.com/user/75x75/21681922_4513_5.jpg?secure=jmC8-X7q8CxUXPYgyGwBUQ%3D%3D%2C1612324367',
        text:"Brad Traversy has been programming for around 12 years and teaching for almost 5 years. He is the owner of Traversy Media which is a successful web development YouTube channel and specializes in everything from HTML5 to front end frameworks like Angular as well as server side technologies like Node.js, PHP and Python. Brad has mastered explaining very complex topics in a simple manner that is very understandable. Invest in your knowledge by watching Brad's courses."
    },
    {
        name: 'Florin Pop',
        position: 'Web Developer, Youtuber, Streamer',
        photo: 'https://img-a.udemycdn.com/user/75x75/5363252_7c24_2.jpg?EWB3HxqCVk0kZu-xxiArWyB8avCzQ4sWo8o1A2USOS3IDTedtRbO4Z8Ve-boiHXGid8EVdc59tp0la9r5WotbWT1rSYC7-7Dg4Pfy0F3j0x-McgFaEk_Yud6kd8',
        text:"Florin Pop is a Web Developer specialized in FrontEnd development. He also has a YouTube channel where he teaches programming and He streams often on Twitch different coding challenges. He loves coding and helping others on their journey of becoming better developers. You can also often find him on Twitter sharing bits of my journey."
    },
    {
        name: 'Adrian Twarog',
        position: 'Designer and Developer',
        photo:'https://pbs.twimg.com/profile_images/1268445996192632834/Ufosoga3_400x400.jpg',
        text:"Adrian makes websites and apps using platforms like React Native. He hopes to share some of the things he has learnt over the years about his career and hobbies for coding, user interface and experience! Do check out his Youtube channel."
    },
    {
        name: 'Anna McDougall',
        position: 'Software Engineer',
        photo: 'https://pbs.twimg.com/profile_images/1341264303509401600/BDHL6x7G_400x400.jpg',
        text:"Anna McDougall is a full-stack developer with a passion for JavaScript. Now, she seeks the next adventure: a career in which her expertise and enthusiasm can help drive a great product and contribute to a great team."
    },
    {
        name: 'Shruti Balasa',
        position: 'Full Stack Web Developer',
        photo: 'https://pbs.twimg.com/profile_images/1329475394714537986/MXGt0d_h_400x400.jpg',
        text:"Shruti is an amazing Mentor, Course Creator, Tech Speaker and now a Youtuber from Bangalore, India. She runs a Youtube channel that goes by the name of Thirus which she believes is an effort to bring hundreds of simple web development tips and tutorials together that you can consume regularly on your coding journey.."
    },
    {
        name: 'Raf Rasenberg',
        position: 'AWS Cloud Engineer',
        photo: 'https://avatars.githubusercontent.com/u/46351981?s=400&u=69e6382083a46f58b6e70dd6a089cb6dcff1fee4&v=4',
        text:"Raf Rasenberg is a big lover of everything back-end, cloud and DevOps related. CI/CD pipelines, Kubernetes and IaC to name some of the IT buzz words. Coming from a business background, non-technical communication and focus on cost-efficient solutions is one his key skills."
    }
        
]

let idx = 1

function updateTestimonial() {
    const {name, position, photo, text} = testimonials[idx]

    testimonial.innerHTML = text
    userImage.src = photo
    username.innerHTML = name
    role.innerHTML = position

    idx++

    if(idx > testimonials.length - 1) {
        idx = 0
    }
}

setInterval(updateTestimonial, 10000)   