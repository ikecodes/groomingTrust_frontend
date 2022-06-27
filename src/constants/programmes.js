import { MdHealthAndSafety, MdSchool } from "react-icons/md";
import { GiLovers } from "react-icons/gi";
import { AiTwotonePieChart } from "react-icons/ai";
import { FaChartLine } from "react-icons/fa";

export const programmes = [
  {
    id: 1,
    name: "health",
    slug: "health",
    icon: <MdHealthAndSafety size={50} color='#C386C0' />,
    description:
      "According to the World Health Organisation (WHO), 77% of the payments made in Nigeria with respect to health care are made out of pocket. Considering the reducing purchasing power of Nigerian demography, it is only imperative that a functional social health care system is put in place to cover the gap. However, with this lack, Grooming Endowment Trust has decided to add this area as one of its scope whereby we promote initiatives and companies in this sector through our impact development programs.",
  },
  {
    id: 2,
    name: "education",
    slug: "education",
    icon: <MdSchool size={50} color='#C386C0' />,
    description:
      "Another social responsibility area the Grooming Endowment Trust is interested in is education in society. Education is one sector in any society that has enabled them to propel beyond their expectation. This is a result of their educated and skilled demography and without that, we see an economic and social decline in several countries as illiteracy rates increase. With that, one area of focus is on the educational sector in society and empowering programs and initiatives that support the promotion of this sector.",
  },
  {
    id: 3,
    name: "humanitarian works",
    slug: "humanitarian-works",
    icon: <GiLovers size={50} color='#C386C0' />,
    description:
      "Non-governmental organisations such as ours and individuals who have had good track records in the field of humanitarian work are our focus to support when it comes to humanitarian work. Impact and development are our core objectives and this is why it is only imperative that we commit a good amount of time and resources made available to us by our donors to support others in this field.",
  },
  {
    id: 4,
    name: "community development",
    slug: "community-development",
    icon: <AiTwotonePieChart size={50} color='#C386C0' />,
    description:
      "Many communities are underserved in various aspects and they are initiatives that aid in the development of these aspects. Grooming Endowment Trust is committed to supporting enterprises that aid in social development in various underserved and underdeveloped communities.",
  },
  {
    id: 5,
    name: "Social entrepreneurship",
    slug: "social-entrepreneurship",
    icon: <FaChartLine size={50} color='#C386C0' />,
    description:
      "Considering the fact that many societies have their cultural, social and environmental issues, social entrepreneurship has been a way in which individuals, groups and companies have brought about sustainable solutions to these issues. They organise, fund and implement these solutions to solve issues and Grooming Endowment Trust is committed to supporting these sorts of initiatives.",
  },
];
