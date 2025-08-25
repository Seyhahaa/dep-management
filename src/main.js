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
  RiSettings2Line,
  LaHeart,
  LaHeartSolid,
} from "oh-vue-icons/icons";
import { createPinia } from "pinia";
import ToastPlugin from "vue-toast-notification";
import 'vue-toast-notification/dist/theme-bootstrap.css';


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
  RiSettings2Line,
  LaHeart,
  LaHeartSolid,
);

const  pinia = createPinia();
const app = createApp(App);
app.use(ToastPlugin)
app.use(pinia)
app.use(router);
app.component("v-icon", OhVueIcon);
app.mount("#app");
