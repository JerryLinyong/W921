## 卡片

```javascript
{
  id:{
    id: '', // 卡片唯一编码 string
    type:'card', // 资源类型 string
    title: '', // 名称 string
    memo: '', // 备注 string
    order: 0, // 排列序号 number
    area: "", // 卡片绑定的区域 string
    level: 0, // 卡片级别,取值0-5 number
    star: false, // 是否标星 boolean
    callers: ['callerId'], // 卡片上存在的设备 array
    express: [],  //  转发至目标的序列号 array
  }
}
```
