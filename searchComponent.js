Vue.component("search", {

    data() {
        return {
            search: "",
        };
    },
    template: `
               <form action="#" class="search" @submit.prevent='$parent.filter(search)'>
              <input type="text" v-model="search">
              <button type="submit" class="btn-search">
              Search
              </button>
          </form>
      `,
});

