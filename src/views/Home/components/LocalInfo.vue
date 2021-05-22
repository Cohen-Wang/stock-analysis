<template>
  <div class="padding-lr-lg padding-tb">
    <div class="margin-bottom">
      <a-descriptions layout="vertical" :column="{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }" bordered>
        <a-descriptions-item :span="1" label="当前浏览器内核">
          <span class="text-blue">{{ navigatorAppVersion }}</span>
        </a-descriptions-item>
        <a-descriptions-item :span="1" label="当前浏览器IP">
          <span class="text-blue">{{ IPInfo['cip'] || `未知` }}</span>
        </a-descriptions-item>
        <a-descriptions-item :span="1" label="当前浏览器地址">
          <span class="text-blue">{{ IPInfo['cname'] || `未知` }}</span>
        </a-descriptions-item>
        <a-descriptions-item :span="1" label="当前下载速度">
          <span class="text-blue">{{ `${+(networkSpeed.toFixed(2))} KB/s` }}</span>
        </a-descriptions-item>
        <a-descriptions-item :span="1" label="当前带宽速度">
          <span class="text-blue">{{ `${Math.round(networkSpeed / 128 * 1000) / 1000} MB` }}</span>
        </a-descriptions-item>
        <a-descriptions-item :span="1" label="浏览器本地存储（剩余大小）">
          <span class="text-blue">{{ `${localStorageInfo} KB` }}</span>
        </a-descriptions-item>
        <a-descriptions-item :span="1" label="浏览器本地存储（剩余比例）">
          <span class="text-blue">{{ `${(localStorageInfo / 5120 * 100).toFixed(2)} %` }}</span>
        </a-descriptions-item>
      </a-descriptions>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Provide } from 'vue-property-decorator'

@Component({
  components: {
  }
})

export default class LocalInfo extends Vue {

  @Provide() navigatorAppVersion: string = '' // 浏览器内核
  @Provide() networkSpeed: number = 0 // 网速
  @Provide() localStorageInfo: number | string = 0 // 网速
  @Provide() IPInfo: any = {} // IP

  created(): void {
    this.getNavigatorInfo()
    this.getNetworkSpeed()
    // this.getLocalStorage()
  }

  // 获取内核信息
  getNavigatorInfo(): void {
    let Sys: any = {}
    // Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.132 Safari/537.36
    let ua = navigator.userAgent.toLowerCase()
    let s
    (s = ua.match(/msie ([\d.]+)/)) ? Sys.ie = s[1] :
      (s = ua.match(/firefox\/([\d.]+)/)) ? Sys.firefox = s[1] :
      (s = ua.match(/chrome\/([\d.]+)/)) ? Sys.chrome = s[1] :
      (s = ua.match(/opera.([\d.]+)/)) ? Sys.opera = s[1] :
      (s = ua.match(/version\/([\d.]+).*safari/)) ? Sys.safari = s[1] : 0

    //以下进行测试
    let result = ''
    if (Sys.ie) result ='IE: ' + Sys.ie
    if (Sys.firefox) result = 'Firefox: ' + Sys.firefox
    if (Sys.chrome) result = 'Chrome: ' + Sys.chrome
    if (Sys.opera) result = 'Opera: ' + Sys.opera
    if (Sys.safari) result = 'Safari: ' + Sys.safari
    // 赋值
    this.navigatorAppVersion = result !== '' ? result : '未获取内容'
  }

  // 测试网络
  getNetworkSpeed(): void {
    let startTime: number, endTime: number, fileSize: number
    let url = `https://upload.wikimedia.org/wikipedia/commons/5/51/Google.png?id=${+new Date()}`
    let xhr = new XMLHttpRequest()
    let _this = this
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 2) {
        startTime = Date.now()
      }
      if (xhr.readyState === 4 && xhr.status === 200) {
        endTime = Date.now()
        fileSize = xhr.responseText.length
        _this.networkSpeed = fileSize  / ((endTime - startTime)/1000) / 1024
      }
    }
    xhr.open('GET', url, true)
    xhr.send()
  }

  // 测试【剩余本地存储】
  getLocalStorage(): void {
    // 判断
    if (!window.localStorage) {
      this.localStorageInfo = `当前浏览器不支持localStorage!`
      return
    }

    // 变量
    let test = '0123456789'
    // 函数
    let add = function (num: string) {
      num += num
      if (num.length === 10240) {
        test = num
        return
      }
      add(num)
    }
    add(test)

    let _this = this
    let sum = test
    let timer = setInterval(function () {
      sum += test
      try {
        window.localStorage.removeItem('test')
        window.localStorage.setItem('test', sum)
        //
        _this.localStorageInfo = sum.length / 1024 // sum.length / 1024 + 'KB'
      } catch(e) {
        _this.localStorageInfo = sum.length / 1024 // sum.length / 1024 + 'KB超出最大限制'
        clearInterval(timer)
      }
    }, 1000 / 60)
  }
}
</script>

<style lang="scss" scoped></style>
