import MemoryTestApp from "../components/MemoryTestApp";
import githubIcon from "../images/icons/github-square-brands.svg";
import velogIcon from "../images/icons/velog-square.svg";
import { sectionDataType } from "../types";

const data: sectionDataType = {
  name: ["MemoryTest"],
  header: {
    title: ["Memory", "Test"],
    subTitle: ["Mini game"],
  },
  app: MemoryTestApp,
  summary: { name: "Memory test", date: "2022.06.04 ~ 06.07", headCount: 1 },
  description:
    "브라우저에서 플레이 가능한 간단한 미니게임입니다.\n표시되는 블록을 외우고 모두 클릭하면 되는 간단한 규칙을 갖고 있습니다. 총 50 라운드까지 준비되어 있으며 라운드를 거듭할수록 외워야 할 블록의 개수가 늘어나고 특정 라운드에 도달하면 전체 블록의 수가 늘어나는 등 난이도가 증가하도록 만들었습니다.",
  skills: ["HTML", "TypeScript", "React", "Sass"],
  links: [
    { icon: githubIcon, href: "https://github.com/RAREBEEF/memory-test" },
    {
      icon: velogIcon,
      href: "https://velog.io/@drrobot409/React-%EA%B8%B0%EC%96%B5%EB%A0%A5-%ED%85%8C%EC%8A%A4%ED%8A%B8-%EB%AF%B8%EB%8B%88%EA%B2%8C%EC%9E%84",
    },
  ],
};

export default data;
