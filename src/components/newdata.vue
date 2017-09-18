<template>
  <div class="body">
    <section>
      <div v-colorFull v-for="j in json" class="json">
        <h1>{{j.title}}</h1>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data () {
    return {
      json: []
    }
  },
  created() {
    this.$http.get('https://jsonplaceholder.typicode.com/todos').then(function(data){
      this.json = data.body.slice(0, 15);

    })
  },
  directives: {
    'colorFull':{
       bind(el,binding,vnode) {
        var colors = ["#0f0", "#f10"];
        el.style.borderTopColor = colors[Math.floor(Math.random() * colors.length)];
      }
    }
  }
}

</script>

<style scoped>
*{padding: 0;margin: 0;box-sizing: border-box;}
section{width: 80%; background: #eee;text-align: center;margin: 0 auto;}
.json{display: inline-block;
  width: 30%;
  min-height:150px ;
  border-top: 7px solid #000;
  margin: 1.6%;
  padding: 10px;
  float: left;
  box-shadow: 0px 2px 20px #ddd;
   text-align: left
 }
</style>
