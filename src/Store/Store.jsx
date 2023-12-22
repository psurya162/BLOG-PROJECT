// DataCompo.js
import React, { createContext, useState } from "react";

export const Store = createContext();

const DataCompo = ({ children }) => {
  const [data, setData] = useState([
    {
      id: 1,
      image:
        "https://imgs.search.brave.com/QRa_zC8FG4gewqiobwFqzrwF9k6EUs1PKq7-vGgfDu0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zdGF0/NS5ib2xseXdvb2Ro/dW5nYW1hLmluL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDIwLzA4/L1BhdGhhYW4tMDEu/anBn",
      name: "PATHAN",
      category: "BOLLYWOOD",
      description:
        "Pathaan is a 2023 Indian Hindi-language action thriller film co-written and directed by Siddharth Anand and produced by Aditya Chopra under Yash Raj Films. It stars Shah Rukh Khan in the title role, alongside Deepika Padukone. Pathaan is the fourth installment in the YRF Spy Universe.0 On the other hand, Pashtuns, also known as Pakhtuns or Pathans, are a nomadic, pastoral, Eastern Iranic ethnic group primarily residing in northwestern Pakistan and southern and eastern Afghanistan. Some Indians claim descent from Pashtun soldiers who settled in India by marrying local women during the Muslim conquest in the Indian subcontinent.",
    },
    {
      id: 2,
      image:
        "https://imgs.search.brave.com/_S4S15mzyqEs0GnPz62dHd5i_joY6wuDWPENeddxkeQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9teXBv/c3RlcmNvbGxlY3Rp/b24uY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDE4LzA4L0dh/bWUtT2YtVGhyb25l/cy1Qb3N0ZXItTXlQ/b3N0ZXJDb2xsZWN0/aW9uLmNvbS0zOC5q/cGc",
      name: "GAMES OF THRONES",
      category: "HOLLYWOOD",
      description:
        "Game of Thrones is an American fantasy drama television series created by David Benioff and D. B. Weiss for HBO. It is an adaptation of A Song of Ice and Fire, a series of fantasy novels by George R. R. Martin, the first of which is A Game of Thrones. The show premiered on HBO in the United States on April 17, 2011, and concluded on May 19, 2019, with 73 episodes broadcast over eight seasons.Set on the fictional continents of Westeros and Essos, Game of Thrones has a large ensemble cast and follows several story arcs throughout the course of the show. The first major arc concerns the Iron Throne of the Seven Kingdoms of Westeros through a web of political conflicts among the noble families either vying to claim the throne or fighting for independence from whoever sits on it. The second focuses on the last descendant of the realm's deposed ruling dynasty, who has been exiled to Essos and is plotting to return and reclaim the throne. The third follows the Night's Watch, a military order defending the realm against threats from beyond Westeros' northern border.",
    },
    {
      id: 3,
      image: "https://images.indianexpress.com/2023/12/QR-Code-scams.jpg?w=640",
      name: "QR CODE SCAMS",
      category: "TECHNOLOGY",
      description:
        "QR codes offer an easy way of making online and offline payments, but scammers seem to be using the technology to steal money from unsuspecting people. Here's how you can identify such scams and protect yourself from losing money.QR codes seem to be everywhere. You may have scanned one to see the menu at a restaurant or pay for public parking. And you may have used one on your phone to get into a concert or sporting event, or to board a flight. There are countless other ways to use them, which explains their popularity. Unfortunately, scammers hide harmful links in QR codes to steal personal information. Here’s what to know.",
    },
    {
      id: 4,
      image:
        "https://imgs.search.brave.com/TOuRllwgdfmRN-3yo0l5ADoLrWJE-MRm8z5BoxLOuiw/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9maWxt/ZGIubGFuZG1hcmtj/aW5lbWFzLmNvbS9G/aWxtSW1hZ2VzLzIy/LzEvMTI0OTI0L0Fu/aW1hbE9mZmljaWFs/UG9zdGVyLmpwZw",
      name: "ANIMAL",
      category: "BOLLYWOOD",
      description:
        "The movie Animal is a Bollywood film directed by Sandeep Reddy Vanga, known for its intense storyline and powerful performances. It's a crime thriller that revolves around complex characters, emotions, and relationships. The story likely follows a character or characters caught up in a web of crime, exploring themes of vengeance, justice, and the dark aspects of human nature.",
    },
    {
      id: 5,
      image:
        "https://imgs.search.brave.com/8U6TeDKXr_p8E0soCUH-jjRaA7Gh-aSSPDWjqs5cJg0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1Qk1UbGxaREpo/TVRBdE1qaG1aaTAw/TXpCakxUbGpNbVF0/TW1ObFlUQXdZbVkw/WTJRMFhrRXlYa0Zx/Y0dkZVFYVnlORFV6/T1RRNU1qWUAuanBn",
      name: "GOLMAAL 3",
      category: "BOLLYWOOD",
      description:
        "Golmaal 3 is a Bollywood comedy film directed by Rohit Shetty. It's the third installment in the Golmaal film series. The movie revolves around two feuding groups who find themselves forced to live under the same roof due to a sequence of events. Chaos, misunderstandings, and hilarious situations arise as the groups try to outwit each other, leading to a series of comic events. The film is known for its slapstick humor, funny dialogues, and entertaining performances by the ensemble cast",
    },
    {
      id: 6,
      image:
        "https://imgs.search.brave.com/pMYxqtKhI1Si34MtukJzPoRVQxE1jCHfYlcUDjMx35A/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1QlpXWXpPR0V3/TlRndE5XVTNOUzAw/WlRRMExXSmtPRFV0/TW1WaE1qSXdNakEx/Wm1Rd1hrRXlYa0Zx/Y0dkZVFYVnlNamt3/T1RBeU1EVUAuanBn",
      name: "TOPGUN MAVERICK",
      category: "HOLLYWOOD",
      description:
        "After thirty years, Maverick is still pushing the envelope as a top naval aviator, but must confront ghosts of his past when he leads TOP GUN's elite graduates on a mission that demands the ultimate sacrifice from those chosen to fly it. Set 30 years after its predecessor, it follows Maverick's return to the United States Navy Strike Fighter Tactics Instructor program (also known as U.S. Navy-Fighter Weapons School - TOPGUN where he must confront his past as he trains a group of younger pilots, among them the son of Maverick's deceased best friend Lieutenant Nick Goose Bradshaw, USN",
    },
    {
      id: 7,
      image:
        "https://imgs.search.brave.com/q5ZSidZ3MsEoOSBhoMagalqt6uYHX4PkV2KH17r92dY/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1Qk1UVXpNalV5/T0RBMU5sNUJNbDVC/YW5CblhrRnRaVGd3/TWpJd05UUTVNVEVA/LmpwZw",
      name: "STEPUP ALL IN",
      category: "HOLLYWOOD",
      description:
        "Step Up is an American romantic-dance anthology franchise created by Duane Adler. The franchise includes six films and a television series.1 The first film, Step Up, was released in 2006 and stars Channing Tatum, Jenna Dewan, Mario, Drew Sidora, Damaine Radcliff, and Rachel Griffiths.2 Step Up: Year of the Dance, also known as Step Up China, is a 2019 Chinese produced and marketed film directed by Ron Yuan. It tells the story of youth from different social classes in Beijing coming together to form China's best dance crew and learn what it really means to be family.1 Step Up Revolution, released in July 2023, is the next film in the franchise, set against the vibrant backdrop of sunny Miami, where a crew of dancers band together to stage elaborate flash mobs in order to protect their neighborhood and fight for a greater cause.0 The films have received generally mixed critical reception, but they have been a box office success with a collective total of $651 million.1",
    },
    {
      id: 8,
      image:
        "https://imgs.search.brave.com/5Gqzk5nF9e2Rfo_LEXEdE3wrt0uEzv3s32Cnt76A6iI/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9udHZi/LnRtc2ltZy5jb20v/YXNzZXRzL3AxNTE5/NzY5Nl9iX2gxMF9h/YS5qcGc_dz05NjAm/aD01NDA",
      name: "LOST IN SPACE",
      category: "HOLLYWOOD",
      description:
        "The third and final season of the Netflix series Lost in Space premiered on December 1, 2021, with only eight episodes.13 The show follows the Robinson family, who crash-land on an alien planet and fight against all odds to survive and escape, surrounded by hidden dangers.24 The series was created by Irwin Allen, Matt Sazama, and Burk Sharpless, and stars Toby Stephens, Molly Parker, Maxwell Jenkins, and Taylor Russell.2 The first season, consisting of 10 episodes, was released on Netflix on April 13, 2018, and the second season, consisting of 10 episodes, was released on December 24, 2019.0 Netflix released posters of the characters on November 23, 2021.1",
    },
    {
      id: 9,
      image:
        "https://imgs.search.brave.com/6cRlOb2sLKtsKjxA352W8sKgCNSlrPP0QePPk7UArQM/rs:fit:500:0:0/g:ce/aHR0cDovL3d3dy5p/bXBhd2FyZHMuY29t/LzIwMTgvcG9zdGVy/cy9taXNzaW9uX2lt/cG9zc2libGVfX2Zh/bGxvdXRfdmVyMy5q/cGc",
      name: "MISSION : IMPOSSIBLE F A L L O U T",
      category: "HOLLYWOOD",
      description:
        "Mission: Impossible - Fallout is the sixth installment in the Mission: Impossible film series, directed by Christopher McQuarrie and starring Tom Cruise, Henry Cavill, Ving Rhames, Simon Pegg, Rebecca Ferguson, Sean Harris, Angela Bassett, Vanessa Kirby, Michelle Monaghan, and Alec Baldwin.1 The movie follows Ethan Hunt and his IMF team, along with CIA assassin August Walker, as they race against time to prevent a catastrophic nuclear attack on the Vatican, Jerusalem, and Mecca, Saudi Arabia led by arms dealer John Lark and a group of terrorists known as the Apostles.0 The film has been praised for its relentless action, convoluted and shocking twists and lots of Tom Cruise running",
    },
    {
      id: 10,
      image: "https://www.glofox.com/wp-content/uploads/2023/09/download.png",
      name: "Nerd Fitness",
      category: "FITNESS",
      description:
        "The Fit Bottomed world is run by fitness professionals Jennipher Walters and Kristen Seymour. The two friends started Fit Bottomed Girls in 2008 as they were looking for a fresh approach to health and fitness without the dieting. The blog has been growing ever since and has now expanded into other verticals such as Fit Bottomed Mammas, the Fit Bottomed Girls Podcast, and the online course Love Your Body. Love Your Life. The blog was launched as a way to solve a problem; they were looking for a new way to be healthy. Just months after starting, readers latched on and related to the content almost immediately. ",
    },
    {
      id: 11,
      image: "https://www.glofox.com/wp-content/uploads/2023/09/unnamed.png",
      name: "Born Fitness ",
      category: "FITNESS",
      description:
        "Born Fitness is a big source for health and fitness. The blog aims to take the stress out of health, fitness, and nutrition. They have a no-hype, straightforward tone that delivers informative yet engaging content. Founder of Born Fitness Adam Bornstein works with world-class fitness experts to deliver clear and helpful answers. It’s about finding solutions to your needs and accessing jargon-free information. Born Fitness is designed for real people who want expert advice in a simple, easy-to-digest format.",
    },
    {
      id: 12,
      image: "https://www.glofox.com/wp-content/uploads/2023/09/download-1.png",
      name: "Glofox",
      category: "FITNESS",
      description:
        "Yeah, yeah, were mentioning ourselves, but we know the value we provide. After all, you’re reading this blog, aren’t you Our blog, like our platform, is focused on helping fitness entrepreneurs become more successful and spend less time behind the desk and out on the studio floor. We regularly release content on how to build your own successful business, guides on choosing the best fitness software for your brand, and interviews celebrating our customers and their amazing fitness journeys.If you’re looking to set up your own fitness business, we can give you all the building blocks you need to get started.",
    },
    {
      id: 13,
      image:
        "https://www.glofox.com/wp-content/uploads/2023/09/logo_combined-01-1536x267.webp",
      name: "Love Sweat Fitness",
      category: "FITNESS",
      description:
        "Love Sweat Fitness was founded in 2014 by Katie Dunlop. Katie started the site as she was passionate about fitness and helping women. What’s different about Love Sweat Fitness is that the site majorly focuses on community. She aims to build friendships and a powerful community to support other people’s health and fitness. The blog splits up the content into fitness, nutrition, healthy lifestyle, travel, and printables. With plenty of healthy recipes, fitness challenges, and even an app, Love Sweat Fitness aims to make fitness a community event. ",
    },
    {
      id: 14,
      image:
        "https://www.glofox.com/wp-content/uploads/2023/09/youtubebmlogo5-400x244.webp",
      name: "Breaking Muscle",
      category: "FITNESS",
      description:
        "Breaking Muscle is an online platform that provides high-quality fitness content all backed up by scientific facts. The blog is super versatile and is seen as an expert source in the fitness world. This means that the blog commands an audience of consumers, professionals, and fitness enthusiasts. Content is clearly separated on the blog for trainers and coaches as well as consumers. The blog features a lot of different content such as reviews, videos, workout routines, fitness articles, and product reviews. It’s also a great source for bodybuilders with plenty of advice on bodybuilding and how to grow muscle. ",
    },
    {
      id: 15,
      image:
        "https://www.glofox.com/wp-content/uploads/2023/09/e704fe_ed4a070b80434b7d91b0d4246336beddmv2-400x299.png",
      name: "Jessi Kneeland ",
      category: "FITNESS",
      description:
        "This is one of my favorite blogs on this list. Jessi is a coach, writer, and speaker dedicated to helping people free themselves from their body issues and promote self-love. Her blog has a very clear purpose and is solving a problem which is one of the reasons the site is so popular. Jessi combines written text and videos on her blog to talk about things like body image, self-advocacy, confidence, and ignorance. Jessi’s blog encourages newbies to start their health and fitness goals. ",
    },
    {
      id: 16,
      image: "https://www.glofox.com/wp-content/uploads/2023/09/download-2.png",
      name: "Trainerize",
      category: "FITNESS",
      description:
        "Trainerize is one of the world’s most popular fitness apps, and its blog reflects that. Whether you’re a personal trainer, a health coach, or just passionate about fitness, this blog has a wealth of knowledge for you. From in-depth meal plan strategies to complete guides on how to set up your own business, this is an exceptional resource for all things fitness-related. ",
    },
    {
      id: 17,
      image:
        "https://www.glofox.com/wp-content/uploads/2023/09/null_2fnj5k56tqy2qjhvrq1qkw_bad_20yogi_20studio_20logo-words-darkgrey-400x182.png",
      name: "Bad Yogi",
      category: "FITNESS",
      description:
        "The Bad Yogi blog is a part of the larger Bad Yogi website offering a 12-week online yoga program and clothing. The founders of Bad Yogi started the blog and website for a very specific reason. They found that the yoga world was exclusive and had a judgmental nature. Bad Yogi aims to “redefine yoga culture”. The blog content is split between yoga, fitness, food and recipes, and motherhood and baby. Articles heavily focus on self-care and healthy living.",
    },
    {
      id: 18,
      image:
        "https://www.glofox.com/wp-content/uploads/2023/09/png_3339dedc-7cbf-44b4-a099-89ad641ebf16cover-400x200.png",
      name: " Keep it SimpELLE",
      category: "FITNESS",
      description:
        "Elle Linton is a UK health and fitness blogger and founder of Keep it SimpELLE. She offers professional insight into the health and fitness world, Instead of targeting just consumers, her content is aimed at people who want to take a peek behind the scenes of the fitness industry. Those who want to find out more about the jobs, businesses, and technology in the fitness world. She confidently blends topics like taxes for personal trainers and fitness professionals and a 30-minute workout you can do at home. ",
    },
    {
      id: 19,
      image:
        "https://www.glofox.com/wp-content/uploads/2023/09/blog-runtastic-vertical_squared-300x300px-150x150@2x.png",
      name: "Runtastic",
      category: "FITNESS",
      description:
        "The Adidas Runtastic blog is chocked full of fitness tips and information on exercise, nutrition, workouts, and free training plans. You can find a lot of valuable content that gives users access to free information to improve their health, fitness, and cardio. The Runtastic blog is suitable for all types of runners from gentle joggers to marathon fanatics. The content is designed to help improve performance for all fitness levels. ",
    },
    {
      id: 20,
      image:
        "https://www.glofox.com/wp-content/uploads/2023/09/xRzktTcc_400x400.jpg",
      name: "Tony Gentilcore ",
      category: "FITNESS",
      description:
        "Tony is one of the co-founders of Cressey Sports Performance, writer, and strength training and conditioning coach. The aim of Tony’s blog is to keep you motivated and positive on your health and fitness journey. You can find inspirational posts and quotes as well as actionable advice and workout tips you can take to improve your fitness. ",
    },
    {
      id: 21,
      image:
        "https://www.technewsworld.com/wp-content/uploads/sites/3/2023/10/Microsoft-Copilot.jpg",
      name: "Microsoft’s Copilot Rises From the Ashes of Bob and Clippy",
      category: "TECHNOLOGY",
      description:
        "As I watched the presentation, I was taken back in time to the 1990s launch of Microsoft Bob and that first attempt at creating a digital assistant called Clippy, neither of which met expectations back then. But now, Copilot will do far more than those two earlier offerings could even conceive of, and the power of the result, both inside and outside of Microsoft, is incredible.Before the event, I met with a company called Reply, which specializes in getting companies ready for Copilot and setting up metrics so that they can confirm the benefits of the technology. Reply raved about how much more productive they and their clients were.What is truly amazing is that the Copilot technology was still in its infancy only eight months ago. Last week, it went to general availability at top enterprises in medicine, farming, services, software, automotive, banking, and petrochemicals. Now, 70% of users indicate they don’t want to work without this capability.",
    },
    {
      id: 22,
      image:
        "https://www.technewsworld.com/wp-content/uploads/sites/3/2023/11/Announcing-Grok.jpg",
      name: "The Good and Bad of Musk’s Grok AI",
      category: "TECHNOLOGY",
      description:
        "To say Elon Musk is an interesting guy would be an understatement. He goes from brilliant to bozo and back again in a blink. It’s like watching a fast ping-pong match.Musk’s latest effort is an AI based on X (formerly known as Twitter) content called Grok that I believe will disrupt conversational AI.Shaking up a new market is a good thing in many cases because, too often, everyone starts copying each other, and you end up with a lot of similar and increasingly boring offerings. While Musk does a lot of things, he doesn’t do boring, except, of course, the company by that same name.Let’s chat about Grok this week. Then, we’ll close with my Product of the Week, the Surface Laptop Studio 2. Microsoft sent me one, so now I have experience using it.",
    },
    {
      id: 23,
      image:
        "https://www.technewsworld.com/wp-content/uploads/sites/3/2023/11/computer-shopping.jpg",
      name: "It’s About To Become Much Harder To Choose the Right PC",
      category: "TECHNOLOGY",
      description:
        "It may need one or two more versions to truly hit the sweet spot for where this technology needs to be, and we are still lacking a “killer app or game” that will drive people to the platform.This week, let’s talk about what Meta Quest 3 got right, what it will need to improve, and what a killer app or game for this device might look like.We’ll close with my product of the week, a set of smart adjustable-focus glasses from 32°N.",
    },
    {
      id: 24,
      image:
        "https://www.technewsworld.com/wp-content/uploads/sites/3/2023/10/Meta-Quest-3.jpg",
      name: "Impressions of Meta Quest 3: The Must-Have VR Gift for the Holidays?",
      category: "TECHNOLOGY",
      description:
        "The decision to choose between a PC and a Mac has been a long-standing debate in the world of technology. Both platforms have strengths and weaknesses, and various factors, including user preferences, needs, and the specific use case, often influence the choice.The introduction of Arm-based versions of Windows and Apple’s transition to Apple Silicon has added a new dimension to this decision-making process in recent years.Given these variables, let’s explore the factors consumers and business users face when choosing a PC or Mac and how Arm versions of Windows and Apple Silicon impact these decisions.",
    },
    {
      id: 25,
      image:
        "https://www.technewsworld.com/wp-content/uploads/sites/3/2022/07/innovation.jpg",
      name: "The Magic Presented at HP Imagine 2023",
      category: "TECHNOLOGY",
      description:
        "HP Imagine is a new conference focusing on the company’s innovation. Last week, there was an impressive amount of innovation showcased in stellar fashion by HP Chief Corporate Affairs and Communications Officer Stella Low and her team. It stands as one of the best-executed presentations I’ve ever attended.Innovation is a difficult topic because it’s often overhyped. Buyers don’t really want innovation because it represents risk, but where they need innovation is for problems that haven’t been solved adequately or at all.The use of the word “imagine” rather than “innovation” for HP’s event positioned the effort well because it was a showcase of innovative technologies that captured the imagination. By doing so, it highlighted the difference between properly applied innovation and pointless innovation.",
    },
    {
      id: 26,
      image:
        "https://www.technewsworld.com/wp-content/uploads/sites/3/2023/11/computer-chip.jpg",
      name: "Chip Wars of 2024: Will a Cell Phone Take the Laptop Crown?",
      category: "TECHNOLOGY",
      description:
        "As industry leaders in chip manufacturing vie for supremacy, there’s mounting speculation that the capabilities of smartphones might soon rival the traditional dominance of laptops.AMD, Intel, and Qualcomm are all focused on creating a technology that will make Apple’s M3 chip look outdated while fully embracing AI and increasing battery life.Rumors suggest that even Nvidia is pursuing an Arm-based solution. This motivation was part of the reason for its failed attempt to buy Arm, which has since gone public.",
    },
    {
      id: 27,
      image:
        "https://www.technewsworld.com/wp-content/uploads/sites/3/2023/09/Apple-Watch-S9.jpg",
      name: "Apple Sets the Bar for Virtual Launch Events",
      category: "TECHNOLOGY",
      description:
        "I’ve been disappointed in almost all the launch events I’ve seen since we mainly moved to virtual events. Most aren’t that different than in-person events where the speaker(s) get up on stage and pontificate.I’ve been disappointed in almost all the launch events I’ve seen since we mainly moved to virtual events. Most aren’t that different than in-person events where the speaker(s) get up on stage and pontificate.I think last week’s Apple “Wonderlust” launch event was an example of how virtual launches should be done, and it was brilliantly executed. I’m not and likely never will be an Apple fan, but I like to call things as I see them. Last week’s launch presentation raised the bar for how to execute events like this.",
    },
    {
      id: 28,
      image:
        "https://www.technewsworld.com/wp-content/uploads/sites/3/2022/02/qualcomm-sign.jpg",
      name: "Qualcomm Takes Aim at Redefining Mobile and PC Technology",
      category: "TECHNOLOGY",
      description:
        "I was in Hawaii last week at Qualcomm’s annual press and analyst conference, and the announcements made by the company were nothing short of amazing.What was also interesting was that the week prior, Qualcomm announced a pivot toward RISC-V. The event didn’t address this strategic move, creating a certain amount of unintended drama. The RISC-V announcement primarily focused on wearables, which were nowhere to be seen at the event outside of earbuds.This year’s Qualcomm event was all about AI, and it promised not only to revolutionize smartphones and PCs but also to create a level of interoperability that has been promised for years but never delivered, not even by Apple, which has a significant advantage over everyone else because it’s vertically integrated.",
    },
    {
      id: 29,
      image:
        "https://www.technewsworld.com/wp-content/uploads/sites/3/2023/10/Lenovo-AMD-Threadripper-Pro-P620.jpg",
      name: "Lenovo, Threadripper Pro, and the Formula for Incredible Success",
      category: "TECHNOLOGY",
      description:
        "The technology market is defined by companies taking huge gambles and executing against near-impossible odds. Dell’s acquisition of EMC and then going private were both thought to be nearly impossible, but Dell succeeded.Further examples are HP’s acquisition of a failing Compaq to become the then most powerful PC company in the world; IBM’s bet on Watson decades before generative AI became a thing; and now Lenovo blending elements of a relatively small Asian PC company with failing IBM units to form what is arguably becoming the most powerful global technology company and the only one that fully blends Eastern and Western technology concepts into a unique and successful set of products and services.Another recent company success story involves AMD and Threadripper. Threadripper was initially a consumer product and incredibly risky given its development cost. As a workstation processor, on paper, it blew away everything else. Still, workstations tend to be built for professionals, not everyday consumers, making creating a professional workstation from the technology a very risky proposition.",
    },
    {
      id: 31,
      image:
        "https://cdn.vox-cdn.com/thumbor/dasmbg7ehMPCSZ5BnLhobMe9COE=/0x0:6000x4000/920x613/filters:focal(2529x380:3489x1340):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/72966782/1856118817.0.jpg",
      name: "Brandon Staley, Tom Telesco fired by Los Angeles Chargers",
      category: "SPORTS",
      description:
        "Staley’s tenure in Los Angeles can probably best be described as a string of missed opportunities. Despite inheriting a roster led by quarterback Justin Herbert — on a rookie deal — the Chargers made the playoffs just once during his time in Los Angeles. Los Angeles missed the postseason during Staley’s first year, when the Chargers lost in a “win, tie, or home” Week 18 game to the Raiders.Staley was heavily criticized for his handling of that game, including an early fourth-down decision which failed, as well as a timeout he took during overtime which ultimately helped the Raiders set up a game-winning field goal.However, they did reach the postseason in Staley’s second season, only to suffer an embarrassing loss on the road to the Jacksonville Jaguars. After going up 27-0 in the first half, the Chargers blew that lead, ultimately losing by a final score of 31-30.",
    },
    {
      id: 32,
      image:
        "https://i.guim.co.uk/img/media/c61b764f7c1ed59e75f485786e30c71a0cfb7a8f/0_3_1898_1138/master/1898.jpg?width=700&dpr=2&s=none",
      name: "Usman Khawaja challenges cricket’s uncomfortable relationship with activism",
      category: "SPORTS",
      description:
        "In the end, censorship won out. Usman Khawaja might have known that the words he scribbled on the sides of his boots would quickly garner critical attention from cricket’s power brokers. Not because the messages he sought to express during Australia’s first Test of the summer were overtly political. After all, what legitimate counter argument is there to the assertions that “all lives are equal” and “freedom is a human right”? What makes this outcome predictable is that the type of athlete activism attempted by Khawaja has never found a welcoming home in his sport.It’s been 60 years since CLR James asked, “What do they know of cricket who only cricket know?” It was a prompt to fans and players to interrogate the game’s colonial legacy, to challenge existing racial inequities, and to recognise that forces beyond the boundary determined who had the privilege of scoring runs and taking wickets for their country. Six decades later, James’s question remains pertinent.",
    },
    {
      id: 33,
      image:
        "https://i.guim.co.uk/img/media/243b00121a55ee5ee58f8a49acd57f8d86e088ec/0_0_5356_3423/master/5356.jpg?width=965&dpr=2&s=none",
      name: "Newcastle left to rue lost opportunity after agonising exit from Europe",
      category: "SPORTS",
      description:
        " Theyll always have Paris. They ll have the glorious memories of hammering Paris Saint-Germain 4-1 at home, but Newcastle will also have the fury and frustration of the injury-time penalty at the Parc des Princes two weeks ago. It was that decision, a cross flicking off Tino Livramento s torso and on to his arm as he chased back, that they will feel, far more than defeat by Milan, eliminated them from Europe. In time, perhaps, there will be a feeling that a slender squad will benefit from the free midweeks later in the season. In the long run, in terms of qualifying for next season’s Champions League, which will be essential for attracting the highest tier of talent to the club, this may be for the best. But it will be a while before the disappointment fades, and the sense of being cheated.",
    },
    {
      id: 34,
      image:
        "https://i.guim.co.uk/img/media/0caed4fb2da0ab9fe4dc46a28c401c05ee2ab12f/0_17_3772_2264/master/3772.jpg?width=700&dpr=2&s=none",
      name: "Talking Horses: Cheltenham test can win over cross-country sceptics",
      category: "SPORTS",
      description:
        "The Cross-Country course at Cheltenham is nearly 30 years old, it was the stage for three of the dual Grand National winner Tiger Roll’s five Festival successes and is a circuit where market leaders and track specialists – both equine and human – have a consistently strong record. McGregor The Third, who took the first ever race over the course in 1995, was also its first multiple winner, and popular favourites like Spot Thedifference, with seven course wins, and Garde Champetre (six) have followed his lead.And yet, there are still plenty of punters who regard the novel circuit that criss-crosses the Cheltenham infield with indifference at best, and hostility at worst. For some, the three races over the cross-country track each season are three too many.",
    },
    {
      id: 35,
      image:
        "https://i.guim.co.uk/img/media/a082c3903c4ebcea3a3609697071e0e9749eaad2/0_208_5031_3019/master/5031.jpg?width=700&dpr=2&s=none",
      name: "Ten Hag’s Manchester United stand up and die at club stranded in the past",
      category: "SPORTS",
      description:
        "As the seconds ticked down at the end of a Champions League season‑ender that felt like a gentle, even quite tender, act of sporting euthanasia, the only noise inside Old Trafford was the sound of the Bayern Munich fans singing an impressively sustained version of Football’s Coming Home. A little later they sang Is This A Library? Actually, no, it’s more of a museum. They chanted “Auf Wiedersehen” at the departing members of the home support who, frankly, had done pretty well to stick it out to that point.The good news for Erik ten Hag at the end of this low-fi 1-0 defeat is that United’s players didn’t lie down and die at Old Trafford. Instead they stood up and died, running hard and creating a kind of simulacrum of a functioning elite team.",
    },
    {
      id: 36,
      image:
        "https://i.guim.co.uk/img/media/dcee8dcab0a33a4e4dd8f7f4a4758acdcf3b7968/189_91_4680_2808/master/4680.jpg?width=700&dpr=2&s=none",
      name: "Son Heung-min channels his inner Ange-Anger to traumatise Trippier",
      category: "SPORTS",
      description:
        "Son Heung-min was the last player off the pitch at half-time at the Tottenham Hotspur Stadium, not because he was busy pumping the badge on his chest, working the crowd or berating the referee behind his hand, but because he was exhausted, forced to spend 30 seconds or so bent double in the Newcastle penalty area with his hands on his knees.Two minutes before half-time Son had picked up the ball 15 yards inside his own half and just flicked on the burners, feet pounding the turf like a boxer hitting the speed ball. It is genuinely rare to see a footballer streaking further and further away from his pursuers with the ball at his feet, dribbling faster than you can run.",
    },
    {
      id: 37,
      image:
        "https://i.guim.co.uk/img/media/c2b4998515847050b39f59052287b0d1afc0caae/0_0_5000_3000/master/5000.jpg?width=965&dpr=2&s=none",
      name: "Women’s Super League: talking points from the weekend’s action",
      category: "SPORTS",
      description:
        "Heavy-pressing Arsenal show the way to beat Chelsea The Arsenal centre-back Lotte Wubben-Moy said her side had proved a point with their impressive 4-1 defeat of Chelsea at the Emirates in front of a record 59,042 fans. “We don’t really listen to sceptics but there was a narrative at the beginning of the season about Arsenal selling out and attracting crowds but not winning,” she said. “Today sets the tone for what we are about and the intensity we want to bring. We do that with the fans and that’s how important that relationship is.” Arsenal’s performance was dominant but Chelsea’s capitulation was equally notable. Emma Hayes’s side did not have the answer to Arsenals fast and high press and went into the break two goals down at 3-1. Tactically, they were left wanting. Have Arsenal found the key to beating Chelsea? Maybe. Can they maintain the form they displayed in this title challenge across the course of the season? Maybe. Suzanne Wrack",
    },
    {
      id: 38,
      image:
        "https://i.guim.co.uk/img/media/8b0bebf67b08c7a5634ff9749e5ea19788b88723/0_213_3500_2100/master/3500.jpg?width=700&dpr=2&s=none",
      name: "Whether you are Manchester United or Grimsby, succession planning is vital",
      category: "SPORTS",
      description:
        "In a past interview I was asked about my proudest career achievement. Instinctively, I answered that it was seeing Simply Business, where I served as CEO for seven years, get much better and bigger after my departure. This wasn’t false modesty on my part but was grounded in my belief of the vital role of succession planning for any CEO or leader. I’ve always maintained that one’s contribution is diminished if a business relies solely on any individual for its continued success.When Sir Alex Ferguson retired as Manchester United’s manager in 2013 he had presided over 27 years of unparalleled success and a haul of 38 trophies. A 2012 case study from Harvard Business School entitled Sir Alex Ferguson: Managing Manchester United stated: “He was the ultimate decision-maker on almost every football related aspect at United.” United’s then CEO, David Gill, said: “Steve Jobs was Apple. Sir Alex Ferguson is Manchester United.”",
    },
    {
      id: 39,
      image:
        "https://blogstorage.s3.amazonaws.com/uploads/cache/82/48/82483682261c696059d0885a230bcec5.jpg",
      name: "Browns set to sign veteran QB Joe Flacco to practice squad",
      category: "SPORTS",
      description:
        "The Cleveland Browns have added a veteran quarterback to their squad by signing Joe Flacco to their practice squad on Monday morning following an impressive workout. Flacco, a 14-season veteran, led the Baltimore Ravens to a Super Bowl victory in 2012 and has played for the Denver Broncos and the New York Jets. He will now be providing his veteran presence to Cleveland while they aim for a postseason berth with their starting quarterback, Deshaun Watson, out for the season. The Browns have started three quarterbacks this season and have an outstanding defense that has been key to their success.",
    },
    {
      id: 40,
      image:
        "https://i.guim.co.uk/img/media/ba39577bac24ac5a949d3b62a9e332e75e2a71d9/0_27_2750_1651/master/2750.jpg?width=700&dpr=2&s=none",
      name: "New peaks bring new pressures for Matildas after spectacular 2023",
      category: "SPORTS",
      description:
        "When the Matildas doctor pulled out the stethoscope to briefly examine Steph Catley during Wednesday’s 1-0 friendly defeat against Canada, she could have shared it around.After all, the Matildas have tested the hearts of football fans in 2023. They were bursting in the middle of the year, off the back of Australia’s epic run in the World Cup. The path there was full of palpitations. And now, a touch of heartburn, in these last two defeats against Canada.",
    },
    {
      id: 41,
      image:
        "https://imgs.search.brave.com/tq_egp_F3DZSxKWtB15LcxJy8Q3Wxj0ctxlA6-NBHws/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtbmEuc3NsLWlt/YWdlcy1hbWF6b24u/Y29tL2ltYWdlcy9J/LzkxUzRtTlJHeGxM/LmpwZw",
      name: "Fast & Furious 6",
      category: "HOLLYWOOD",
      description:
        "Since Dom (Diesel) and Brian's (Walker) Rio heist toppled a kingpin's empire and left their crew with $100 million, our heroes have scattered across the globe. But their inability to return home and living forever on the lam have left their lives incomplete. Meanwhile, Hobbs (Johnson) has been tracking an organization of lethally skilled mercenary drivers across 12 countries, whose mastermind (Evans) is aided by a ruthless second-in-command revealed to be the love Dom thought was dead, Letty (Rodriguez). The only way to stop the criminal outfit is to outmatch them at street level, so Hobbs asks Dom to assemble his elite team in London. Payment? Full pardons for all of them so they can return home and make their families whole again.—ahmetkozan Hobbs has Dominic and Brian reassemble their crew to take down a team of mercenaries: Dominic unexpectedly gets sidetracked with facing his presumed deceased girlfriend, Letty.",
    },
    {
      id: 42,
      image:
        "https://imgs.search.brave.com/H9UzCnqzTXmCba7FKkl7VrDRWe1aR30uNN3elr8OVLI/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zMy5h/bWF6b25hd3MuY29t/L3N0YXRpYy5yb2dl/cmViZXJ0LmNvbS91/cGxvYWRzL21vdmll/L21vdmllX3Bvc3Rl/ci90cmFuc2Zvcm1l/cnMtcmlzZS1vZi10/aGUtYmVhc3RzLTIw/MjMvbGFyZ2VfdHJh/bnNmb3JtZXJzLXJp/c2Utb2YtdGhlLWJl/YXN0cy1tb3ZpZS1w/b3N0ZXItMjAyMy5q/cGVn",
      name: "Transformers: Rise of the Beasts",
      category: "HOLLYWOOD",
      description:
        "Transformers: Rise of the Beasts is an action-adventure movie released in 2023. The movie received mixed reviews, with some critics praising the special effects, while others criticized the storyline, characters, and dialogues.1 The franchise, based on the popular 1980s transforming robot toy line and animated TV series, has deflected critical drubbings and made Optimus Prime, Megatron, and Bumblebee household names again.0 However, Transformers: Rise of the Beasts is only recommended for h",
    },
    {
      id: 43,
      image:
        "https://imgs.search.brave.com/ImMji44X6OVJExmB9IImu5bB5KI4N8sviOYaP1Fui88/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tYW5v/Zm1hbnkuY29tL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDIxLzA1/L21vbmV5LWhlaXN0/LTIuanBn",
      name: "MONEY HEIST",
      category: "HOLLYWOOD",
      description:
        "Money Heist (also known as La Casa de Papel) is a Spanish television crime-drama series.An enigmatic man, nicknamed The Professor, plans the biggest heist in history. To carry out this plan, he recruits eight of the country's top criminals who have nothing to lose: Tokyo, an experienced robber, Berlin, the ringleader, Moscow, the drilling expert, Rio, the computer scientist, Nairobi, the counterfeiter, Denver, son of Moscow, and Helsinki and Oslo, the Balkan war veterans.The goal is to infiltrate the Royal Mint of Spain in order to print €2.4 billion in less than 11 days, without spelling a single drop of blood. The group takes 67 hostages, including the daughter of the British Ambassador. With the mastermind working on the outside, they always manage to stay one step ahead of the police.",
    },
    {
      id: 44,
      image:
        "https://imgs.search.brave.com/pip3P1aaoiheANBhkGM-1mRKotA8mHU_vRzCfye7Kw4/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtbmEuc3NsLWlt/YWdlcy1hbWF6b24u/Y29tL2ltYWdlcy9J/Lzcxa3hpNC1EbnFM/LmpwZw",
      name: "Prince of Persia: The Sands of Time",
      category: "HOLLYWOOD",
      description:
        "Prince of Persia: The Sands of Time is a 2010 action-adventure film based on the video game of the same name.01 It tells the story of a young fugitive prince and princess who must stop a villain who unknowingly threatens to destroy the world with a special dagger that enables the magic sand inside to reverse time. The movie is a rough retelling of the video game while incorporating elements of the following two sequels, as well as stylistic elements from the following game and the first three of the original trilogy.1 The film debuted #3 at the U.S. box office with $30.1 million in its first 3-day weekend of release, making it the third highest opening for a video game adaptation, behind Lara Croft: Tomb Raider and Pokémon: The First Movie.2 The movie is filled with death-defying escapes and unexpected twists at every turn, making it a fun-filled adventure that will keep your pulse pounding long after the credits end.34",
    },
    {
      id: 45,
      image:
        "https://imgs.search.brave.com/5Y5aPzY5Zwelxe8qrqdhbN_bz9QYPclThOO3njYRqRs/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtbmEuc3NsLWlt/YWdlcy1hbWF6b24u/Y29tL2ltYWdlcy9J/LzgxaWV3N0d0TzlM/LmpwZw",
      name: "Doctor Strange in the Multiverse of Madness",
      category: "HOLLYWOOD",
      description:
        "Following the events of Spider-Man No Way Home, Doctor Strange unwittingly casts a forbidden spell that accidentally opens up the multiverse. With help from Wong and Scarlet Witch, Strange confronts various versions of himself as well as teaming up with the young America Chavez while traveling through various realities and working to restore reality as he knows it. Along the way, Strange and his allies realize they must take on a powerful new adversary who seeks to take over the multiverse.While this film has a more grim tone than its predecessors it's still a Marvel film at heart. Of course it would take Sam Raimi to find the perfect blend of comic-book-movie, horror, fantasy and slapstick. He might be working with a massive budget now, but the man stays true to his roots and sticking with what he knows pays off.The pacing may seem disjointed or fragmented at times, but I feel that only reflects the complex nature of the multiverse within the film. Maybe it's not like other groundbreaking MCU films, but ultimately this is an entertaining feature.",
    },
    {
      id: 46,
      image:
        "https://imgs.search.brave.com/YHiyz0mCHn6wxJdvKbKrzl__N9K8YOSnlMu4_OJPTw4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudGhlZGlyZWN0/LmNvbS9tZWRpYS9h/cnRpY2xlX2Z1bGwv/YW5kcmV3LWdhcmZp/ZWxkLXNwaWRlci1t/YW4tbWFydmVsLXJl/dHVybi5qcGc",
      name: "SPIDER-MAN: NO WAY HOME",
      category: "HOLLYWOOD",
      description:
        "For the first time in the cinematic history of Spider-Man, our friendly neighborhood hero's identity is revealed, bringing his Super Hero responsibilities into conflict with his normal life and putting those he cares about most at risk. When he enlists Doctor Strange's help to restore his secret, the spell tears a hole in their world, releasing the most powerful villains who've ever fought a Spider-Man in any universe. Now, Peter will have to overcome his greatest challenge yet, which will not only forever alter his own future but the future of the Multiverse.February 18, 2023 - Spider-Man: No Way Home: Directed by Jon Watts. With Tom Holland, Zendaya, Benedict Cumberbatch, Jacob Batalon. With Spider-Man's identity now revealed, Peter asks Doctor Strange for help. When a spell goes wrong, dangerous foes from other worlds start to appear, forcing Peter to discover .",
    },
    {
      id: 47,
      image:
        "https://imgs.search.brave.com/KOz4c1Kz1AzZOaHE-Qrs6t0Sf65FVaJwivzs_aTdxss/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4u/bWFydmVsLmNvbS9j/b250ZW50LzF4L2F2/ZW5nZXJzZW5kZ2Ft/ZV9sb2JfY3JkXzA1/LmpwZw",
      name: "Avengers: Endgame ",
      category: "HOLLYWOOD",
      description:
        "Fans have been eagerly anticipating the arrival of Captain America 4, with numerous speculations and rumors circulating. A trusted insider now has confirmed that Sebastian Stan, who portrays Bucky, won’t appear alongside Anthony Mackie in the film. While many held out hope for even a brief reprisal of his role, it appears that won’t be the case. Only time will reveal the authenticity of these claims, leaving fans disheartened by this development.As some had speculated, Sam and Bucky’s journey began in Captain America: Civil War, establishing a bond very distinct and unique from Bucky’s connection with Steve Rogers. This could justify Sebastian Stan’s limited role in the latest Captain America sequel which would predominantly focus on Sam Wilson.Yet, reports suggest Bucky’s significance grows in the upcoming Thunderbolts, signaling his resurgence into a prominent role within the latest phases of the MCU yet again, giving some much-needed closure to the fans.",
    },
    {
      id: 48,
      image:
        "https://imgs.search.brave.com/gQPGPY2GlccEcpUTpv3loqAr2qXNwAmfiyYfKY1SiKE/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4u/bWFydmVsLmNvbS9j/b250ZW50LzF4L3Ro/b3JyYWduYXJva19s/b2JfY3JkXzAzXzAu/anBn",
      name: "THOR: RAGNAROK",
      category: "HOLLYWOOD",
      description:
        "Imprisoned on the other side of the universe, the mighty Thor finds himself in a deadly gladiatorial contest that pits him against the Hulk, his former ally and fellow Avenger. Thor's quest for survival leads him in a race against time to prevent the all-powerful Hela from destroying his home world and the Asgardian civilization.Tessa's got the comedic timing to match Taika Waititi's Thor humor, and the physicality to lead the movie's pack of superheroes. She's not trying to outdo the boys; she's just trying to sip her drink and mind her own business.Audiences seem to be smart enough these days to know a good movie when they see it, and to avoid a bad flick despite Hollywood's best efforts to pull a fast one on them.",
    },
    {
      id: 49,
      image:
        "https://imgs.search.brave.com/Oh2HLLydLk9Hd9eGjpuujJUPXyPNZHHSIrMI5msWbYI/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/anVzdHdhdGNoLmNv/bS9pbWFnZXMvYmFj/a2Ryb3AvMTExMTg2/MzIvczQ4MC9jaHVw/LWNodXAta2UvY2h1/cC1jaHVwLWtl.jpeg",
      name: "CHUP CHUP KE",
      category: "BOLLYWOOD",
      description:
        "A street hustler (Shahid Kapoor), decides to fake his own death so that his family will be able to pay off his debts with the insurance money. When two fishermen find him entangled in their nets, he pretends to be a deaf-mute so that he will not accidentally give away his true identity. This was really an enjoyable comic ride. Would have done better at the B.O. had it not been released with PHIR HERA PHERI.An interesting movie! Hilarious scenes, and a good story plot. Great cast- Shahid Kapoor, Kareena Kapoor, Suniel Shetty, Om Puri, Anupam Kher. Definitely worthy.",
    },
    {
      id: 50,
      image:
        "https://imgs.search.brave.com/ATGFlUuCQknxhZZlyyeDbFpqqcGQgCRp_OuCLPxi3aE/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1Qk5HVXlOVGsw/WW1ZdE5qVTJZUzAw/TldRMUxUbGxaR1F0/WWprNVlqVTRZell4/WmpZM1hrRXlYa0Zx/Y0dkZVFYVnlOalEy/TWpRNU56TUAuanBn",
      name: "Dhamaal",
      category: "BOLLYWOOD",
      description:
        "Roy is kicked out of his job for not guarding a certain building. Adi is using a mixtape to play a saxophone. After his audience finds out, they thrash him. Adi's autistic brother Manav tries to get a Rs. 50 Banknote back from a guy by reaching his wallet, only for his hand to be stuck in the guy's back pocket, while putting the wallet back after getting the money.The guy soon finds out and thrashes Manav. Boman Contractor accidentally damages his father Nari's car's window, he is then kicked out of his house by Nari. All four of them wind up together in a woman's house, where they go partying at nightclubs. In the house however, they're useless, as they don't do anything around and haven't paid their rent yet, after they play pranks on the woman, she kicks them out of the house for not paying their rents and tells them to get a decent job.",
    },
    {
      id: 51,
      image:
        "https://images.hindustantimes.com/rf/image_size_630x354/HT/p2/2019/10/02/Pictures/_d4ebc3ea-e4f2-11e9-939f-ba4a7f73df5c.jpg",
      name: "War",
      category: "BOLLYWOOD",
      description:
        "War has swag, style and sass in abundance, and comes peppered with high-octane action scenes, car-and-bike chases and jaw-dropping series of twists. What else do you expect from a film that has Hrithik Roshan and Tiger Shroff as the lead pair? Directed by Siddharth Anand, War is an espionage thriller that serves you with just the right amount of action, humour and tops it with ridiculously good-looking people. However, don’t expect too much from story because with two bonafide action stars fighting it out on the big screen, everything else is secondary.",
    },
    {
      id: 52,
      image:
        "https://imgs.search.brave.com/lJqwXW2hLXaHzUgstifdMkOlHIbd1J4FKr6bezcoz30/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuaHVuZ2FtYS5j/b20vYy8xLzBlYS8z/NTYvMTA0Njk1MzM0/LzEwNDY5NTMzNF8z/MDB4MzAwLmpwZw",
      name: "Dream Girl 2",
      category: "BOLLYWOOD",
      description:
        "Karamveer Karam Singh is a middle-class man living in Mathura and works as a Jagrata performer. He has a special talent of perfectly impersonating a female voice. His father Jagjit Singh is in huge debts after borrowing multiple loans and is unable to repay them. He is in a relationship with Pari Srivastava, a lawyer from a wealthy family. Pari's father Jaipal Srivastava says that he will get Pari married to Karam only if he is able to land a high paying job and buy a house of his own, within six months. In order to earn quick money, Karam disguises as a woman going by the alias Pooja and becomes a dancer at a bar owned by Sona Bhai. Pari remains unaware of this.",
    },
    {
      id: 53,
      image:
        "https://imgs.search.brave.com/4tFO7oWNfIEGgcAu72PHu-JJnUbN9kqqYleC6pVrZPE/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1QllUZzBNR0Zr/TUdZdFpqTXhZUzAw/TVRkaUxUa3hZVGt0/TkdGbVpUTTNZemxp/WWpJMVhrRXlYa0Zx/Y0dkZVFYVnlOakUx/T1RRME5qQUAuanBn",
      name: "Dream Girl",
      category: "BOLLYWOOD",
      description:
        "Karam always plays female character in plays as he has good ability of imitiating a female voice. He is looking for job and finds an ad offering 70,000 per month. His interviewer, Mauji, rejects him and shows him his call center where only ladies work as fantasy entertainers. Karam receives one of the call in name of Pooja and shocks everyone with his ability. Mauji employs him and his business soon picks up and Karam has admirers in Toto, Rajpal (a cop), Roma and his brother-in-law, Mahinder. At one point Karam feels what will his lover, Mahi, feel when she finds about his job and the biggest tragedy he comes across is his father, Jagjit Singh, is also one of his admirers.",
    },
    {
      id: 54,
      image:
        "https://imgs.search.brave.com/ZZRtxJyaDWe-DicI4t99VQqAAYkUnYP1Aqq9tc-SShQ/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMta29pbW9pLmFr/YW1haXplZC5uZXQv/d3AtY29udGVudC9u/ZXctZ2FsbGVyaWVz/LzIwMjIvMTAvZG9j/dG9yLWctbW92aWUt/cmV2aWV3LTEuanBn",
      name: "Doctor G",
      category: "BOLLYWOOD",
      description:
        "Doctor G is a social comedy-drama film directed by Anubhuti Kashyap. The story revolves around Uday Gupta, a medical student who grudgingly joins an all-women's gynecology class.1 The film pokes fun at the sexist idea that certain medical practices should be handled primarily by one gender.0 The movie stars Ayushmann Khurrana, Rakul Preet Singh, and Sheeba Chaddha.1 The film has received mixed reviews, with some praising it for its humor and heartwarming moments, while others criticize it for being a sad cringefest filled with bad jokes, stereotypical characters, and a bad background score that is out of place in the 21st century.2",
    },
    {
      id: 55,
      image:
        "https://imgs.search.brave.com/YJF-x6mY-6xIM_nZ1m5wXEDi_vdXbO8bQd6SJF2xXUk/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuaGluZHVzdGFu/dGltZXMuY29tL2lt/Zy8yMDIzLzAxLzI0/L29yaWdpbmFsL2Z1/a3JleWFkXzE2NzQ1/NDgwNjUwODYuanBn",
      name: "Fukrey -3",
      category: "BOLLYWOOD",
      description:
        "In one of her rallies, Bholi mentions eradication of water mafia in Delhi and free water for public, but Dhingra wants to control the entire water facilitation of Delhi and is backing Bholi for the same reason. Hunny, Pandit, and Lali decide to contest Choocha in the election as he is gaining public attention due to his antics. However, Choocha blurts out the plan to Bholi, who decides a counter plan to send Choocha and the Fukras to South Africa with her two bodyguards, Eddie and Bobby, to Shinda's Diamond mine. Choocha is offered money to use his Deja-Chu on the mine to find diamonds in the mine. Shinda's niece falls in love with Choocha in South Africa. 10 days later, Choocha does not get Deja-Chu, where Hunny realise Bholi's plan and decides to escape from South Africa.",
    },
    {
      id:56,

      image:"https://www.pinkvilla.com/images/2023-12/755918477_ananya-panday-1.jpg",
      name:"Ananya Panday drops heart-melting childhood video reciting ‘little monkey’ poem; fans gush over her 'cuteness'",
      category:"BOLLYWOOD",
      description:"Ananya Panday is one of the excellent actresses in the current generation. Currently, she is looking forward to the release date of her next film, Kho Gaye Hum Kahan alongside Siddhant Chaturvedi and Adarsh Gourav. On the other hand, she always keeps treating her fans and followers with her cute childhood videos and pictures. Now, yet again, a while back, she posted a childhood video where she is seen reciting a poem that is enough to bring a smile to one’s face.Today, on December 18, Ananya Panday took to her Instagram handle and dropped an aww-so-cute childhood video. In the video, she recites, I had a little monkey who used to climb a tree. He took a little coconut and threw it down at me. My monkey was so wrong, I didn’t know what to do, I put him in my motor car and drove him to the zoo”. "
    },
    {
      id:57,

      image:"https://www.pinkvilla.com/images/2023-12/1796790558_ayesha-khan-1280-3-1.jpg",
      name:"Bigg Boss 17: From junior artist in Kasautii Zindagii Kay to Baalveer 3's negative role; Know Ayesha Khan",
      category:"BOLLYWOOD",
      description:"Bigg Boss 17 witnessed an interesting twist with the entry of actress Ayesha Khan into the show. While many promos of the same have been released, viewers are waiting eagerly for the entire episode to understand what exactly transpired between Munawar Faruqui and Ayesha Khan.Ayesha Khan's entry in the show has created a storm in Bigg Boss 17. As per the new promo of the show, Munawar Faruqui was seen suffering an emotional breakdown, wishing to leave the show. Ayesha is turning heads with her strong personality. And, Pinkvilla brings you more details about the actress."
    },
    {
      id:58,

      image:"https://www.pinkvilla.com/images/2023-12/1834940994_ajay-devgn-1.jpg",
      name:"WATCH: Ajay Devgn's reply on being asked the reason behind Kajol not talking to him will leave you in splits",
      category:"BOLLYWOOD",
      description:"Filmmaker Karan Johar recently launched the eighth season of his much-loved chat show Koffee With Karan. From Ananya Panday to Aditya Roy Kapur, the Koffee couch has observed the presence of several Bollywood celebrities lately. Next on the guest list are actor Ajay Devgn and filmmaker Rohit Shetty, who are currently gearing up for their next project, Singham Again.Ahead of the episode’s release, its fun promo was released and notably, Ajay was seen taking a dig at his wife Kajol, after host Karan Johar nudged him to reveal the ‘most common reason’ that could possibly be behind if someday Kajol does not talk to him. Ajay had a quirky reply and it will surely leave you in splits."
    },
    {
      id:59,

      image:"https://www.pinkvilla.com/images/2023-12/2094963867_anand-pandit-shah-rukh-khan-salman-khan.jpg",
      name:"EXCLUSIVE: Shah Rukh Khan, Salman Khan, Aamir Khan-Ajay Devgn and more to grace Anand Pandit’s birthday bash",
      category:"BOLLYWOOD",
      description:"The film industry is poised for yet another star-studded celebration, this time in honor of producer and real estate developer Anand Pandit's birthday. In an exclusive scoop, Pinkvilla has learned that the birthday bash is set to be graced by some of the biggest names in Bollywood, including superstars Shah Rukh Khan, Salman Khan, Aamir Khan, and many more. Read on to know further details on what promises to be a glamorous and high-profile event. Pinkvilla has exclusively learned that the 60th birthday celebration for Anand Pandit on December 21 is slated to be a grand affair. According to our sources, the star-studded guest list includes Shah Rukh Khan, Salman Khan, Aamir Khan, Akshay Kumar, Ajay Devgn, Hrithik Roshan, Abhishek Bachchan, Kartik Aaryan, Tiger Shroff, and numerous other luminaries from the Hindi film industry."
    },
    {
      id:60,

      image:"https://www.pinkvilla.com/images/2023-12/1706435263_raniganj-1.jpg",
      name:"Best Biopic Movie 2023 Results: Akshay Kumar's Mission Raniganj leads the way; wins by 66%",
      category:"BOLLYWOOD",
      description:"The cinematic landscape of 2023 was enriched with a plethora of outstanding and inspirational biopic releases. As the year draws to a close, Pinkvilla hosted a poll on December 16, inviting readers to weigh in on the best biopic movie of the year. The air was thick with anticipation, and the wait is now over! Explore below to unveil the victorious movie that has earned the title of the year's standout biopic, as determined by the readers' votes.In the fierce competition for the title of the best Biopic Movie of 2023, five films vied for the top spot. The final polling results, reflecting the opinions of 236 users over a span of two days, unequivocally declared Akshay Kumar's Mission Raniganj: The Great Bharat Rescue as the undisputed winner with an impressive 66 percent of the votes. Vicky Kaushal's Sam Bahadur secured the runner-up position with 33 percent of the votes. "
    },
    // adding more data of hollywood compo
    {
      id:61,

      image:"https://imgs.search.brave.com/oBQb8OL4x1n-atYxKbc6eB1AQz30j1pvpdNB__zlYXs/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9kbm0u/bmZseGltZy5uZXQv/YXBpL3Y2L0FMbmZW/Yk12UGhxWkFJdVFN/TGt4bWRKY1hZay9B/QUFBUWRpcEJkVFly/c0NmZkVYRWNTUkRr/SGZHbUxDS1Y5bUlF/dWliRTYtQVNBdjRT/MF9ndE1pVkUxTHpP/bDQ5eHVWLTBHQk03/N3FCNmVXbFBHUHhS/OXAzVl9VbGVGZmZO/NlFCdTVNeGVsQTRj/am42bHBhWnlmeDJK/VGhKZFp3VVZ6ckJs/NEhaYThDY2FpUjlw/ZURmZEgwbTFJRzdj/S0xZalozbVlpelJR/dW8wUnV3Z2JCYWFr/NHdSazBqN19FTVg0/WEZOVzlzNnJZSWNa/UnFJOWFQdWpJWEtr/R0ZwYXlNOVo2VHFD/ZmFpdkR2R24tRUdW/WV90TTNiOW5aN2ph/ejktWE9uMW9HdlJy/aWRnc3p3bGVOU2Rr/Zy5qcGc_cj01MTY",
      name:"Stranger Things",
      category:"HOLLYWOOD",
      description:"Stranger Things  is an American science fiction horror drama television series created by the Duffer Brothers for Netflix. Produced by Monkey Massacre Productions and 21 Laps Entertainment, the first season was released on Netflix on July 15, 2016. The second and third seasons followed in October 2017 and July 2019, respectively, and the fourth season aired in May and July 2022. In February 2022, the show was renewed for a fifth and final season.1 The story revolves around a small town that uncovers a mystery involving secret experiments, terrifying supernatural forces, and one strange little girl.0 The show has been renewed for a fifth and final season Stranger Things is an American science fiction horror drama television series created by the Duffer Brothers for Netflix. Produced by Monkey Massacre Productions and 21 Laps Entertainment, the first season was released on Netflix on July 15, 2016. The second and third season followed in October 2017 and July 2019 respectively, and the fourth season aired in two parts in May and July 2022. In February 2022, Stranger Things was renewed for a fifth and final season."
    },
    {
      id:67,

      image:"https://imgs.search.brave.com/liSkQ-pQYftPLE5XuSxKl92fxdc3JlvaE5J5SsFyEvg/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXM2LmFscGhhY29k/ZXJzLmNvbS8xMTkv/MTE5MTM3NC5qcGc",
      name:"Squid Game ",
      category:"HOLLYWOOD",
      description:"Squid Game is a South Korean television series created by Hwang Dong-hyuk for Netflix.013 It is a survival drama that revolves around a secret contest where hundreds of cash-strapped players accept a strange invitation to compete in children's games.2 The game is described as a type of tag where offense and defense use a squid-shaped board drawn in the dirt. In the series, the protagonist Seong Gi-hun is seen playing the game during an opening black and white flashback sequence.3 The game is played in teams and has a whopping 45.6 billion-won prize at stake Squid Game (Korean: 오징어 게임) is a South Korean television series created by Hwang Dong-hyuk for Netflix. Its cast includes Lee Jung-jae, Park Hae-soo, Wi Ha-joon, HoYeon Jung, O Yeong-su, Heo Sung-tae, Anupam Tripathi and Kim Joo-ryoung. The series revolves around a secret contest "
    },
    {
      id:68,

      image:"https://imgs.search.brave.com/9GjAgF_Ax-cvtMmp4hu6Czj8eAw5K6D7BbY1d7D1nXU/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudGhlZGlyZWN0/LmNvbS9tZWRpYS9w/aG90b3MvbHVjdC5q/cGc",
      name:"Lucifer",
      category:"HOLLYWOOD",
      description:"Based on characters created by Neil Gaiman, Sam Kieth and Mike Dringenberg, this series follows Lucifer, the original fallen angel, who has become dissatisfied with his life in hell. After abandoning his throne and retiring to Los Angeles, Lucifer indulges in his favorite things (women, wine and song) -- until a murder takes place outside of his upscale nightclub. For the first time in billions of years, the murder awakens something unfamiliar in Lucifer's soul that is eerily similar to compassion and sympathy. Lucifer is faced with another surprise when he meets an intriguing homicide detective named Chloe, who appears to possess an inherent goodness -- unlike the worst of humanity, to which he is accustomed. Suddenly, Lucifer starts to wonder if there is hope for his soul.October 28, 2021 - Lucifer: Created by Tom Kapinos. With Tom Ellis, Lauren German, Kevin Alejandro, D.B. Woodside. Lucifer Morningstar has decided he's had enough of being the dutiful servant in Hell and decides to spend some time on Earth to better understand humanity. He settles in Los Angeles - the City of Angels."
    },
    {
      id:69,

      image:"https://upload.wikimedia.org/wikipedia/en/8/8c/The_Social_Network_film_poster.png",
      name:"The Social Network",
      category:"HOLLYWOOD",
      description:"The Social Network is a 2010 American biographical drama film directed by David Fincher and written by Aaron Sorkin, based on the 2009 book The Accidental Billionaires by Ben Mezrich. It portrays the founding of social networking website Facebook. It stars Jesse Eisenberg as Facebook founder Mark Zuckerberg, with Andrew Garfield as Eduardo Saverin, Justin Timberlake as Sean Parker, Armie Hammer as Cameron and Tyler Winklevoss, and Max Minghella as Divya Narendra. Neither Zuckerberg nor any other Facebook staff were involved with the project, although Saverin was a consultant for Mezrich's book Production began when Sorkin signed to write it. Principal photography began that same year in October in Cambridge, Massachusetts, and lasted until November. Additional scenes were shot in California, in the cities of Los Angeles and Pasadena. Trent Reznor and Atticus Ross of Nine Inch Nails composed the film's award-winning score, which was released on September 28, 2010."
    },
    // addind more data in bolywood COmpo
    {
      id:70,
      image:"https://st1.bollywoodlife.com/wp-content/uploads/2023/12/MicrosoftTeams-image-2023-12-20T221828.757.jpg?impolicy=Medium_Widthonly&w=1280&h=900",
      name:"Dunki box office collection Day 1: Shah Rukh Khan starrer to rake in THIS huge number, beat Salaar on opening day [Exclusive]",
      category:"BOLLYWOOD",
      description:"Dunki is Shah Rukh Khan's most-awaited film of this year, as he will be seen in his romantic avatar all over again. Shah Rukh Khan will be working with Rajkumar Hirani for the first time, and fans cannot wait to see what this deadly conversation has in store. The Dunki trailer and songs have been creating waves already, and it's just a day to release. Ahead of the release of Dunki BL, we exclusively got in touch with trade expert Akshaye Rathi, and we quizzed him about how many numbers the film will make on its opening day. And guess what? It's going to have a bumper opening of Rs 30–35 crore. Dunki is the story of people travelling across the country illegally; the term is donkey flight.Shah Rukh Khan plays Hardy in Dunki, and his character is called the most loveable character to date who has watched the film. Insiders are going gaga over Dunki and cannot wait for the audience to witness the most heartwarming film by Shah Rukh Khan, featuring Taapsee Pannu and Vicky Kaushal in significant roles."
    },
    {
      id:71,
      image:"https://cdn.vox-cdn.com/thumbor/189sNPkYHfQo06P_q9BWMntrZuk=/0x0:1692x1128/920x613/filters:focal(369x10:639x280):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/72985776/1868254716.0.jpg",
      name:"5 NFL head coaches on the hot seat who should save their Christmas money",
      category:"SPORTS",
      description:"According to at least one report, the decision has already been made. As Tom E. Curran reported last week on NBC Sports Boston, owner Robert Kraft made the decision to part ways with Bill Belichick following an embarrassing loss to the Indianapolis Colts in Germany.Whether that is true or not remains to be seen, and reporting since then has softened that position. The Patriots did manage to win a game against the Pittsburgh Steelers two weeks ago, but it remains clear that changes are necessary. With the team inching closer to a top-two pick in the upcoming draft next spring, the opportunity is there to completely change course.Whether Belichick is at the helm or not remains an open question. But at this point in his career would he even want to be part of another rebuild, with another rookie quarterback in the huddle?"
    },
    {
      id:72,
      image:"https://cdn.vox-cdn.com/thumbor/VGXURHBUNFC29-feraDFPkGORgk=/0x0:3060x2040/920x613/filters:focal(1404x992:1892x1480):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/72985694/usa_today_22120247.0.jpg",
      name:"The Steelers are throwing each other under the bus with their season in collapse",
      category:"SPORTS",
      description:"When Week 12 of the 2023 NFL season drew to a close, things were looking pretty good in Pittsburgh. The Pittsburgh Steelers had a 7-4 record, and were two games behind the Baltimore Ravens in the AFC North. Beyond that, the Steelers were sitting fifth in the conference standings, enjoyed a tiebreaker over the Cleveland Browns, and had upcoming games against the 2-10 Arizona Cardinals, and the 2-9 New England Patriots, coming up.The Steelers lost both of those games, the second one a Thursday Night Football loss at home in primetime to the dreadful Patriots, and followed that with a loss this past weekend in a critical game to the Indianapolis Colts. Starting quarterback Kenny Pickett has missed time due to injury, his replacement Mitchell Trubisky was ineffective and benched, and third-string quarterback Mason Rudolph is going to start this weekend in a must-win game against the Cincinnati Bengals."
    },

    {
      id:73,
      image:"https://cdn.vox-cdn.com/thumbor/f0gGcXIdxnSwc0bzKHBIo9OdotM=/0x0:5050x3367/920x613/filters:focal(2302x479:3110x1287):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/72984462/1802478073.0.jpg",
      name:"Ludvig Åberg echoes Jon Rahm sentiments despite turning down LIV offer to leave PGA Tour",
      category:"SPORTS",
      description:"Ludvig Åberg, who won last month’s RSM Classic in Georgia, turned down a LIV Golf contract multiple times throughout 2023. Åberg revealed this news while speaking with SVT Sport, a Swedish television program.When I look back, I am super confident in my decision,” Åberg said The Ryder Cup star said he received a two-year contract worth $2.5 million from LIV Golf this past February, when he was still an amateur at Texas Tech The PGA Tour gave Åberg a pathway to professional golf through its PGA Tour University program. For the first time in 2023, the top-ranked player at the collegiate level in the United States earned their playing right on the PGA Tour."
    },
    {
      id:74,
      image:"https://cdn.vox-cdn.com/thumbor/XLP7RJChQB1LqGdvKr56RF_o0Dk=/0x0:4851x3234/920x0/filters:focal(0x0:4851x3234):format(webp):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/25174618/1862669497.jpg",
      name:"Tommy Devito’s agent allegedly tried to shake down a pizza restaurant",
      category:"SPORTS",
      description:"On the one hand it’s like like Devito is an overly-paid player. He’s making $750K this season, and it’s unclear if he’ll ever see a serious contract over his career. Devito has famously said he’s frugal, choosing to live at home and eat there — rather than living a lavish NFL lifestyle. This is a player who has to make money while he can, but having your agent shake down a small restaurant over an appearance fee is definitely a touch too far.The post went on to say the restaurant wasn’t crying over spilt milk, and instead chose to remember when Manning visited Coniglios.Part of the entire appeal of Devito is his humble, grassroots upbringing with resonates with Giants fans — especially those of Italian descent. So it comes off as pretty gross to have an agreement for him to appear, only to be told later that the fee would double."
    },
    {
      id:75,
      image:"https://cdn.vox-cdn.com/thumbor/VHTQkDcTSNKVMlhHpWy0j02BVt8=/541x457:2047x1364/920x613/filters:focal(1038x626:1432x1020):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/72974059/1862986609.0.jpg",
      name:"The Falcons have to get rid of Ridder (and Arthur Smith while they’re at it)",
      category:"SPORTS",
      description:"The door was open for the Falcons, all they had to do was walk through it. Instead the team slipped on the welcome mat, flailed around comically, and collapsed to the ground with their pants around their ankles. Why did their pants fall down? I don’t know — it’s just funnier this way.On paper the season isn’t over for Atlanta, but it sure feels like it. The Falcons managed to trot out an offense that was sloppier than the disgusting Charlotte weather, and find a way to make the Panthers look like a competent NFL team for one afternoon. Okay, that’s a bit of hyperbole — the game ended 9-7 on a Sunday where both teams looked like utter garbage, but that’s also the point here. Once again poor coaching, decision making, and strategy led to a woeful outcome. That’s a mixture of inability and incompetence caused by two men: Desmond Ridder and Arthur Smith."
    },
    {
      id:76,
      image:"https://cdn.vox-cdn.com/thumbor/sp1eMvdTLqZVn5auhN3DqNHpGkI=/0x0:3712x5670/920x613/filters:focal(1406x3205:1998x3797):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/72974717/1227541293.0.jpg",
      name:"RIP Eric Montross, North Carolina basketball legend, 1971-2023",
      category:"SPORTS",
      description:"Eric Montross was a towering figure whose physical stature was far surpassed by his enormous heart. On Monday the University of North Carolina sadly announced that Montross passed away at the age of 52, following an almost year-long battle with cancer which was announced publicly in March of 2023.Montross was a midwestern basketball legend before he ever set foot at Chapel Hill. A McDonald’s All-American, Montross was a true 7-footer during his senior year of high school at Lawrence North in Indianapolis. Averaging over 20 points per game, and setting a school record in rebounds (which stands to this day), there was plenty of attention when it came time for recruiting.The assumption was that Montross would follow in his family’s footsteps. Both his father and grandfather played for Michigan, and the Wolverines were one of the top teams when it came time to commit. Instead, Montross decided to walk his own path — joining the Tar Heels where he would become a legend."
    },
    // add data in fitness compo
    {
      id:77,
      image:"https://blog.nasm.org/hubfs/natural-protein-food-on-table-PLYFFS7-750x375.jpg",
      name:"PROTEIN AND WEIGHT LOSS: HOW MUCH PROTEIN DO YOU NEED TO EAT PER DAY?",
      category:"FITNESS",
      description:"Decades of scientific research on nutrition and weight loss has uncovered a few key pieces of information on what helps people successfully win the battle of the bulge.First, we know that while exercise is important, a person’s healthy eating habits likely matters more for weight loss than the hours they spend in the gym. Second, when it comes to dieting, there is no single best one for losing weight; many diets can work quite well as long as total calorie balance is accounted for. Third, dietary protein is one of the key “levers” in a diet that increases the likelihood of someone’s ability to lose weight This article is going to cut through a lot of the noise surrounding protein and tell you how much protein you should be eating to lose weight and some of the things you should consider when planning your diet. "

    },
    {
      id:78,
      image:"https://blog.nasm.org/hubfs/Arm%20Exercises.jpg",
      name:"THE 9 BEST ARM EXERCISES FOR MUSCLE DEFINITION & STRENGTH",
      category:"FITNESS",
      description:"But before we get started with the exercises, let’s have a brief review of arm anatomy. It’s important for us to understand the muscles being targeted during each exercise. The review below is not an exhaustive list of all arm muscles, but rather some of the major arm muscles and their functions.Your biceps accelerate elbow flexion (bending your arm at the elbow), supination (moving from a palm down to palm up position) and assist with shoulder flexion (raising your arm in front of your body).The triceps brachii (or triceps for short) are located on the posterior (back) part of your upper arm between your elbow and shoulder. Your triceps contains three different “heads”; a short head, a medial head, and a long head— each with different attachment sites Your triceps accelerate elbow extension (straightening your arm at the elbow) and shoulder extension (moving your arm toward your backside— the exact opposite of shoulder flexion)."

    },
    {
      id:79,
      image:"https://blog.nasm.org/hubfs/Fast-twitch-slow-twitch.jpg",
      name:"FAST-TWITCH VS. SLOW-TWITCH MUSCLE FIBER TYPES + TRAINING TIPS",
      category:"FITNESS",
      description:"Looking to build endurance? What about power? Do dreams of being an all-star hitter or marathon runner need to be dashed if twitch ratios aren’t ideal? Not necessarily. The types of muscle fibers targeted in different types of training programs can impact sports performance training goals. Skeletal muscles are made up of individual muscle fibers. And like muscles themselves, not all muscle fibers are the same. There are two types of skeletal muscle fibers, fast-twitch and slow-twitch, and they each have different functions that are important to understand when it comes to movement and exercise programming. Slow-twitch muscle fibers are fatigue resistant, and focused on sustained, smaller movements and postural control. They contain more mitochondria and myoglobin, and are aerobic in nature compared to fast-twitch fibers. Slow-twitch fibers are also sometimes called type I or red fibers because of their blood supply.  "

    },
    {
      id:80,
      image:"https://blog.nasm.org/hubfs/180406_17_NASM_Business_2253-2_optimized-750x375.jpg",
      name:"RESTING METABOLIC RATE: HOW TO CALCULATE AND IMPROVE YOURS",
      category:"FITNESS",
      description:"Mention the term ‘metabolism’ and it captures attention given how obsessed many of us have become over calories. As a nutrition coach or weight loss specialist, this is a topic you may get asked about from time to time.To the general public, boosting your metabolism is associated with the transformation from ‘fat-to-fit’ or ‘flab-to-fab’. This is an outcome of enhanced caloric expenditure, increased lean body mass, greater fat utilization and overall weight loss.Our resting metabolic rate (RMR) plays a significant role in this, and it’s understandable why it garners so much attention. But before we dive into RMR, let’s take a look at the components of total daily energy expenditure (TDEE)."

    },
    {
      id:81,
      image:"https://blog.nasm.org/hubfs/Imported_Blog_Media/iStock-922333432.jpg",
      name:"BODY TYPES: MESOMORPH, ECTOMORPHS, & ENDOMORPHS EXPLAINED",
      category:"FITNESS",
      description:"Do you have trouble losing body fat, yet seem to gain it after even the smallest slip up with your diet? Or does it feel like you can eat for days without gaining an ounce? It could have something to do with your current body type. But is it really that simple? Let's explore the three body types more in depth - endomorph, mesomorph, and ectomorph - and analyze how they relate to overall body composition.Body type, or somatotype, refers to the idea that there are three generalized body compositions that people are predetermined to have. The concept was theorized by Dr. W.H. Sheldon back in the early 1940s, naming the three somatotypes endomorph, mesomorph, and ectomorph. It was originally believed that a person’s somatotype was unchangeable, and that certain physiological and psychological characteristics were even determined by whichever one a person aligns to."

    },
    {
      id:82,
      image:"https://techcrunch.com/wp-content/uploads/2023/12/GettyImages-1724735466.jpg?w=730&crop=1",
      name:"Cisco to acquire cloud-native networking and security startup Isovalent",
      category:"TECHNOLOGY",
      description:"Cisco announced this morning that it intends to acquire Isovalent, a cloud-native security and networking startup that should fit well with the company’s core networking and security strategy. The companies did not share the purchase price.Isovalent has helped develop eBPF, a key open source technology that gives developers deep insight into the operating system layer, typically Linux, but also Windows, while Cilium, another open source project created by the startup, gives visibility into cloud native applications. Tetragon is the company’s open source security visibility component.Tom Gillis, senior VP and general manager of Cisco’s Security Business Group says the combination of these three elements used to be provided by a hardware appliance, but in the cloud world is increasingly software-driven. “In a cloud world, there’s still boxes in there somewhere, but it’s abstracted under layers and layers of software. And so eBPF and Cilium provide that visibility for cloud world,” he told TechCrunch."
    },
    {
      id:83,
      image:"https://techcrunch.com/wp-content/uploads/2023/12/GettyImages-1420812435-1.jpg?w=730&crop=1",
      name:"The new American Dream is to get MrBeast to pay off your debt",
      category:"TECHNOLOGY",
      description:"A woman in a blue tracksuit is on the floor of a bright asylum-like room, stretching in a pigeon yoga pose when she turns to the stranger she plans to live with for 100 days “What are you going to do with this money?” she asks. The two contestants in MrBeast’s newest video, Suzie Taylor and Bailey Stanfield, have been cohabitating for nearly three weeks at this point, isolated from the rest of the world. They only eat canned food, and all they have to entertain themselves is a deck of cards that they made themselves. I was probably going to pay a lot on the house,” Bailey replies. He’s sitting in his bed, where he’s made a canopy with a sheet to keep the light out, since the bright lights never turn off. Stacks of dollar bills lie atop his canopy, and he’s surrounded by 15 more briefcases filled with money, which he will only get if he can stick this out for another few months."
    },
    {
      id:84,
      image:"https://techcrunch.com/wp-content/uploads/2016/11/indoorvector.jpg?w=730&crop=1",
      name:"A blueprint for founders navigating economic uncertainty",
      category:"TECHNOLOGY",
      description:"Founding a company during economic uncertainty and excelling takes more than just a hungry founder with a good idea. It requires a solid foundation to withstand the market. Companies founded today must focus on becoming profitable while growing, which is only sometimes a priority for companies receiving aggressive VC funding. In the pre-revenue stage, profitability has sometimes been top of mind, but keeping operations efficient and focused is vital for maximizing the potential for monetization. Investors are engaging with fewer pitch decks from founders, according to DocSend data — investor activity dropped less than 2% year-over-year (YoY) from 2022 and 4% from 2021. However, investors are still reviewing pitch decks at a higher clip than 2020, proving there’s a market for early-stage deals, even though funding was down 27% YoY in Q3."
    },
    {
      id:85,
      image:"https://techcrunch.com/wp-content/uploads/2023/12/getty-images-banana.jpg?w=730&crop=1",
      name:"Tech gifts you shouldn’t buy your family and friends for the holidays",
      category:"TECHNOLOGY",
      description:"It’s the season to go a little overboard on gift giving. But this year, give the gift of good security (and privacy) and eschew tech that can have untoward risks or repercussions. We’re not talking about things that go boom in the night or abruptly break, but rather the gifts that can have irreversible or ongoing consequences in the future. This year we’ve seen some of the biggest hacks involving healthcare and genetic data, a growing ubiquity of consumer surveillance tech snooping on unsuspecting everyone and ongoing unscrupulous data practices that sell your private information to anyone who wants to buy it. The best remedy for some of this is to never engage to begin with."
    },
    {
      id:86,
      image:"https://techcrunch.com/wp-content/uploads/2023/09/GettyImages-1206978865.jpg?w=730&crop=1",
      name:"A provocative role for technologists in product innovation",
      category:"TECHNOLOGY",
      description:"Product design is in a moment of profound change and redefinition as technologies like artificial intelligence (AI) and spatial computing dramatically affect computing experiences. AI, especially, may have only minor impacts on interface design but will significantly impact the holistic product or ecosystem experience. Spatial computing, on the other hand, will change human-computer interactions and unmoor our understanding of what a computer is.In this innovation cycle, product design requires a wider perspective of platforms and interconnections between technologies, creating a strong need for technologists and designers to be in the process together."
    },
    {
      id:87,
      image:"https://techcrunch.com/wp-content/uploads/2023/07/GettyImages-1365161798.jpg?w=730&crop=1",
      name:"Seed to Series A: Strategic insights for tech founders in the 2024 venture landscape",
      category:"TECHNOLOGY",
      description:"There is no question that 2023 was a tough year for the venture and tech ecosystem. Carta revealed a dramatic decline in funding rounds and total investment, showing the total number of rounds in Q1 2023 dropping 64% and the total dollars invested dropping 86% from the peak in Q4 2021. Forum Ventures has seen firsthand how difficult the fundraising environment is for founders at all stages of this market, having invested in 100+ B2B SaaS companies this year across their accelerator and seed funds. Michael Cardamone, CEO and managing partner at Forum Ventures, spoke to emerging managers about the state of this market and reflected that “this is the hardest it has been to raise a fund in a long time. In a recent report, Forum Ventures surveyed 70 funds and analyzed data from 167 closed pre-seed and seed rounds between January and October 2023 to provide a comprehensive overview of the current state of the early-stage B2B SaaS investment landscape.”"
    }
  ]);

  return <Store.Provider value={{ data }}>
    {children}
    </Store.Provider>;
};

export default DataCompo;
