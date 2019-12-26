import defaultTheme from '../assets/themes/default';
class ThemeProvider {
  constructor(props = {}) {
    this.theme = props.theme || 'default';
    this.themes = {
      default: defaultTheme,
    };
  }
  // 改变主题
  change(theme) {
    this.theme = theme;
  }
  // 更新主题
  update(props) {
    this.themes[this.theme] = Object.assign(this.themes[this.theme], props);
  }
  // 获取主题值
  get(key) {
    if (key) {
      return this.themes[this.theme][key] || this.themes.default[key];
    } else {
      // 不存在则返回所有值
      return this.themes[this.theme] || this.themes.default;
    }
  }
}

const theme = new ThemeProvider();
export default theme;
