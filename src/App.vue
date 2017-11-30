<template>
    <div id="app">
        <editorStyle></editorStyle>
        <editorMarkdown></editorMarkdown>
    </div>
</template>

<script>
    import Vue from 'vue';
    import Promise from 'promise-polyfill';
    import jsPolyfill from './commons/js/jsPolyfill';
    import editorStyle from './components/editorStyle';
    import editorMarkdown from './components/editorMarkdown';

    Vue.use(jsPolyfill);

    export default {
        name: 'root',
        data () {
            return {
                styleNumber: 0,
                styleString: [
                `body {
                    background: #ddd;
                }`]
            };
        },
        components: {
            editorStyle,
            editorMarkdown
        },
        mounted () {
            !window.Promise ? window.Promise = Promise : null;
            this.initResume();
        },
        methods: {
            async initResume () {
                await this.showStyle();
            },
            showStyle () {
                return new Promise((res, rej) => {

                });
            }
        }
    };
</script>

<style lang="scss">
    @import 'src/commons/styles/base.scss';

    html, body {
        height: 100%;
    }
</style>
