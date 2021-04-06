<template>
    <header class="header">
        <div class="header__inner">
            <div id="nav">
                <router-link to="/">Home</router-link> |
                <router-link to="/about">About</router-link>
            </div>
        </div>
   </header>

</template>
<script>

export default {
    data () {
        return {

        }
    },
}
</script>
<style lang="sass">
    // @import "@/assets/sass/base.sass";
    @import "style.sass";

    header
        background: url(./image/high-emotions-gory-sneg-zakat.jpg);
        // color: $a
        padding: .4rem 1.25rem
</style>