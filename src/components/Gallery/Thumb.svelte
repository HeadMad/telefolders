<script>
  export let isActive;
  export let src;
</script>

<div class="box">
  <div class="inner">
    <div
    class="image"
    class:active={isActive}
    >
      <img
        {src}
        alt=""
        on:click={() => isActive = true}
      />
    </div>
  </div>
</div>

<style lang="postcss">

 .box {
   float: left;
     width: 180px;
 
     media: 1080-;
     width: 16.6666%;
 
     media: 900-;
     width: 20%;
 
     media: 720-;
     width: 25%;
 
     media: 540-;
     width: 33.3333%;
 
     media: 300-;
     width: 50%;
 
   } 
   .inner {
     position: relative;
     padding-top: 100%;
   }
   .image {
     position: absolute 4px;
   }
 
   .image.active {
     position: fixed 0;
     background-color: #000000;
     z-index: 1000;
     display: flex;
   }
   img {
     cursor: pointer;
     width: 100%;
     height: 100%;
     object-fit: cover;
   }
 
   .active img {
     max-width: 100%;
     max-height: 100%;
     width: auto;
     height: auto;
     margin:auto;
   } 
 </style>
 