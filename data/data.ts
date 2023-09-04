interface InstagramData {
  url: string;
  maxWidth: number;
  hideCaption: boolean;
}

interface CardData {
  id: number;
  img: string;
  title: string;
  name: string;
  desc: string;
}

interface Data {
  instagramData: InstagramData[];
  cardData: CardData[];
}

const Brook = "../../data/img/Brook.jpg";
const Jaleta = "../../data/img/Jaleta.jpg";
const Lauricenia = "../../data/img/Lauricenia.jpg";
const Segni = "../../data/img/Segni.jpg";

const data: Data = {
  instagramData: [
        {
      url: "https://www.instagram.com/p/CUbHfhpswxt/",
      maxWidth: 320,
      hideCaption: true
    }
  ],
  cardData: [
    {
      id: 1,
      img: Jaleta,
      title: "President of Computer Science Society",
      name: "Jaleta Tesgera",
      desc:
        "The morning air was crisp and sharp as Sean walked down the road. The pavement was slippery and cold beneath his feet, like a slimy, wet fish. For more information about words that help describe people, places and things, look at the topic on describing words (Adjectives)The morning air was crisp and sharp as Sean walked down the road. The pavement was slippery and cold beneath his feet, like a slimy, wet fish. For more information about words that help describe people, places and things, look at the topic on describing words (Adjectives)"
    },
    {
      id: 2,
      img: Lauricenia,
      title: "Vice President of Computer Science Society",
      name: "Lauricenia Buque",
      desc:
        "The morning air was crisp and sharp as Sean walked down the road. The pavement was slippery and cold beneath his feet, like a slimy, wet fish. For more information about words that help describe people, places and things, look at the topic on describing words (Adjectives)"
    },
    {
    id: 3,
      img: Segni,
      title: "Project Manager of Computer Science Society",
      name: "Segni Tulu",
      desc:
        "The morning air was crisp and sharp as Sean walked down the road. The pavement was slippery and cold beneath his feet, like a slimy, wet fish. For more information about words that help describe people, places and things, look at the topic on describing words (Adjectives)"
    },
    {
      id: 4,
      img: Brook,
      name: "Brook",
      title: "project Manager of Computer Science Society",
      desc:
        "The morning air was crisp and sharp as Sean walked down the road. The pavement was slippery and cold beneath his feet, like a slimy, wet fish. For more information about words that help describe people, places and things, look at the topic on describing words (Adjectives)"
    }
  ]
};

export default data;