import theme from './theme';

const button = {
  fontSize: theme.sizes.xs,
  fontWeight: String(theme.weight.base),
};

export default {
  ...theme,
  components: {
    button,
  },
};
