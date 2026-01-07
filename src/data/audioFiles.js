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
    }


];

export default audioFiles;