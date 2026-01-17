const { defineConfig } = require('cz-git')

module.exports = defineConfig({
  prompt: {
    types: [
      { value: 'feat', name: 'feat:     Nueva funcionalidad', emoji: ':sparkles:' },
      { value: 'fix', name: 'fix:      Corrección de bug', emoji: ':bug:' },
      { value: 'docs', name: 'docs:     Documentación', emoji: ':memo:' },
      { value: 'style', name: 'style:    Estilos / UI', emoji: ':lipstick:' },
      { value: 'refactor', name: 'refactor: Refactor', emoji: ':recycle:' },
      { value: 'perf', name: 'perf:     Rendimiento', emoji: ':zap:' },
      { value: 'test', name: 'test:     Tests', emoji: ':white_check_mark:' },
      { value: 'chore', name: 'chore:    Configuración', emoji: ':hammer:' }
    ],
    useEmoji: true,
    emojiAlign: 'center',
    allowCustomScopes: true,
    allowEmptyScopes: true,
    emptyScopesAlias: 'empty'
  }
})
