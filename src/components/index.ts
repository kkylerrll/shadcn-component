import Headers from "./common/header.vue";
import AsideMenu from "./common/AsideMenu.vue";
import SvgIcon from "@/components/common/SvgIcon.vue";

// 初始化
const component = {
  install(app: { component: (arg0: string, arg1: any) => void }) {
    // 定義全局組件
    app.component("Headers", Headers);
    app.component("AsideMenu", AsideMenu);
    app.component("SvgIcon", SvgIcon);
  },
};

export default component;
