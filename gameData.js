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
        correctAnswerId: 4,
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
        title: "איזה צמח הכי גדול בבית?",
        media: {
            type: "image",
            src: "assets/images/sample13.jpg"
        },
        options: [
            { id: 1, text: "פיקוס" },
            { id: 2, text: "מונסטרה" },
            { id: 3, text: "סחלב" },
            { id: 4, text: "קקטוס" }
        ],
        correctAnswerId: 2,
        isBonus: false
    },
    {
        id: 14,
        title: "מה השם של החתולה הראשונה שהאכלנו בחצר?",
        media: {
            type: "image",
            src: "assets/images/sample14.jpg"
        },
        options: [
            { id: 1, text: "שחורי" },
            { id: 2, text: "לבנונת" },
            { id: 3, text: "מנומרת" },
            { id: 4, text: "ג'ינג'ית" }
        ],
        correctAnswerId: 4,
        isBonus: true
    },
    {
        id: 15,
        title: "איזה משחק שיחקנו הכי הרבה ביחד?",
        media: {
            type: "image",
            src: "assets/images/sample15.jpg"
        },
        options: [
            { id: 1, text: "מונופול" },
            { id: 2, text: "טאקי" },
            { id: 3, text: "רמיקוב" },
            { id: 4, text: "שש-בש" }
        ],
        correctAnswerId: 2,
        isBonus: false
    },
    {
        id: 16,
        title: "מה הצבע של המגבות במקלחת?",
        media: {
            type: "image",
            src: "assets/images/sample16.jpg"
        },
        options: [
            { id: 1, text: "תכלת" },
            { id: 2, text: "ורוד" },
            { id: 3, text: "אפור" },
            { id: 4, text: "לבן" }
        ],
        correctAnswerId: 3,
        isBonus: false
    },
    {
        id: 17,
        title: "איזה טעם גלידה אנחנו הכי אוהבים?",
        media: {
            type: "image",
            src: "assets/images/sample17.jpg"
        },
        options: [
            { id: 1, text: "וניל" },
            { id: 2, text: "שוקולד" },
            { id: 3, text: "פיסטוק" },
            { id: 4, text: "קוקילידה" }
        ],
        correctAnswerId: 4,
        isBonus: false
    },
    {
        id: 18,
        title: "מה השעה שאנחנו בדרך כלל קמים בבוקר?",
        media: {
            type: "image",
            src: "assets/images/sample18.jpg"
        },
        options: [
            { id: 1, text: "6:00" },
            { id: 2, text: "7:00" },
            { id: 3, text: "8:00" },
            { id: 4, text: "9:00" }
        ],
        correctAnswerId: 2,
        isBonus: true
    }
];

const giftsData = [
    {
        id: 1,
        title: "יום פינוק בספא",
        description: "יום של פינוק מושלם בספא היוקרתי, כולל עיסוי מפנק ושימוש במתקני הספא",
        emoji: "💆‍♀️"
    },
    {
        id: 2,
        title: "חבילת שוקולדים מפנקת",
        description: "מארז מפנק של שוקולדים משובחים ממותגים מובילים",
        emoji: "🍫"
    },
    {
        id: 3,
        title: "ארוחה זוגית במסעדה",
        description: "ארוחה זוגית מפנקת במסעדת שף, כולל מנה ראשונה, עיקרית וקינוח",
        emoji: "🍽️"
    }
]; 