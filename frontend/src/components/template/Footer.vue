<template>
    <footer class="footer">
        <span>Copyright <strong>Davi Marques e Luis Gustavo Setten </strong> © 2021</span>
    </footer>
</template>

<script>
export default {
    name: "Footer"
}
</script>

<style>
    .footer{
        grid-area: footer;
        background-color: #DDD;
        color: #333;

        display:flex;
        align-items:center;
        justify-content: center;
        padding-right: 10px;
    }
</style>