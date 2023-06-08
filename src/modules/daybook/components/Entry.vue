<template>
  <div 
    class="entry-container mb-3 pointer p-2"
    @click="$router.push({name: 'entry', params:{id: 'ABC123'} })">
        <div class="entry-title d-flex">
            <span class="text-success fs-5 fw-bold">08</span>
            <span class="mx-1 fs-5">Junio</span>
            <span class="mx-2 fw-light">2023, jueves</span>
        </div>

        <div class="entry-description">
            Veniam reprehenderit anim Lorem officia deserunt ipsum. Mollit deserunt commodo ullamco est esse cupidatat non est incididunt deserunt. Lorem Lorem mollit proident esse amet commodo aliquip incididunt consequat velit veniam. Enim consequat consequat enim aute enim laboris Lorem incididunt.
        </div>

  </div>
</template>

<script  >
export default {
    
}
</script>

<style lang="scss" scoped>
.entry-container {
    border-bottom: 1px solid #2c3e50;
    transition: 0.2s all ease-in;

    &:hover {
        background-color: lighten($color: grey, $amount: 45);
        transition: 0.2s all ease-in;

    }
    .entry-description {
        font-size: 12px; 
    }
}
</style>