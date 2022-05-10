import { createWebHistory, createRouter } from "vue-router";
const routes =  [
  {
    path: "/",
    alias: "/explorers",
    name: "explorers",
    component: () => import("./components/ExplorersList")
  },
  {
    path: "/explorer/:id",
    name: "explorer-details",
    component: () => import("./components/Explorer")
  },
  {
    path: "/addexplorer", 
    name: "add-explorer",
    component: () => import("./components/AddExplorer")
  },
  {
    path: "/missioncommanders",
    name: "mission-commanders",
    component: () => import("./components/MissionCommandersList")
  },
  {
    path: "/missioncommander/:id",
    name: "mission-commander-details",
    component: () => import("./components/MissionCommander")
  },
  
  {
    path: "/addmissioncommander",
    name: "add-mission-commander",
    component: () => import("./components/AddMissionCommander")
  }
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
