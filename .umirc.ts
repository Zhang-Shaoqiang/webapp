import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  locale: {
    default: 'pt-BR',
    baseNavigator: false,
  },
  routes: [{ path: '/', component: '@/pages/index' }],
  fastRefresh: {},
});
