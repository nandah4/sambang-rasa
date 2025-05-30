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
    journey: [
      "Aktif mengikuti pelatihan dalang remaja di sanggar lokal sejak usia 15.",
      "Menjadi asisten dalang dalam beberapa pertunjukan besar di Solo.",
      "Mulai tampil sebagai dalang utama di acara sekolah dan komunitas pada usia 17.",
      "Menjadi mentor muda di Sanggar Wayang Gogon sejak usia 18.",
    ],
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
    journey: [
      "Belajar pedalangan otodidak sambil mengeksplorasi teknik modern dan kontemporer.",
      "Membuat kanal YouTube yang memperkenalkan pewayangan dalam format digital.",
      "Mengikuti festival budaya digital dan tampil sebagai dalang muda inovatif.",
      "Bergabung sebagai mentor kreatif di Sanggar Wayang Gogon sejak usia 18.",
    ],
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
    journey: [
      "Menjadi pemain gamelan tetap di sanggar tradisional sejak usia 17.",
      "Menjadi pengiring utama dalam pertunjukan wayang di berbagai kota Jawa Tengah.",
      "Mengajar musik tradisional dan gamelan di berbagai sanggar dan sekolah budaya.",
      "Menjadi mentor senior di Sanggar Wayang Gogon sejak lebih dari 15 tahun lalu.",
    ],
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
    journey: [
      "Tampil pertama kali sebagai sinden dalam acara desa pada usia 14.",
      "Memenangkan lomba sinden remaja tingkat kabupaten di usia 16.",
      "Diundang tampil di TV lokal dan berbagai acara budaya.",
      "Menjadi pengajar vokal tradisional dan mentor sinden muda sejak usia 21.",
    ],
  },
];
