import defaultTheme from '../assets/themes/default';
import redTheme from '../assets/themes/red';
let themes = {default: defaultTheme, red: redTheme};
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
