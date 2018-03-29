import Dashboard from '../views/Dashboard/Dashboard.jsx';
import UserProfile from '../views/UserProfile/UserProfile.jsx';
import TableList from '../views/TableList/TableList.jsx';
import Typography from '../views/Typography/Typography.jsx';
import Icons from '../views/Icons/Icons.jsx';
import Maps from '../views/Maps/Maps.jsx';
import Notifications from '../views/Notifications/Notifications.jsx';
import Canvas from '../views/Canvas/Canvas.jsx';
import LionPATH from '../views/LionPATH/LionPATH.jsx';
import Upgrade from '../views/Upgrade/Upgrade.jsx';
import Speech from '../views/Speech/Speech.jsx';
const appRoutes = [
    { path: "/dashboard", name: "Dashboard", icon: "pe-7s-graph", component: Dashboard },
    { path: "/speech", name: "Speech", icon: "pe-7s-attention", component: Speech },
    { path: "/user", name: "User Profile", icon: "pe-7s-user", component: UserProfile },
    { path: "/notifications", name: "Notifications", icon: "pe-7s-bell", component: Notifications },
    { path: "/maps", name: "Maps", icon: "pe-7s-map-marker", component: Maps },
    { path: "/canvas", name: "Canvas", icon: "pe-7s-news-paper", component: Canvas},
    { path: "/lionPATH", name: "LionPATH", icon: "pe-7s-note2", component: LionPATH},
    { redirect: true, path:"/", to:"/dashboard", name: "Dashboard" }
];

export default appRoutes;
