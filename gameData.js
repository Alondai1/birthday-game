const gameData = [
    {
        id: 1,
        title: "כמה אנשים אירחת לג'חנון לפי התמונה?",
        media: {
            type: "image",
            src: "assets/images/sample1.jpg"
        },
        options: [
            { id: 1, text: "18" },
            { id: 2, text: "21" },
            { id: 3, text: "12" },
            { id: 4, text: "25" }
        ],
        correctAnswerId: 2,
        isBonus: false
    },
    {
        id: 2,
        title: "כמה חתולות יש בתמונה?",
        media: {
            type: "image",
            src: "assets/images/sample2.jpg"
        },
        options: [
            { id: 1, text: "1" },
            { id: 2, text: "2" },
            { id: 3, text: "3" }
        ],
        correctAnswerId: 3,
        isBonus: false
    },
    {
        id: 3,
        title: "באיזה צבע הכפכפים שליד ליבת?",
        media: {
            type: "image",
            src: "assets/images/sample3.jpg"
        },
        options: [
            { id: 1, text: "ירוק" },
            { id: 2, text: "לבן" },
            { id: 3, text: "צהוב" },
            { id: 4, text: "שחור" }
        ],
        correctAnswerId: 4,
        isBonus: true
    },
    {
        id: 4,
        title: "כמה חתכה אופיסי יש בתמונה?",
        media: {
            type: "image",
            src: "assets/images/sample4.jpg"
        },
        options: [
            { id: 1, text: "1" },
            { id: 2, text: "2" },
            { id: 3, text: "3" },
            { id: 4, text: "4" }
        ],
        correctAnswerId: 3,
        isBonus: false
    },
    {
        id: 5,
        title: "איזה מיתוג יש לכוסות בירה?",
        media: {
            type: "image",
            src: "assets/images/sample5.jpg"
        },
        options: [
            { id: 1, text: "גולדסטארכס" },
            { id: 2, text: "היינקנכס" },
            { id: 3, text: "קורונהכס" },
            { id: 4, text: "טובורגכס" }
        ],
        correctAnswerId: 1,
        isBonus: false
    },
    {
        id: 6,
        title: "כמה פעמים עשינו ספונג'ה מאז שנכנסנו לבית?",
        media: {
            type: "image",
            src: "assets/images/sample6.jpg"
        },
        options: [
            { id: 1, text: "1" },
            { id: 2, text: "0" },
            { id: 3, text: "3" },
            { id: 4, text: "2" }
        ],
        correctAnswerId: 3,
        isBonus: true
    },
    {
        id: 7,
        title: "לאיזה צד של הקיר המיטה יותר קרובה?",
        media: {
            type: "image",
            src: "assets/images/sample7.jpg"
        },
        options: [
            { id: 1, text: "לצד של מיכך" },
            { id: 2, text: "לצד של אלונכס" }
            
        ],
        correctAnswerId: 2,
        isBonus: false
    },
    {
        id: 8,
        title: "האם היה כיף בקמפינג עם אביב ואיתי?",
        media: {
            type: "image",
            src: "assets/images/sample8.jpg"
        },
        options: [
            { id: 1, text: "כן" },
            { id: 2, text: "לא" }
            
        ],
        correctAnswerId: 2,
        isBonus: false
    },
    {
        id: 9,
        title: "באיזה צבע הלק ברגליים של מיך?",
        media: {
            type: "image",
            src: "assets/images/sample9.jpg"
        },
        options: [
            { id: 1, text: "לבן" },
            { id: 2, text: "אפור" },
            { id: 3, text: "ירוק" },
            { id: 4, text: "כתום" }
        ],
        correctAnswerId: 4,
        isBonus: false
    },
    {
        id: 10,
        title: "באיזה צבע הלק של מיכל שנרדמת עם הפלאפון ביד?",
        media: {
            type: "image",
            src: "assets/images/sample10.jpg"
        },
        options: [
            { id: 1, text: "כתום" },
            { id: 2, text: "אפור" },
            { id: 3, text: "שחור" },
            { id: 4, text: "לבן" }
        ],
        correctAnswerId: 1,
        isBonus: true
    },
    {
        id: 11,
        title: "כן, עוד שאלת לק, באיזה צבע הלק של מיך?",
        media: {
            type: "image",
            src: "assets/images/sample11.jpg"
        },
        options: [
            { id: 1, text: "אפור" },
            { id: 2, text: "בורדו" },
            { id: 3, text: "שחור" },
            { id: 4, text: "לבן" }
        ],
        correctAnswerId: 2,
        isBonus: false
    },
    {
        id: 12,
        title: "חשבת שזו עוד שאלה על הלק? לא! החולצה של הבחורה שמאחורייך היא:",
        media: {
            type: "image",
            src: "assets/images/sample12.jpg"
        },
        options: [
            { id: 1, text: "פסים לאורך" },
            { id: 2, text: "פסים לרוחב" },

        ],
        correctAnswerId: 2,
        isBonus: false
    },
    {
        id: 13,
        title: "מי הציגה לנו את הציור המפורסם?",
        media: {
            type: "image",
            src: "assets/images/sample13.png"
        },
        options: [
            { id: 1, text: "עליזה בן יוסף" },
            { id: 2, text: "אליזבת בן פורת" },
            { id: 3, text: "שושי יוספי"},
            { id: 4, text: "ראומה פרץ"}
        ],
        correctAnswerId: 2,
        isBonus: false
    },
    {
        id: 14,
        title: "איזה מאכל מוצג בתמונה?",
        media: {
            type: "image",
            src: "assets/images/sample14.jpeg"
        },
        options: [
            { id: 1, text: "מרמומה" },
            { id: 2, text: "מטבוחה" },
            { id: 3, text: "מחפופה" },
            { id: 4, text: "מלפוף" }
        ],
        correctAnswerId: 1,
        isBonus: false
    },
    {
        id: 15,
        title: "באיזה צבעים התוכיז?",
        media: {
            type: "image",
            src: "assets/images/sample15.jpeg"
        },
        options: [
            { id: 1, text: "צהוב, ירוק, אדום" },
            { id: 2, text: "כחול, צהוב, ירוק" },
            { id: 3, text: "צהוב, אדום, חום" },
        ],
        correctAnswerId: 2,
        isBonus: false
    },
    {
        id: 16,
        title: "איך התגובה של מיכל?",
        media: {
            type: "image",
            src: "assets/images/sample16.jpg"
        },
        options: [
            { id: 1, text: "מצועצעת ומזוייפת" },
            { id: 2, text: "נחמדה" },
            { id: 3, text: "אותנטית" },
            { id: 4, text: "מפרגנת" }
        ],
        correctAnswerId: 1,
        isBonus: false
    },
    {
        id: 17,
        title: "כמה קופסאות על השולחן?",
        media: {
            type: "image",
            src: "assets/images/sample17.jpeg"
        },
        options: [
            { id: 1, text: "11" },
            { id: 2, text: "6" },
            { id: 3, text: "17" },
            { id: 4, text: "9" }
        ],
        correctAnswerId: 1,
        isBonus: false
    },
    // {
    //     id: 18,
    //     title: "מה השעה שאנחנו בדרך כלל קמים בבוקר?",
    //     media: {
    //         type: "image",
    //         src: "assets/images/sample18.jpg"
    //     },
    //     options: [
    //         { id: 1, text: "6:00" },
    //         { id: 2, text: "7:00" },
    //         { id: 3, text: "8:00" },
    //         { id: 4, text: "9:00" }
    //     ],
    //     correctAnswerId: 2,
    //     isBonus: true
    // }
];

const giftsData = [
    {
        id: 1,
        title: "גרביים מעוצבות",
        description: "תדמייני שההפתעה הזאת עדין לא נהרסה ואת מגלה על זה לראשונה",
        emoji: "🧦"
    },
    {
        id: 2,
        title: "החבילה הקטנה יותר",
        description: "חשוב מאד לחיי היום יום",
        emoji: "👌"
    },
    {
        id: 3,
        title: "הבילה הגדולה יותר",
        description: "גם מאד חשוב לחיי היום יום",
        emoji: "❤️"
    }
]; 