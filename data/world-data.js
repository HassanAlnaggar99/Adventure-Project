module.exports = {
    //  Map shape:

/**
 *       6--2--7
 *       |  |  |
 *       4--1--3
 *       |  |  |
 *       8--5--9
 */

    rooms: [
        {
            id: 1,
            name: "Crossroad",
            description: "You are standing at a crossroad. To the north, east, south and west you see empty space, waiting to be filled.",
            exits: {n: 2, e: 3, w: 4, s: 5}
        },
        {
            id: 2,
            name: "Northern point",
            description: "You are standing at the north point of a crossroad. To the south, you see an empty intersection.",
            exits: {s: 1}
        },
        {
            id: 3,
            name: "Eastern point",
            description: "You are standing at the east point of a crossroad. To the west, you see an empty intersection.",
            exits: {w: 1}
        },
        {
            id: 4,
            name: "Western point",
            description: "You are standing at the west point of a crossroad. To the east, you see an empty intersection.",
            exits: {e: 1}
        },
        {
            id: 5,
            name: "Southern point",
            description: "You are standing at the south point of a crossroad. To the north, you see an empty intersection.",
            exits: {n: 1}
        },
        {
            id: 6,
            name: "North Western point",
            description: "You are standing at the north west point of a crossroad. To the east, you see a room and to the south you see another room.",
            exits: {e: 2, s: 4}
        },
        {
            id: 7,
            name: "North Eastern point",
            description: "You are standing at the north east point of a crossroad. To the west, you see a room and to the south you see another room.",
            exits: {w: 2, s: 3}
        },
        {
            id: 8,
            name: "South Western point",
            description: "You are standing at the south west point of a crossroad. To the east, you see a room and to the north you see another room.",
            exits: {e: 5, n: 4}
        },
        {
            id: 9,
            name: "South Eastern point",
            description: "You are standing at the south east point of a crossroad. To the west, you see a room and to the north you see another room.",
            exits: {w: 5, n: 3}
        },

    ],
    items: [
        {
            name: "rock",
            description: "Just a simple rock",
            room: 1
        },
        {
            name: "sandwich",
            description: "A tasty looking sandwich",
            room: 2,
            isFood: true
        },
        {
            name: "bow",
            description: "A bow is a ranged weapon that shoots arrows",
            room: 3
        },
        {
            name: "wooden sword",
            description: "The sword is a melee weapon that is mainly used to deal damage",
            room: 4
        },
        {
            name: "shield",
            description: "A shield is a tool used for protecting the player against attacks",
            room: 5
        },
        {
            name: "egg",
            description: "A fresh egg",
            room: 8,
            isFood: true
        },
        {
            name: "fishing rod",
            description: "A fishing rod is a tool to catch fish",
            room: 6
        },
        {
            name: "written book",
            description: "A book full of knowledge",
            room: 7
        },
        {
            name: "snowball",
            description: "Snowballs are throwable combat items that hit but do not damage most mobs on impact.",
            room: 8
        },
        {
            name: "golden axe",
            description: "a sharp axe coated with gold!",
            room: 9
        }
    ]
}
