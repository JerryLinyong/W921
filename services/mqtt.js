import init from 'react_native_mqtt';
import {AsyncStorage} from 'react-native';

// mqtt消息储存的设置,采用 react-native-storage,在每一个mqttClient实例中都有方法,通过host,port,id获取,具体看源码
init({
  size: 1000,
  storageBackend: AsyncStorage,
  defaultExpires: 1000 * 3600 * 24,
  enableCache: true,
  sync: {},
});
export default class mqttClient {
  constructor({connectOptions, host, port}) {
    this.connectOptions = connectOptions;
    this.host = host ? host : '192.168.110.12';
    this.port = port ? port : 8083;
    this.clientId = parseInt(Math.random(0, 1) * 100000); // 随机数,一旦重启就获取不到上次储存的mqtt数据,暂时不需要,所以可以设置随机数
    this.creatMqttClient();
  }
  creatMqttClient() {
    this.client = new Paho.MQTT.Client(this.host, this.port, this.clientId);
    this.client.onConnectionLost = this.onConnectionLost;
    this.client.onMessageArrived = this.onMessageArrived;
    const connectOptions = Object.assign(
      {
        timeout: 30000, // 连接超时
        userName: this.clientId, // 认证的使用者
        password: '', // 密码
        willMessage: '', // 断线时发送的mqtt消息
        keepAliveInterval: 60, // 判断服务器是否存在,保活时间
        cleanSession: true, // 如果连接成功,清除服务器和客户端session
        useSSL: true, // 是否使用ssl连接mqtt
        onSuccess: this.onSuccess, // 成功连接
        onFailure: this.onFailure, // 连接失败
        hosts: [this.host], // 可以是多个,按顺序组合
        ports: [this.port], // 可以是多个,按顺序组合
        reconnect: true, // 是否重连
      },
      this.connectOptions,
    );
    client.connect(connectOptions);
  }
  onConnectionLost(e) {
    logger.error('MQTT client disconnected:' + e);
  }
  onMessageArrived() {
    logger.info('MQTT client get message');
  }
  onSuccess() {
    logger.info('MQTT client connect success');
  }
  onFailure(e) {
    logger.error('MQTT client connect fail:' + e);
  }
}
