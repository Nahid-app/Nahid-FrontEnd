import HeadSet from "../../../assets/svg/HeadSet";

export default [
  {
    id: 1,
    universitiesName: "كلية الجبيل الصناعية",
    ClubName: "نادي الحاسب الآلي",
    UniversityAvatar: require("../../../assets/imgs/logos/jic.png"),
    ClubAvatar: require("../../../assets/imgs/logos/CClogo.jpg"),
    StudentRegistered: 300,
    ClubTypeTitle: "تقني",
    ClubTypeIcon: <HeadSet />,
    subscriped: true,
  },
  {
    id: 2,
    ClubName: "نادي تقنية المستقبل",
    universitiesName: "جامعة الملك سعود",
    UniversityAvatar: require("../../../assets/imgs/logos/KSU.jpg"),
    ClubAvatar: require("../../../assets/imgs/logos/FTC.png"),
    StudentRegistered: 200,
    ClubTypeTitle: "تقني",
    ClubTypeIcon: <HeadSet />,
    subscriped: false,
  },
  {
    id: 3,
    universitiesName: "جامعة الملك فهد",
    ClubName: "نادي الحاسب الآلي",
    UniversityAvatar: require("../../../assets/imgs/logos/KFUPM.png"),
    ClubAvatar: require("../../../assets/imgs/logos/CCKFUPM.jpg"),
    StudentRegistered: 500,
    ClubTypeTitle: "تقني",
    ClubTypeIcon: <HeadSet />,
    subscriped: true,
  },
];
