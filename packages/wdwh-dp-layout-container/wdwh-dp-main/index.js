import wdwhDpMainContainer from "./src/main"

wdwhDpMainContainer.install = function(Vue) {
    Vue.component(wdwhDpMainContainer.name, wdwhDpMainContainer);
    };
export default wdwhDpMainContainer;
