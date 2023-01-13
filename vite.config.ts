import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  return {
    define:
      command === "build"
        ? {
            DEBUG: false,
          }
        : {
            DEBUG: true,
          },
    build:{
      rollupOptions:{
        output:{
          manualChunks(id:any){
            if(id.includes('echarts')){
              return 'echarts';
            }
            if(id.includes('mock') || id.includes('faker'))
            {
              return 'mock';
            }
            if(id.includes('vant'))
            {
              return 'vant';
            }
            if(id.includes('node_modules'))
            {
              return 'vendor';
            }
          }
        }
      }
    },
    plugins: [
      vue(),
      vueJsx({
        transformOn: true,
        mergeProps: true,
      }),
    ],
    server: {
      host: "0.0.0.0",
      proxy: {
        //转发api路径代理设置
        "/api/v1": {
          target: "http://121.196.236.94:3000/",
        },
      },
    },
    base: "./",
    
  };
});
