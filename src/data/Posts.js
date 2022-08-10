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
      "https://scontent.fcgp3-1.fna.fbcdn.net/v/t39.30808-6/280728581_3210166962599532_72970656625195605_n.jpg?stp=dst-jpg_p600x600&_nc_cat=106&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeGD-32EkxAwHnCqLWDYcHwYjRhpGzNiJi6NGGkbM2ImLvqvzKQi3lPnWV0jiuQdhxUBRlXQ42VFg4m8iMq1LfK3&_nc_ohc=TRuhBLvCr30AX9lYYyY&_nc_ht=scontent.fcgp3-1.fna&oh=00_AT9X4XnnyL3t1-at6yrsUzB5aXfiEQZ_vHQwiWgyVhNbPw&oe=62F8E0DA",
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
      "https://scontent.fcgp3-1.fna.fbcdn.net/v/t39.30808-6/296681244_1995780190615364_6007319787395097473_n.jpg?stp=dst-jpg_p552x414&_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeHUCpXEUv31cmzt_GOGueI-uJlt1W4TEx24mW3VbhMTHYMgvMxdIPoh61OuqmVAFoKKSinpcEg9IpF6JOhbMDRY&_nc_ohc=xufrtClvpMMAX_Q3FUi&_nc_ht=scontent.fcgp3-1.fna&oh=00_AT-ItsdllL3o4MVxY8kLEmh0Jzdhcn5tanxwYaZ1LgD7nw&oe=62F857E8",
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
      "https://scontent.fcgp3-2.fna.fbcdn.net/v/t39.30808-6/297397798_3170858169830431_8246338172706669589_n.jpg?stp=dst-jpg_p180x540&_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeHkk2WXrPMUQRacP5949phel3HsrVdsq2eXceytV2yrZ5NYeb1RZdAChQMGPICLNvH-37Nn2lVcXA-sV843DLX_&_nc_ohc=PybciWdjBS8AX_IKd-r&_nc_ht=scontent.fcgp3-2.fna&oh=00_AT8I6hNsNvz5iNmc5skfrTDMIe1p7Vlor3-lIDAKZw30Pg&oe=62F977C1",
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
      "https://scontent.fcgp3-1.fna.fbcdn.net/v/t39.30808-6/296681244_1995780190615364_6007319787395097473_n.jpg?stp=dst-jpg_p552x414&_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeHUCpXEUv31cmzt_GOGueI-uJlt1W4TEx24mW3VbhMTHYMgvMxdIPoh61OuqmVAFoKKSinpcEg9IpF6JOhbMDRY&_nc_ohc=xufrtClvpMMAX_Q3FUi&_nc_ht=scontent.fcgp3-1.fna&oh=00_AT-ItsdllL3o4MVxY8kLEmh0Jzdhcn5tanxwYaZ1LgD7nw&oe=62F857E8",
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
      "https://scontent.fcgp3-1.fna.fbcdn.net/v/t1.6435-9/198211449_1024445174974644_8843774518274484891_n.jpg?stp=dst-jpg_s526x395&_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGHj4YWHfro2a4TTb5fgsJ1cqASAylCoQFyoBIDKUKhAXALnh1iiEwbSR32GDiuaWjjGf2-L-RSiCrnwl99V_00&_nc_ohc=TRDx9cXQ5R0AX_SfXiA&tn=p26V2tdMnXfaWxIE&_nc_ht=scontent.fcgp3-1.fna&oh=00_AT-Yy--nokYBJbnxlPf5Mv9XOVONgGWRy2UDqUFKiLOp4A&oe=63103960",

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
      "https://scontent.fcgp3-2.fna.fbcdn.net/v/t39.30808-6/297397798_3170858169830431_8246338172706669589_n.jpg?stp=dst-jpg_p180x540&_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeHkk2WXrPMUQRacP5949phel3HsrVdsq2eXceytV2yrZ5NYeb1RZdAChQMGPICLNvH-37Nn2lVcXA-sV843DLX_&_nc_ohc=PybciWdjBS8AX_IKd-r&_nc_ht=scontent.fcgp3-2.fna&oh=00_AT8I6hNsNvz5iNmc5skfrTDMIe1p7Vlor3-lIDAKZw30Pg&oe=62F977C1",
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
