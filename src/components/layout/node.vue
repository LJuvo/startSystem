<template>
    <div class=" rounded bg-gray-200 shadow-md w-full h-full text-center flex items-center p-5">{{info}} <slot></slot></div>
</template>
<script>
export default {
    props:{
        info: {
            type: String,
            default: "内容模块"
        }
    },
    methods:{
    }
}
</script>

