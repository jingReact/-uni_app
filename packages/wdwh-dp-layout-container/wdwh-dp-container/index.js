import wdwhDpContainer from "./src/main"

wdwhDpContainer.install = function(Vue) {
    Vue.component(wdwhDpContainer.name, wdwhDpContainer);
    };
export default wdwhDpContainer;
