module.exports = {
  rules: {
    // Emojis por tipo
    'type-enum': [
      2,
      'always',
      [
        { value: 'feat',     name: 'feat:     ✨ Nueva funcionalidad', emoji: '✨' },
        { value: 'fix',      name: 'fix:      🐛 Corrección de errores', emoji: '🐛' },
        { value: 'docs',     name: 'docs:     📝 Documentación', emoji: '📝' },
        { value: 'style',    name: 'style:    🎨 Estilos / UI', emoji: '🎨' },
        { value: 'refactor', name: 'refactor: ♻️ Refactor', emoji: '♻️' },
        { value: 'perf',     name: 'perf:     ⚡ Rendimiento', emoji: '⚡' },
        { value: 'test',     name: 'test:     🧪 Tests', emoji: '🧪' },
        { value: 'chore',    name: 'chore:    🔧 Configuración', emoji: '🔧' }
      ]
    ]
  },

  prompt: {
    useEmoji: true,
    emojiAlign: 'center',
    allowBreakingChanges: false,
    allowCustomScopes: true
  }
}
