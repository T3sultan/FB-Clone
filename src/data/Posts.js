import { USERS } from "./Users";

export const POSTS = [
  {
    profile_img: USERS[0].profile_img,
    username: USERS[0].name,
    caption: "How cute this place",
    time: "Just Now",
    upload_img:
      "https://scontent.fcgp3-1.fna.fbcdn.net/v/t1.18169-1/11796454_1090527354308436_6737988714874331119_n.jpg?stp=c0.2.200.200a_dst-jpg_p200x200&_nc_cat=100&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeEiPAzuhpGNUuvWUkdokm-ioqtrSFNcFTiiq2tIU1wVOP_6UjUwmdYcjqx09LOV1OGwA03eX342z13CLjLvtcA0&_nc_ohc=IT-VDFGgZYMAX-QoaPw&tn=wka66j603PSDG-DG&_nc_ht=scontent.fcgp3-1.fna&oh=00_AT9ajxo2K0ZDRGx48bEJ6OB5KuZZnccXqsF3hiQhc9UWog&oe=6319D93E",
    likes: "121",
    share: "11",
    comments: [
      {
        profile_img: USERS[4].profile_img,
        name: USERS[4].name,
        comment: "So Nice",
      },
      {
        profile_img: USERS[2].profile_img,
        name: USERS[2].name,
        comment: "wow",
      },
    ],
  },

  {
    profile_img: USERS[1].profile_img,
    username: USERS[1].name,
    time: "10 m.",
    caption: "How cute this place",
    upload_img:
      "https://scontent.fcgp3-1.fna.fbcdn.net/v/t1.6435-9/198211449_1024445174974644_8843774518274484891_n.jpg?stp=dst-jpg_s526x395&_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGHj4YWHfro2a4TTb5fgsJ1cqASAylCoQFyoBIDKUKhAXALnh1iiEwbSR32GDiuaWjjGf2-L-RSiCrnwl99V_00&_nc_ohc=TRDx9cXQ5R0AX_SfXiA&tn=p26V2tdMnXfaWxIE&_nc_ht=scontent.fcgp3-1.fna&oh=00_AT-Yy--nokYBJbnxlPf5Mv9XOVONgGWRy2UDqUFKiLOp4A&oe=63103960",
    likes: "147",
    share: "7",
    comments: [
      {
        profile_img: USERS[0].profile_img,
        name: USERS[0].name,
        comment: "So Nice",
      },
      {
        profile_img: USERS[3].profile_img,
        name: USERS[3].name,
        comment: "wow",
      },
    ],
  },

  {
    profile_img: USERS[2].profile_img,
    username: USERS[2].name,
    time: "1 h.",
    caption: "",
    upload_img:
      "https://scontent.fcgp3-1.fna.fbcdn.net/v/t39.30808-6/294033079_3262789040612485_2867835553544113806_n.jpg?stp=dst-jpg_s526x395&_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFP2tgfV0R7irC2aAsR2gbDFXN3A-rloNkVc3cD6uWg2d8NIZmFiaYtwdCuZKTRuxcsDay19SkKi22qgSs7cHio&_nc_ohc=dNgFytaep4YAX-IG3Y5&tn=p26V2tdMnXfaWxIE&_nc_ht=scontent.fcgp3-1.fna&oh=00_AT_b9WDsAffbh5-QvIO71lEaXoLV39Lc5EbSxy6Ql4C53A&oe=62EFC162",
    likes: "1.2k",
    share: "7",
    comments: [
      {
        profile_img: USERS[1].profile_img,
        name: USERS[1].name,
        comment: "So Nice",
      },
      {
        profile_img: USERS[3].profile_img,
        name: USERS[3].name,
        comment: "wow",
      },
      {
        profile_img: USERS[1].profile_img,
        name: USERS[1].name,
        comment: "Beautifull",
      },
    ],
  },
  {
    profile_img: USERS[4].profile_img,
    username: USERS[4].name,
    time: "1 h.",
    caption: "All are good thing mind are always fresh",
    upload_img:
      "https://scontent.fdac99-1.fna.fbcdn.net/v/t39.30808-6/p526x296/258529691_1007422646499438_3426973388133790734_n.jpg?_nc_cat=109&_nc_rgb565=1&ccb=1-5&_nc_sid=e3f864&_nc_eui2=AeH3d01OZYRYc2D9DTFJIPnbskqoLcp38b6ySqgtynfxvhSh8xJn4cCF2RhmMuxqRTf-UhAJzitjXUghz-D-8wHk&_nc_ohc=HG2_8iAM68AAX8kcIRF&_nc_ht=scontent.fdac99-1.fna&oh=fe8fb2c58d1f523f56b03d4cee2fbef9&oe=61AE6E6F",
    likes: "147",
    share: "7",
    comments: [
      {
        profile_img: USERS[1].profile_img,
        name: USERS[1].name,
        comment: "So Nice",
      },
      {
        profile_img: USERS[3].profile_img,
        name: USERS[3].name,
        comment: "wow",
      },
      {
        profile_img: USERS[0].profile_img,
        name: USERS[0].name,
        comment: "Cute",
      },
    ],
  },

  {
    profile_img: USERS[3].profile_img,
    username: USERS[3].name,
    time: "1 D.",
    upload_img:
      "https://scontent.fdac99-1.fna.fbcdn.net/v/t39.30808-6/p526x296/262337972_288737479841867_8248022308632449397_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=8bfeb9&_nc_eui2=AeGry-eBEiToXZ-qfMvIHuTErFBqIwbRcACsUGojBtFwAFFUvO78jSNhWA9TFzLk5OFatDoeeYWTFYxCt4RT2ZIy&_nc_ohc=DUfvERnfIO0AX__HKM1&tn=BRkT4253YD7ex5s1&_nc_ht=scontent.fdac99-1.fna&oh=737967cfbf5706c80e23f5fa4087e767&oe=61AD679B",
    likes: "147",
    caption: "Love is beautiful",
    share: "7",
    comments: [
      {
        profile_img: USERS[0].profile_img,
        name: USERS[0].name,
        comment: "So Nice",
      },
      {
        profile_img: USERS[1].profile_img,
        name: USERS[1].name,
        comment: "wow",
      },
    ],
  },
  {
    profile_img: USERS[5].profile_img,
    username: USERS[5].name,
    caption: "How cute this place",
    time: "Just Now",
    upload_img:
      "https://scontent.fcgp3-1.fna.fbcdn.net/v/t1.18169-1/11796454_1090527354308436_6737988714874331119_n.jpg?stp=c0.2.200.200a_dst-jpg_p200x200&_nc_cat=100&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeEiPAzuhpGNUuvWUkdokm-ioqtrSFNcFTiiq2tIU1wVOP_6UjUwmdYcjqx09LOV1OGwA03eX342z13CLjLvtcA0&_nc_ohc=IT-VDFGgZYMAX-QoaPw&tn=wka66j603PSDG-DG&_nc_ht=scontent.fcgp3-1.fna&oh=00_AT9ajxo2K0ZDRGx48bEJ6OB5KuZZnccXqsF3hiQhc9UWog&oe=6319D93E",
    likes: "121",
    share: "11",
    comments: [
      {
        profile_img: USERS[4].profile_img,
        name: USERS[4].name,
        comment: "So Nice",
      },
      {
        profile_img: USERS[2].profile_img,
        name: USERS[2].name,
        comment: "wow",
      },
    ],
  },

  {
    profile_img: USERS[6].profile_img,
    username: USERS[6].name,
    time: "10 m.",
    caption: "How cute this place",
    upload_img:
      "https://scontent.fcgp3-1.fna.fbcdn.net/v/t1.6435-9/198211449_1024445174974644_8843774518274484891_n.jpg?stp=dst-jpg_s526x395&_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGHj4YWHfro2a4TTb5fgsJ1cqASAylCoQFyoBIDKUKhAXALnh1iiEwbSR32GDiuaWjjGf2-L-RSiCrnwl99V_00&_nc_ohc=TRDx9cXQ5R0AX_SfXiA&tn=p26V2tdMnXfaWxIE&_nc_ht=scontent.fcgp3-1.fna&oh=00_AT-Yy--nokYBJbnxlPf5Mv9XOVONgGWRy2UDqUFKiLOp4A&oe=63103960",
    likes: "147",
    share: "7",
    comments: [
      {
        profile_img: USERS[0].profile_img,
        name: USERS[0].name,
        comment: "So Nice",
      },
      {
        profile_img: USERS[3].profile_img,
        name: USERS[3].name,
        comment: "wow",
      },
    ],
  },

  {
    profile_img: USERS[7].profile_img,
    username: USERS[7].name,
    time: "1 h.",
    caption: "",
    upload_img:
      "https://scontent.fcgp3-1.fna.fbcdn.net/v/t39.30808-6/294033079_3262789040612485_2867835553544113806_n.jpg?stp=dst-jpg_s526x395&_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFP2tgfV0R7irC2aAsR2gbDFXN3A-rloNkVc3cD6uWg2d8NIZmFiaYtwdCuZKTRuxcsDay19SkKi22qgSs7cHio&_nc_ohc=dNgFytaep4YAX-IG3Y5&tn=p26V2tdMnXfaWxIE&_nc_ht=scontent.fcgp3-1.fna&oh=00_AT_b9WDsAffbh5-QvIO71lEaXoLV39Lc5EbSxy6Ql4C53A&oe=62EFC162",
    likes: "1.2k",
    share: "7",
    comments: [
      {
        profile_img: USERS[1].profile_img,
        name: USERS[1].name,
        comment: "So Nice",
      },
      {
        profile_img: USERS[3].profile_img,
        name: USERS[3].name,
        comment: "wow",
      },
      {
        profile_img: USERS[1].profile_img,
        name: USERS[1].name,
        comment: "Beautifull",
      },
    ],
  },
  {
    profile_img: USERS[8].profile_img,
    username: USERS[8].name,
    time: "1 h.",
    caption: "All are good thing mind are always fresh",
    upload_img:
      "https://scontent.fdac99-1.fna.fbcdn.net/v/t39.30808-6/p526x296/258529691_1007422646499438_3426973388133790734_n.jpg?_nc_cat=109&_nc_rgb565=1&ccb=1-5&_nc_sid=e3f864&_nc_eui2=AeH3d01OZYRYc2D9DTFJIPnbskqoLcp38b6ySqgtynfxvhSh8xJn4cCF2RhmMuxqRTf-UhAJzitjXUghz-D-8wHk&_nc_ohc=HG2_8iAM68AAX8kcIRF&_nc_ht=scontent.fdac99-1.fna&oh=fe8fb2c58d1f523f56b03d4cee2fbef9&oe=61AE6E6F",
    likes: "147",
    share: "7",
    comments: [
      {
        profile_img: USERS[1].profile_img,
        name: USERS[1].name,
        comment: "So Nice",
      },
      {
        profile_img: USERS[3].profile_img,
        name: USERS[3].name,
        comment: "wow",
      },
      {
        profile_img: USERS[0].profile_img,
        name: USERS[0].name,
        comment: "Cute",
      },
    ],
  },

  {
    profile_img: USERS[9].profile_img,
    username: USERS[9].name,
    time: "1 D.",
    upload_img:
      "https://scontent.fdac99-1.fna.fbcdn.net/v/t39.30808-6/p526x296/262337972_288737479841867_8248022308632449397_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=8bfeb9&_nc_eui2=AeGry-eBEiToXZ-qfMvIHuTErFBqIwbRcACsUGojBtFwAFFUvO78jSNhWA9TFzLk5OFatDoeeYWTFYxCt4RT2ZIy&_nc_ohc=DUfvERnfIO0AX__HKM1&tn=BRkT4253YD7ex5s1&_nc_ht=scontent.fdac99-1.fna&oh=737967cfbf5706c80e23f5fa4087e767&oe=61AD679B",
    likes: "147",
    caption: "Love is beautiful",
    share: "7",
    comments: [
      {
        profile_img: USERS[0].profile_img,
        name: USERS[0].name,
        comment: "So Nice",
      },
      {
        profile_img: USERS[1].profile_img,
        name: USERS[1].name,
        comment: "wow",
      },
    ],
  },
];
