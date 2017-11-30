<template>
    <div class="style-wrap">
        <pre v-html="highlightedCode"></pre>
    </div>
</template>

<script>
    import Prism from 'prismjs'

    export default {
        data () {
            return {
                code: `* {
    transition: all ease .2s;
}

body {
    background: #f8f8f8;
}

.style-wrap {
    width: 44%;
    border: 1px solid #ccc;
    overflow: auto;
    -webkit-box-sizing: border-box;
            box-sizing: border-box;
    padding: 10px 30px;

    position: absolute;
    left: 5%;
    top: 30px;
    bottom: 30px;
}

pre {
    color: #fff;
}
.token.selector {
    color: #b3da4b;
}
.token.punctuation {
    color: #fff;
}
.token.property {
    color: #7fd4d4;
}`
            };
        },
        computed: {
            highlightedCode: function () {
              return Prism.highlight(this.code, Prism.languages.css)
            }
        }
    };
</script>

<style>
    * {
        transition: all ease .2s;
    }

    body {
        background: #f8f8f8;
    }

    .style-wrap {
        width: 44%;
        border: 1px solid #ccc;
        overflow: auto;
        -webkit-box-sizing: border-box;
                box-sizing: border-box;
        padding: 10px 30px;
        background-color: #272823;

        position: absolute;
        left: 4%;
        top: 30px;
        bottom: 30px;
    }

    .style-wrap pre {
        color: #fff;
    }
    .token.selector {
        color: #b3da4b;
    }
    .token.punctuation {
        color: #fff;
    }
    .token.property {
        color: #7fd4d4;
    }

    .markdown-wrap {
        width: 44%;
        border: 1px solid #ccc;
        overflow: auto;
        -webkit-box-sizing: border-box;
                box-sizing: border-box;
        padding: 10px 30px;
        background-color: #fff;

        position: absolute;
        right: 4%;
        top: 30px;
        bottom: 30px;
    }
</style>
