<template>
  <div class="container my-4">
    <h1 class="text-success my-4">Detail Page</h1>   
  <div class="row">
    <div class="col-md-6 col-12">
      <img :src="item.item_photo" class="w-50 h-100">
    </div>
    <div class="col-md-6 col-12">
      <table class="table">
        <tr>
          <td>Item Name</td>
          <td>{{item.item_name}}</td>
        </tr>
        <tr>
          <td>Item Code</td>
          <td>{{item.item_code}}</td>
        </tr>
        <tr>
          <td>Item Price</td>
          <td>{{item.item_price}}</td>
        </tr>
        <tr>
          <td>Item Discount</td>
          <td>{{item.item_discount}}%</td>
        </tr>
        <tr>
          <td>Description</td>
          <td>{{item.item_desc}}</td>
        </tr>
      </table>
      <button type="button" class="btn btn-secondary">Add to Card</button>
    </div>
  </div>
</div>
</template>

<script type="text/javascript">
  import ItemService from '@/services/ItemService.js'

  export default{
    data (){
      return {
        item: Object
      }
    },
    mounted(){
      this.getDetail();
    },
    methods:{
      getDetail(){
        let id = this.$route.params.id;
        ItemService.getItem(id)
            .then(res => {
              this.item = res.data.item
            })
            .catch(err => {
              console.log('There was an error:',err.response)
            })
      }
    }
  };
</script>

<style type="text/css">
  
</style>