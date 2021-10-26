<template>
    <div class="grid grid-cols-3 gap-4">
        <div class="..."><grid-place>1</grid-place></div>
        <div class="..."><grid-place>2</grid-place></div>
        <div class="..."><grid-place>3</grid-place></div>
        <div class="col-span-2 ..."><grid-place>4</grid-place></div>
        <div class="..."><grid-place>5</grid-place></div>
        <div class="..."><grid-place>6</grid-place></div>
        <div class="col-span-2 ..."><grid-place>7</grid-place></div>
        <div class="col-span-3 ..."><grid-place>8</grid-place></div>
    </div>
</template>
<script>
import GridPlace from "./place.vue"
export default {
    name: "grid-cell",
    components:{
        "grid-place": GridPlace
    }
}
</script>
