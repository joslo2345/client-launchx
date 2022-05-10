<template>
  <div class="list row">
    <div class="col-md-6">
      <h4> Mission Commanders </h4>
      <ul class="list-group">
        <li class="list-group-item"
          :class="{ active: index == currentIndex }"
          v-for="(missionCommander, index) in missionCommanders"
          :key="index"
          @click="setActiveMissionCommander(missionCommander, index)"
        >
          {{ missionCommander.name }}
        </li>

      </ul>
    </div>
    <div class="col-md-6">
      <div v-if="currentMissionCommander">
        <h4>Mission Commander</h4>
        <div>
          <br><label><strong>Name:</strong></label> {{ currentMissionCommander.name}}
          <br><label><strong>Lang:</strong></label> {{ currentMissionCommander.lang}}
          <br><label><strong>Mission Commander:</strong></label> {{ currentMissionCommander.missionCommander}}
          <br><label><strong>Enrollments:</strong></label> {{ currentMissionCommander.enrollments}}
        </div>
        <router-link :to="'/missioncommander/' + currentMissionCommander.id" class="btn btn-info"> Editar</router-link>
      </div>
      <div v-else>
        <br />
        <p> Selecciona un Mission Commander.</p>
      </div>
    </div>
  </div>
</template>
<script>

import MissionCommanderService from "../services/MissionCommanderService";

export default {
  name: "mission-commander-list",
  data() {
    return {
      tutorials: [],
      missionCommanders: [],
      currentTutorial: null,
      currentMissionCommander: null,
      currentIndex: -1,
      title: "",
      missionCommanderId: ""
    };
  },
  methods: {
    getAllMissionCommanders(){
      MissionCommanderService.getAll()
        .then(response => {
          this.missionCommanders = response.data;
        })
        .catch(e => {
          console.log(e);
        });
    },
    setActiveMissionCommander(missionCommander, index) {
      this.currentMissionCommander = missionCommander;
      this.currentIndex = missionCommander? index : -1;
    }
  },
  mounted() {
    this.getAllMissionCommanders();
  }
};
</script>
