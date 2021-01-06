<template>
    <div>
        <productList></productList>
    </div>
</template>


<script>
import Product from '../components/Product.vue';

import productList from '../components/ProductList';

export default  {
    name: 'prodavnica',
    components: {
        productList
    },
    props: [],
    mounted () {
    },
    data () {
      return {
      }
    },
    methods: {
      
    },
    computed: {

    }
}

</script>