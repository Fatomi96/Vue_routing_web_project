<template>
  <div class="container">
    <h2 class="text-center mt-3 mb-4">Vue Todo App</h2>

    <div class="d-flex">
      <input v-model="task" type="text" placeholder="Enter task" class="form-control">
      <button @click="submitTask" class="btn btn-warning">Add</button>
    </div>

    <table class="table table-bordered mt-5">
      <thead>
        <tr>
          <th scope="col">Task</th>
          <th scope="col" class="text-center">#</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="(task, index) in formData" :key="index">
          <td>
            <span>
              {{ task.todo }}
            </span>
          </td>
          <td class="text-center">
            <div @click="deleteTask(index)">
              <span class="fa fa-trash pointer"></span>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'Todo_app',
  data() {
    return {
      formData: [],
        task: "",
    };
  },

  methods: {
    deleteTask(index) {
      this.formData.splice(index, 1);
    },

    submitTask() {
      if (this.task.length === 0) {
        return;
      } else {
        this.formData = [{
          todo: this.task,
        }, ...this.formData];
      }

      this.task = "";
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.container{
  width: 50%;
  background: rgb(0, 0, 0);
  color:white;
  padding: 15px 30px;
  border-radius:20px;
  margin-top: 70px;
}
.pointer {
  cursor: pointer;
}
.table{
  color:white;
}
.form-control{
  margin-right:20px;
  border-radius: 15px;
}
.btn{
  border-radius: 15px;
  font-size: 15px;
  background: white;
  color:black;
  padding: 14px 20px;
}

</style>
