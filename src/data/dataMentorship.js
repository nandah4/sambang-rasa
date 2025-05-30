import image1 from "./../assets/mentorship/sanggar_gogon.jpg";
import image2 from "./../assets/mentorship/sanggar_wayang_ajen.jpg";

import mentor1 from "./../assets/mentorship/Mentor1.jpeg";
import mentor2 from "./../assets/mentorship/Mentor2.jpeg";
import mentor3 from "./../assets/mentorship/Mentor3.jpeg";
import mentor4 from "./../assets/mentorship/Mentor4.jpeg";

export const seniPlaces = [
  {
    id: 1,
    title: "Sanggar Wayang Gogon Surakarta",
    image: image1,
    location: "Surakarta",
    detailLocation:
      "Jl. Halilintar No.140, RT.03/RW.10, Kentingan, Kec. Jebres, Kota Surakarta, Jawa Tengah",
  },
  {
    id: 2,
    title: "Sanggar Seni Wayang Ajen",
    image: image2,
    location: "Bekasi",
    detailLocation:
      "Jl. Kusuma Bar. VI No.11 Blok Cc 3, RT.003/RW.018, Duren Jaya, Kec. Bekasi Timur, Kota Bekasi, Jawa Barat",
  },
];

export const dataMentorships = [
  {
    id: 1,
    image: mentor1,
    sanggar: "Sanggar Wayang Gogon Surakarta",
    nameMentor: "Bagus Pratama",
    age: 20,
    gender: "Laki-laki",
    expertise: "Pedalangan",
    experienceYears: 4,
    description: "Mentor muda berpengalaman dalam seni pedalangan wayang.",
  },
  {
    id: 2,
    image: mentor2,
    sanggar: "Sanggar Wayang Gogon Surakarta",
    nameMentor: "Rizky Wicaksono",
    age: 20,
    gender: "Laki-laki",
    expertise: "Pedalangan modern",
    experienceYears: 3,
    description: "Dalang muda dengan pendekatan modern dalam pewayangan.",
  },
  {
    id: 3,
    image: mentor3,
    sanggar: "Sanggar Wayang Gogon Surakarta",
    nameMentor: "Sutrisno",
    age: 50,
    gender: "Laki-laki",
    expertise: "Gamelan & musik pengiring",
    experienceYears: 32,
    description:
      "Ahli gamelan dan musik pengiring wayang dengan pengalaman 30+ tahun.",
  },
  {
    id: 4,
    image: mentor4,
    sanggar: "Sanggar Wayang Gogon Surakarta",
    nameMentor: "Ratna Dewi",
    age: 25,
    gender: "Perempuan",
    expertise: "Sinden / Vokal tradisional",
    experienceYears: 7,
    description:
      "Sinden muda berbakat dengan suara khas dan teknik vokal kuat.",
  },
];
