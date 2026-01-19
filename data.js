// ملف البيانات (عدّل هذا الملف لإضافة/تعديل النغمات بسهولة)
// ملاحظة: الأقسام ثابتة، ويمكنك تعديل أسمائها فقط هنا.

window.CATEGORIES = [
  { id: "latest", name: "الأحدث", image: "ringtones/images/cat-latest.webp" },
  { id: "popular", name: "الأكثر تحميلا", image: "ringtones/images/cat-popular.webp" },
  { id: "duas", name: "أدعية", image: "ringtones/images/cat-duas.webp" },
  { id: "nasheeds", name: "أناشيد", image: "ringtones/images/cat-nasheeds.webp" },
  { id: "songs", name: "أشعار", image: "ringtones/images/cat-songs.webp" },
  { id: "zawamel", name: "زوامل", image: "ringtones/images/cat-zawamel.webp" },
  { id: "name-duas", name: "أدعية بالاسم", image: "ringtones/images/cat-name-duas.webp" },
  { id: "sports", name: "رياضية", image: "ringtones/images/cat-sports.webp" },
  { id: "misc", name: "منوعات", image: "ringtones/images/cat-misc.webp" }
];

window.CARRIERS = [
  { key: "yemen", name: "Yemen Mobile", logo: "media/carriers/yemen.webp", number: "1100" },
  { key: "sabafon", name: "Sabafon", logo: "media/carriers/sabafon.webp", number: "111" },
  { key: "you", name: "YOU", logo: "media/carriers/you.webp", number: "1017" }
];
// بيانات التواصل (اختياري)
window.CONTACT = {
  phone: "736000600",
  whatsapp: "736000600",
  email: "info@unicell.com.ye",
  social: {
    instagram: "https://instagram.com/Unicellye",
    telegram: "https://t.me/Unicellye",
    x: "https://x.com/Unicellye",
    youtube: "https://www.youtube.com/@Unicellye",
    facebook: "https://facebook.com/Unicellye"
  }
};
// 
window.RINGTONES = [
{
    id: "sabr",
    title: "والصبر ياقلبي",
    categories: ["الأكثر تحميلا", "زوامل"],
    image: "ringtones/images/a1.webp",
    audio: "ringtones/audio/sabr.mp3",
    createdAt: "2026-01-04T12:00:00Z",
  rank: {
    "زوامل": 1,
    "الأكثر تحميلا": 1
  },
  codes: {
    yemen:   { code: "9930010087" },
    sabafon: { code: "" },
    you:     { code: "" }
  }
},
{
  id: "dua-motari",
  title: "دعاء يجيبني",
  categories: ["أدعية"],
  image: "ringtones/images/a3.webp",
  audio: "ringtones/audio/mna.mp3",
  codes: {
    yemen:   { code: "" },
    sabafon: { code: "" },
    you:     { code: "" }
  }
},
{
  id: "nasheed-alf",
  title: "الف صلى ",
  categories: ["أناشيد"],
  image: "ringtones/images/a2.webp",
  audio: "ringtones/audio/alf.mp3",
  rank: {
    "أناشيد": 4,
  },
  codes: {
    yemen:   { code: "" },
    sabafon: { code: "" },
    you:     { code: "" }
  }
},
{
  id: "song",
  title: "واقف انا",
  categories: ["أناشيد", "الأكثر تحميلا"],
  image: "ringtones/images/a4.webp",
  audio: "ringtones/audio/waqef-ana.mp3",
  createdAt: "2026-01-04T12:00:00Z",
  rank: {
    "أناشيد": 5,
    "الأكثر تحميلا": 3
  },
  codes: {
    yemen:   { code: "9930010326" },
    sabafon: { code: "" },
    you:     { code: "" }
  }
},

{
  id: "zamil-ya-ilahi",
  title: "يا إلهي",
  categories: ["زوامل"],
  image: "ringtones/images/a1.webp",
  audio: "ringtones/audio/a2.mp3",
  rank: {
    "الأحدث": 2,
  },
  codes: {
    yemen:   { code: "9930010071" },
    sabafon: { code: "" },
    you:     { code: "" }
  }
},

{
  id: "zamil",
  title: "يا صاحبي ",
  categories: ["زوامل"],
  image: "ringtones/images/a1.webp",
  audio: "ringtones/audio/sa1.mp3",
  createdAt: "2026-01-04T12:00:00Z",
  rank: {
    "زوامل": 3,
  },
  codes: {
    yemen:   { code: "9930010340" },
    sabafon: { code: "" },
    you:     { code: "" }
  }
},

{
  id: "nasheed",
  title: "قف بالخضوع",
  categories: ["أناشيد", "الأكثر تحميلا"],
  image: "ringtones/images/a2.webp",
  audio: "ringtones/audio/ab1.mp3",
  createdAt: "2026-01-04T12:00:00Z",
  rank: {
    "أناشيد": 2,
    "الأكثر تحميلا": 2,
  },
  codes: {
    yemen:   { code: "9930010326" },
    sabafon: { code: "" },
    you:     { code: "" }
  }
},

{
  id: "nasheed",
  title: "يامن تحل ",
  categories: ["أناشيد"],
  image: "ringtones/images/a2.webp",
  audio: "ringtones/audio/ab2.mp3",
createdAt: "2026-01-04T12:00:00Z",
  rank: {
    "أناشيد": 1,
  },
  codes: {
    yemen:   { code: "9930010325" },
    sabafon: { code: "" },
    you:     { code: "" }
  }
},

{
  id: "nasheed",
  title: "إلهي وخلاقي",
  categories: ["أناشيد"],
  image: "ringtones/images/a2.webp",
  audio: "ringtones/audio/ab3.mp3",
createdAt: "2026-01-04T12:00:00Z",
  rank: {
    "أناشيد": 3,
  },
  codes: {
    yemen:   { code: "9930010328" },
    sabafon: { code: "" },
    you:     { code: "" }
  }
},


  {
    id: "reply_amyn",
    title: "رد أمين",
    categories: ["ردود آلية بالاسم"],
    image: "AUTO",
    audio: "ringtones/audio/reply_amyn.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:""}
    }
  },
  {
    id: "reply_ans",
    title: "رد أنس",
    categories: ["ردود آلية بالاسم"],
    image: "AUTO",
    audio: "ringtones/audio/reply_ans.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:""}
    }
  },
  {
    id: "reply_aymn",
    title: "رد أيمن",
    categories: ["ردود آلية بالاسم"],
    image: "AUTO",
    audio: "ringtones/audio/reply_aymn.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:""}
    }
  },
  {
    id: "reply_abrahym",
    title: "رد ابراهيم",
    categories: ["ردود آلية بالاسم"],
    image: "AUTO",
    audio: "ringtones/audio/reply_abrahym.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:""}
    }
  },
  {
    id: "reply_ahmd",
    title: "رد احمد",
    categories: ["ردود آلية بالاسم"],
    image: "AUTO",
    audio: "ringtones/audio/reply_ahmd.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:""}
    }
  },
  {
    id: "reply_asamh",
    title: "رد اسامه",
    categories: ["ردود آلية بالاسم"],
    image: "AUTO",
    audio: "ringtones/audio/reply_asamh.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:""}
    }
  },
  {
    id: "reply_akrm",
    title: "رد اكرم",
    categories: ["ردود آلية بالاسم"],
    image: "AUTO",
    audio: "ringtones/audio/reply_akrm.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:""}
    }
  },
  {
    id: "reply_bdr",
    title: "رد بدر",
    categories: ["ردود آلية بالاسم"],
    image: "AUTO",
    audio: "ringtones/audio/reply_bdr.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:""}
    }
  },
  {
    id: "reply_bsam",
    title: "رد بسام",
    categories: ["ردود آلية بالاسم"],
    image: "AUTO",
    audio: "ringtones/audio/reply_bsam.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:""}
    }
  },
  {
    id: "reply_blal",
    title: "رد بلال",
    categories: ["ردود آلية بالاسم"],
    image: "AUTO",
    audio: "ringtones/audio/reply_blal.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:""}
    }
  },
  {
    id: "reply_jabr",
    title: "رد جابر",
    categories: ["ردود آلية بالاسم"],
    image: "AUTO",
    audio: "ringtones/audio/reply_jabr.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:""}
    }
  },
  {
    id: "reply_hsn",
    title: "رد حسن",
    categories: ["ردود آلية بالاسم"],
    image: "AUTO",
    audio: "ringtones/audio/reply_hsn.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:""}
    }
  },
  {
    id: "reply_hsyn",
    title: "رد حسين",
    categories: ["ردود آلية بالاسم"],
    image: "AUTO",
    audio: "ringtones/audio/reply_hsyn.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:""}
    }
  },
  {
    id: "reply_hmdy",
    title: "رد حمدي",
    categories: ["ردود آلية بالاسم"],
    image: "AUTO",
    audio: "ringtones/audio/reply_hmdy.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:""}
    }
  },
  {
    id: "reply_hmza",
    title: "رد حمزة",
    categories: ["ردود آلية بالاسم"],
    image: "AUTO",
    audio: "ringtones/audio/reply_hmza.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:""}
    }
  },
  {
    id: "reply_khald",
    title: "رد خالد",
    categories: ["ردود آلية بالاسم"],
    image: "AUTO",
    audio: "ringtones/audio/reply_khald.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:""}
    }
  },
  {
    id: "reply_khlyl",
    title: "رد خليل",
    categories: ["ردود آلية بالاسم"],
    image: "AUTO",
    audio: "ringtones/audio/reply_khlyl.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:""}
    }
  },
  {
    id: "reply_rayd",
    title: "رد رائد",
    categories: ["ردود آلية بالاسم"],
    image: "AUTO",
    audio: "ringtones/audio/reply_rayd.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:""}
    }
  },
  {
    id: "reply_rashd",
    title: "رد راشد",
    categories: ["ردود آلية بالاسم"],
    image: "AUTO",
    audio: "ringtones/audio/reply_rashd.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:""}
    }
  },
  {
    id: "reply_rshad",
    title: "رد رشاد",
    categories: ["ردود آلية بالاسم"],
    image: "AUTO",
    audio: "ringtones/audio/reply_rshad.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:""}
    }
  },
  {
    id: "reply_zyad",
    title: "رد زياد",
    categories: ["ردود آلية بالاسم"],
    image: "AUTO",
    audio: "ringtones/audio/reply_zyad.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:""}
    }
  },
  {
    id: "reply_salm",
    title: "رد سالم",
    categories: ["ردود آلية بالاسم"],
    image: "AUTO",
    audio: "ringtones/audio/reply_salm.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:""}
    }
  },
  {
    id: "reply_samy",
    title: "رد سامي",
    categories: ["ردود آلية بالاسم"],
    image: "AUTO",
    audio: "ringtones/audio/reply_samy.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:""}
    }
  },
  {
    id: "reply_sayd",
    title: "رد سعيد",
    categories: ["ردود آلية بالاسم"],
    image: "AUTO",
    audio: "ringtones/audio/reply_sayd.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:""}
    }
  },
  {
    id: "reply_slman",
    title: "رد سلمان",
    categories: ["ردود آلية بالاسم"],
    image: "AUTO",
    audio: "ringtones/audio/reply_slman.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:""}
    }
  },
  {
    id: "reply_shrf",
    title: "رد شرف",
    categories: ["ردود آلية بالاسم"],
    image: "AUTO",
    audio: "ringtones/audio/reply_shrf.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:""}
    }
  },
  {
    id: "reply_sadq",
    title: "رد صادق",
    categories: ["ردود آلية بالاسم"],
    image: "AUTO",
    audio: "ringtones/audio/reply_sadq.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:""}
    }
  },
  {
    id: "reply_salh",
    title: "رد صالح",
    categories: ["ردود آلية بالاسم"],
    image: "AUTO",
    audio: "ringtones/audio/reply_salh.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:""}
    }
  },
  {
    id: "reply_sbry",
    title: "رد صبري",
    categories: ["ردود آلية بالاسم"],
    image: "AUTO",
    audio: "ringtones/audio/reply_sbry.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:""}
    }
  },
  {
    id: "reply_tarq",
    title: "رد طارق",
    categories: ["ردود آلية بالاسم"],
    image: "AUTO",
    audio: "ringtones/audio/reply_tarq.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:""}
    }
  },
  {
    id: "reply_tlal",
    title: "رد طلال",
    categories: ["ردود آلية بالاسم"],
    image: "AUTO",
    audio: "ringtones/audio/reply_tlal.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:""}
    }
  },
  {
    id: "reply_abdalrhmn",
    title: "رد عبدالرحمن",
    categories: ["ردود آلية بالاسم"],
    image: "AUTO",
    audio: "ringtones/audio/reply_abdalrhmn.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:""}
    }
  },
  {
    id: "reply_abdalqadr",
    title: "رد عبدالقادر",
    categories: ["ردود آلية بالاسم"],
    image: "AUTO",
    audio: "ringtones/audio/reply_abdalqadr.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:""}
    }
  },
  {
    id: "reply_abdalltyf",
    title: "رد عبداللطيف",
    categories: ["ردود آلية بالاسم"],
    image: "AUTO",
    audio: "ringtones/audio/reply_abdalltyf.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:""}
    }
  },
  {
    id: "reply_abdallh",
    title: "رد عبدالله",
    categories: ["ردود آلية بالاسم"],
    image: "AUTO",
    audio: "ringtones/audio/reply_abdallh.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:""}
    }
  },
  {
    id: "reply_adnan",
    title: "رد عدنان",
    categories: ["ردود آلية بالاسم"],
    image: "AUTO",
    audio: "ringtones/audio/reply_adnan.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:""}
    }
  },
  {
    id: "reply_aly",
    title: "رد علي",
    categories: ["ردود آلية بالاسم"],
    image: "AUTO",
    audio: "ringtones/audio/reply_aly.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:""}
    }
  },
  {
    id: "reply_amr",
    title: "رد عمر",
    categories: ["ردود آلية بالاسم"],
    image: "AUTO",
    audio: "ringtones/audio/reply_amr.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:""}
    }
  },
  {
    id: "reply_fars",
    title: "رد فارس",
    categories: ["ردود آلية بالاسم"],
    image: "AUTO",
    audio: "ringtones/audio/reply_fars.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:""}
    }
  },
  {
    id: "reply_fhd",
    title: "رد فهد",
    categories: ["ردود آلية بالاسم"],
    image: "AUTO",
    audio: "ringtones/audio/reply_fhd.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:""}
    }
  },
  {
    id: "reply_mazn",
    title: "رد مازن",
    categories: ["ردود آلية بالاسم"],
    image: "AUTO",
    audio: "ringtones/audio/reply_mazn.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:""}
    }
  },
  {
    id: "reply_mahr",
    title: "رد ماهر",
    categories: ["ردود آلية بالاسم"],
    image: "AUTO",
    audio: "ringtones/audio/reply_mahr.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:""}
    }
  },
  {
    id: "reply_mhsn",
    title: "رد محسن",
    categories: ["ردود آلية بالاسم"],
    image: "AUTO",
    audio: "ringtones/audio/reply_mhsn.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:""}
    }
  },
  {
    id: "reply_mhmd",
    title: "رد محمد",
    categories: ["ردود آلية بالاسم"],
    image: "AUTO",
    audio: "ringtones/audio/reply_mhmd.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:""}
    }
  },
  {
    id: "reply_mrad",
    title: "رد مراد",
    categories: ["ردود آلية بالاسم"],
    image: "AUTO",
    audio: "ringtones/audio/reply_mrad.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:""}
    }
  },
  {
    id: "reply_mrwan",
    title: "رد مروان",
    categories: ["ردود آلية بالاسم"],
    image: "AUTO",
    audio: "ringtones/audio/reply_mrwan.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:""}
    }
  },
  {
    id: "reply_mstfa",
    title: "رد مصطفى",
    categories: ["ردود آلية بالاسم"],
    image: "AUTO",
    audio: "ringtones/audio/reply_mstfa.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:""}
    }
  },
  {
    id: "reply_maadh",
    title: "رد معاذ",
    categories: ["ردود آلية بالاسم"],
    image: "AUTO",
    audio: "ringtones/audio/reply_maadh.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:""}
    }
  },
  {
    id: "reply_mnswr",
    title: "رد منصور",
    categories: ["ردود آلية بالاسم"],
    image: "AUTO",
    audio: "ringtones/audio/reply_mnswr.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:""}
    }
  },
  {
    id: "reply_nadr",
    title: "رد نادر",
    categories: ["ردود آلية بالاسم"],
    image: "AUTO",
    audio: "ringtones/audio/reply_nadr.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:""}
    }
  },
  {
    id: "reply_nasr",
    title: "رد ناصر",
    categories: ["ردود آلية بالاسم"],
    image: "AUTO",
    audio: "ringtones/audio/reply_nasr.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:""}
    }
  },
  {
    id: "reply_nbyl",
    title: "رد نبيل",
    categories: ["ردود آلية بالاسم"],
    image: "AUTO",
    audio: "ringtones/audio/reply_nbyl.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:""}
    }
  },
  {
    id: "reply_nwh",
    title: "رد نوح",
    categories: ["ردود آلية بالاسم"],
    image: "AUTO",
    audio: "ringtones/audio/reply_nwh.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:""}
    }
  },
  {
    id: "reply_hady",
    title: "رد هادي",
    categories: ["ردود آلية بالاسم"],
    image: "AUTO",
    audio: "ringtones/audio/reply_hady.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:""}
    }
  },
  {
    id: "reply_hashm",
    title: "رد هاشم",
    categories: ["ردود آلية بالاسم"],
    image: "AUTO",
    audio: "ringtones/audio/reply_hashm.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:""}
    }
  },
  {
    id: "reply_hsham",
    title: "رد هشام",
    categories: ["ردود آلية بالاسم"],
    image: "AUTO",
    audio: "ringtones/audio/reply_hsham.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:""}
    }
  },
  {
    id: "reply_hythm",
    title: "رد هيثم",
    categories: ["ردود آلية بالاسم"],
    image: "AUTO",
    audio: "ringtones/audio/reply_hythm.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:""}
    }
  },
  {
    id: "reply_wlyd",
    title: "رد وليد",
    categories: ["ردود آلية بالاسم"],
    image: "AUTO",
    audio: "ringtones/audio/reply_wlyd.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:""}
    }
  },
  {
    id: "reply_yasr",
    title: "رد ياسر",
    categories: ["ردود آلية بالاسم"],
    image: "AUTO",
    audio: "ringtones/audio/reply_yasr.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:""}
    }
  },
  {
    id: "reply_yhya",
    title: "رد يحيى",
    categories: ["ردود آلية بالاسم"],
    image: "AUTO",
    audio: "ringtones/audio/reply_yhya.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:""}
    }
  },
  {
    id: "reply_ywsf",
    title: "رد يوسف",
    categories: ["ردود آلية بالاسم"],
    image: "AUTO",
    audio: "ringtones/audio/reply_ywsf.mp3",
    codes: {
      yemen:{code:"993001009"},
      sabafon:{code:"32456"},
      you:{code:"655454"}
    }
  },
  {
    id: "dua_abdalhady",
    title: "دعاء عبدالهادي",
    categories: ["أدعية بالاسم"],
    image: "AUTO",
    audio: "ringtones/audio/dua_abdalhady.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:""}
    }
  },
  {
    id: "dua_abdalhkym",
    title: "دعاء عبدالحكيم",
    categories: ["أدعية بالاسم"],
    image: "AUTO",
    audio: "ringtones/audio/dua_abdalhkym.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:""}
    }
  },
  {
    id: "dua_abdalkrym",
    title: "دعاء عبدالكريم",
    categories: ["أدعية بالاسم"],
    image: "AUTO",
    audio: "ringtones/audio/dua_abdalkrym.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:""}
    }
  },
  {
    id: "dua_abdallh",
    title: "دعاء عبدالله",
    categories: ["أدعية بالاسم"],
    image: "AUTO",
    audio: "ringtones/audio/dua_abdallh.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:""}
    }
  },
  {
    id: "dua_abdalltyf",
    title: "دعاء عبداللطيف",
    categories: ["أدعية بالاسم"],
    image: "AUTO",
    audio: "ringtones/audio/dua_abdalltyf.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:""}
    }
  },
  {
    id: "dua_abdalmlk",
    title: "دعاء عبدالملك",
    categories: ["أدعية بالاسم"],
    image: "AUTO",
    audio: "ringtones/audio/dua_abdalmlk.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:""}
    }
  },
  {
    id: "dua_abdalnasr",
    title: "دعاء عبدالناصر",
    categories: ["أدعية بالاسم"],
    image: "AUTO",
    audio: "ringtones/audio/dua_abdalnasr.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:""}
    }
  },
  {
    id: "dua_abdalqadr",
    title: "دعاء عبدالقادر",
    categories: ["أدعية بالاسم"],
    image: "AUTO",
    audio: "ringtones/audio/dua_abdalqadr.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:""}
    }
  },
  {
    id: "dua_abdalrhmn",
    title: "دعاء عبدالرحمن",
    categories: ["أدعية بالاسم"],
    image: "AUTO",
    audio: "ringtones/audio/dua_abdalrhmn.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:""}
    }
  },
  {
    id: "dua_abdalrwwf",
    title: "دعاء عبدالرؤوف",
    categories: ["أدعية بالاسم"],
    image: "AUTO",
    audio: "ringtones/audio/dua_abdalrwwf.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:""}
    }
  },
  {
    id: "dua_abdalrzaq",
    title: "دعاء عبدالرزاق",
    categories: ["أدعية بالاسم"],
    image: "AUTO",
    audio: "ringtones/audio/dua_abdalrzaq.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:""}
    }
  },
  {
    id: "dua_abrahym",
    title: "دعاء ابراهيم",
    categories: ["أدعية بالاسم"],
    image: "AUTO",
    audio: "ringtones/audio/dua_abrahym.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:""}
    }
  },
  {
    id: "dua_adnan",
    title: "دعاء عدنان",
    categories: ["أدعية بالاسم"],
    image: "AUTO",
    audio: "ringtones/audio/dua_adnan.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:""}
    }
  },
  {
    id: "dua_ady",
    title: "دعاء عدي",
    categories: ["أدعية بالاسم"],
    image: "AUTO",
    audio: "ringtones/audio/dua_ady.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:""}
    }
  },
  {
    id: "dua_akrm",
    title: "دعاء اكرم",
    categories: ["أدعية بالاسم"],
    image: "AUTO",
    audio: "ringtones/audio/dua_akrm.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:""}
    }
  },
  {
    id: "dua_ala",
    title: "دعاء علاء",
    categories: ["أدعية بالاسم"],
    image: "AUTO",
    audio: "ringtones/audio/dua_ala.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:""}
    }
  },
  {
    id: "dua_aly",
    title: "دعاء علي",
    categories: ["أدعية بالاسم"],
    image: "AUTO",
    audio: "ringtones/audio/dua_aly.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:""}
    }
  },
  {
    id: "dua_amr",
    title: "دعاء عمر",
    categories: ["أدعية بالاسم"],
    image: "AUTO",
    audio: "ringtones/audio/dua_amr.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:""}
    }
  },
  {
    id: "dua_amyn",
    title: "دعاء أمين",
    categories: ["أدعية بالاسم"],
    image: "AUTO",
    audio: "ringtones/audio/dua_amyn.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:""}
    }
  },
  {
    id: "dua_anwr1",
    title: "دعاء أنور١",
    categories: ["أدعية بالاسم"],
    image: "AUTO",
    audio: "ringtones/audio/dua_anwr1.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:""}
    }
  },
  {
    id: "dua_asam",
    title: "دعاء عصام",
    categories: ["أدعية بالاسم"],
    image: "AUTO",
    audio: "ringtones/audio/dua_asam.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:""}
    }
  },
  {
    id: "dua_asamh",
    title: "دعاء اسامه",
    categories: ["أدعية بالاسم"],
    image: "AUTO",
    audio: "ringtones/audio/dua_asamh.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:""}
    }
  },
  {
    id: "dua_ashrf",
    title: "دعاء أشرف",
    categories: ["أدعية بالاسم"],
    image: "AUTO",
    audio: "ringtones/audio/dua_ashrf.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:""}
    }
  },
  {
    id: "dua_asmaayl",
    title: "دعاء اسماعيل",
    categories: ["أدعية بالاسم"],
    image: "AUTO",
    audio: "ringtones/audio/dua_asmaayl.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:""}
    }
  },
  {
    id: "dua_aymn",
    title: "دعاء أيمن",
    categories: ["أدعية بالاسم"],
    image: "AUTO",
    audio: "ringtones/audio/dua_aymn.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:""}
    }
  },
  {
    id: "dua_aywb",
    title: "دعاء ايوب",
    categories: ["أدعية بالاسم"],
    image: "AUTO",
    audio: "ringtones/audio/dua_aywb.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:""}
    }
  },
  {
    id: "dua_bdr",
    title: "دعاء بدر",
    categories: ["أدعية بالاسم"],
    image: "AUTO",
    audio: "ringtones/audio/dua_bdr.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:""}
    }
  },
  {
    id: "dua_blal",
    title: "دعاء بلال",
    categories: ["أدعية بالاسم"],
    image: "AUTO",
    audio: "ringtones/audio/dua_blal.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:""}
    }
  },
  {
    id: "dua_bsam",
    title: "دعاء بسام",
    categories: ["أدعية بالاسم"],
    image: "AUTO",
    audio: "ringtones/audio/dua_bsam.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:""}
    }
  },
  {
    id: "dua_bshyr",
    title: "دعاء بشير",
    categories: ["أدعية بالاسم"],
    image: "AUTO",
    audio: "ringtones/audio/dua_bshyr.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:""}
    }
  },
  {
    id: "dua_fars",
    title: "دعاء فارس",
    categories: ["أدعية بالاسم"],
    image: "AUTO",
    audio: "ringtones/audio/dua_fars.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:""}
    }
  },
  {
    id: "dua_fayz",
    title: "دعاء فايز",
    categories: ["أدعية بالاسم"],
    image: "AUTO",
    audio: "ringtones/audio/dua_fayz.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:""}
    }
  },
  {
    id: "dua_fhd",
    title: "دعاء فهد",
    categories: ["أدعية بالاسم"],
    image: "AUTO",
    audio: "ringtones/audio/dua_fhd.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:""}
    }
  },
  {
    id: "dua_fwad",
    title: "دعاء فؤاد",
    categories: ["أدعية بالاسم"],
    image: "AUTO",
    audio: "ringtones/audio/dua_fwad.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:""}
    }
  },
  {
    id: "dua_fwaz",
    title: "دعاء فواز",
    categories: ["أدعية بالاسم"],
    image: "AUTO",
    audio: "ringtones/audio/dua_fwaz.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:""}
    }
  },
  {
    id: "dua_hady",
    title: "دعاء هادي",
    categories: ["أدعية بالاسم"],
    image: "AUTO",
    audio: "ringtones/audio/dua_hady.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:""}
    }
  },
  {
    id: "dua_hany",
    title: "دعاء هاني",
    categories: ["أدعية بالاسم"],
    image: "AUTO",
    audio: "ringtones/audio/dua_hany.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:""}
    }
  },
  {
    id: "dua_harth",
    title: "دعاء حارث",
    categories: ["أدعية بالاسم"],
    image: "AUTO",
    audio: "ringtones/audio/dua_harth.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:""}
    }
  },
  {
    id: "dua_hashm",
    title: "دعاء هاشم",
    categories: ["أدعية بالاسم"],
    image: "AUTO",
    audio: "ringtones/audio/dua_hashm.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:""}
    }
  },
  {
    id: "dua_hmdy",
    title: "دعاء حمدي",
    categories: ["أدعية بالاسم"],
    image: "AUTO",
    audio: "ringtones/audio/dua_hmdy.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:""}
    }
  },
  {
    id: "dua_hmwd",
    title: "دعاء حمود",
    categories: ["أدعية بالاسم"],
    image: "AUTO",
    audio: "ringtones/audio/dua_hmwd.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:""}
    }
  },
  {
    id: "dua_hmzh",
    title: "دعاء حمزة",
    categories: ["أدعية بالاسم"],
    image: "AUTO",
    audio: "ringtones/audio/dua_hmzh.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:""}
    }
  },
  {
    id: "dua_hsham",
    title: "دعاء هشام",
    categories: ["أدعية بالاسم"],
    image: "AUTO",
    audio: "ringtones/audio/dua_hsham.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:""}
    }
  },
  {
    id: "dua_hsn",
    title: "دعاء حسن",
    categories: ["أدعية بالاسم"],
    image: "AUTO",
    audio: "ringtones/audio/dua_hsn.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:""}
    }
  },
  {
    id: "dua_hsyn",
    title: "دعاء حسين",
    categories: ["أدعية بالاسم"],
    image: "AUTO",
    audio: "ringtones/audio/dua_hsyn.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:""}
    }
  },
  {
    id: "dua_hythm",
    title: "دعاء هيثم",
    categories: ["أدعية بالاسم"],
    image: "AUTO",
    audio: "ringtones/audio/dua_hythm.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:""}
    }
  },
  {
    id: "dua_jabr",
    title: "دعاء جابر",
    categories: ["أدعية بالاسم"],
    image: "AUTO",
    audio: "ringtones/audio/dua_jabr.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:""}
    }
  },
  {
    id: "dua_jlal",
    title: "دعاء جلال",
    categories: ["أدعية بالاسم"],
    image: "AUTO",
    audio: "ringtones/audio/dua_jlal.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:""}
    }
  },
  {
    id: "dua_jmal",
    title: "دعاء جمال",
    categories: ["أدعية بالاسم"],
    image: "AUTO",
    audio: "ringtones/audio/dua_jmal.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:""}
    }
  },
  {
    id: "dua_khald",
    title: "دعاء خالد",
    categories: ["أدعية بالاسم"],
    image: "AUTO",
    audio: "ringtones/audio/dua_khald.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:""}
    }
  },
  {
    id: "dua_khlyl",
    title: "دعاء خليل",
    categories: ["أدعية بالاسم"],
    image: "AUTO",
    audio: "ringtones/audio/dua_khlyl.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:""}
    }
  },
  {
    id: "dua_krm",
    title: "دعاء كرم",
    categories: ["أدعية بالاسم"],
    image: "AUTO",
    audio: "ringtones/audio/dua_krm.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:""}
    }
  },
  {
    id: "dua_ltf",
    title: "دعاء لطف",
    categories: ["أدعية بالاسم"],
    image: "AUTO",
    audio: "ringtones/audio/dua_ltf.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:""}
    }
  },
  {
    id: "dua_maadh",
    title: "دعاء معاذ",
    categories: ["أدعية بالاسم"],
    image: "AUTO",
    audio: "ringtones/audio/dua_maadh.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:""}
    }
  },
  {
    id: "dua_mahr",
    title: "دعاء ماهر",
    categories: ["أدعية بالاسم"],
    image: "AUTO",
    audio: "ringtones/audio/dua_mahr.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:""}
    }
  },
  {
    id: "dua_majd",
    title: "دعاء ماجد",
    categories: ["أدعية بالاسم"],
    image: "AUTO",
    audio: "ringtones/audio/dua_majd.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:""}
    }
  },
  {
    id: "dua_matsm",
    title: "دعاء معتصم",
    categories: ["أدعية بالاسم"],
    image: "AUTO",
    audio: "ringtones/audio/dua_matsm.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:""}
    }
  },
  {
    id: "dua_mayn",
    title: "دعاء معين",
    categories: ["أدعية بالاسم"],
    image: "AUTO",
    audio: "ringtones/audio/dua_mayn.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:""}
    }
  },
  {
    id: "dua_mazn",
    title: "دعاء مازن",
    categories: ["أدعية بالاسم"],
    image: "AUTO",
    audio: "ringtones/audio/dua_mazn.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:""}
    }
  },
  {
    id: "dua_mhmd",
    title: "دعاء محمد",
    categories: ["أدعية بالاسم"],
    image: "AUTO",
    audio: "ringtones/audio/dua_mhmd.mp3",
    rank: {
    "أدعية بالاسم": 1,
  },
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:""}
    }
  },
  {
    id: "dua_mhmwd",
    title: "دعاء محمود",
    categories: ["أدعية بالاسم"],
    image: "AUTO",
    audio: "ringtones/audio/dua_mhmwd.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:""}
    }
  },
  {
    id: "dua_mhnd",
    title: "دعاء مهند",
    categories: ["أدعية بالاسم"],
    image: "AUTO",
    audio: "ringtones/audio/dua_mhnd.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:""}
    }
  },
  {
    id: "dua_mhsn",
    title: "دعاء محسن",
    categories: ["أدعية بالاسم"],
    image: "AUTO",
    audio: "ringtones/audio/dua_mhsn.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:""}
    }
  },
  {
    id: "dua_mkhtar",
    title: "دعاء مختار",
    categories: ["أدعية بالاسم"],
    image: "AUTO",
    audio: "ringtones/audio/dua_mkhtar.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:""}
    }
  },
  {
    id: "dua_mnswr",
    title: "دعاء منصور",
    categories: ["أدعية بالاسم"],
    image: "AUTO",
    audio: "ringtones/audio/dua_mnswr.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:""}
    }
  },
  {
    id: "dua_mrad",
    title: "دعاء مراد",
    categories: ["أدعية بالاسم"],
    image: "AUTO",
    audio: "ringtones/audio/dua_mrad.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:""}
    }
  },
  {
    id: "dua_mrwan",
    title: "دعاء مروان",
    categories: ["أدعية بالاسم"],
    image: "AUTO",
    audio: "ringtones/audio/dua_mrwan.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:""}
    }
  },
  {
    id: "dua_mstfa",
    title: "دعاء مصطفى",
    categories: ["أدعية بالاسم"],
    image: "AUTO",
    audio: "ringtones/audio/dua_mstfa.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:""}
    }
  },
  {
    id: "dua_nadm",
    title: "دعاء ناظم",
    categories: ["أدعية بالاسم"],
    image: "AUTO",
    audio: "ringtones/audio/dua_nadm.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:""}
    }
  },
  {
    id: "dua_nadr",
    title: "دعاء نادر",
    categories: ["أدعية بالاسم"],
    image: "AUTO",
    audio: "ringtones/audio/dua_nadr.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:""}
    }
  },
  {
    id: "dua_nasr",
    title: "دعاء ناصر",
    categories: ["أدعية بالاسم"],
    image: "AUTO",
    audio: "ringtones/audio/dua_nasr.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:""}
    }
  },
  {
    id: "dua_nbyl",
    title: "دعاء نبيل",
    categories: ["أدعية بالاسم"],
    image: "AUTO",
    audio: "ringtones/audio/dua_nbyl.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:""}
    }
  },
  {
    id: "dua_njyb",
    title: "دعاء نجيب",
    categories: ["أدعية بالاسم"],
    image: "AUTO",
    audio: "ringtones/audio/dua_njyb.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:""}
    }
  },
  {
    id: "dua_nwh",
    title: "دعاء نوح",
    categories: ["أدعية بالاسم"],
    image: "AUTO",
    audio: "ringtones/audio/dua_nwh.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:""}
    }
  },
  {
    id: "dua_nwr",
    title: "دعاء نور",
    categories: ["أدعية بالاسم"],
    image: "AUTO",
    audio: "ringtones/audio/dua_nwr.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:""}
    }
  },
  {
    id: "dua_qasm",
    title: "دعاء قاسم",
    categories: ["أدعية بالاسم"],
    image: "AUTO",
    audio: "ringtones/audio/dua_qasm.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:""}
    }
  },
  {
    id: "dua_qhtan",
    title: "دعاء قحطان",
    categories: ["أدعية بالاسم"],
    image: "AUTO",
    audio: "ringtones/audio/dua_qhtan.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:""}
    }
  },
  {
    id: "dua_qys",
    title: "دعاء قيس",
    categories: ["أدعية بالاسم"],
    image: "AUTO",
    audio: "ringtones/audio/dua_qys.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:""}
    }
  },
  {
    id: "dua_ramy",
    title: "دعاء رامي",
    categories: ["أدعية بالاسم"],
    image: "AUTO",
    audio: "ringtones/audio/dua_ramy.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:""}
    }
  },
  {
    id: "dua_rashd",
    title: "دعاء راشد",
    categories: ["أدعية بالاسم"],
    image: "AUTO",
    audio: "ringtones/audio/dua_rashd.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:""}
    }
  },
  {
    id: "dua_rayd",
    title: "دعاء رائد",
    categories: ["أدعية بالاسم"],
    image: "AUTO",
    audio: "ringtones/audio/dua_rayd.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:""}
    }
  },
  {
    id: "dua_rshad",
    title: "دعاء رشاد",
    categories: ["أدعية بالاسم"],
    image: "AUTO",
    audio: "ringtones/audio/dua_rshad.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:""}
    }
  },
  {
    id: "dua_rshyd",
    title: "دعاء رشيد",
    categories: ["أدعية بالاسم"],
    image: "AUTO",
    audio: "ringtones/audio/dua_rshyd.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:""}
    }
  },
  {
    id: "dua_ryad",
    title: "دعاء رياض",
    categories: ["أدعية بالاسم"],
    image: "AUTO",
    audio: "ringtones/audio/dua_ryad.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:""}
    }
  },
  {
    id: "dua_sadq",
    title: "دعاء صادق",
    categories: ["أدعية بالاسم"],
    image: "AUTO",
    audio: "ringtones/audio/dua_sadq.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:""}
    }
  },
  {
    id: "dua_salh",
    title: "دعاء صالح",
    categories: ["أدعية بالاسم"],
    image: "AUTO",
    audio: "ringtones/audio/dua_salh.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:""}
    }
  },
  {
    id: "dua_salm",
    title: "دعاء سالم",
    categories: ["أدعية بالاسم"],
    image: "AUTO",
    audio: "ringtones/audio/dua_salm.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:""}
    }
  },
  {
    id: "dua_samy",
    title: "دعاء سامي",
    categories: ["أدعية بالاسم"],
    image: "AUTO",
    audio: "ringtones/audio/dua_samy.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:""}
    }
  },
  {
    id: "dua_sayd",
    title: "دعاء سعيد",
    categories: ["أدعية بالاسم"],
    image: "AUTO",
    audio: "ringtones/audio/dua_sayd.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:""}
    }
  },
  {
    id: "dua_sdam",
    title: "دعاء صدام",
    categories: ["أدعية بالاسم"],
    image: "AUTO",
    audio: "ringtones/audio/dua_sdam.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:""}
    }
  },
  {
    id: "dua_shakr",
    title: "دعاء شاكر",
    categories: ["أدعية بالاسم"],
    image: "AUTO",
    audio: "ringtones/audio/dua_shakr.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:""}
    }
  },
  {
    id: "dua_shrf",
    title: "دعاء شرف",
    categories: ["أدعية بالاسم"],
    image: "AUTO",
    audio: "ringtones/audio/dua_shrf.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:""}
    }
  },
  {
    id: "dua_shyl",
    title: "دعاء سهيل",
    categories: ["أدعية بالاسم"],
    image: "AUTO",
    audio: "ringtones/audio/dua_shyl.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:""}
    }
  },
  {
    id: "dua_slman",
    title: "دعاء سلمان",
    categories: ["أدعية بالاسم"],
    image: "AUTO",
    audio: "ringtones/audio/dua_slman.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:""}
    }
  },
  {
    id: "dua_sltan",
    title: "دعاء سلطان",
    categories: ["أدعية بالاسم"],
    image: "AUTO",
    audio: "ringtones/audio/dua_sltan.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:""}
    }
  },
  {
    id: "dua_slym",
    title: "دعاء سليم",
    categories: ["أدعية بالاسم"],
    image: "AUTO",
    audio: "ringtones/audio/dua_slym.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:""}
    }
  },
  {
    id: "dua_slyman",
    title: "دعاء سليمان",
    categories: ["أدعية بالاسم"],
    image: "AUTO",
    audio: "ringtones/audio/dua_slyman.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:""}
    }
  },
  {
    id: "dua_tarq",
    title: "دعاء طارق",
    categories: ["أدعية بالاسم"],
    image: "AUTO",
    audio: "ringtones/audio/dua_tarq.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:""}
    }
  },
  {
    id: "dua_wayl",
    title: "دعاء وائل",
    categories: ["أدعية بالاسم"],
    image: "AUTO",
    audio: "ringtones/audio/dua_wayl.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:""}
    }
  },
  {
    id: "dua_wlyd",
    title: "دعاء وليد",
    categories: ["أدعية بالاسم"],
    image: "AUTO",
    audio: "ringtones/audio/dua_wlyd.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:""}
    }
  },
  {
    id: "dua_yaqwb",
    title: "دعاء يعقوب",
    categories: ["أدعية بالاسم"],
    image: "AUTO",
    audio: "ringtones/audio/dua_yaqwb.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:""}
    }
  },
  {
    id: "dua_yasr",
    title: "دعاء ياسر",
    categories: ["أدعية بالاسم"],
    image: "AUTO",
    audio: "ringtones/audio/dua_yasr.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:""}
    }
  },
  {
    id: "dua_yhya",
    title: "دعاء يحيى",
    categories: ["أدعية بالاسم"],
    image: "AUTO",
    audio: "ringtones/audio/dua_yhya.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:""}
    }
  },
  {
    id: "dua_ywsf",
    title: "دعاء يوسف",
    categories: ["أدعية بالاسم"],
    image: "AUTO",
    audio: "ringtones/audio/dua_ywsf.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:""}
    }
  },
  {
    id: "dua_zkrya",
    title: "دعاء زكريا",
    categories: ["أدعية بالاسم"],
    image: "AUTO",
    audio: "ringtones/audio/dua_zkrya.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:""}
    }
  },
  {
    id: "dua_zyad",
    title: "دعاء زياد",
    categories: ["أدعية بالاسم"],
    image: "AUTO",
    audio: "ringtones/audio/dua_zyad.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:""}
    }
  },
  {
    id: "dua_zyd",
    title: "دعاء زيد",
    categories: ["أدعية بالاسم"],
    image: "AUTO",
    audio: "ringtones/audio/dua_zyd.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:""}
    }
  },
    {
    id: "arsenal",
    title: "ارسنال",
    categories: ["رياضية"],
    image: "ringtones/images/arsenal.webp",
    audio: "ringtones/audio/arsenal.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:""}
    }
  },
  {
    id: "bayern",
    title: "الباير",
    categories: ["رياضية"],
    image: "ringtones/images/bayern.webp",
    audio: "ringtones/audio/bayern.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:""}
    }
  },
  {
    id: "chelsea",
    title: "تشيلسي",
    categories: ["رياضية"],
    image: "ringtones/images/chelsea.webp",
    audio: "ringtones/audio/chelsea.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:""}
    }
  },
  {
    id: "juventus",
    title: "يوفنتيس",
    categories: ["رياضية"],
    image: "ringtones/images/juventus.webp",
    audio: "ringtones/audio/juventus.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:""}
    }
  },
  {
    id: "liverpool",
    title: "ليفربول",
    categories: ["رياضية"],
    image: "ringtones/images/liverpool.webp",
    audio: "ringtones/audio/liverpool.mp3",
    rank: {
    "رياضية": 2,
  },
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:""}
    }
  },
  {
    id: "man_city",
    title: "منشستر سيتي",
    categories: ["رياضية"],
    image: "ringtones/images/man_city.webp",
    audio: "ringtones/audio/man_city.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:""}
    }
  },
  {
    id: "psg",
    title: "الباريس",
    categories: ["رياضية"],
    image: "ringtones/images/psg.webp",
    audio: "ringtones/audio/psg.mp3",
    rank: {
    "رياضية": 1,
  },
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:""}
    }
  },
  {
    id: "barcelona",
    title: "برشلونة",
    categories: ["رياضية"],
    image: "ringtones/images/barcelona.webp",
    audio: "ringtones/audio/barcelona.mp3",
rank: {
    "رياضية": 5,
  },
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:""}
    }
  },
  {
    id: "real_madrid",
    title: "ريال مدريد",
    categories: ["رياضية"],
    image: "ringtones/images/real_madrid.webp",
    audio: "ringtones/audio/real_madrid.mp3",
rank: {
    "رياضية": 4,
  },
    codes: {
      yemen:{code:"9930010199"},
      sabafon:{code:""},
      you:{code:""}
    }
  },
  {
  id: "slllh",
  title: "اسأل الله",
  categories: ["أناشيد"],
  image: "ringtones/images/a2.webp",
  audio: "ringtones/audio/slllh.mp3",
  codes: {
    yemen:   { code: "" },
    sabafon: { code: "" },
    you:     { code: "" }
  }
},
{
  id: "lshwq",
  title: "الشوق",
  categories: ["أناشيد"],
  image: "ringtones/images/a2.webp",
  audio: "ringtones/audio/lshwq.mp3",
  codes: {
    yemen:   { code: "9930010041" },
    sabafon: { code: "" },
    you:     { code: "" }
  }
},
{
  id: "lsdyqlwfy",
  title: "الصديق الوفي",
  categories: ["أناشيد"],
  image: "ringtones/images/a7.webp",
  audio: "ringtones/audio/lsdyqlwfy.mp3",
  codes: {
    yemen:   { code: "" },
    sabafon: { code: "" },
    you:     { code: "" }
  }
},
{
  id: "nlymny",
  title: "انا اليماني",
  categories: ["أشعار"],
  image: "ringtones/images/a5.webp",
  audio: "ringtones/audio/nlymny.mp3",
  codes: {
    yemen:   { code: "9930010207" },
    sabafon: { code: "" },
    you:     { code: "" }
  }
},
{
  id: "lfmlyr",
  title: "الف مليار",
  categories: ["أشعار"],
  image: "ringtones/images/a5.webp",
  audio: "ringtones/audio/lfmlyr.mp3",
  codes: {
    yemen:   { code: "9930010259" },
    sabafon: { code: "" },
    you:     { code: "" }
  }
},
{
  id: "hlwshl",
  title: "اهلا وسهلا",
  categories: ["أناشيد"],
  image: "ringtones/images/a7.webp",
  audio: "ringtones/audio/hlwshl.mp3",
  codes: {
    yemen:   { code: "9930010040" },
    sabafon: { code: "" },
    you:     { code: "" }
  }
},
{
  id: "lysydy",
  title: "الا ياسيدي",
  categories: ["أناشيد"],
  image: "ringtones/images/a2.webp",
  audio: "ringtones/audio/lysydy.mp3",
  codes: {
    yemen:   { code: "9930010128" },
    sabafon: { code: "" },
    you:     { code: "" }
  }
},
{
  id: "hlwshlshr",
  title: "اهلاوسهلا فيك",
  categories: ["أشعار"],
  image: "ringtones/images/a5.webp",
  audio: "ringtones/audio/hlwshlshr.mp3",
  codes: {
    yemen:   { code: "9930010197" },
    sabafon: { code: "" },
    you:     { code: "" }
  }
},
{
  id: "tsbyh",
  title: "تسبيح",
  categories: ["أدعية"],
  image: "ringtones/images/a7.webp",
  audio: "ringtones/audio/tsbyh.mp3",
  codes: {
    yemen:   { code: "9930010140" },
    sabafon: { code: "" },
    you:     { code: "" }
  }
},
{
  id: "hbhllbyt",
  title: "حب اهل البيت",
  categories: ["أناشيد"],
  image: "ringtones/images/a2.webp",
  audio: "ringtones/audio/hbhllbyt.mp3",
  codes: {
    yemen:   { code: "9930010006" },
    sabafon: { code: "" },
    you:     { code: "" }
  }
},
{
  id: "hnyt",
  title: "حنيت",
  categories: ["زوامل"],
  image: "ringtones/images/a6.webp",
  audio: "ringtones/audio/hnyt.mp3",
  codes: {
    yemen:   { code: "9930010262" },
    sabafon: { code: "" },
    you:     { code: "" }
  }
},
{
  id: "khlsmhn",
  title: "خلاص ماحنا",
  categories: ["زوامل"],
  image: "ringtones/images/a6.webp",
  audio: "ringtones/audio/khlsmhn.mp3",
rank: {
    "زوامل":2,
  },
  codes: {
    yemen:   { code: "9930010222" },
    sabafon: { code: "" },
    you:     { code: "" }
  }
},
{
  id: "rblsm",
  title: "رب السماء",
  categories: ["أشعار"],
  image: "ringtones/images/a5.webp",
  audio: "ringtones/audio/rblsm.mp3",
  codes: {
    yemen:   { code: "9930010206" },
    sabafon: { code: "" },
    you:     { code: "" }
  }
},
{
  id: "zmnymnfq",
  title: "زماني منافق",
  categories: ["زوامل"],
  image: "ringtones/images/a6.webp",
  audio: "ringtones/audio/zmnymnfq.mp3",
  codes: {
    yemen:   { code: "9930010224" },
    sabafon: { code: "" },
    you:     { code: "" }
  }
},
{
  id: "shby",
  title: "صاحبي",
  categories: ["زوامل"],
  image: "ringtones/images/a6.webp",
  audio: "ringtones/audio/shby.mp3",
  codes: {
    yemen:   { code: "9930010043" },
    sabafon: { code: "" },
    you:     { code: "" }
  }
},
{
  id: "shbyshby",
  title: "صاحبي صاحبي",
  categories: ["زوامل"],
  image: "ringtones/images/a7.webp",
  audio: "ringtones/audio/shbyshby.mp3",
  codes: {
    yemen:   { code: "" },
    sabafon: { code: "" },
    you:     { code: "" }
  }
},
{
  id: "sdqblmthl",
  title: "صدق بالمثل",
  categories: ["زوامل"],
  image: "ringtones/images/a6.webp",
  audio: "ringtones/audio/sdqblmthl.mp3",
  codes: {
    yemen:   { code: "9930010115" },
    sabafon: { code: "" },
    you:     { code: "" }
  }
},
{
  id: "thhmd",
  title: "طه احمد",
  categories: ["أناشيد"],
  image: "ringtones/images/a10.webp",
  audio: "ringtones/audio/thhmd.mp3",
  codes: {
    yemen:   { code: "" },
    sabafon: { code: "" },
    you:     { code: "" }
  }
},
{
  id: "qlbnbdllh",
  title: "قال ابن عبدالله",
  categories: ["زوامل"],
  image: "ringtones/images/a6.webp",
  audio: "ringtones/audio/qlbnbdllh.mp3",
  codes: {
    yemen:   { code: "9930010225" },
    sabafon: { code: "" },
    you:     { code: "" }
  }
},
{
  id: "qwmnjm",
  title: "قوم نجمة ٨٠",
  categories: ["أشعار"],
  image: "ringtones/images/a5.webp",
  audio: "ringtones/audio/qwmnjm.mp3",
  codes: {
    yemen:   { code: "9930010210" },
    sabafon: { code: "" },
    you:     { code: "" }
  }
},
{
  id: "kntlmtsl",
  title: "كنت لما اتصل",
  categories: ["أناشيد"],
  image: "ringtones/images/a7.webp",
  audio: "ringtones/audio/kntlmtsl.mp3",
  codes: {
    yemen:   { code: "" },
    sabafon: { code: "" },
    you:     { code: "" }
  }
},
{
  id: "ltnshdlmwjw",
  title: "لاتنشد الموجوع",
  categories: ["الأكثر تحميلا","زوامل"],
  image: "ringtones/images/a6.webp",
  audio: "ringtones/audio/ltnshdlmwjw.mp3",
  codes: {
    yemen:   { code: "" },
    sabafon: { code: "" },
    you:     { code: "" }
  }
},
{
  id: "ljllqds",
  title: "لجل القدس",
  categories: ["أشعار"],
  image: "ringtones/images/a5.webp",
  audio: "ringtones/audio/ljllqds.mp3",
  codes: {
    yemen:   { code: "" },
    sabafon: { code: "" },
    you:     { code: "" }
  }
},
{
  id: "lykhmsh",
  title: "لي خمسه",
  categories: ["أناشيد"],
  image: "ringtones/images/a2.webp",
  audio: "ringtones/audio/lykhmsh.mp3",
  codes: {
    yemen:   { code: "" },
    sabafon: { code: "" },
    you:     { code: "" }
  }
},
{
  id: "mmthlsn",
  title: "ما مثل صنعاء",
  categories: ["أناشيد"],
  image: "ringtones/images/a8.webp",
  audio: "ringtones/audio/mmthlsn.mp3",
  codes: {
    yemen:   { code: "9930010025" },
    sabafon: { code: "" },
    you:     { code: "" }
  }
},
{
  id: "ywldy",
  title: "يا والدي",
  categories: ["أشعار"],
  image: "ringtones/images/a5.webp",
  audio: "ringtones/audio/ywldy.mp3",
  codes: {
    yemen:   { code: "9930010202" },
    sabafon: { code: "" },
    you:     { code: "" }
  }
},
{
  id: "yllh",
  title: "يالله",
  categories: ["أشعار"],
  image: "ringtones/images/a5.webp",
  audio: "ringtones/audio/yllh.mp3",
  codes: {
    yemen:   { code: "9930010276" },
    sabafon: { code: "" },
    you:     { code: "" }
  }
},
{
  id: "stgfrllh",
  title: "استغفر الله",
  categories: ["أناشيد"],
  image: "ringtones/images/a8.webp",
  audio: "ringtones/audio/stgfrllh.mp3",
  codes: {
    yemen:   { code: "" },
    sabafon: { code: "" },
    you:     { code: "" }
  }
},
{
  id: "myhbybqlby",
  title: "أمي حبيبة قلبي",
  categories: ["أدعية"],
  image: "ringtones/images/a3.webp",
  audio: "ringtones/audio/myhbybqlby.mp3",
  createdAt: "2026-01-15T12:00:00Z",
  codes: {
    yemen:   { code: "9930010220" },
    sabafon: { code: "" },
    you:     { code: "" }
  }
},

{
  id: "lykshkw",
  title: "إليك اشكو",
  categories: ["أدعية"],
  image: "ringtones/images/a3.webp",
  audio: "ringtones/audio/lykshkw.mp3",
  createdAt: "2026-01-15T12:00:00Z",
  codes: {
    yemen:   { code: "9930010160" },
    sabafon: { code: "" },
    you:     { code: "" }
  }
},

{
  id: "dyllh",
  title: "ادعي الله",
  categories: ["أدعية"],
  image: "ringtones/images/a7.webp",
  audio: "ringtones/audio/dyllh.mp3",
  createdAt: "2026-01-15T12:00:00Z",
  codes: {
    yemen:   { code: "9930010096" },
    sabafon: { code: "" },
    you:     { code: "" }
  }
},

{
  id: "slhlydyny",
  title: "اصلح لي ديني",
  categories: ["أدعية"],
  image: "ringtones/images/a3.webp",
  audio: "ringtones/audio/slhlydyny.mp3",
  createdAt: "2026-01-15T12:00:00Z",
  codes: {
    yemen:   { code: "" },
    sabafon: { code: "" },
    you:     { code: "" }
  }
},

{
  id: "wdhbk",
  title: "اعوذ بك",
  categories: ["أدعية"],
  image: "ringtones/images/a3.webp",
  audio: "ringtones/audio/wdhbk.mp3",
  createdAt: "2026-01-15T12:00:00Z",
  codes: {
    yemen:   { code: "" },
    sabafon: { code: "" },
    you:     { code: "" }
  }
},

{
  id: "fdyshymh",
  title: "افديش يامه",
  categories: ["أناشيد"],
  image: "ringtones/images/a6.webp",
  audio: "ringtones/audio/fdyshymh.mp3",
  createdAt: "2026-01-15T12:00:00Z",
  codes: {
    yemen:   { code: "" },
    sabafon: { code: "" },
    you:     { code: "" }
  }
},

{
  id: "ldrwf",
  title: "الضروف",
  categories: ["منوعات"],
  image: "ringtones/images/a9.webp",
  audio: "ringtones/audio/ldrwf.mp3",
  createdAt: "2026-01-15T12:00:00Z",
  codes: {
    yemen:   { code: "9930010280" },
    sabafon: { code: "" },
    you:     { code: "" }
  }
},

{
  id: "lmkhw",
  title: "المخوة",
  categories: ["زوامل"],
  image: "ringtones/images/a9.webp",
  audio: "ringtones/audio/lmkhw.mp3",
  createdAt: "2026-01-15T12:00:00Z",
  codes: {
    yemen:   { code: "" },
    sabafon: { code: "" },
    you:     { code: "" }
  }
},

{
  id: "lykwjht",
  title: "اليك وجهت",
  categories: ["أناشيد"],
  image: "ringtones/images/a8.webp",
  audio: "ringtones/audio/lykwjht.mp3",
  createdAt: "2026-01-15T12:00:00Z",
  codes: {
    yemen:   { code: "9930010023" },
    sabafon: { code: "" },
    you:     { code: "" }
  }
},

{
  id: "hlrmdn",
  title: "اهلا رمضان",
  categories: ["أناشيد"],
  image: "ringtones/images/a7.webp",
  audio: "ringtones/audio/hlrmdn.mp3",
  createdAt: "2026-01-15T12:00:00Z",
  codes: {
    yemen:   { code: "" },
    sabafon: { code: "" },
    you:     { code: "" }
  }
},

{
  id: "wjdfbd",
  title: "اوجد فابدع",
  categories: ["أدعية"],
  image: "ringtones/images/a3.webp",
  audio: "ringtones/audio/wjdfbd.mp3",
  createdAt: "2026-01-15T12:00:00Z",
  codes: {
    yemen:   { code: "" },
    sabafon: { code: "" },
    you:     { code: "" }
  }
},

{
  id: "tsbyhthr",
  title: "تسبيح طاهر",
  categories: ["أدعية"],
  image: "ringtones/images/a10.webp",
  audio: "ringtones/audio/tsbyhthr.mp3",
  createdAt: "2026-01-15T12:00:00Z",
  codes: {
    yemen:   { code: "" },
    sabafon: { code: "" },
    you:     { code: "" }
  }
},

{
  id: "tsbyhbdlzym",
  title: "تسبيح عبدالعظيم",
  categories: ["أدعية"],
  image: "ringtones/images/a2.webp",
  audio: "ringtones/audio/tsbyhbdlzym.mp3",
  createdAt: "2026-01-15T12:00:00Z",
  codes: {
    yemen:   { code: "9930010314" },
    sabafon: { code: "" },
    you:     { code: "" }
  }
},

{
  id: "jrwhdhyb",
  title: "جروح ذيب",
  categories: ["زوامل"],
  image: "ringtones/images/a9.webp",
  audio: "ringtones/audio/jrwhdhyb.mp3",
  createdAt: "2026-01-15T12:00:00Z",
  codes: {
    yemen:   { code: "" },
    sabafon: { code: "" },
    you:     { code: "" }
  }
},

{
  id: "hrblkwn",
  title: "حرب الكون",
  categories: ["أشعار"],
  image: "ringtones/images/a10.webp",
  audio: "ringtones/audio/hrblkwn.mp3",
  createdAt: "2026-01-15T12:00:00Z",
  codes: {
    yemen:   { code: "" },
    sabafon: { code: "" },
    you:     { code: "" }
  }
},

{
  id: "hnyt1",
  title: "حنيت مالي",
  categories: ["زوامل"],
  image: "ringtones/images/a9.webp",
  audio: "ringtones/audio/hnyt1.mp3",
  createdAt: "2026-01-15T12:00:00Z",
  codes: {
    yemen:   { code: "9930010268" },
    sabafon: { code: "" },
    you:     { code: "" }
  }
},

{
  id: "dmswllh",
  title: "دع ما سوى الله",
  categories: ["أناشيد"],
  image: "ringtones/images/a7.webp",
  audio: "ringtones/audio/dmswllh.mp3",
  createdAt: "2026-01-15T12:00:00Z",
  codes: {
    yemen:   { code: "" },
    sabafon: { code: "" },
    you:     { code: "" }
  }
},

{
  id: "dltdhll",
  title: "دعاء التذلل",
  categories: ["أدعية"],
  image: "ringtones/images/a10.webp",
  audio: "ringtones/audio/dltdhll.mp3",
  createdAt: "2026-01-15T12:00:00Z",
  codes: {
    yemen:   { code: "" },
    sabafon: { code: "" },
    you:     { code: "" }
  }
},

{
  id: "dltwbh",
  title: "دعاء التوبه",
  categories: ["أدعية"],
  image: "ringtones/images/a10.webp",
  audio: "ringtones/audio/dltwbh.mp3",
  createdAt: "2026-01-15T12:00:00Z",
  codes: {
    yemen:   { code: "" },
    sabafon: { code: "" },
    you:     { code: "" }
  }
},

{
  id: "ddkhwlrmdn",
  title: "دعاء دخول رمضان",
  categories: ["أدعية"],
  image: "ringtones/images/a2.webp",
  audio: "ringtones/audio/ddkhwlrmdn.mp3",
  createdAt: "2026-01-15T12:00:00Z",
  codes: {
    yemen:   { code: "" },
    sabafon: { code: "" },
    you:     { code: "" }
  }
},

{
  id: "dmlshhd",
  title: "دم الشهداء",
  categories: ["زوامل"],
  image: "ringtones/images/a2.webp",
  audio: "ringtones/audio/dmlshhd.mp3",
  createdAt: "2026-01-15T12:00:00Z",
  codes: {
    yemen:   { code: "" },
    sabafon: { code: "" },
    you:     { code: "" }
  }
},

{
  id: "dhljll",
  title: "ذا الجلال",
  categories: ["أناشيد"],
  image: "ringtones/images/a7.webp",
  audio: "ringtones/audio/dhljll.mp3",
  createdAt: "2026-01-15T12:00:00Z",
  codes: {
    yemen:   { code: "" },
    sabafon: { code: "" },
    you:     { code: "" }
  }
},

{
  id: "rbyfhmtny",
  title: "ربي افحمتني",
  categories: ["أدعية"],
  image: "ringtones/images/a10.webp",
  audio: "ringtones/audio/rbyfhmtny.mp3",
  createdAt: "2026-01-15T12:00:00Z",
  codes: {
    yemen:   { code: "" },
    sabafon: { code: "" },
    you:     { code: "" }
  }
},

{
  id: "lmlsr",
  title: "عالم السر",
  categories: ["أناشيد"],
  image: "ringtones/images/a10.webp",
  audio: "ringtones/audio/lmlsr.mp3",
  createdAt: "2026-01-15T12:00:00Z",
  codes: {
    yemen:   { code: "" },
    sabafon: { code: "" },
    you:     { code: "" }
  }
},

{
  id: "fwk",
  title: "عفوك",
  categories: ["أدعية"],
  image: "ringtones/images/a3.webp",
  audio: "ringtones/audio/fwk.mp3",
  createdAt: "2026-01-15T12:00:00Z",
  codes: {
    yemen:   { code: "" },
    sabafon: { code: "" },
    you:     { code: "" }
  }
},

{
  id: "qdylhjt",
  title: "قاضي الحاجات",
  categories: ["أشعار"],
  image: "ringtones/images/a5.webp",
  audio: "ringtones/audio/qdylhjt.mp3",
  createdAt: "2026-01-15T12:00:00Z",
  codes: {
    yemen:   { code: "9930010201" },
    sabafon: { code: "" },
    you:     { code: "" }
  }
},

{
  id: "qlbyymh",
  title: "قلبي يامه",
  categories: ["منوعات"],
  image: "ringtones/images/a4.webp",
  audio: "ringtones/audio/qlbyymh.mp3",
  createdAt: "2026-01-15T12:00:00Z",
  codes: {
    yemen:   { code: "" },
    sabafon: { code: "" },
    you:     { code: "" }
  }
},

{
  id: "kfy",
  title: "كافي",
  categories: ["منوعات"],
  image: "ringtones/images/a9.webp",
  audio: "ringtones/audio/kfy.mp3",
  createdAt: "2026-01-15T12:00:00Z",
  codes: {
    yemen:   { code: "9930010286" },
    sabafon: { code: "" },
    you:     { code: "" }
  }
},

{
  id: "kmfylbhwr",
  title: "كم في البحور",
  categories: ["أناشيد"],
  image: "ringtones/images/a2.webp",
  audio: "ringtones/audio/kmfylbhwr.mp3",
  createdAt: "2026-01-15T12:00:00Z",
  codes: {
    yemen:   { code: "9930010105" },
    sabafon: { code: "" },
    you:     { code: "" }
  }
},

{
  id: "mqdwq",
  title: "ماقد وقع",
  categories: ["أشعار"],
  image: "ringtones/images/a10.webp",
  audio: "ringtones/audio/mqdwq.mp3",
  createdAt: "2026-01-15T12:00:00Z",
  codes: {
    yemen:   { code: "9930010275" },
    sabafon: { code: "" },
    you:     { code: "" }
  }
},

{
  id: "mhmd",
  title: "محمد",
  categories: ["أناشيد"],
  image: "ringtones/images/a7.webp",
  audio: "ringtones/audio/mhmd.mp3",
  createdAt: "2026-01-15T12:00:00Z",
  codes: {
    yemen:   { code: "9930010350" },
    sabafon: { code: "" },
    you:     { code: "" }
  }
},

{
  id: "mnjndk",
  title: "من جندك",
  categories: ["أدعية"],
  image: "ringtones/images/a3.webp",
  audio: "ringtones/audio/mnjndk.mp3",
  createdAt: "2026-01-15T12:00:00Z",
  codes: {
    yemen:   { code: "" },
    sabafon: { code: "" },
    you:     { code: "" }
  }
},

{
  id: "mnmthlhmd",
  title: "من مثل احمد",
  categories: ["أناشيد"],
  image: "ringtones/images/a10.webp",
  audio: "ringtones/audio/mnmthlhmd.mp3",
  createdAt: "2026-01-15T12:00:00Z",
  codes: {
    yemen:   { code: "" },
    sabafon: { code: "" },
    you:     { code: "" }
  }
},

{
  id: "mwlyrbthbtn",
  title: "موال يارب ثبتنا",
  categories: ["زوامل"],
  image: "ringtones/images/a1.webp",
  audio: "ringtones/audio/mwlyrbthbtn.mp3",
  createdAt: "2026-01-15T12:00:00Z",
  codes: {
    yemen:   { code: "9930010083" },
    sabafon: { code: "" },
    you:     { code: "" }
  }
},

{
  id: "nslkblmkhtr",
  title: "نسألك بالمختار",
  categories: ["أناشيد"],
  image: "ringtones/images/a8.webp",
  audio: "ringtones/audio/nslkblmkhtr.mp3",
  createdAt: "2026-01-15T12:00:00Z",
  codes: {
    yemen:   { code: "9930010024" },
    sabafon: { code: "" },
    you:     { code: "" }
  }
},

{
  id: "ydymlhsn",
  title: "يا دائم الإحسان",
  categories: ["أناشيد"],
  image: "ringtones/images/a7.webp",
  audio: "ringtones/audio/ydymlhsn.mp3",
  createdAt: "2026-01-15T12:00:00Z",
  codes: {
    yemen:   { code: "" },
    sabafon: { code: "" },
    you:     { code: "" }
  }
},

{
  id: "yndymy",
  title: "يا نديمي",
  categories: ["أناشيد"],
  image: "ringtones/images/a2.webp",
  audio: "ringtones/audio/yndymy.mp3",
  createdAt: "2026-01-15T12:00:00Z",
  codes: {
    yemen:   { code: "" },
    sabafon: { code: "" },
    you:     { code: "" }
  }
},

{
  id: "yjzyllt",
  title: "ياجزيل العطاء",
  categories: ["أناشيد"],
  image: "ringtones/images/a8.webp",
  audio: "ringtones/audio/yjzyllt.mp3",
  createdAt: "2026-01-15T12:00:00Z",
  codes: {
    yemen:   { code: "9930010022" },
    sabafon: { code: "" },
    you:     { code: "" }
  }
},

{
  id: "yhyyqywm",
  title: "ياحي ياقيوم",
  categories: ["أناشيد"],
  image: "ringtones/images/a7.webp",
  audio: "ringtones/audio/yhyyqywm.mp3",
  createdAt: "2026-01-15T12:00:00Z",
  codes: {
    yemen:   { code: "9930010039" },
    sabafon: { code: "" },
    you:     { code: "" }
  }
},

{
  id: "yrbthfz",
  title: "يارب تحفظ",
  categories: ["منوعات"],
  image: "ringtones/images/a9.webp",
  audio: "ringtones/audio/yrbthfz.mp3",
  createdAt: "2026-01-15T12:00:00Z",
  codes: {
    yemen:   { code: "9930010287" },
    sabafon: { code: "" },
    you:     { code: "" }
  }
},

{
  id: "yrbsly",
  title: "يارب صلي",
  categories: ["أناشيد"],
  image: "ringtones/images/a10.webp",
  audio: "ringtones/audio/yrbsly.mp3",
  createdAt: "2026-01-15T12:00:00Z",
  codes: {
    yemen:   { code: "" },
    sabafon: { code: "" },
    you:     { code: "" }
  }
},

{
  id: "yqhry",
  title: "ياقهري",
  categories: ["زوامل"],
  image: "ringtones/images/a9.webp",
  audio: "ringtones/audio/yqhry.mp3",
  createdAt: "2026-01-15T12:00:00Z",
  codes: {
    yemen:   { code: "" },
    sabafon: { code: "" },
    you:     { code: "" }
  }
},

{
  id: "ylnjwm",
  title: "يالنجوم",
  categories: ["منوعات"],
  image: "ringtones/images/a9.webp",
  audio: "ringtones/audio/ylnjwm.mp3",
  createdAt: "2026-01-15T12:00:00Z",
  codes: {
    yemen:   { code: "9930010278" },
    sabafon: { code: "" },
    you:     { code: "" }
  }
},

{
  id: "ymstjyb",
  title: "يامستجيب",
  categories: ["منوعات"],
  image: "ringtones/images/a9.webp",
  audio: "ringtones/audio/ymstjyb.mp3",
  createdAt: "2026-01-15T12:00:00Z",
  codes: {
    yemen:   { code: "" },
    sabafon: { code: "" },
    you:     { code: "" }
  }
},

{
  id: "ymnldnbk",
  title: "يامن الضن بك",
  categories: ["زوامل"],
  image: "ringtones/images/a9.webp",
  audio: "ringtones/audio/ymnldnbk.mp3",
  createdAt: "2026-01-15T12:00:00Z",
  codes: {
    yemen:   { code: "" },
    sabafon: { code: "" },
    you:     { code: "" }
  }
},

{
  id: "ymntlbrqmy",
  title: "يامن طلب رقمي",
  categories: ["أشعار"],
  image: "ringtones/images/a5.webp",
  audio: "ringtones/audio/ymntlbrqmy.mp3",
  createdAt: "2026-01-15T12:00:00Z",
  codes: {
    yemen:   { code: " 9930010198" },
    sabafon: { code: "" },
    you:     { code: "" }
  }
},

{
  id: "ywldy1",
  title: " ياوالدي يانظر",
  categories: ["زوامل"],
  image: "ringtones/images/a6.webp",
  audio: "ringtones/audio/ywldy1.mp3",
  createdAt: "2026-01-15T12:00:00Z",
  codes: {
    yemen:   { code: "" },
    sabafon: { code: "" },
    you:     { code: "" }
  }
},

];