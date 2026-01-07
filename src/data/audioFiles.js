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
        id: 21,
        title: "Mahabharata - 18 Parvas",
        year: 2025,
        grade: "6-8",
        language: "Kannada",
        category: "Story",
        contributor: "Rtr. Divya Sarvi",
        url: "https://rotaractrvce.com/awaaz/2025/kannada/18Parvas.mp3"
    },
    {
        id: 22,
        title: "Mahabharata - Kamadhenu",
        year: 2025,
        grade: "6-8",
        language: "Kannada",
        category: "Story",
        contributor: "Rtr. Divya Sarvi",
        url: "https://rotaractrvce.com/awaaz/2025/kannada/Kamadhenu.mp3"
    },
    {
        id: 23,
        title: "Mahabharata - Krishnana Upadesha",
        year: 2025,
        grade: "6-8",
        language: "Kannada",
        category: "Story",
        contributor: "Rtr. Divya Sarvi",
        url: "https://rotaractrvce.com/awaaz/2025/kannada/KrishnanaUpadesha.mp3"
    },
    {
        id: 24,
        title: "Mahabharata - Samanthapanchaka",
        year: 2025,
        grade: "6-8",
        language: "Kannada",
        category: "Story",
        contributor: "Rtr. Divya Sarvi",
        url: "https://rotaractrvce.com/awaaz/2025/kannada/Samanthapanchaka.mp3"
    },
    {
        id: 25,
        title: "Mahabharata - Yuddhishtirana Satyaprema",
        year: 2025,
        grade: "6-8",
        language: "Kannada",
        category: "Story",
        contributor: "Rtr. Divya Sarvi",
        url: "https://rotaractrvce.com/awaaz/2025/kannada/YuddhishtiranaSatyaprema.mp3"
    },
];

export default audioFiles;