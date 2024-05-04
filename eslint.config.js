import antfu from '@antfu/eslint-config'
import { FlatCompat } from '@eslint/eslintrc'
import perfectionistNatural from 'eslint-plugin-perfectionist/configs/recommended-natural'

const compat = new FlatCompat()

export default antfu(
  {
    markdown: false,
    typescript: true,
  },
  perfectionistNatural,
  ...compat.config({
    overrides: [{
      extends: ['plugin:markdownlint/recommended'],
      files: ['*.md'],
      parser: 'eslint-plugin-markdownlint/parser',
      rules: {
        // no-multiple-blanks
        'markdownlint/md012': 'warn',
        // line-length
        'markdownlint/md013': 'off',
        // blanks-around-fences
        'markdownlint/md031': ['warn', {
          list_items: false,
        }],
      },
    }],
  }),
  {
    rules: {
      'import/order': 'off',
      'no-console': 'off',
      'perfectionist/sort-imports': 'off',
      'perfectionist/sort-vue-attributes': 'off',
    },
  },
)
