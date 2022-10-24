import signups from "../assets/dashboard/x_signup_icon.png";
import completed from "../assets/dashboard/x_ctest.png";
import uncompleted from "../assets/dashboard/x_uctest.png";
import savedpackages from "../assets/dashboard/x_saved_packages.png";
import bookedpackages from "../assets/dashboard/x_booked_packages.png";

const DashMockData = {};

DashMockData.DataSummary = [
  {
    cardicons: signups,
    cardcontent: "Signups",
    cardvalue: 75,
  },
  {
    cardicons: completed,
    cardcontent: "Completed Test",
    cardvalue: 50,
  },
  {
    cardicons: uncompleted,
    cardcontent: "Uncompleted Test",
    cardvalue: 24,
  },
  {
    cardicons: savedpackages,
    cardcontent: "Saved Packages",
    cardvalue: 350,
  },
  {
    cardicons: bookedpackages,
    cardcontent: "Booked Packages",
    cardvalue: 350,
  },
];

export default DashMockData;
