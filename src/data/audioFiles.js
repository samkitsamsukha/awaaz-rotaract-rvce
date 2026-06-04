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
        url: "https://rotaractrvce.com/awaaz/2026/kannada/JuneKatheChah.m4a"
    }


];

export default audioFiles;