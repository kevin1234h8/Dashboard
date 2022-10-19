import rateDown from "../assets/rateDown.svg";
import value from "../assets/value.svg";
import quantity from "../assets/quantity.svg";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
const ChartRate = [
  {
    name: "CONVERSATION RATE",
    rate: "0.6%",
    number: "0.81%",
    image: { rateDown },
    color: "#fc6161",
    icon: <ArrowDownwardIcon />,
  },
  {
    name: "AVG. ORDER VALUE",
    rate: "4.2%",
    number: "$306.2",
    image: { value },
    color: "#0bd18a",
    icon: <ArrowUpwardIcon />,
  },
  {
    name: "ORDER QUANTITY",
    rate: "2.1%",
    number: "1,620",
    image: { quantity },
    color: "#00d0de",
    icon: <HorizontalRuleIcon />,
  },
];
export default ChartRate;
