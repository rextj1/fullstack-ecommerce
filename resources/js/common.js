
export default {
    data(){
        return {

        }
    },
    methods: {
        async callApi(method, url, dataObj){
            try {
                return await axios({
                    method: method,
                    url: url,
                    data:  dataObj
                });
            } catch (e) {
                return e.response
            }
        }
    },
    // notification
    i(decs, title="Hey"){
        this.$Notice.info({
            title: title,
            desc: desc
        });
    },
    s(decs, title="Greate"){
        this.$Notice.success({
            title: title,
            desc: desc
        });
    },
    w(decs, title="oops!"){
        this.$Notice.warning({
            title: title,
            desc: desc
        });
    },
    e(decs, title="Hey"){
        this.$Notice.error({
            title: title,
            desc: desc
        });
    },
}
