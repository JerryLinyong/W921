# 无线应用 app(W921)

## 简介

`根据后台传递来的数据消息在对应的卡片上显示，可以做相应的处理`

## 主页面

![Image text](../assets/images/app/main_screen.png)

## 技术栈

### 路由

1. react-navigation(可扩展且使用简单的导航解决方案)

- https://www.npmjs.com/package/react-navigation

### 页面 UI

1. antd-mobile-rn(阿里 RN 页面)

- https://rn.mobile.ant.design/

### 仓库

1. redux(管理数据状态)

- https://www.npmjs.com/package/redux

2. redux-saga(监听发送到 store 的请求,可以处理异步)

- https://www.npmjs.com/package/redux-saga

3. immutable(最大限度减少了复制和缓存数据的需求)

- https://www.npmjs.com/package/immutable

4. reselect(根据传入的参数变化才会重新计算,减少计算和由于数据变化产生的页面重新渲染)

- https://www.npmjs.com/package/reselect

5. redux-persist(自动永久的保存 store 数据到本地)

- https://www.npmjs.com/package/redux-persist

6. react-native-storage(手动保存数据到本地)

- https://www.npmjs.com/package/react-native-storage

### 数据对接

1. axios(发送 http 请求)

- https://www.npmjs.com/package/axios

2. react_native_mqtt(订阅和发布 mqtt 消息)

- https://www.npmjs.com/package/react_native_mqtt

### 工具函数库

1. ramda(函数式编程库,不改变用户原有数据)

- https://www.npmjs.com/package/ramda

2. xe-utils(提供通用的函数)

- https://www.npmjs.com/package/xe-utils
