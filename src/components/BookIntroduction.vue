<template>
  <div>
    <p>{{ content }}</p>
  </div>
</template>
  
<script>
export default {
  name: 'BookIntroduction',
  data() {
    return {
      content: ''
    }
  },
  created() {
    this.content = '';
    let url = this.$route.path + "/introduction";
    this.axios.get(url).then(response => {
      if (response.status == 200) {
        this.content = response.data;
        if (this.content.length === 0) {
          this.content = "当前没有任何介绍！"
        }
      }
    }).catch(error => alert(error));
  }
  // props: {
  //     content: {
  //         type: String,
  //         default: ''
  //     }
  // }
}
</script>

<!-- <template>
  <div>
    <p>{{ content }}</p>
  </div>
</template>

<script>
  export default {
    name: 'BookIntroduction',
    props: {
      content: {
        type: String,
        default: ''
      }
    },
    
  }
</script>
<style scoped>

</style> -->