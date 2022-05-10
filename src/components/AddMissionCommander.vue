<template>
  <div class="submit-form">
    <div v-if="!submitted">
    <h3>Nuevo Explorer</h3>
      <div class="form-group">
        <label for="title">Name </label>
        <input
          type="text"
          class="form-control"
          id="title"
          required
          v-model="missionCommander.name"
          name="title"
        />
      </div>
      <div class="form-group">
        <label for="title">Lang</label>
        <input
          type="text"
          class="form-control"
          id="lang"
          required
          v-model="missionCommander.lang"
          name="lang"
        />
      </div>
      <div class="form-group">
        <label for="title">MissionCommander</label>
        <input
          type="text"
          class="form-control"
          id="mission"
          required
          v-model="missionCommander.missionCommander"
          name="mission"
        />
      </div>
      <div class="form-group">
        <label for="title">Enrollments</label>
        <input
          type="number"
          class="form-control"
          id="enrollments"
          required
          v-model="missionCommander.enrollments"
          name="enrollments"
        />
      </div>
      <button @click="saveMissionCommander" class="btn btn-success">Agregar</button>
    </div>
    <div v-else>
      <h4> Mission Commander creado exitosamente. </h4>
      <button class="btn btn-success" @click="newMissionCommander">Add</button>
    </div>
  </div>
</template>

<script>
import MissionCommanderService from "../services/MissionCommanderService";
export default {
  name: "add-mission-commander",
  data() {
    return {
      missionCommander: {
        id: null,
        name: "",
        lang: "",
        missionCommander: "",
        enrollments: null
      },
      submitted: false
    };
  },
  methods: {
    saveMissionCommander() {
      var data = {
        name: this.missionCommander.name,
        lang: this.missionCommander.lang,
        missionCommander: this.missionCommander.missionCommander,
        enrollments: this.missionCommander.enrollments
      };
      MissionCommanderService.create(data)
        .then(response => {
          this.missionCommander.id = response.data.id;
          this.submitted = true;
        })
        .catch(e => {
          console.log(e);
        });
    },
    newMissionCommander() {
      this.submitted = false;
      this.missionCommander = {};
    }
  }
};
</script>
