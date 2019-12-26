## 用户页面

```javascript
{
  main: { // 设备主页面
    color:'', // 图标颜色 string
    activeColor:'', // 图标激活颜色 string
    size:0, // 图标尺寸 number
    items:[ // 各个页面的参数,不同页面有不同的参数
      {
        icon:'', // 图标 string
        title:'', // 标题 string
        router:'', // 图标路由 string
      }
    ]
  },
  init:{ // 设备初始化界面
    image:'', // 图片地址 string
    duration:0, // 图片显示的时长 number
  }
}
```
