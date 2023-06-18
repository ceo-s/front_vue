<template>
  <form @submit.prevent="submit" class="client-create" name=".client-create">
    <h3>Добавить клиента</h3>
    <input class="default" v-model="name" :placeholder="'Name:'" />
    <input class="default" v-model="telegram" :placeholder="'Telegram:'" />
    <input
      class="default"
      v-model="description"
      :placeholder="'Description:'"
    />
    <div class="radios">
      <input name="gender" type="radio" id="male" value="M" v-model="gender" />
      <label for="male">Спортсмен</label>
      <input
        name="gender"
        type="radio"
        id="female"
        value="W"
        v-model="gender"
      />
      <label for="female">Спортсменка</label>
    </div>
    <default-button>Submit</default-button>
  </form>
</template>

<script>
import { createClient } from "@/components/entities/Client/api/Create.js";
export default {
  data() {
    return {
      name: "",
      telegram: "",
      description: "",
      gender: "",
    };
  },
  methods: {
    async submit() {
      const resp = await createClient(
        this.name,
        this.telegram,
        this.description,
        this.gender
      );
      let { sport, ...client } = resp;
      this.$emit("update:client", client);
    },
  },
};
</script>

<style lang="scss" scoped>
.client-create {
  padding: 1.5em;
  height: 380px;
  width: 300px;
  // background: #444;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 1em;
  h3 {
    font-size: 1.2em;
  }
  button {
    margin-top: auto;
    margin-left: auto;
    margin-right: auto;
  }
  input.default {
    height: 10em;
  }
  .radios {
    display: grid;
    grid-template-columns: 2em 8em;
    text-align: start;
    // flex-direction: column;
    color: $font-color1;
    input[type="radio"] {
      appearance: none;
      // background-color: #fff;
      margin: 0;
      font: inherit;
      width: 1.15em;
      height: 1.15em;
      border: 0.15em solid $color4;
      border-radius: 50%;
      &:checked {
        background-color: $color5;
      }
    }
  }
}
</style>
