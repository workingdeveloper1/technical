<template>
  <div class="container">
    <div class="row">
      <div class="col-sm"></div>
      <div class="d-flex align-items-center justify-content-end" style="width: 250px;">
        <button class="btn btn-primary" @click="addItem">+ Add Item</button>
      </div>
      <div class="col-sm"></div>
    </div>
  </div>

  <div class="container">
    <div class="row justify-content-center" v-for="(item, counter) in items" v-bind:key="counter">
      <div class="col-sm d-flex align-items-center justify-content-end">
        <div>
          <select v-model="item.criteria" class="form-select">
            <option value="age">Age</option>
            <option value="education">Education</option>
            <option value="interest">Interest</option>
            <option value="language">Language</option>
            <option value="maritalstatus">Marital Status</option>
            <option value="skill">Skill</option>
          </select>
        </div>
      </div>
      <div class="d-flex align-items-center justify-content-end" style="width: 250px;">
        <form>
          <input type="text" v-model="item.input" class="form-control" />
        </form>
      </div>
      <div class="col-sm d-flex align-items-center justify-content-start">
        <button class="btn btn-danger" @click="deleteItem(counter)">X</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
input {
  font-size: 20px;
  border-radius: 4px;
}

input[type=text] {
  color: #c2c0c0;
}

.row {
  margin-top: 10px;
}

button {
  font-size: 16px;
  height: 44px;
  text-align: center;
  border: none;
  cursor: pointer;
  border-radius: 4px;
}

.btn-danger {
  width: 44px;
}


select {
  width: 200px;
  height: 45px;
}
</style>

<script>
export default {
  name: "InputPanel",
  props: {
    msg: String,
  },
  data() {
    return {
      items: [
        {
          input: "",
          criteria: "age",
        },
      ],
    };
  },
  methods: {
    // Method ini berfungsi untuk menambahkan row/item baru
    addItem() {
      this.items.push({
        input: "",
        criteria: "age",
      });
    },
    // Method ini berfungsi untuk menghapus row/item baru
    deleteItem(counter) {
      this.items.splice(counter, 1);
    },
    chooseItem(item, id) {
      document.getElementById(id).innerHTML = item;
    },
  },
};
</script>
