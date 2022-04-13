import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      // 设置 `@` 指向 `src` 目录
      '@': resolve(__dirname, 'src')
    }
  },
  // 设置打包路径
  base: './',
  server: {
    port: 4000, // 设置服务器启动端口
    open: true, // 设置服务启动时是否自动打开浏览器
    cors: true  // 允许跨域

    // 设置代理，根据我们项目实际情况配置
    // proxy: {
    //   '/api': {
    //     target: 'http://xxx.xxx.xxx.xxx:8000',
    //     changeOrigin: true,
    //     secure: false,
    //     rewrite: (path) => path.replace('/api/', '/')
    //   }
    // }
  }
})
