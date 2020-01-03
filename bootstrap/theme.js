import defaultTheme from '../assets/themes/default';
let themes = {default: defaultTheme};
class ThemeProvider {
  constructor(props = {}) {}
  // 更新主题
  update(name, props) {
    themes[name] = Object.assign(themes[name], props);
  }
  // 获取主题值
  get(name) {
    // 不存在则返回所有值
    return themes[name] || themes.default;
  }
}

const theme = new ThemeProvider();
export default theme;
