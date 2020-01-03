## 设置

```javascript
{
  network:{ // 网络
    cable:{ // 有线网络
      dhcp:false, // DHCP boolean
      mac:'', // MAC地址 string
      ip:'', // IP地址 string
      subnetMask:'', // 子网掩码 string
      gateway:'', // 网关地址 string
      preDns:'', // 首选DNS string
      altDns:'' // 备选DNS string
    },
    wireless:{ // 无线网络
      dhcp:false,
      mac:'',
      ip:'',
      subnetMask:'',
      gateway:'',
      preDns:'',
      altDns:''
    },
    sip:{ // 信令服务器
      address:'', // 信令地址 string
      port:0, // 端口号 number
      keepAliveInterval:0, // 保活间隔 number
      domain:'', // 信令域 string
    },
    multicast:{
      active:false, // 是否激活组播扫描 boolean
      address:'', // 组播地址
      port:0, // 组播端口号
    },
    logger:{ // 日志服务器
      address:'', // 地址
      port:'', // 端口号
    }
  },
  user:{ // 用户相关数据
    image:'', // 图标 string
    title:'', // 名称 string
    password:'', // 用户密码 string
  },
  device:{
    areas:{ // 设备转发位置
      available:[], // 所有的位置 array
      actived:[], // 激活的位置
    }, 
    volumn: 0, // 音量 number
    light:{ // 灯光控制
      active: false, // 是否开启 boolean
      color:'', // 灯光颜色 string
    }
    orientation:'portrait'||'landscape'||'auto', // 屏幕位置 string
  }
}
```
