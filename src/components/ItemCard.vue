<template>
  <div class="card"> 
    <div class="img">
      <img :src="item.item_photo" class="w-100 h-100">
    </div>
    <p>{{item.item_name}}</p>
    <div class="card-footer">
      <router-link class="btn btn-secondary" :to="{ name: 'detail', params: { id: item.item_id }}">Detail</router-link>
    </div>
  </div>
</template>

<script type="text/javascript">
  export default{
    props:{
      item: Object
    },
  };
</script>

<style type="text/css">
  
</style>