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
} from "oh-vue-icons/icons";

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
);

const app = createApp(App);
app.use(router);
app.component("v-icon", OhVueIcon);
app.mount("#app");
