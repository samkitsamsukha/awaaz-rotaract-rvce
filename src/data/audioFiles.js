const audioFiles = [
    {
        id: 1,
        title: "Shaheed Bhagat Singh",
        year: 2025,
        grade: "3-5",
        language: "Hindi",
        category: "Story",
        contributor: "Rtr. Pratham M Pimpalshende",
        url: "https://rotaractrvce.com/awaaz/2025/hindi/ShaheedBhagatSingh.mp3"
    },
    {
        id: 10000,
        title: "Dr. APJ Abdul Kalam",
        year: 2025,
        grade: "3-5",
        language: "Hindi",
        category: "Story",
        contributor: "Rtr. Pratham M Pimpalshende",
        url: "https://rotaractrvce.com/awaaz/2025/hindi/APJAbdulKalam.mp3"
    },
    {
        id: 10001,
        title: "Dr. BR Ambedkar",
        year: 2025,
        grade: "3-5",
        language: "Hindi",
        category: "Story",
        contributor: "Rtr. Pratham M Pimpalshende",
        url: "https://rotaractrvce.com/awaaz/2025/hindi/BRAmbedkar.mp3"
    },
    {
        id: 10002,
        title: "Netaji Subhash Chandra Bose",
        year: 2025,
        grade: "3-5",
        language: "Hindi",
        category: "Story",
        contributor: "Rtr. Pratham M Pimpalshende",
        url: "https://rotaractrvce.com/awaaz/2025/hindi/Netaji.mp3"
    },
    {
        id: 10003,
        title: "Rani Lakshmibai",
        year: 2025,
        grade: "3-5",
        language: "Hindi",
        category: "Story",
        contributor: "Rtr. Pratham M Pimpalshende",
        url: "https://rotaractrvce.com/awaaz/2025/hindi/RaniLaxmibai.mp3"
    },
    {
        id: 10003,
        title: "Sociology Unit 1",
        year: 2025,
        grade: "9-12",
        language: "Kannada",
        category: "Educational",
        contributor: "Rtr. Deeksha A J",
        url: "https://rotaractrvce.com/awaaz/2025/kannada/Sociology Unit 1.m4a"
    },
    {
        id: 10004,
        title: "Sociology Unit 2",
        year: 2025,
        grade: "9-12",
        language: "Kannada",
        category: "Educational",
        contributor: "Rtr. Deeksha A J",
        url: "https://rotaractrvce.com/awaaz/2025/kannada/Sociology Unit 2.m4a"
    },
    {
        id: 10005,
        title: "Sociology Unit 3",
        year: 2025,
        grade: "9-12",
        language: "Kannada",
        category: "Educational",
        contributor: "Rtr. Deeksha A J",
        url: "https://rotaractrvce.com/awaaz/2025/kannada/Sociology Unit 3.m4a"
    },
    {
        id: 10006,
        title: "Sociology Unit 4",
        year: 2025,
        grade: "9-12",
        language: "Kannada",
        category: "Educational",
        contributor: "Rtr. Deeksha A J",
        url: "https://rotaractrvce.com/awaaz/2025/kannada/Sociology Unit 4.m4a"
    },
    {
        id: 10007,
        title: "Sociology Unit 5",
        year: 2025,
        grade: "9-12",
        language: "Kannada",
        category: "Educational",
        contributor: "Rtr. Deeksha A J",
        url: "https://rotaractrvce.com/awaaz/2025/kannada/Sociology Unit 5.m4a"
    },
    {
        id: 10008,
        title: "Sociology Unit 6",
        year: 2025,
        grade: "9-12",
        language: "Kannada",
        category: "Educational",
        contributor: "Rtr. Deeksha A J",
        url: "https://rotaractrvce.com/awaaz/2025/kannada/Sociology Unit 6.m4a"
    },
    {
        id: 10009,
        title: "Sociology Unit 7",
        year: 2025,
        grade: "9-12",
        language: "Kannada",
        category: "Educational",
        contributor: "Rtr. Deeksha A J",
        url: "https://rotaractrvce.com/awaaz/2025/kannada/Sociology Unit 7.m4a"
    },
    {
        id: 10010,
        title: "Sociology Unit 8",
        year: 2025,
        grade: "9-12",
        language: "Kannada",
        category: "Educational",
        contributor: "Rtr. Deeksha A J",
        url: "https://rotaractrvce.com/awaaz/2025/kannada/Sociology Unit 8.m4a"
    },
    {
        id: 10011,
        title: "Sentence and Subject",
        year: 2025,
        grade: "6-8",
        language: "English",
        category: "Educational",
        contributor: "Rtr. Divya Sarvi",
        url: "https://rotaractrvce.com/awaaz/2025/english/Sentence and Subject.m4a"
    },
    {
        id: 10012,
        title: "Phrases and Clauses",
        year: 2025,
        grade: "6-8",
        language: "English",
        category: "Educational",
        contributor: "Rtr. Divya Sarvi",
        url: "https://rotaractrvce.com/awaaz/2025/english/Phrases and Clauses.m4a"
    },
    {
        id: 10013,
        title: "Nouns",
        year: 2025,
        grade: "6-8",
        language: "English",
        category: "Educational",
        contributor: "Rtr. Divya Sarvi",
        url: "https://rotaractrvce.com/awaaz/2025/english/Nouns.m4a"
    },
    {
        id: 10014,
        title: "Parts of Speech",
        year: 2025,
        grade: "6-8",
        language: "English",
        category: "Educational",
        contributor: "Rtr. Divya Sarvi",
        url: "https://rotaractrvce.com/awaaz/2025/english/Parts of Speech.m4a"
    },
    {
        id: 2,
        title: "Arjuna and the Bird's Eye",
        year: 2025,
        grade: "3-5",
        language: "English",
        category: "Story",
        contributor: "Rtr. Priyam Parashar",
        url: "https://rotaractrvce.com/awaaz/2025/english/ArjunaAndBirdsEye.m4a"
    },
    {
        id: 3,
        title: "Krisha and Arjuna",
        year: 2025,
        grade: "3-5",
        language: "English",
        category: "Story",
        contributor: "Rtr. Priyam Parashar",
        url: "https://rotaractrvce.com/awaaz/2025/english/KrishnaAndArjuna.m4a"
    },
    {
        id: 4,
        title: "Eklavya - The Silent Disciple",
        year: 2025,
        grade: "3-5",
        language: "English",
        category: "Story",
        contributor: "Rtr. Priyam Parashar",
        url: "https://rotaractrvce.com/awaaz/2025/english/EklavyaTheSilentDisciple.m4a"
    },
    {
        id: 5,
        title: "Milo The Cat",
        year: 2025,
        grade: "3-5",
        language: "English",
        category: "Poem",
        contributor: "Rtr. Priyam Parashar",
        url: "https://rotaractrvce.com/awaaz/2025/english/MiloTheCat.m4a"
    },
    {
        id: 6,
        title: "The Dream Train",
        year: 2025,
        grade: "3-5",
        language: "English",
        category: "Poem",
        contributor: "Rtr. Priyam Parashar",
        url: "https://rotaractrvce.com/awaaz/2025/english/TheDreamTrain.m4a"
    },
    {
        id: 7,
        title: "I Can Still Fly - Aashi Verma",
        year: 2025,
        grade: "3-5",
        language: "English",
        category: "Poem",
        contributor: "Rtr. Priyam Parashar",
        url: "https://rotaractrvce.com/awaaz/2025/english/ICanStillFlyByAashiVerma.m4a"
    },
    {
        id: 8,
        title: "Blue Fox",
        year: 2025,
        grade: "1-2",
        language: "Kannada",
        category: "Story",
        contributor: "Rtr. Poorvika N",
        url: "https://rotaractrvce.com/awaaz/2025/kannada/BlueFox.m4a"
    },
    {
        id: 9,
        title: "Elephant and Rat",
        year: 2025,
        grade: "1-2",
        language: "Kannada",
        category: "Story",
        contributor: "Rtr. Poorvika N",
        url: "https://rotaractrvce.com/awaaz/2025/kannada/ElephantAndRat.m4a"
    },
    {
        id: 10,
        title: "Crab and Crane",
        year: 2025,
        grade: "1-2",
        language: "Kannada",
        category: "Story",
        contributor: "Rtr. Poorvika N",
        url: "https://rotaractrvce.com/awaaz/2025/kannada/CrabAndCrane.m4a"
    },
    {
        id: 11,
        title: "Story of a Mongoose",
        year: 2025,
        grade: "1-2",
        language: "Kannada",
        category: "Story",
        contributor: "Rtr. Poorvika N",
        url: "https://rotaractrvce.com/awaaz/2025/kannada/StoryOfAMongoose.m4a"
    },
    {
        id: 12,
        title: "A Clever Rabbit",
        year: 2025,
        grade: "1-2",
        language: "Kannada",
        category: "Story",
        contributor: "Rtr. Poorvika N",
        url: "https://rotaractrvce.com/awaaz/2025/kannada/ACleverRabbit.opus"
    },
    {
        id: 13,
        title: "Ramayana 1: Birth Of Ram",
        year: 2025,
        grade: "3-5",
        language: "English",
        category: "Story",
        contributor: "Rtr. Shreeya Suman",
        url: "https://rotaractrvce.com/awaaz/2025/english/Ramayana1BirthOfRam.mp3"
    },
    {
        id: 14,
        title: "Ramayana 2: The Valiant Princes",
        year: 2025,
        grade: "3-5",
        language: "English",
        category: "Story",
        contributor: "Rtr. Shreeya Suman",
        url: "https://rotaractrvce.com/awaaz/2025/english/Ramayana2TheValiantPrinces.mp3"
    },
    {
        id: 15,
        title: "Ramayana 3: Sita's Swayamvar",
        year: 2025,
        grade: "3-5",
        language: "English",
        category: "Story",
        contributor: "Rtr. Shreeya Suman",
        url: "https://rotaractrvce.com/awaaz/2025/english/Ramayana3SitasSwayamvar.mp3"
    },
    {
        id: 16,
        title: "Ramayana 4: Kaikeyi And Her Wishes (Part 1)",
        year: 2025,
        grade: "3-5",
        language: "English",
        category: "Story",
        contributor: "Rtr. Shreeya Suman",
        url: "https://rotaractrvce.com/awaaz/2025/english/Ramayana4KaikeyiAndHerWishes1.mp3"
    },
    {
        id: 17,
        title: "Ramayana 4: Kaikeyi And Her Wishes (Part 2)",
        year: 2025,
        grade: "3-5",
        language: "English",
        category: "Story",
        contributor: "Rtr. Shreeya Suman",
        url: "https://rotaractrvce.com/awaaz/2025/english/Ramayana4KaikeyiAndHerWishes2.mp3"
    },
    {
        id: 18,
        title: "Ramayana 4: Kaikeyi And Her Wishes (Part 3)",
        year: 2025,
        grade: "3-5",
        language: "English",
        category: "Story",
        contributor: "Rtr. Shreeya Suman",
        url: "https://rotaractrvce.com/awaaz/2025/english/Ramayana4KaikeyiAndHerWishes3.mp3"
    },
    {
        id: 19,
        title: "Ramayana 4: Kaikeyi And Her Wishes (Part 4)",
        year: 2025,
        grade: "3-5",
        language: "English",
        category: "Story",
        contributor: "Rtr. Shreeya Suman",
        url: "https://rotaractrvce.com/awaaz/2025/english/Ramayana4KaikeyiAndHerWishes4.mp3"
    },
    {
        id: 20,
        title: "Ramayana 5: Demons In The Forest",
        year: 2025,
        grade: "3-5",
        language: "English",
        category: "Story",
        contributor: "Rtr. Shreeya Suman",
        url: "https://rotaractrvce.com/awaaz/2025/english/Ramayana5DemonsInTheForest.mp3"
    },
    {
        id: 2000,
        title: "Ramayana 6: Kidnapping of Sita",
        year: 2025,
        grade: "3-5",
        language: "English",
        category: "Story",
        contributor: "Rtr. Yash Gautam",
        url: "https://rotaractrvce.com/awaaz/2025/english/6 Kidnapping of Sita.m4a"
    },
    {
        id: 2001,
        title: "Ramayana 7: Ram searches for Sita",
        year: 2025,
        grade: "3-5",
        language: "English",
        category: "Story",
        contributor: "Rtr. Yash Gautam",
        url: "https://rotaractrvce.com/awaaz/2025/english/7 Rama searches for Sita.m4a"
    },
    {
        id: 2002,
        title: "Ramayana 8: The Land of Monkeys",
        year: 2025,
        grade: "3-5",
        language: "English",
        category: "Story",
        contributor: "Rtr. Yash Gautam",
        url: "https://rotaractrvce.com/awaaz/2025/english/8 The land of the monkeys.m4a"
    },
    {
        id: 2003,
        title: "Ramayana 9: Hanuman meets Sita",
        year: 2025,
        grade: "3-5",
        language: "English",
        category: "Story",
        contributor: "Rtr. Yash Gautam",
        url: "https://rotaractrvce.com/awaaz/2025/english/9 Hanuman meets Sita- Lanka is destroyed.m4a"
    },
    {
        id: 2004,
        title: "Ramayana 10: The Battle of Lanka",
        year: 2025,
        grade: "3-5",
        language: "English",
        category: "Story",
        contributor: "Rtr. Yash Gautam",
        url: "https://rotaractrvce.com/awaaz/2025/english/10 The War.m4a"
    },
    {
        id: 2005,
        title: "Jungle ka School",
        year: 2025,
        grade: "1-2",
        language: "Hindi",
        category: "Story",
        contributor: "Rtr. Tanisha Dey",
        url: "https://rotaractrvce.com/awaaz/2025/hindi/Jungle ka School.m4a"
    },
    {
        id: 2006,
        title: "Jungle People",
        year: 2025,
        grade: "3-5",
        language: "Odia",
        category: "Story",
        contributor: "Rtr. Priyam Parashar",
        url: "https://rotaractrvce.com/awaaz/2025/odia/Jungle People.mp3"
    },
    {
        id: 2007,
        title: "A Blessing In Disguise",
        year: 2025,
        grade: "6-8",
        language: "English",
        category: "Story",
        contributor: "Rtr. Nivriti Jain",
        url: "https://rotaractrvce.com/awaaz/2025/english/A Blessing In Disguise.mp3"
    },
    {
        id: 2008,   
        title: "A Special Gift",
        year: 2025,
        grade: "6-8",
        language: "English",
        category: "Story",
        contributor: "Rtr. Nivriti Jain",
        url: "https://rotaractrvce.com/awaaz/2025/english/A Special Gift.mp3"
    },
    {
        id: 2009,   
        title: "Father's Love",
        year: 2025,
        grade: "6-8",
        language: "English",
        category: "Story",
        contributor: "Rtr. Nivriti Jain",
        url: "https://rotaractrvce.com/awaaz/2025/english/Father_s Love.mp3"
    },
    {
        id: 2010,   
        title: "Good Will Grow Out of Good",
        year: 2025,
        grade: "6-8",
        language: "English",
        category: "Story",
        contributor: "Rtr. Nivriti Jain",
        url: "https://rotaractrvce.com/awaaz/2025/english/Good Will Grow Out of Good .mp3"
    },
    {
        id: 2011,   
        title: "The Disobedient Girl Dayane",
        year: 2025,
        grade: "6-8",
        language: "English",
        category: "Story",
        contributor: "Rtr. Nivriti Jain",
        url: "https://rotaractrvce.com/awaaz/2025/english/The Disobedient Girl Dayane.mp3"
    },
    {
        id: 2012,   
        title: "The Fisherman and His Wife",
        year: 2025,
        grade: "6-8",
        language: "English",
        category: "Story",
        contributor: "Rtr. Nivriti Jain",
        url: "https://rotaractrvce.com/awaaz/2025/english/The Fisherman and His Wife.mp3"
    },
    {
        id: 2013,   
        title: "The Story of a Little Brave Boy",
        year: 2025,
        grade: "6-8",
        language: "English",
        category: "Story",
        contributor: "Rtr. Nivriti Jain",
        url: "https://rotaractrvce.com/awaaz/2025/english/The Story of a Little Brave Boy.mp3"
    },
    {
        id: 2014,   
        title: "The Story of Sammy and Timmy",
        year: 2025,
        grade: "6-8",
        language: "English",
        category: "Story",
        contributor: "Rtr. Nivriti Jain",
        url: "https://rotaractrvce.com/awaaz/2025/english/The Story of Sammy and Timmy.mp3"
    },
    {
        id: 2015,   
        title: "Tuan and the Power of Kindness",
        year: 2025,
        grade: "6-8",
        language: "English",
        category: "Story",
        contributor: "Rtr. Nivriti Jain",
        url: "https://rotaractrvce.com/awaaz/2025/english/Tuan and the Power of Kindness.mp3"
    },
    {
        id: 2014,
        title: "A Glass of Milk",
        year: 2025,
        grade: "3-5",
        language: "English",
        category: "Story",
        contributor: "Rtr. Nivriti Jain",
        url: "https://rotaractrvce.com/awaaz/2025/english/A Glass of Milk.mp3"
    },
    {
        id: 2015,
        title: "A Wise Old Owl",
        year: 2025,
        grade: "3-5",
        language: "English",
        category: "Story",
        contributor: "Rtr. Nivriti Jain",
        url: "https://rotaractrvce.com/awaaz/2025/english/A Wise Old Owl.mp3"
    },
    {
        id: 2016,
        title: "Elephants and Friends",
        year: 2025,
        grade: "3-5",
        language: "English",
        category: "Story",
        contributor: "Rtr. Nivriti Jain",
        url: "https://rotaractrvce.com/awaaz/2025/english/Elephants and Friends.mp3"
    },
    {
        id: 2017,
        title: "The Bear and The Two Friends",
        year: 2025,
        grade: "3-5",
        language: "English",
        category: "Story",
        contributor: "Rtr. Nivriti Jain",
        url: "https://rotaractrvce.com/awaaz/2025/english/The Bear and The Two Friends.mp3"
    },
    {
        id: 2018,
        title: "The Boy Who Cried Wolf",
        year: 2025,
        grade: "3-5",
        language: "English",
        category: "Story",
        contributor: "Rtr. Nivriti Jain",
        url: "https://rotaractrvce.com/awaaz/2025/english/The Boy Who Cried Wolf.mp3"
    },
    {
        id: 2019,
        title: "The Clever Rabbit",
        year: 2025,
        grade: "3-5",
        language: "English",
        category: "Story",
        contributor: "Rtr. Nivriti Jain",
        url: "https://rotaractrvce.com/awaaz/2025/english/The Clever Rabbit.mp3"
    },
    {
        id: 2020,
        title: "The Dog at The Well",
        year: 2025,
        grade: "3-5",
        language: "English",
        category: "Story",
        contributor: "Rtr. Nivriti Jain",
        url: "https://rotaractrvce.com/awaaz/2025/english/The Dog at The Well.mp3"
    },
    {
        id: 2021,
        title: "The Fox and The Stork",
        year: 2025,
        grade: "3-5",
        language: "English",
        category: "Story",
        contributor: "Rtr. Nivriti Jain",
        url: "https://rotaractrvce.com/awaaz/2025/english/The Fox and The Stork.mp3"
    },
    {
        id: 2022,
        title: "The Golden Touch",
        year: 2025,
        grade: "3-5",
        language: "English",
        category: "Story",
        contributor: "Rtr. Nivriti Jain",
        url: "https://rotaractrvce.com/awaaz/2025/english/The Golden Touch.mp3"
    },
    {
        id: 2023,
        title: "The Lion and The Mouse",
        year: 2025,
        grade: "3-5",
        language: "English",
        category: "Story",
        contributor: "Rtr. Nivriti Jain",
        url: "https://rotaractrvce.com/awaaz/2025/english/The Lion and The Mouse.mp3"
    },
    {
        id: 2024,
        title: "The Milkmaid and Her Pail",
        year: 2025,
        grade: "3-5",
        language: "English",
        category: "Story",
        contributor: "Rtr. Nivriti Jain",
        url: "https://rotaractrvce.com/awaaz/2025/english/The Milkmaid and Her Pail.mp3"
    },
    {
        id: 2025,
        title: "The Proud Rose",
        year: 2025,
        grade: "3-5",
        language: "English",
        category: "Story",
        contributor: "Rtr. Nivriti Jain",
        url: "https://rotaractrvce.com/awaaz/2025/english/The Proud Rose.mp3"
    },
    {
        id: 2026,
        title: "A Little Cloud",
        year: 2025,
        grade: "3-5",
        language: "English",
        category: "Poem",
        contributor: "Rtr. Nivriti Jain",
        url: "https://rotaractrvce.com/awaaz/2025/english/A Little Cloud.mp3"
    },
    {
        id: 2027,
        title: "Benny The Brave Little Bunny",
        year: 2025,
        grade: "3-5",
        language: "English",
        category: "Poem",
        contributor: "Rtr. Nivriti Jain",
        url: "https://rotaractrvce.com/awaaz/2025/english/Benny The Brave Little Bunny.mp3"
    },
    {
        id: 2028,
        title: "I_m A Little Teapot",
        year: 2025,
        grade: "3-5",
        language: "English",
        category: "Poem",
        contributor: "Rtr. Nivriti Jain",
        url: "https://rotaractrvce.com/awaaz/2025/english/I_m A Little Teapot.mp3"
    },
    {
        id: 2029,
        title: "My Little Puppy",
        year: 2025,
        grade: "3-5",
        language: "English",
        category: "Poem",
        contributor: "Rtr. Nivriti Jain",
        url: "https://rotaractrvce.com/awaaz/2025/english/My Little Puppy.mp3"
    },
    {
        id: 2030,
        title: "Now We Are Six",
        year: 2025,
        grade: "3-5",
        language: "English",
        category: "Poem",
        contributor: "Rtr. Nivriti Jain",
        url: "https://rotaractrvce.com/awaaz/2025/english/Now We Are Six.mp3"
    },
    {
        id: 2031,
        title: "Rabbits",
        year: 2025,
        grade: "3-5",
        language: "English",
        category: "Poem",
        contributor: "Rtr. Nivriti Jain",
        url: "https://rotaractrvce.com/awaaz/2025/english/Rabbits.mp3"
    },
    {
        id: 2032,
        title: "The Cat Who Wanted to Fly",
        year: 2025,
        grade: "3-5",
        language: "English",
        category: "Poem",
        contributor: "Rtr. Nivriti Jain",
        url: "https://rotaractrvce.com/awaaz/2025/english/The Cat Who Wanted to Fly.mp3"
    },
    {
        id: 2033,
        title: "The Friendly Cow",
        year: 2025,
        grade: "3-5",
        language: "English",
        category: "Poem",
        contributor: "Rtr. Nivriti Jain",
        url: "https://rotaractrvce.com/awaaz/2025/english/The Friendly Cow.mp3"
    },
    {
        id: 2034,
        title: "The Friendly Tree",
        year: 2025,
        grade: "3-5",
        language: "English",
        category: "Poem",
        contributor: "Rtr. Nivriti Jain",
        url: "https://rotaractrvce.com/awaaz/2025/english/The Friendly Tree.mp3"
    },
    {
        id: 2035,
        title: "The Jungle Parade",
        year: 2025,
        grade: "3-5",
        language: "English",
        category: "Poem",
        contributor: "Rtr. Nivriti Jain",
        url: "https://rotaractrvce.com/awaaz/2025/english/The Jungle Parade.mp3"
    },
    {
        id: 2036,
        title: "The Moonlight Zoo",
        year: 2025,
        grade: "3-5",
        language: "English",
        category: "Poem",
        contributor: "Rtr. Nivriti Jain",
        url: "https://rotaractrvce.com/awaaz/2025/english/The Moonlight Zoo.mp3"
    },
    {
        id: 2037,
        title: "The Ant & The Grasshopper",
        year: 2025,
        grade: "3-5",
        language: "English",
        category: "Story",
        contributor: "Rtr. Navya K J",
        url: "https://rotaractrvce.com/awaaz/2025/english/STORY 1 - The ant & the grasshopper_.aac"
    },
    {
        id: 2038,
        title: "The Thirsty Crow",
        year: 2025,
        grade: "3-5",
        language: "English",
        category: "Story",
        contributor: "Rtr. Navya K J",
        url: "https://rotaractrvce.com/awaaz/2025/english/STORY 2 - The thirsty crow_.aac"
    },
    {
        id: 2039,
        title: "The Hare & The Tortoise",
        year: 2025,
        grade: "3-5",
        language: "English",
        category: "Story",
        contributor: "Rtr. Navya K J",
        url: "https://rotaractrvce.com/awaaz/2025/english/STORY 3 - The Hare & the tortoise_.aac"
    },
    {
        id: 2040,
        title: "The Dog & The Bone",
        year: 2025,
        grade: "3-5",
        language: "English",
        category: "Story",
        contributor: "Rtr. Navya K J",
        url: "https://rotaractrvce.com/awaaz/2025/english/STORY 4 - The dog & the bone.aac"
    },
    {
        id: 2041,
        title: "The Fox & The Grapes",
        year: 2025,
        grade: "3-5",
        language: "English",
        category: "Story",
        contributor: "Rtr. Navya K J",
        url: "https://rotaractrvce.com/awaaz/2025/english/STORY 5 - The fox & the grapes.aac"
    },
    {
        id: 2042,
        title: "Chapter 1 - Romeo and Juliet",
        year: 2025,
        grade: "9-12",
        language: "English",
        category: "Educational",
        contributor: "Rtr. Yash Saraogi",
        url: "https://rotaractrvce.com/awaaz/2025/english/Chapter 1 - Romeo and Juliet.mp3"
    },
    {
        id: 2043,
        title: "Chapter 3 - On Children",
        year: 2025,
        grade: "9-12",
        language: "English",
        category: "Educational",
        contributor: "Rtr. Yash Saraogi",
        url: "https://rotaractrvce.com/awaaz/2025/english/Chapter 3 - On Children.mp3"
    },
    {
        id: 2044,
        title: "Chapter 4 - Everything I need to know I learn in the forest",
        year: 2025,
        grade: "9-12",
        language: "English",
        category: "Educational",
        contributor: "Rtr. Yash Saraogi",
        url: "https://rotaractrvce.com/awaaz/2025/english/Chapter 4 - Everything I need to know I learn in the forest.mp3"
    },
    {
        id: 2045,
        title: "Chapter 6 - When you are old",
        year: 2025,
        grade: "9-12",
        language: "English",
        category: "Educational",
        contributor: "Rtr. Yash Saraogi",
        url: "https://rotaractrvce.com/awaaz/2025/english/Chapter 6 - When you are old.mp3"
    },
    {
        id: 2046,
        title: "Chapter 7 - The Gardener",
        year: 2025,
        grade: "9-12",
        language: "English",
        category: "Educational",
        contributor: "Rtr. Yash Saraogi",
        url: "https://rotaractrvce.com/awaaz/2025/english/Chapter 7 - The Gardener.mp3"
    },
    {
        id: 2047,
        title: "Chapter 8 - Enhance Speech",
        year: 2025,
        grade: "9-12",
        language: "English",
        category: "Educational",
        contributor: "Rtr. Yash Saraogi",
        url: "https://rotaractrvce.com/awaaz/2025/english/Chapter 8 - Enhance Speech.mp3"
    },
    {
        id: 2048,
        title: "Chapter 10 - Heaven, If you are not here on earth",
        year: 2025,
        grade: "9-12",
        language: "English",
        category: "Educational",
        contributor: "Rtr. Yash Saraogi",
        url: "https://rotaractrvce.com/awaaz/2025/english/Chapter 10 - Heaven, If you are not here on earth.mp3"
    },
    {
        id: 2049,
        title: "Chapter 11 - Japan Brazil Traveler_s Eye",
        year: 2025,
        grade: "9-12",
        language: "English",
        category: "Educational",
        contributor: "Rtr. Yash Saraogi",
        url: "https://rotaractrvce.com/awaaz/2025/english/Chapter 11 - Japan Brazil Traveler_s Eye.mp3"
    },
    {
        id: 2050,
        title: "Chapter 12 - The Voter",
        year: 2025,
        grade: "9-12",
        language: "English",
        category: "Educational",
        contributor: "Rtr. Yash Saraogi",
        url: "https://rotaractrvce.com/awaaz/2025/english/Chapter 12 - The Voter.mp3"
    },
    {
        id: 2051,
        title: "Chapter 13 - Where there is a wheel",
        year: 2025,
        grade: "9-12",
        language: "English",
        category: "Educational",
        contributor: "Rtr. Yash Saraogi",
        url: "https://rotaractrvce.com/awaaz/2025/english/Chapter 13 - Where there is a wheel.mp3"
    },
    {
        id: 2052,
        title: "Chapter 14 - Water",
        year: 2025,
        grade: "9-12",
        language: "English",
        category: "Educational",
        contributor: "Rtr. Yash Saraogi",
        url: "https://rotaractrvce.com/awaaz/2025/english/Chapter 14 - Water.mp3"
    },
    {
        id: 21,
        title: "Mahabharata - 18 Parvas",
        year: 2025,
        grade: "6-8",
        language: "Kannada",
        category: "Story",
        contributor: "Rtr. Divya Sarvi",
        url: "https://rotaractrvce.com/awaaz/2025/kannada/18Parvas.m4a"
    },
    {
        id: 22,
        title: "Mahabharata - Kamadhenu",
        year: 2025,
        grade: "6-8",
        language: "Kannada",
        category: "Story",
        contributor: "Rtr. Divya Sarvi",
        url: "https://rotaractrvce.com/awaaz/2025/kannada/Kamadhenu.m4a"
    },
    {
        id: 23,
        title: "Mahabharata - Krishnana Upadesha",
        year: 2025,
        grade: "6-8",
        language: "Kannada",
        category: "Story",
        contributor: "Rtr. Divya Sarvi",
        url: "https://rotaractrvce.com/awaaz/2025/kannada/KrishnanaUpadesha.m4a"
    },
    {
        id: 24,
        title: "Mahabharata - Samanthapanchaka",
        year: 2025,
        grade: "6-8",
        language: "Kannada",
        category: "Story",
        contributor: "Rtr. Divya Sarvi",
        url: "https://rotaractrvce.com/awaaz/2025/kannada/Samanthapanchaka.m4a"
    },
    {
        id: 25,
        title: "Mahabharata - Yuddhishtirana Satyaprema",
        year: 2025,
        grade: "6-8",
        language: "Kannada",
        category: "Story",
        contributor: "Rtr. Divya Sarvi",
        url: "https://rotaractrvce.com/awaaz/2025/kannada/YuddhishtiranaSatyaprema.m4a"
    },
    {
        id: 26,
        title: "The Ant and the If",
        year: 2025,
        grade: "1-2",
        language: "English",
        category: "Story",
        contributor: "Rtr. Oojam Chaudhary",
        url: "https://rotaractrvce.com/awaaz/2025/english/If&Ant.m4a"
    },
    {
        id: 27,
        title: "The Emperor's New Clothes",
        year: 2025,
        grade: "1-2",
        language: "English",
        category: "Story",
        contributor: "Rtr. Oojam Chaudhary",
        url: "https://rotaractrvce.com/awaaz/2025/english/EmperorsNewClothes.m4a"
    },
    {
        id: 28,
        title: "The Coconut Vendor and the Boy",
        year: 2025,
        grade: "1-2",
        language: "English",
        category: "Story",
        contributor: "Rtr. Oojam Chaudhary",
        url: "https://rotaractrvce.com/awaaz/2025/english/TheCoconutVendor&Boy.m4a"
    },
    {
        id: 29,
        title: "The Missing Tenth Man",
        year: 2025,
        grade: "1-2",
        language: "English",
        category: "Story",
        contributor: "Rtr. Oojam Chaudhary",
        url: "https://rotaractrvce.com/awaaz/2025/english/TheMissingTenthMan.m4a"
    },
    {
        id: 30,
        title: "The Rats and the Fat Cat",
        year: 2025,
        grade: "1-2",
        language: "English",
        category: "Story",
        contributor: "Rtr. Oojam Chaudhary",
        url: "https://rotaractrvce.com/awaaz/2025/english/TheRats&FatCat.m4a"
    },
    {
        id: 31,
        title: "Be Good to Your Enemies",
        year: 2025,
        grade: "3-5",
        language: "English",
        category: "Story",
        contributor: "Rtr. Aditi Amit Kallolkar",
        url: "https://rotaractrvce.com/awaaz/2025/english/Begoodtoyourenemies.m4a"
    },
    {
        id: 32,
        title: "The Bad Little Girl",
        year: 2025,
        grade: "3-5",
        language: "English",
        category: "Story",
        contributor: "Rtr. Aditi Amit Kallolkar",
        url: "https://rotaractrvce.com/awaaz/2025/english/Thebadlittlegirl.m4a"
    },
    {
        id: 33,
        title: "The Clever Story",
        year: 2025,
        grade: "3-5",
        language: "English",
        category: "Story",
        contributor: "Rtr. Aditi Amit Kallolkar",
        url: "https://rotaractrvce.com/awaaz/2025/english/Thecleverstory.m4a"
    },
    {
        id: 34,
        title: "The Gardener",
        year: 2025,
        grade: "3-5",
        language: "English",
        category: "Story",
        contributor: "Rtr. Aditi Amit Kallolkar",
        url: "https://rotaractrvce.com/awaaz/2025/english/TheGardener.m4a"
    },
    {
        id: 35,
        title: "The Greedy Boy",
        year: 2025,
        grade: "3-5",
        language: "English",
        category: "Story",
        contributor: "Rtr. Aditi Amit Kallolkar",
        url: "https://rotaractrvce.com/awaaz/2025/english/Thegreedyboy.m4a"
    },
    {
        id: 36,
        title: "The Laziness Story",
        year: 2025,
        grade: "3-5",
        language: "English",
        category: "Story",
        contributor: "Rtr. Aditi Amit Kallolkar",
        url: "https://rotaractrvce.com/awaaz/2025/english/Thelazinessstory.m4a"
    },
    {
        id: 37,
        title: "The Smile",
        year: 2025,
        grade: "3-5",
        language: "English",
        category: "Story",
        contributor: "Rtr. Aditi Amit Kallolkar",
        url: "https://rotaractrvce.com/awaaz/2025/english/Thesmile.m4a"
    },
    {
        id: 38,
        title: "Bhagwan Raam Ka Vanvas",
        year: 2025,
        grade: "3-5",
        language: "Hindi",
        category: "Story",
        contributor: "Rtr. Oojam Chaudhary",
        url: "https://rotaractrvce.com/awaaz/2025/hindi/BhagwanRAAMkaVanvas.m4a"
    },
    {
        id: 39,
        title: "Moti Chinki Ki Dosti",
        year: 2025,
        grade: "3-5",
        language: "Hindi",
        category: "Story",
        contributor: "Rtr. Oojam Chaudhary",
        url: "https://rotaractrvce.com/awaaz/2025/hindi/MotiChinkiKiDosti.m4a"
    },
    {
        id: 40,
        title: "Chanda Mama Ka Gaav",
        year: 2025,
        grade: "3-5",
        language: "Hindi",
        category: "Poem",
        contributor: "Rtr. Oojam Chaudhary",
        url: "https://rotaractrvce.com/awaaz/2025/hindi/Poem-ChandaMamaKaGaav.m4a"
    },
    {
        id: 41,
        title: "Jungle Ki Sair",
        year: 2025,
        grade: "3-5",
        language: "Hindi",
        category: "Poem",
        contributor: "Rtr. Oojam Chaudhary",
        url: "https://rotaractrvce.com/awaaz/2025/hindi/Poem-JungleKiSair.m4a"
    },
    {
        id: 42,
        title: "Titli Raani",
        year: 2025,
        grade: "3-5",
        language: "Hindi",
        category: "Poem",
        contributor: "Rtr. Oojam Chaudhary",
        url: "https://rotaractrvce.com/awaaz/2025/hindi/Poem-TitliRaani.m4a"
    },
    {
        id: 43,
        title: "Basic Interview 1",
        year: 2026,
        grade: "9-12",
        language: "English",
        category: "Educational",
        contributor: "Rtr. Ashutosh",
        url: "https://rotaractrvce.com/awaaz/2026/english/BasicInterview1.mp3"
    },
    {
        id: 44,
        title: "Basic Interview 2",
        year: 2026,
        grade: "9-12",
        language: "English",
        category: "Educational",
        contributor: "Rtr. Ashutosh",
        url: "https://rotaractrvce.com/awaaz/2026/english/BasicInterview2.mp3"
    },
    {
        id: 45,
        title: "Basic Interview 3",
        year: 2026,
        grade: "9-12",
        language: "English",
        category: "Educational",
        contributor: "Rtr. Ashutosh",
        url: "https://rotaractrvce.com/awaaz/2026/english/BasicInterview3.mp3"
    },
    {
        id: 46,
        title: "The Gift of Wise Men",
        year: 2026,
        grade: "6-8",
        language: "English",
        category: "Story",
        contributor: "Rtr. Nemitha",
        url: "https://rotaractrvce.com/awaaz/2026/english/TheGiftOfWiseMen.mp3"
    },
    {
        id: 47,
        title: "The Happy Prince",
        year: 2026,
        grade: "6-8",
        language: "English",
        category: "Story",
        contributor: "Rtr. Nemitha",
        url: "https://rotaractrvce.com/awaaz/2026/english/TheHappyPrince.mp3"
    },
    {
        id: 48,
        title: "The Necklace",
        year: 2026,
        grade: "6-8",
        language: "English",
        category: "Story",
        contributor: "Rtr. Nemitha",
        url: "https://rotaractrvce.com/awaaz/2026/english/TheNecklace.mp3"
    },
    {
        id: 49,
        title: "The Selfish Giant",
        year: 2026,
        grade: "6-8",
        language: "English",
        category: "Story",
        contributor: "Rtr. Nemitha",
        url: "https://rotaractrvce.com/awaaz/2026/english/TheSelfishGiant.mp3"
    },
    {
        id: 50,
        title: "Two Frogs",
        year: 2026,
        grade: "6-8",
        language: "Kannada",
        category: "Story",
        contributor: "Rtr. Stuthi",
        url: "https://rotaractrvce.com/awaaz/2026/kannada/2Frogs.m4a"
    },
    {
        id: 51,
        title: "Bhavaliya Kutantra",
        year: 2026,
        grade: "6-8",
        language: "Kannada",
        category: "Story",
        contributor: "Rtr. Stuthi",
        url: "https://rotaractrvce.com/awaaz/2026/kannada/BhavaliyaKutantra.m4a"
    },
    {
        id: 52,
        title: "Farmer And Four Kids",
        year: 2026,
        grade: "6-8",
        language: "Kannada",
        category: "Story",
        contributor: "Rtr. Stuthi",
        url: "https://rotaractrvce.com/awaaz/2026/kannada/FarmerAndFourKids.m4a"
    },
    {
        id: 53,
        title: "Intelligent Fox",
        year: 2026,
        grade: "6-8",
        language: "Kannada",
        category: "Story",
        contributor: "Rtr. Stuthi",
        url: "https://rotaractrvce.com/awaaz/2026/kannada/IntelligentFox.m4a"
    },
    {
        id: 54,
        title: "March 2026 Current Affairs 1",
        year: 2026,
        grade: "9-12",
        language: "Kannada",
        category: "Educational",
        contributor: "Rtr. Stuthi",
        url: "https://rotaractrvce.com/awaaz/2026/kannada/MarchCurrentAffairs1.m4a"
    },
    {
        id: 55,
        title: "March 2026 Current Affairs 2",
        year: 2026,
        grade: "9-12",
        language: "Kannada",
        category: "Educational",
        contributor: "Rtr. Stuthi",
        url: "https://rotaractrvce.com/awaaz/2026/kannada/MarchCurrentAffairs2.m4a"
    },
    {
        id: 56,
        title: "Raita Mattu Haddu",
        year: 2026,
        grade: "6-8",
        language: "Kannada",
        category: "Story",
        contributor: "Rtr. Stuthi",
        url: "https://rotaractrvce.com/awaaz/2026/kannada/RaitaMattuHaddu.m4a"
    },
    {
        id: 57,
        title: "Small Birds Big Heart",
        year: 2026,
        grade: "6-8",
        language: "Kannada",
        category: "Story",
        contributor: "Rtr. Stuthi",
        url: "https://rotaractrvce.com/awaaz/2026/kannada/SmallBirdsBigHeart.m4a"
    },
    {
        id: 58,
        title: "Two Foolish Cats",
        year: 2026,
        grade: "6-8",
        language: "Kannada",
        category: "Story",
        contributor: "Rtr. Stuthi",
        url: "https://rotaractrvce.com/awaaz/2026/kannada/TwoFoolishCats.m4a"
    },
    {
        id: 59,
        title: "Kashtaniki Gurthimpu",
        year: 2026,
        grade: "3-5",
        language: "Telugu",
        category: "Story",
        contributor: "Rtr. Nemitha",
        url: "https://rotaractrvce.com/awaaz/2026/telugu/KashtanikiGurthimpu.mp3"
    },
    {
        id: 60,
        title: "Snehamante Idhera",
        year: 2026,
        grade: "3-5",
        language: "Telugu",
        category: "Story",
        contributor: "Rtr. Nemitha",
        url: "https://rotaractrvce.com/awaaz/2026/telugu/SnehamanteIdhera.mp3"
    },
    {
        id: 61,
        title: "Taabelu Garvam",
        year: 2026,
        grade: "3-5",
        language: "Telugu",
        category: "Story",
        contributor: "Rtr. Nemitha",
        url: "https://rotaractrvce.com/awaaz/2026/telugu/TaabeluGarvam.mp3"
    },
    {
        id: 62,
        title: "June Kathe Chah",
        year: 2026,
        grade: "6-8",
        language: "Kannada",
        category: "Story",
        contributor: "Rtr. Stuthi",
        url: "https://rotaractrvce.com/awaaz/2026/kannada/JuneKatheChah.mp3"
    },
    {
        id: 63,
        title: "A Brave Heart",
        year: 2026,
        grade: "6-8",
        language: "English",
        category: "Poem",
        contributor: "Rtr. Afnaan",
        url: "https://rotaractrvce.com/awaaz/2026/english/ABraveHeart.m4a"
    },
    {
        id: 64,
        title: "A Lamp Of Wishes",
        year: 2026,
        grade: "6-8",
        language: "English",
        category: "Poem",
        contributor: "Rtr. Afnaan",
        url: "https://rotaractrvce.com/awaaz/2026/english/ALampOfWishes.m4a"
    },
    {
        id: 65,
        title: "Ali Babas Secret",
        year: 2026,
        grade: "6-8",
        language: "English",
        category: "Poem",
        contributor: "Rtr. Afnaan",
        url: "https://rotaractrvce.com/awaaz/2026/english/AliBabasSecret.m4a"
    },
    {
        id: 66,
        title: "Arabian Nights",
        year: 2026,
        grade: "6-8",
        language: "English",
        category: "Poem",
        contributor: "Rtr. Afnaan",
        url: "https://rotaractrvce.com/awaaz/2026/english/ArabianNights.m4a"
    },
    {
        id: 67,
        title: "Ali Babas Secret",
        year: 2026,
        grade: "6-8",
        language: "English",
        category: "Poem",
        contributor: "Rtr. Afnaan",
        url: "https://rotaractrvce.com/awaaz/2026/english/AliBabasSecret.m4a"
    },
    {
        id: 68,
        title: "Believe In Yourself",
        year: 2026,
        grade: "6-8",
        language: "English",
        category: "Poem",
        contributor: "Rtr. Afnaan",
        url: "https://rotaractrvce.com/awaaz/2026/english/BelieveInYourself.m4a"
    },
    {
        id: 69,
        title: "Believe",
        year: 2026,
        grade: "6-8",
        language: "English",
        category: "Poem",
        contributor: "Rtr. Afnaan",
        url: "https://rotaractrvce.com/awaaz/2026/english/Believe.m4a"
    },
    {
        id: 70,
        title: "Fearless",
        year: 2026,
        grade: "6-8",
        language: "English",
        category: "Poem",
        contributor: "Rtr. Afnaan",
        url: "https://rotaractrvce.com/awaaz/2026/english/Fearless.m4a"
    },
    {
        id: 71,
        title: "Fire Of Passion",
        year: 2026,
        grade: "6-8",
        language: "English",
        category: "Poem",
        contributor: "Rtr. Afnaan",
        url: "https://rotaractrvce.com/awaaz/2026/english/FireOfPassion.m4a"
    },
    {
        id: 72,
        title: "Fire Within",
        year: 2026,
        grade: "6-8",
        language: "English",
        category: "Poem",
        contributor: "Rtr. Afnaan",
        url: "https://rotaractrvce.com/awaaz/2026/english/FireWithin.m4a"
    },
    {
        id: 73,
        title: "Moon Over The Desert",
        year: 2026,
        grade: "6-8",
        language: "English",
        category: "Poem",
        contributor: "Rtr. Afnaan",
        url: "https://rotaractrvce.com/awaaz/2026/english/MoonOverTheDesert.m4a"
    },
    {
        id: 74,
        title: "One Step",
        year: 2026,
        grade: "6-8",
        language: "English",
        category: "Poem",
        contributor: "Rtr. Afnaan",
        url: "https://rotaractrvce.com/awaaz/2026/english/OneStep.m4a"
    },
    {
        id: 75,
        title: "Rise Again",
        year: 2026,
        grade: "6-8",
        language: "English",
        category: "Poem",
        contributor: "Rtr. Afnaan",
        url: "https://rotaractrvce.com/awaaz/2026/english/RiseAgain.m4a"
    },
    {
        id: 76,
        title: "Shine",
        year: 2026,
        grade: "6-8",
        language: "English",
        category: "Poem",
        contributor: "Rtr. Afnaan",
        url: "https://rotaractrvce.com/awaaz/2026/english/Shine.m4a"
    },
    {
        id: 77,
        title: "Stronger Than Fear",
        year: 2026,
        grade: "6-8",
        language: "English",
        category: "Poem",
        contributor: "Rtr. Afnaan",
        url: "https://rotaractrvce.com/awaaz/2026/english/StrongerThanFear.m4a"
    },
    {
        id: 78,
        title: "The Climb",
        year: 2026,
        grade: "6-8",
        language: "English",
        category: "Poem",
        contributor: "Rtr. Afnaan",
        url: "https://rotaractrvce.com/awaaz/2026/english/TheClimb.m4a"
    },
    {
        id: 79,
        title: "The Mirror",
        year: 2026,
        grade: "6-8",
        language: "English",
        category: "Poem",
        contributor: "Rtr. Afnaan",
        url: "https://rotaractrvce.com/awaaz/2026/english/TheMirror.m4a"
    },
    {
        id: 80,
        title: "The Night Sky",
        year: 2026,
        grade: "6-8",
        language: "English",
        category: "Poem",
        contributor: "Rtr. Afnaan",
        url: "https://rotaractrvce.com/awaaz/2026/english/TheNightSky.m4a"
    },
    {
        id: 81,
        title: "Wings",
        year: 2026,
        grade: "6-8",
        language: "English",
        category: "Poem",
        contributor: "Rtr. Afnaan",
        url: "https://rotaractrvce.com/awaaz/2026/english/Wings.m4a"
    },
    {
        id: 82,
        title: "Your Own Story",
        year: 2026,
        grade: "6-8",
        language: "English",
        category: "Poem",
        contributor: "Rtr. Afnaan",
        url: "https://rotaractrvce.com/awaaz/2026/english/YourOwnStory.m4a"
    },
    {
        id: 83,
        title: "AladdinAndTheWonderfulLamp",
        year: 2026,
        grade: "6-8",
        language: "English",
        category: "Story",
        contributor: "Rtr. Afnaan",
        url: "https://rotaractrvce.com/awaaz/2026/english/AladdinAndTheWonderfulLamp.m4a"
    },
    {
        id: 84,
        title: "The Bookshop At The End Of The Street",
        year: 2026,
        grade: "6-8",
        language: "English",
        category: "Story",
        contributor: "Rtr. Afnaan",
        url: "https://rotaractrvce.com/awaaz/2026/english/TheBookshopAtTheEndOfTheStreet.m4a"
    },
    {
        id: 85,
        title: "The Boy Who Collected Sunsets",
        year: 2026,
        grade: "6-8",
        language: "English",
        category: "Story",
        contributor: "Rtr. Afnaan",
        url: "https://rotaractrvce.com/awaaz/2026/english/TheBoyWhoCollectedSunsets.m4a"
    },
    {
        id: 86,
        title: "The Boy Who Painted Dreams",
        year: 2026,
        grade: "6-8",
        language: "English",
        category: "Story",
        contributor: "Rtr. Afnaan",
        url: "https://rotaractrvce.com/awaaz/2026/english/TheBoyWhoPaintedDreams.m4a"
    },
    {
        id: 87,
        title: "The Garden Behind The Wall",
        year: 2026,
        grade: "6-8",
        language: "English",
        category: "Story",
        contributor: "Rtr. Afnaan",
        url: "https://rotaractrvce.com/awaaz/2026/english/TheGardenBehindTheWall.m4a"
    },
    {
        id: 88,
        title: "The Girl And The Sea",
        year: 2026,
        grade: "6-8",
        language: "English",
        category: "Story",
        contributor: "Rtr. Afnaan",
        url: "https://rotaractrvce.com/awaaz/2026/english/TheGirlAndTheSea.m4a"
    },
    {
        id: 89,
        title: "The Lantern Maker",
        year: 2026,
        grade: "6-8",
        language: "English",
        category: "Story",
        contributor: "Rtr. Afnaan",
        url: "https://rotaractrvce.com/awaaz/2026/english/TheLanternMaker.m4a"
    },
    {
        id: 90,
        title: "The Library Of Lost Letters",
        year: 2026,
        grade: "6-8",
        language: "English",
        category: "Story",
        contributor: "Rtr. Afnaan",
        url: "https://rotaractrvce.com/awaaz/2026/english/TheLibraryOfLostLetters.m4a"
    },
    {
        id: 91,
        title: "The Lighthouse Beyond The Cliffs",
        year: 2026,
        grade: "6-8",
        language: "English",
        category: "Story",
        contributor: "Rtr. Afnaan",
        url: "https://rotaractrvce.com/awaaz/2026/english/TheLighthouseBeyondTheCliffs.m4a"
    },
    {
        id: 92,
        title: "The Mountain Village",
        year: 2026,
        grade: "6-8",
        language: "English",
        category: "Story",
        contributor: "Rtr. Afnaan",
        url: "https://rotaractrvce.com/awaaz/2026/english/TheMountainVillage.m4a"
    },
    {
        id: 93,
        title: "The Painter Of Rain",
        year: 2026,
        grade: "6-8",
        language: "English",
        category: "Story",
        contributor: "Rtr. Afnaan",
        url: "https://rotaractrvce.com/awaaz/2026/english/ThePainterOfRain.m4a"
    },
    {
        id: 94,
        title: "The Train At Midnight",
        year: 2026,
        grade: "6-8",
        language: "English",
        category: "Story",
        contributor: "Rtr. Afnaan",
        url: "https://rotaractrvce.com/awaaz/2026/english/TheTrainAtMidnight.m4a"
    },
    {
        id: 95,
        title: "The Watchmakers Daughter",
        year: 2026,
        grade: "6-8",
        language: "English",
        category: "Story",
        contributor: "Rtr. Afnaan",
        url: "https://rotaractrvce.com/awaaz/2026/english/TheWatchmakersDaughter.m4a"
    },
    {
        id: 96,
        title: "Discipline In The Dark",
        year: 2026,
        grade: "9-12",
        language: "English",
        category: "Motivational",
        contributor: "Rtr. Manya",
        url: "https://rotaractrvce.com/awaaz/2026/english/DisciplineInTheDark.m4a"
    },
    {
        id: 97,
        title: "The Strength Of Silent Struggles",
        year: 2026,
        grade: "9-12",
        language: "English",
        category: "Motivational",
        contributor: "Rtr. Manya",
        url: "https://rotaractrvce.com/awaaz/2026/english/TheStrengthOfSilentStruggles.m4a"
    },
    {
        id: 98,
        title: "Where Strength Is Born",
        year: 2026,
        grade: "9-12",
        language: "English",
        category: "Motivational",
        contributor: "Rtr. Manya",
        url: "https://rotaractrvce.com/awaaz/2026/english/WhereStrengthIsBorn.mp3"
    },
    {
        id: 99,
        title: "God Who Came Second",
        year: 2026,
        grade: "6-8",
        language: "English",
        category: "Story",
        contributor: "Rtr. Aryan",
        url: "https://rotaractrvce.com/awaaz/2026/english/GodWhoCameSecond.m4a"
    },
    {
        id: 100,
        title: "Last Dragon Who Forgot How To Burn",
        year: 2026,
        grade: "6-8",
        language: "English",
        category: "Story",
        contributor: "Rtr. Aryan",
        url: "https://rotaractrvce.com/awaaz/2026/english/LastDragonWhoForgotHowToBurn.m4a"
    },
    {
        id: 101,
        title: "Library At The End Of The World",
        year: 2026,
        grade: "6-8",
        language: "English",
        category: "Story",
        contributor: "Rtr. Aryan",
        url: "https://rotaractrvce.com/awaaz/2026/english/LibraryAtTheEndOfTheWorld.m4a"
    },
    {
        id: 102,
        title: "Priya",
        year: 2026,
        grade: "6-8",
        language: "English",
        category: "Story",
        contributor: "Rtr. Aryan",
        url: "https://rotaractrvce.com/awaaz/2026/english/Priya.m4a"
    },
    {
        id: 103,
        title: "The Algorithm And The Fishermen",
        year: 2026,
        grade: "6-8",
        language: "English",
        category: "Story",
        contributor: "Rtr. Aryan",
        url: "https://rotaractrvce.com/awaaz/2026/english/TheAlgorithmAndTheFishermen.m4a"
    },
    {
        id: 104,
        title: "The Boy Who Built A Library From Trash",
        year: 2026,
        grade: "6-8",
        language: "English",
        category: "Story",
        contributor: "Rtr. Aryan",
        url: "https://rotaractrvce.com/awaaz/2026/english/TheBoyWhoBuiltALibraryFromTrash.m4a"
    },
    {
        id: 105,
        title: "The Farmer Who Talked To A Satellite",
        year: 2026,
        grade: "6-8",
        language: "English",
        category: "Story",
        contributor: "Rtr. Aryan",
        url: "https://rotaractrvce.com/awaaz/2026/english/TheFarmerWhoTalkedToASatellite.m4a"
    },
    {
        id: 106,
        title: "The King Who Was Afraid Of His Own Shadow",
        year: 2026,
        grade: "6-8",
        language: "English",
        category: "Story",
        contributor: "Rtr. Aryan",
        url: "https://rotaractrvce.com/awaaz/2026/english/TheKingWhoWasAfraidOfHisOwnShadow.m4a"
    },
    {
        id: 107,
        title: "The Map That Only Works When You Move",
        year: 2026,
        grade: "6-8",
        language: "English",
        category: "Story",
        contributor: "Rtr. Aryan",
        url: "https://rotaractrvce.com/awaaz/2026/english/TheMapThatOnlyWorksWhenYouMove.m4a"
    },
    {
        id: 108,
        title: "The River That Was Given Back",
        year: 2026,
        grade: "6-8",
        language: "English",
        category: "Story",
        contributor: "Rtr. Aryan",
        url: "https://rotaractrvce.com/awaaz/2026/english/TheRiverThatWasGivenBack.m4a"
    },
    {
        id: 109,
        title: "Hanuman's Leap To Lanka",
        year: 2026,
        grade: "6-8",
        language: "English",
        category: "Story",
        contributor: "Rtr. Ritisha",
        url: "https://rotaractrvce.com/awaaz/2026/english/Hanuman'sLeapToLanka.mp3"
    },
    {
        id: 110,
        title: "Krishna Lifts the Govardhan Hill",
        year: 2026,
        grade: "6-8",
        language: "English",
        category: "Story",
        contributor: "Rtr. Ritisha",
        url: "https://rotaractrvce.com/awaaz/2026/english/KrishnaLiftsGovardhanHill.m4a"
    },
    {
        id: 111,
        title: "The Blue Jackal",
        year: 2026,
        grade: "6-8",
        language: "English",
        category: "Story",
        contributor: "Rtr. Ritisha",
        url: "https://rotaractrvce.com/awaaz/2026/english/TheBlueJackal.mp3"
    },
    {
        id: 112,
        title: "The Boy Who Couldn't Run",
        year: 2026,
        grade: "6-8",
        language: "English",
        category: "Story",
        contributor: "Rtr. Ritisha",
        url: "https://rotaractrvce.com/awaaz/2026/english/TheBoyWhoCouldn'tRun.mp3"
    },
    {
        id: 113,
        title: "The Foolish Lion And The Clever Hare",
        year: 2026,
        grade: "6-8",
        language: "English",
        category: "Story",
        contributor: "Rtr. Ritisha",
        url: "https://rotaractrvce.com/awaaz/2026/english/TheFoolishLionAndTheCleverHare.mp3"
    },
    {
        id: 114,
        title: "Yudhishthira And The Lake Of Wisdom",
        year: 2026,
        grade: "6-8",
        language: "English",
        category: "Story",
        contributor: "Rtr. Ritisha",
        url: "https://rotaractrvce.com/awaaz/2026/english/YudhishthiraAndTheLakeOfWisdom.mp3"
    },
    {
        id: 115,
        title: "Sunshine Story on Nature",
        year: 2026,
        grade: "6-8",
        language: "English",
        category: "Story",
        contributor: "Rtr. Aayushi",
        url: "https://rotaractrvce.com/awaaz/2026/english/SunshineStoryonNature.mp3"
    },
    {
        id: 116,
        title: "The Ant and the Dove",
        year: 2026,
        grade: "6-8",
        language: "English",
        category: "Story",
        contributor: "Rtr. Aayushi",
        url: "https://rotaractrvce.com/awaaz/2026/english/TheAntandtheDove.mp3"
    },
    {
        id: 117,
        title: "The Blinking Beacon and the List Pod",
        year: 2026,
        grade: "6-8",
        language: "English",
        category: "Story",
        contributor: "Rtr. Aayushi",
        url: "https://rotaractrvce.com/awaaz/2026/english/TheBlinkingBeaconandtheListPod.mp3"
    },
    {
        id: 118,
        title: "The Crow and the Pitcher",
        year: 2026,
        grade: "6-8",
        language: "English",
        category: "Story",
        contributor: "Rtr. Aayushi",
        url: "https://rotaractrvce.com/awaaz/2026/english/TheCrowandthePitcher.mp3"
    },
    {
        id: 119,
        title: "The Dog and his Reflection",
        year: 2026,
        grade: "6-8",
        language: "English",
        category: "Story",
        contributor: "Rtr. Aayushi",
        url: "https://rotaractrvce.com/awaaz/2026/english/TheDogandhisReflection.mp3"
    },
    {
        id: 120,
        title: "The Eagle and the Beetle",
        year: 2026,
        grade: "6-8",
        language: "English",
        category: "Story",
        contributor: "Rtr. Aayushi",
        url: "https://rotaractrvce.com/awaaz/2026/english/TheEagleandtheBeetle.mp3"
    },
    {
        id: 121,
        title: "The Fox and the Crow",
        year: 2026,
        grade: "6-8",
        language: "English",
        category: "Story",
        contributor: "Rtr. Aayushi",
        url: "https://rotaractrvce.com/awaaz/2026/english/TheFoxandtheCrow.mp3"
    },
    {
        id: 122,
        title: "The Fox and the Goat",
        year: 2026,
        grade: "6-8",
        language: "English",
        category: "Story",
        contributor: "Rtr. Aayushi",
        url: "https://rotaractrvce.com/awaaz/2026/english/TheFoxandtheGoat.mp3"
    },
    {
        id: 123,
        title: "The Fox and the Leopard",
        year: 2026,
        grade: "6-8",
        language: "English",
        category: "Story",
        contributor: "Rtr. Aayushi",
        url: "https://rotaractrvce.com/awaaz/2026/english/TheFoxandtheLeopard.mp3"
    },
    {
        id: 124,
        title: "The Fox and the Stork",
        year: 2026,
        grade: "6-8",
        language: "English",
        category: "Story",
        contributor: "Rtr. Aayushi",
        url: "https://rotaractrvce.com/awaaz/2026/english/TheFoxandtheStork.mp3"
    },
    {
        id: 125,
        title: "The Frog and the Mouse",
        year: 2026,
        grade: "6-8",
        language: "English",
        category: "Story",
        contributor: "Rtr. Aayushi",
        url: "https://rotaractrvce.com/awaaz/2026/english/TheFrogandtheMouse.mp3"
    },
    {
        id: 126,
        title: "The Hare and the Tortoise",
        year: 2026,
        grade: "6-8",
        language: "English",
        category: "Story",
        contributor: "Rtr. Aayushi",
        url: "https://rotaractrvce.com/awaaz/2026/english/TheHareandtheTortoise.mp3"
    },
    {
        id: 127,
        title: "The Heron",
        year: 2026,
        grade: "6-8",
        language: "English",
        category: "Story",
        contributor: "Rtr. Aayushi",
        url: "https://rotaractrvce.com/awaaz/2026/english/TheHeron.mp3"
    },
    {
        id: 128,
        title: "The Melody of the Stars",
        year: 2026,
        grade: "6-8",
        language: "English",
        category: "Story",
        contributor: "Rtr. Aayushi",
        url: "https://rotaractrvce.com/awaaz/2026/english/TheMelodyoftheStars.mp3"
    },
    {
        id: 129,
        title: "The Mother and the Wolf",
        year: 2026,
        grade: "6-8",
        language: "English",
        category: "Story",
        contributor: "Rtr. Aayushi",
        url: "https://rotaractrvce.com/awaaz/2026/english/TheMotherandtheWolf.mp3"
    },
    {
        id: 130,
        title: "The Oak and the Reeds",
        year: 2026,
        grade: "6-8",
        language: "English",
        category: "Story",
        contributor: "Rtr. Aayushi",
        url: "https://rotaractrvce.com/awaaz/2026/english/TheOakandtheReeds.mp3"
    },
    {
        id: 131,
        title: "The Owl and the Grasshopper",
        year: 2026,
        grade: "6-8",
        language: "English",
        category: "Story",
        contributor: "Rtr. Aayushi",
        url: "https://rotaractrvce.com/awaaz/2026/english/TheOwlandtheGrasshopper.mp3"
    },
    {
        id: 132,
        title: "The Plane Tree",
        year: 2026,
        grade: "6-8",
        language: "English",
        category: "Story",
        contributor: "Rtr. Aayushi",
        url: "https://rotaractrvce.com/awaaz/2026/english/ThePlaneTree.mp3"
    },
    {
        id: 133,
        title: "The Stage and his Reflection",
        year: 2026,
        grade: "6-8",
        language: "English",
        category: "Story",
        contributor: "Rtr. Aayushi",
        url: "https://rotaractrvce.com/awaaz/2026/english/TheStageandhisReflection.mp3"
    },
    {
        id: 134,
        title: "The Town Mouse and the Country Mouse",
        year: 2026,
        grade: "6-8",
        language: "English",
        category: "Story",
        contributor: "Rtr. Aayushi",
        url: "https://rotaractrvce.com/awaaz/2026/english/TheTownMouseandtheCountryMouse.mp3"
    },
    {
        id: 135,
        title: "The Two Goats",
        year: 2026,
        grade: "6-8",
        language: "English",
        category: "Story",
        contributor: "Rtr. Aayushi",
        url: "https://rotaractrvce.com/awaaz/2026/english/TheTwoGoats.mp3"
    },
    {
        id: 136,
        title: "The Wild Boar and the Fox",
        year: 2026,
        grade: "6-8",
        language: "English",
        category: "Story",
        contributor: "Rtr. Aayushi",
        url: "https://rotaractrvce.com/awaaz/2026/english/TheWildBoarandtheFox.mp3"
    },
    {
        id: 137,
        title: "The Wolf in Sheep's Clothing",
        year: 2026,
        grade: "6-8",
        language: "English",
        category: "Story",
        contributor: "Rtr. Aayushi",
        url: "https://rotaractrvce.com/awaaz/2026/english/TheWolfinSheep'sClothing.mp3"
    },
    {
        id: 138,
        title: "English Quiz-1",
        year: 2026,
        grade: "6-8",
        language: "English",
        category: "Educational",
        contributor: "Rtr. Aayushi",
        url: "https://rotaractrvce.com/awaaz/2026/english/EnglishQuiz-1.mp3"
    },
    {
        id: 139,
        title: "English Quiz-2",
        year: 2026,
        grade: "6-8",
        language: "English",
        category: "Educational",
        contributor: "Rtr. Aayushi",
        url: "https://rotaractrvce.com/awaaz/2026/english/EnglishQuiz-2.mp3"
    },
    {
        id: 140,
        title: "English Quiz-3",
        year: 2026,
        grade: "6-8",
        language: "English",
        category: "Educational",
        contributor: "Rtr. Aayushi",
        url: "https://rotaractrvce.com/awaaz/2026/english/EnglishQuiz-3.mp3"
    },
    {
        id: 141,
        title: "English Quiz-4",
        year: 2026,
        grade: "6-8",
        language: "English",
        category: "Educational",
        contributor: "Rtr. Aayushi",
        url: "https://rotaractrvce.com/awaaz/2026/english/EnglishQuiz-4.mp3"
    },
    {
        id: 142,
        title: "English Quiz-5",
        year: 2026,
        grade: "6-8",
        language: "English",
        category: "Educational",
        contributor: "Rtr. Aayushi",
        url: "https://rotaractrvce.com/awaaz/2026/english/EnglishQuiz-5.mp3"
    },
    {
        id: 143,
        title: "English Quiz-6",
        year: 2026,
        grade: "6-8",
        language: "English",
        category: "Educational",
        contributor: "Rtr. Aayushi",
        url: "https://rotaractrvce.com/awaaz/2026/english/EnglishQuiz-6.mp3"
    },
    {
        id: 144,
        title: "English Quiz-7",
        year: 2026,
        grade: "6-8",
        language: "English",
        category: "Educational",
        contributor: "Rtr. Aayushi",
        url: "https://rotaractrvce.com/awaaz/2026/english/EnglishQuiz-7.mp3"
    },
    {
        id: 145,
        title: "English Quiz-8",
        year: 2026,
        grade: "6-8",
        language: "English",
        category: "Educational",
        contributor: "Rtr. Aayushi",
        url: "https://rotaractrvce.com/awaaz/2026/english/EnglishQuiz-8.mp3"
    },
    {
        id: 146,
        title: "Bhakta Prahlada Ki Atoot Bhakti",
        year: 2026,
        grade: "9-12",
        language: "Hindi",
        category: "Story",
        contributor: "Rtr. Pavana",
        url: "https://rotaractrvce.com/awaaz/2026/hindi/BhaktaPrahladaKiAtootBhakti.mp3"
    },
    {
        id: 147,
        title: "Ek Daane Ka Chamatkar",
        year: 2026,
        grade: "9-12",
        language: "Hindi",
        category: "Story",
        contributor: "Rtr. Pavana",
        url: "https://rotaractrvce.com/awaaz/2026/hindi/EkDaaneKaChamatkar.mp3"
    },
    {
        id: 148,
        title: "Gajendra Moksha",
        year: 2026,
        grade: "9-12",
        language: "Hindi",
        category: "Story",
        contributor: "Rtr. Pavana",
        url: "https://rotaractrvce.com/awaaz/2026/hindi/GajendraMoksha.mp3"
    },
    {
        id: 149,
        title: "Hanuman Aur Sanjeevani Bhooti",
        year: 2026,
        grade: "9-12",
        language: "Hindi",
        category: "Story",
        contributor: "Rtr. Pavana",
        url: "https://rotaractrvce.com/awaaz/2026/hindi/HanumanAurSanjeevaniBhooti.mp3"
    },
    {
        id: 150,
        title: "Ram Aur Gilahari",
        year: 2026,
        grade: "9-12",
        language: "Hindi",
        category: "Story",
        contributor: "Rtr. Pavana",
        url: "https://rotaractrvce.com/awaaz/2026/hindi/RamAurGilahari.mp3"
    },
    {
        id: 151,
        title: "Sudhama Aur Shri Krishna Ki Mitrata",
        year: 2026,
        grade: "9-12",
        language: "Hindi",
        category: "Story",
        contributor: "Rtr. Pavana",
        url: "https://rotaractrvce.com/awaaz/2026/hindi/SudhamaAurShriKrishnaKiMitrata.mp3"
    },
    {
        id: 152,
        title: "Bheem Aur Gandharva",
        year: 2026,
        grade: "9-12",
        language: "Hindi",
        category: "Story",
        contributor: "Rtr. Ritisha",
        url: "https://rotaractrvce.com/awaaz/2026/hindi/BheemAurGandharva.mp3"
    },
    {
        id: 153,
        title: "Ekalavya Ki Guru Bhakti",
        year: 2026,
        grade: "9-12",
        language: "Hindi",
        category: "Story",
        contributor: "Rtr. Ritisha",
        url: "https://rotaractrvce.com/awaaz/2026/hindi/EkalavyaKiGuruBhakti.m4a"
    },
    {
        id: 154,
        title: "Ek Raat Vrindhavan Jaisi",
        year: 2026,
        grade: "9-12",
        language: "Hindi",
        category: "Story",
        contributor: "Rtr. Ritisha",
        url: "https://rotaractrvce.com/awaaz/2026/hindi/EkRaatVrindhavanJaisi.mp3"
    },
    {
        id: 155,
        title: "Bhikhari Aur Laddu",
        year: 2026,
        grade: "6-8",
        language: "Hindi",
        category: "Story",
        contributor: "Rtr. Priyansh",
        url: "https://rotaractrvce.com/awaaz/2026/hindi/BhikhariAurLaddu.m4a"
    },
    {
        id: 156,
        title: "Bholi Savitri",
        year: 2026,
        grade: "6-8",
        language: "Hindi",
        category: "Story",
        contributor: "Rtr. Priyansh",
        url: "https://rotaractrvce.com/awaaz/2026/hindi/BholiSavitri.m4a"
    },
    {
        id: 157,
        title: "Dawat",
        year: 2026,
        grade: "6-8",
        language: "Hindi",
        category: "Story",
        contributor: "Rtr. Priyansh",
        url: "https://rotaractrvce.com/awaaz/2026/hindi/Dawat.m4a"
    },
    {
        id: 158,
        title: "Gilheri Ki Kahani",
        year: 2026,
        grade: "6-8",
        language: "Hindi",
        category: "Story",
        contributor: "Rtr. Priyansh",
        url: "https://rotaractrvce.com/awaaz/2026/hindi/GilheriKiKahani.mp3"
    },
    {
        id: 159,
        title: "Lalchi Kisan",
        year: 2026,
        grade: "6-8",
        language: "Hindi",
        category: "Story",
        contributor: "Rtr. Priyansh",
        url: "https://rotaractrvce.com/awaaz/2026/hindi/LalchiKisan.m4a"
    },
    {
        id: 160,
        title: "Pujari Aur Saap",
        year: 2026,
        grade: "6-8",
        language: "Hindi",
        category: "Story",
        contributor: "Rtr. Priyansh",
        url: "https://rotaractrvce.com/awaaz/2026/hindi/PujariAurSaap.m4a"
    },
    {
        id: 161,
        title: "Sacchi Dosti",
        year: 2026,
        grade: "6-8",
        language: "Hindi",
        category: "Story",
        contributor: "Rtr. Priyansh",
        url: "https://rotaractrvce.com/awaaz/2026/hindi/SacchiDosti.m4a"
    },
    {
        id: 162,
        title: "Hindi Quiz-1",
        year: 2026,
        grade: "6-8",
        language: "Hindi",
        category: "Educational",
        contributor: "Rtr. Aayushi",
        url: "https://rotaractrvce.com/awaaz/2026/hindi/HindiQuiz-1.mp3"
    },
    {
        id: 163,
        title: "Hindi Quiz-2",
        year: 2026,
        grade: "6-8",
        language: "Hindi",
        category: "Educational",
        contributor: "Rtr. Aayushi",
        url: "https://rotaractrvce.com/awaaz/2026/hindi/HindiQuiz-2.mp3"
    },
    {
        id: 164,
        title: "Hindi Quiz-3",
        year: 2026,
        grade: "6-8",
        language: "Hindi",
        category: "Educational",
        contributor: "Rtr. Aayushi",
        url: "https://rotaractrvce.com/awaaz/2026/hindi/HindiQuiz-3.mp3"
    },
    {
        id: 165,
        title: "Hindi Quiz-4",
        year: 2026,
        grade: "6-8",
        language: "Hindi",
        category: "Educational",
        contributor: "Rtr. Aayushi",
        url: "https://rotaractrvce.com/awaaz/2026/hindi/HindiQuiz-4.mp3"
    },
    {
        id: 166,
        title: "Hindi Quiz-5",
        year: 2026,
        grade: "6-8",
        language: "Hindi",
        category: "Educational",
        contributor: "Rtr. Aayushi",
        url: "https://rotaractrvce.com/awaaz/2026/hindi/HindiQuiz-5.mp3"
    },
    {
        id: 167,
        title: "Chiluka Jinka Sneham",
        year: 2026,
        grade: "6-8",
        language: "Telugu",
        category: "Story",
        contributor: "Rtr. Pavana",
        url: "https://rotaractrvce.com/awaaz/2026/hindi/ChilukaJinkaSneham.mp3"
    },
    {
        id: 168,
        title: "Edu Chepala Katha",
        year: 2026,
        grade: "6-8",
        language: "Telugu",
        category: "Story",
        contributor: "Rtr. Pavana",
        url: "https://rotaractrvce.com/awaaz/2026/hindi/EduChepalaKatha.mp3"
    },
    {
        id: 169,
        title: "Gummadi Kaaya Donga",
        year: 2026,
        grade: "6-8",
        language: "Telugu",
        category: "Story",
        contributor: "Rtr. Pavana",
        url: "https://rotaractrvce.com/awaaz/2026/hindi/GummadiKaayaDonga.mp3"
    },
    {
        id: 170,
        title: "Kaaki Mariyu Nakka",
        year: 2026,
        grade: "6-8",
        language: "Telugu",
        category: "Story",
        contributor: "Rtr. Pavana",
        url: "https://rotaractrvce.com/awaaz/2026/hindi/KaakiMariyuNakka.mp3"
    },
    {
        id: 171,
        title: "Kothi Rotte",
        year: 2026,
        grade: "6-8",
        language: "Telugu",
        category: "Story",
        contributor: "Rtr. Pavana",
        url: "https://rotaractrvce.com/awaaz/2026/hindi/KothiRotte.mp3"
    },
    {
        id: 172,
        title: "Dhanigala Belli Lota",
        year: 2026,
        grade: "9-12",
        language: "Kannada",
        category: "Story",
        contributor: "Rtr. Ghanashyam",
        url: "https://rotaractrvce.com/awaaz/2026/kannada/DhanigalaBelliLota.mp3"
    },
    {
        id: 173,
        title: "Sir M Vishweshwarayya",
        year: 2026,
        grade: "9-12",
        language: "Kannada",
        category: "Story",
        contributor: "Rtr. Ghanashyam",
        url: "https://rotaractrvce.com/awaaz/2026/kannada/SirMVishweshwarayya.mp3"
    },
    {
        id: 174,
        title: "Nanna Mane-Kuvempu",
        year: 2026,
        grade: "6-8",
        language: "Kannada",
        category: "Poem",
        contributor: "Rtr. Ghanashyam",
        url: "https://rotaractrvce.com/awaaz/2026/kannada/NannaMane-Kuvempu.mp3"
    },
    {
        id: 175,
        title: "Kattutheva Naavu",
        year: 2026,
        grade: "6-8",
        language: "Kannada",
        category: "Poem",
        contributor: "Rtr. Ghanashyam",
        url: "https://rotaractrvce.com/awaaz/2026/kannada/KattuthevaNaavu.m4a"
    },
    {
        id: 176,
        title: "Girish Karnad Kanna Mucchale",
        year: 2026,
        grade: "6-8",
        language: "Kannada",
        category: "Poem",
        contributor: "Rtr. Ghanashyam",
        url: "https://rotaractrvce.com/awaaz/2026/kannada/GirishKarnadKannaMucchale.m4a"
    },
    {
        id: 177,
        title: "Ambikatanayadutta",
        year: 2026,
        grade: "6-8",
        language: "Kannada",
        category: "Poem",
        contributor: "Rtr. Ghanashyam",
        url: "https://rotaractrvce.com/awaaz/2026/kannada/Ambikatanayadutta.m4a"
    },
    {
        id: 178,
        title: "Ayya Kelayya Koodala Sanagama Deva",
        year: 2026,
        grade: "6-8",
        language: "Kannada",
        category: "Poem",
        contributor: "Rtr. Ghanashyam",
        url: "https://rotaractrvce.com/awaaz/2026/kannada/AyyaKelayyaKoodalaSanagamaDeva.m4a"
    },
    {
        id: 179,
        title: "Kalabeda Kolabeda",
        year: 2026,
        grade: "6-8",
        language: "Kannada",
        category: "Poem",
        contributor: "Rtr. Ghanashyam",
        url: "https://rotaractrvce.com/awaaz/2026/kannada/KalabedaKolabeda.m4a"
    },
    {
        id: 180,
        title: "Chali Barli Male Barli",
        year: 2026,
        grade: "6-8",
        language: "Kannada",
        category: "Poem",
        contributor: "Rtr. Ghanashyam",
        url: "https://rotaractrvce.com/awaaz/2026/kannada/ChaliBarliMaleBarli.m4a"
    },
    {
        id: 181,
        title: "Indian Constitution - Introduction",
        year: 2026,
        grade: "9-12",
        language: "Kannada",
        category: "Educational",
        contributor: "Rtr. Shoheb",
        url: "https://rotaractrvce.com/awaaz/2026/kannada/Introduction.m4a"
    },
    {
        id: 182,
        title: "Indian Constitution - Summary",
        year: 2026,
        grade: "9-12",
        language: "Kannada",
        category: "Educational",
        contributor: "Rtr. Shoheb",
        url: "https://rotaractrvce.com/awaaz/2026/kannada/Summary.m4a"
    },
    {
        id: 183,
        title: "Indian Constitution - Sailent Features",
        year: 2026,
        grade: "9-12",
        language: "Kannada",
        category: "Educational",
        contributor: "Rtr. Shoheb",
        url: "https://rotaractrvce.com/awaaz/2026/kannada/SailentFeaturesoftheIndianConstitution.m4a"
    },
    {
        id: 184,
        title: "Indian Constitution - Fundamental Rights",
        year: 2026,
        grade: "9-12",
        language: "Kannada",
        category: "Educational",
        contributor: "Rtr. Shoheb",
        url: "https://rotaractrvce.com/awaaz/2026/kannada/FundamentalRights.m4a"
    },
    {
        id: 185,
        title: "Indian Constitution - Public Interest Litigation and Courts",
        year: 2026,
        grade: "9-12",
        language: "Kannada",
        category: "Educational",
        contributor: "Rtr. Shoheb",
        url: "https://rotaractrvce.com/awaaz/2026/kannada/PILandCourts.m4a"
    },
    {
        id: 186,
        title: "Indian Constitution - Preamble",
        year: 2026,
        grade: "9-12",
        language: "Kannada",
        category: "Educational",
        contributor: "Rtr. Shoheb",
        url: "https://rotaractrvce.com/awaaz/2026/kannada/PreambleofConstitution.m4a"
    },
    {
        id: 187,
        title: "Indian Constitution - Fundamental Duties",
        year: 2026,
        grade: "9-12",
        language: "Kannada",
        category: "Educational",
        contributor: "Rtr. Shoheb",
        url: "https://rotaractrvce.com/awaaz/2026/kannada/FundamentalDuties.m4a"
    },
    {
        id: 188,
        title: "Indian Constitution - Directive Principles of State Policy (DPSP)",
        year: 2026,
        grade: "9-12",
        language: "Kannada",
        category: "Educational",
        contributor: "Rtr. Shoheb",
        url: "https://rotaractrvce.com/awaaz/2026/kannada/DPSP.m4a"
    },
    {
        id: 189,
        title: "Indian Constitution - Conclusion",
        year: 2026,
        grade: "9-12",
        language: "Kannada",
        category: "Educational",
        contributor: "Rtr. Shoheb",
        url: "https://rotaractrvce.com/awaaz/2026/kannada/Conclusion.m4a"
    },
    {
        id: 190,
        title: "Magic Pencil",
        year: 2026,
        grade: "6-8",
        language: "Kannada",
        category: "Story",
        contributor: "Rtr. Manya",
        url: "https://rotaractrvce.com/awaaz/2026/kannada/MagicPencil.m4a"
    },
    {
        id: 191,
        title: "Santhammanna",
        year: 2026,
        grade: "6-8",
        language: "Kannada",
        category: "Story",
        contributor: "Rtr. Ghanashyam",
        url: "https://rotaractrvce.com/awaaz/2026/kannada/Santhammanna.m4a"
    },
    {
        id: 192,
        title: "Railu Nildana",
        year: 2026,
        grade: "6-8",
        language: "Kannada",
        category: "Story",
        contributor: "Rtr. Ghanashyam",
        url: "https://rotaractrvce.com/awaaz/2026/kannada/RailuNildana.m4a"
    },
    {
        id: 193,
        title: "Preethi Baduku",
        year: 2026,
        grade: "6-8",
        language: "Kannada",
        category: "Story",
        contributor: "Rtr. Ghanashyam",
        url: "https://rotaractrvce.com/awaaz/2026/kannada/PreethiBaduku.m4a"
    },
    {
        id: 194,
        title: "Ikkala",
        year: 2026,
        grade: "6-8",
        language: "Kannada",
        category: "Story",
        contributor: "Rtr. Ghanashyam",
        url: "https://rotaractrvce.com/awaaz/2026/kannada/Ikkala.m4a"
    },
    {
        id: 195,
        title: "Ardha Daari",
        year: 2026,
        grade: "6-8",
        language: "Kannada",
        category: "Story",
        contributor: "Rtr. Ghanashyam",
        url: "https://rotaractrvce.com/awaaz/2026/kannada/ArdhaDaari.m4a"
    },
    {
        id: 196,
        title: "Aame",
        year: 2026,
        grade: "6-8",
        language: "Kannada",
        category: "Story",
        contributor: "Rtr. Ghanashyam",
        url: "https://rotaractrvce.com/awaaz/2026/kannada/Aame.m4a"
    },
    {
        id: 197,
        title: "Cricket",
        year: 2026,
        grade: "6-8",
        language: "Kannada",
        category: "Story",
        contributor: "Rtr. Ghanashyam",
        url: "https://rotaractrvce.com/awaaz/2026/kannada/Cricket.m4a"
    },
    {
        id: 198,
        title: "Kempu Gulabi",
        year: 2026,
        grade: "6-8",
        language: "Kannada",
        category: "Story",
        contributor: "Rtr. Ghanashyam",
        url: "https://rotaractrvce.com/awaaz/2026/kannada/KempuGulabi.m4a"
    }


    


];

export default audioFiles;