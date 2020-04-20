const vm = new Vue({
  el: "#app",
  data() {
    return {
      activeIndex:'',
      msg:[]
    };
  },
  methods: {
    handleSelect(key) {
      const base = "http://" + window.location.host;
      switch (key) {
        case "0":
          window.location.href = base + "/board.html";
          break;
        case "1":
          window.location.href = base + "/home.html";
          break;
        case "2":
          window.location.href = base + "/create.html";
          break;
        case "3":
          window.location.href = base + "/more.html";
          break;
      }
    },
  },
  mounted() {
    instance.get('/getBoards').then(res=>{
      vm.msg=res.data["msg"]
  })
  },
});
