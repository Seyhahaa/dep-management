import { createApp } from "vue";
import "./index.css";
import App from "./App.vue";
import router from "./routes";
import { OhVueIcon, addIcons } from "oh-vue-icons";
import {
  MdDashboardRound,
  MdFavorite,
  HiDocumentText,
  BiImageFill,
  MdLightmode,
  LaAngleDownSolid,
  BiCloudUploadFill,
  IoDocumentsSharp,
  IoImagesSharp,
  MdArrowdropdownRound,
  FcGoogle,
} from "oh-vue-icons/icons";
import { createPinia } from "pinia";


addIcons(
  MdDashboardRound,
  MdFavorite,
  HiDocumentText,
  BiImageFill,
  MdLightmode,
  LaAngleDownSolid,
  BiCloudUploadFill,
  IoDocumentsSharp,
  IoImagesSharp,
  MdArrowdropdownRound,
  FcGoogle,
);

const  pinia = createPinia();
const app = createApp(App);
app.use(pinia)
app.use(router);
app.component("v-icon", OhVueIcon);
app.mount("#app");
