export const seasonalFoods = [
    {
        id: 1,
        name: "딸기",
        icon: "🍓",
        season: "봄 중순부터 초여름까지",
        availability: [
            { month: 4, startDay: 15, endDay: 30 },
            { month: 5, startDay: 1, endDay: 31 },
            { month: 6, startDay: 1, endDay: 20 }
        ],
        description: "달콤하고 상큼한 딸기는 비타민 C와 항산화 성분이 풍부합니다. 생으로 먹거나 디저트, 스무디에 활용해보세요."
    },
    {
        id: 2,
        name: "아스파라거스",
        icon: "🥦",
        season: "초봄에서 늦봄까지",
        availability: [
            { month: 3, startDay: 20, endDay: 31 },
            { month: 4, startDay: 1, endDay: 30 },
            { month: 5, startDay: 1, endDay: 31 }
        ],
        description: "봄철에 맛볼 수 있는 아스파라거스는 식이섬유와 엽산이 풍부하며, 구이, 찜, 볶음 요리에 잘 어울립니다."
    },
    {
        id: 3,
        name: "토마토",
        icon: "🍅",
        season: "초여름부터 늦여름까지",
        availability: [
            { month: 6, startDay: 15, endDay: 30 },
            { month: 7, startDay: 1, endDay: 31 },
            { month: 8, startDay: 1, endDay: 31 },
            { month: 9, startDay: 1, endDay: 15 }
        ],
        description: "여름의 토마토는 풍미가 뛰어나며, 리코펜과 비타민 C가 풍부해 샐러드, 소스, 샌드위치에 활용하기 좋습니다."
    },
    {
        id: 4,
        name: "호박",
        icon: "🎃",
        season: "초가을부터 깊어가는 가을까지",
        availability: [
            { month: 9, startDay: 15, endDay: 30 },
            { month: 10, startDay: 1, endDay: 31 },
            { month: 11, startDay: 1, endDay: 30 }
        ],
        description: "가을을 대표하는 채소인 호박은 비타민 A와 식이섬유가 풍부하며, 수프, 파이, 구이로 즐기기 좋습니다."
    },
    {
        id: 5,
        name: "사과",
        icon: "🍎",
        season: "가을과 겨울 사이",
        availability: [
            { month: 9, startDay: 1, endDay: 30 },
            { month: 10, startDay: 1, endDay: 31 },
            { month: 11, startDay: 1, endDay: 30 },
            { month: 12, startDay: 1, endDay: 31 },
            { month: 1, startDay: 1, endDay: 31 },
            { month: 2, startDay: 1, endDay: 28 }
        ],
        description: "아삭하고 달콤한 사과는 식이섬유와 비타민 C가 풍부하며, 간식이나 베이킹, 주스로 활용하기 좋습니다."
    },
    {
        id: 6,
        name: "감귤",
        icon: "🍊",
        season: "겨울쯤",
        availability: [
            { month: 11, startDay: 15, endDay: 30 },
            { month: 12, startDay: 1, endDay: 31 },
            { month: 1, startDay: 1, endDay: 31 },
            { month: 2, startDay: 1, endDay: 28 },
            { month: 3, startDay: 1, endDay: 15 }
        ],
        description: "겨울철 대표 과일 감귤은 비타민 C가 풍부하여 면역력 향상에 도움을 줍니다. 간식이나 주스로 즐겨보세요."
    },
    {
        id: 7,
        name: "옥수수",
        icon: "🌽",
        season: "여름 내내",
        availability: [
            { month: 6, startDay: 1, endDay: 30 },
            { month: 7, startDay: 1, endDay: 31 },
            { month: 8, startDay: 1, endDay: 31 },
            { month: 9, startDay: 1, endDay: 15 }
        ],
        description: "여름철 옥수수는 삶거나 구워 먹기 좋고, 식이섬유와 영양소가 풍부합니다. 샐러드나 스프에 활용해보세요."
    },
    {
        id: 8,
        name: "방울양배추",
        icon: "🥬",
        season: "쌀쌀해지는 계절부터 겨울 끝자락까지",
        availability: [
            { month: 10, startDay: 1, endDay: 31 },
            { month: 11, startDay: 1, endDay: 30 },
            { month: 12, startDay: 1, endDay: 31 },
            { month: 1, startDay: 1, endDay: 31 },
            { month: 2, startDay: 1, endDay: 28 }
        ],
        description: "서리가 내린 뒤 맛이 좋아지는 방울양배추는 비타민 K와 C가 풍부하며, 볶음이나 구이로 맛있게 즐길 수 있습니다."
    },
    {
        id: 9,
        name: "완두콩",
        icon: "🌱",
        season: "5월의 신선함이 가득한 채소",
        availability: [
            { month: 5, startDay: 1, endDay: 31 },
            { month: 6, startDay: 1, endDay: 10 }
        ],
        description: "완두콩은 5월~초여름에 특히 맛이 좋습니다. 밥에 넣거나 스프, 볶음 요리로 활용해보세요."
    },
    {
        id: 10,
        name: "오이",
        icon: "🥒",
        season: "초여름 더위를 식혀주는 채소",
        availability: [
            { month: 5, startDay: 10, endDay: 31 },
            { month: 6, startDay: 1, endDay: 30 },
            { month: 7, startDay: 1, endDay: 10 }
        ],
        description: "수분이 풍부한 오이는 샐러드나 냉국으로 제격이에요. 시원하게 먹으면 더 좋아요!"
    },
    {
        id: 11,
        name: "참다랑어(뱃살)",
        icon: "🐟",
        season: "봄에서 여름으로 넘어가는 바다의 선물",
        availability: [
            { month: 4, startDay: 15, endDay: 30 },
            { month: 5, startDay: 1, endDay: 31 }
        ],
        description: "기름진 참다랑어 뱃살은 5월이 가장 맛있습니다. 회나 초밥으로 즐겨보세요."
    },
    {
        id: 12,
        name: "죽순",
        icon: "🎋",
        season: "봄에서 여름으로 넘어가는 시기",
        availability: [
            { month: 4, startDay: 20, endDay: 30 },
            { month: 5, startDay: 1, endDay: 31 }
        ],
        description: "죽순은 아삭하고 부드러워 다양한 볶음 요리나 찜에 잘 어울려요. 향긋한 봄의 맛!"
    },
    {
        id: 13,
        name: "붕장어",
        icon: "🐡",
        season: "초여름에 활력이 필요한 시기",
        availability: [
            { month: 5, startDay: 15, endDay: 31 },
            { month: 6, startDay: 1, endDay: 30 }
        ],
        description: "초여름 원기 회복에 좋은 붕장어! 구이로 먹으면 고소하고 담백합니다."
    },
    {
        id: 14,
        name: "모시조개",
        icon: "🦪",
        season: "따뜻한 바닷바람이 불어올 때",
        availability: [
            { month: 4, startDay: 1, endDay: 30 },
            { month: 5, startDay: 1, endDay: 31 }
        ],
        description: "맑은 국물 요리에 제격인 모시조개. 해장국, 된장국, 파스타에 넣어도 좋아요!"
    },
    {
        id: 15,
        name: "깻잎",
        icon: "🌿",
        season: "향긋한 초여름 밥도둑",
        availability: [
            { month: 5, startDay: 20, endDay: 31 },
            { month: 6, startDay: 1, endDay: 30 },
            { month: 7, startDay: 1, endDay: 31 }
        ],
        description: "향긋한 깻잎은 쌈이나 김치로, 무침으로도 딱 좋습니다. 지금이 제일 부드러워요."
    },
    {
        id: 16,
        name: "고구마순",
        icon: "🌱",
        season: "한창 자라는 여름 밭의 보물",
        availability: [
            { month: 5, startDay: 25, endDay: 31 },
            { month: 6, startDay: 1, endDay: 30 }
        ],
        description: "연한 고구마순은 볶음으로 먹기 좋고, 살짝 데쳐 나물로도 즐길 수 있어요. 아삭한 여름 반찬이에요."
    },
    {
        id: 17,
        name: "바지락",
        icon: "🦪",
        season: "시원한 국물 맛이 그리울 때",
        availability: [
            { month: 5, startDay: 15, endDay: 31 },
            { month: 6, startDay: 1, endDay: 20 }
        ],
        description: "맑은 국물, 찌개, 술찜 어디에도 어울리는 바지락! 지금이 살이 오동통하게 오른 시기예요."
    },
    {
        id: 18,
        name: "쭈꾸미",
        icon: "🐙",
        season: "봄에서 여름 사이의 바다 간식",
        availability: [
            { month: 5, startDay: 10, endDay: 31 },
            { month: 6, startDay: 1, endDay: 20 }
        ],
        description: "작고 쫄깃한 쭈꾸미는 초여름에도 먹기 좋습니다. 매콤하게 볶으면 밥도둑이에요!"
    },
    {
        id: 19,
        name: "병어",
        icon: "🐠",
        season: "살이 부드러운 여름 생선",
        availability: [
            { month: 5, startDay: 25, endDay: 31 },
            { month: 6, startDay: 1, endDay: 30 }
        ],
        description: "병어는 여름철 생선조림 재료로 인기예요. 기름기 적고 부드러워서 아이들도 좋아해요."
    },
    {
        id: 20,
        name: "아욱",
        icon: "🥬",
        season: "국물 요리에 진한 맛을 더하는 채소",
        availability: [
            { month: 5, startDay: 20, endDay: 31 },
            { month: 6, startDay: 1, endDay: 15 }
        ],
        description: "아욱국은 여름철 입맛을 돋워주는 구수한 한 그릇! 된장과 궁합이 잘 맞아요."
    }
];