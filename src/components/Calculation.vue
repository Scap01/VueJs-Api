<script>
    export default {
        props:{
            grades :{
                default: null
            }
        },

        calculate({grades}){

            for(const grade in grades ){
                console.log(grade);

            }

            return (<p>done</p>);

        }
    }
</script>

<style lang="scss" scoped>

</style>