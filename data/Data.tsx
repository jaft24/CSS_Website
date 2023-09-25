interface FacebookData{

    id:number;

    url: string;

    width: number;

}

interface InstagramData {

    id: number;

    url: string;

    width: number;

}

 

interface CardData {

    id: number;

    img: string;

    title: string;

    name: string;

    desc: string;

}

interface MissionValueData{

    id: number;

    title: String;

    desc: String;

}

 

interface Data {

    facebookData: FacebookData[];

    instagramData: InstagramData[];

    cardData: CardData[];

    missionValueData: MissionValueData[];

}

 

const data:

Data = {

    facebookData: [

        {

            id: 1,

            url:"https://www.facebook.com/CordCSSE/posts/pfbid02gXkgeTQA6NMVe6A34p8pbrENHRWeHQueX5oHs6dmGWZsjnGN2JcCp5ZjCC4pUravl",

            width:550

        },

        {

            id: 2,

            url:"https://www.facebook.com/CordCSSE/posts/pfbid0ZwX6JLj8EVGznVRukFiuw4XrqfkmwBbqaCytZ9jDWw3kExVXR5bTfo19BDvCWwaMl",

            width:550

        },

        {

            id:3,

            url:"https://www.facebook.com/CordCSSE/posts/pfbid0RgdfGQaHVYkZDxbLZJXq4kiuR9UonawYBB9iS5x6CUWzzDgxLdof3HWoLdW2fdNKl",

            width:550

        },

        {

            id: 4,

            url:"https://www.facebook.com/CordCSSE/posts/pfbid02gXkgeTQA6NMVe6A34p8pbrENHRWeHQueX5oHs6dmGWZsjnGN2JcCp5ZjCC4pUravl",

            width:550

        },

        {

            id: 5,

            url:"https://www.facebook.com/CordCSSE/posts/pfbid0ZwX6JLj8EVGznVRukFiuw4XrqfkmwBbqaCytZ9jDWw3kExVXR5bTfo19BDvCWwaMl",

            width:550

        },

        {

            id:6,

            url:"https://www.facebook.com/CordCSSE/posts/pfbid0RgdfGQaHVYkZDxbLZJXq4kiuR9UonawYBB9iS5x6CUWzzDgxLdof3HWoLdW2fdNKl",

            width:550

        }

    ],

    instagramData: [

        {

            id: 1,

            url: "https://www.instagram.com/p/CN76vMeDAjg/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==",

            width: 320,

        },

        {

            id: 2,

            url: "https://www.instagram.com/p/CJDE7U6D9Cw/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==",

            width: 320,

        },

        {

            id: 3,

            url: "https://www.instagram.com/p/CUbHfhpswxt/",

            width: 320,

        },

        {

            id: 4,

            url: "https://www.instagram.com/p/CUbHfhpswxt/",

            width: 320,

        },

        {

            id: 5,

            url: "https://www.instagram.com/p/CUbHfhpswxt/",

            width: 320,

        },

        {

            id: 6,

            url: "https://www.instagram.com/p/CUbHfhpswxt/",

            width: 320,

        }

    ],

    cardData: [

        {

            id: 1,

            img: "https://www.dropbox.com/scl/fi/403w1yyh9y3ew6b934noc/jaleta_tesgera.jpg?rlkey=inonmqklll17lj4cocmy9fndp&dl=1",

            title: "President of Computer Science Society",

            name: "Jaleta Tesgera",

            desc:

                "Hello there everybody, My name is Jaleta Tesgera and I am senior eager to jump into the professional software engineering side of Computer Science. I grew up in Ethiopia, always very interested in computer science. My motivation for this club is to help you guys develop a better understanding of computer science industry. I can't wait to restart the computer science club and have fun with you guys."

            },

        {

            id: 2,

            img: "https://www.dropbox.com/scl/fi/lri1r2f1ktqsad3tfg2x3/Lau_upper.jpeg?rlkey=gcgae5ll5z9586rhb4nzex1px&dl=1",

            title: "Vice President of Computer Science Society",

            name: "Lauricenia Buque",

            desc:

                "Hey there! I'm Lauricenia, a Class of 2026 student. I was born and raised in Mozambique, a Southern African country. Prior to Concordia College, I completed the IB program in Japan, where I was first introduced to the world of Computer Science. I love the idea of solving problems, designing, and creating ideas. When I'm not studying, I'm listening to music, on a call with family, singing, praising the Lord, or learning random things on YouTube. It will be a pleasure to serve you as the club's vice president. I believe collaboration is key; no one knows more than anyone else, and we can complete each other's ideas, growing together!"

        },

        {

            id: 3,

            img: "https://www.dropbox.com/scl/fi/rlsrvs2alakzff36bxst1/Segni_upper.jpeg?rlkey=7bcymznbjy27o7dzuiyep6h3v&dl=1",

            title: "Project Manager of Computer Science Society",

            name: "Segni Tulu",

            desc:

                "My name is Segni Tulu and I am a Junior. I am dedicated and passionate member of our organization. I have quite the experience in computer science and bring a wealth of knowledge and expertise to our team."

        }

        ,

        {

            id: 4,

            img: "https://www.dropbox.com/scl/fi/f2p2hnjdzleazxj2m1auj/brook_upper.jpeg?rlkey=85nxxoufy2vl4v42j1uo6r959&dl=1",

            name: "Brook Gebreeyesus",

            title: "Project Manager of Computer Science Society",

            desc:

                "My name is Brook Gebreeyesus and I am senior and a computer science major with a computing concentration. I am committed to driving community engagement, spearheading new projects, or mentoring fellow members. In my free time I enjoy playing soccer and hanging out with my family and friends."

        },

        {

            id: 5,

            img: "https://www.dropbox.com/scl/fi/5xske2rbyr1wcm50ldt6g/Neil_face.jpeg?rlkey=ewm9sj61x7mt90tpsfg83k2yz&dl=1",

            name: "Neil Magambo",

            title: "Secretary of Computer Science Society",

            desc:

                "Howdy, I'm Neil Magambo! A Dutch start with a Tanzanian finish, like a fine blended coffee. At 20, I've got the hands for boxing, the feet for basketball, and the brains for machine learning. I'm the whole package—plus international shipping!"

        },

        {

            id: 6,

            img: "https://www.dropbox.com/scl/fi/2ssw2acl3z001gsg1nwgh/nathan_upper.jpeg?rlkey=aqsdtzzfuqkfnj6zt76rt4rvz&dl=1",

            name: "Nathan Kraft",

            title: "Treasurer of Computer Science Society",

            desc:

                "I am a senior with majors in Computer Science and Mathematics with minor in music. In my free time I enjoy playing video games and playing my Saxophone. This semester is going to be fun for everyone. We have a lot of stuff planned and hope you enjoy them all. "

            },

        {

            id: 7,

            img: "https://www.dropbox.com/scl/fi/cijamn6rvjxjog6y4u8wy/Ye_upper.jpeg?rlkey=h8xorb85pqq0d9kugejkcr76w&dl=1",

            name: "Ye Yint Win",

            title: "Marketing and Media Manager of Computer Science Society",

            desc:

                "My name is Ye Yin and I am Senior. I am a dedicated Media and Marketing Manager, overseeing our organization's digital presence and promotional efforts. I have a extensive background in media and marketing and will play a pivotal role in shaping our brand and connecting with our audience. "

        },

       

    ],

    missionValueData:[

        {

        id:1,

        title: "Mission Statement",

        desc:"At the CSSE Club, our mission is to be the catalyst that prepares students for successful careers in computer science by providing them with a powerful network and invaluable resources. Through diverse activities and initiatives, we empower our members to develop their technical prowess, explore emerging technologies, and cultivate professional growth."

        },

        {

        id:2,

        title: "Values",

        desc:"Central to our mission is the establishment of a strong network that connects students with industry professionals, alumni, and fellow enthusiasts to ensure our members have the tools they need to thrive in their pursuit of job opportunities in the field of computer science. By serving as a catalyst for their success, we inspire, create, and advance the future of technology, while promoting ethical and responsible practices."

        }

    ]

 

};

export default data;