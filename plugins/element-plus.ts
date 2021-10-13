import ElementPlus from "element-plus";

export default defineNuxtPlugin(({ app }) => {
  app.use(ElementPlus, { size: "small", zIndex: 3000 });
});
