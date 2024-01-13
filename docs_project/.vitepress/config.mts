import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "DIARY-SPO",
  description: "Документация к обёртке над дневником",

  // https://vitepress.dev/reference/default-theme-search#search
  themeConfig: {
    search: {
      provider: 'local'
    },

    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Домой', link: '/' },
      { text: 'API', link: '/pages/api/' }
    ],

    sidebar: [
      {
        text: 'Быстрый старт',
        items: [
          { text: 'Описание проекта', link: '/pages/fast-start/' },
          { text: 'Запуск проектов', items: [
            { text: 'Сервер', items: [
              { text: 'Введение в установку', link: '/pages/fast-start/projects/server/' },
              { text: 'Загрузка и развёртывание', link: 'pages/fast-start/projects/server/setting-environment-server'}
            ]}
          ]},
          { text: 'Runtime API Examples', link: '/pages/api-examples' }
        ]
      },
      {
        text: 'Установка зависимого ПО',
        items: [
          {
            text: 'Postgresql',
            items: [
              { text: 'С чего начать', link: '/pages/install/postgres/'},
              { text: 'Linux', link: '/pages/install/postgres/linux/', items: [
                {text: 'Поиск обновлений', link: '/pages/install/postgres/linux/search-updates'},
                {text: 'Установка', link: '/pages/install/postgres/linux/install'},
                {
                  text: 'Настройка', items: [
                    { text: 'Смена пользователя', link: '/pages/install/postgres/linux/change-user'},
                    { text: 'Вход в панель управления', link: '/pages/install/postgres/linux/auth-admin-panel'},
                    { text: 'Добавление администратора', link: '/pages/install/postgres/linux/add-admin-user'},
                  ]
                }
              ]},
              { text: 'Termux', link: '/pages/install/postgres/termux'}
            ]
          }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/diary-spo/monorepo' },
      { icon: {svg: '<svg width="800px" height="800px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><circle cx="512" cy="512" r="512" style="fill:#2787f5"/><path d="M585.83 271.5H438.17c-134.76 0-166.67 31.91-166.67 166.67v147.66c0 134.76 31.91 166.67 166.67 166.67h147.66c134.76 0 166.67-31.91 166.67-166.67V438.17c0-134.76-32.25-166.67-166.67-166.67zm74 343.18h-35c-13.24 0-17.31-10.52-41.07-34.62-20.71-20-29.87-22.74-35-22.74-7.13 0-9.17 2-9.17 11.88v31.57c0 8.49-2.72 13.58-25.12 13.58-37 0-78.07-22.4-106.93-64.16-43.45-61.1-55.33-106.93-55.33-116.43 0-5.09 2-9.84 11.88-9.84h35c8.83 0 12.22 4.07 15.61 13.58 17.31 49.9 46.17 93.69 58 93.69 4.41 0 6.45-2 6.45-13.24v-51.6c-1.36-23.76-13.92-25.8-13.92-34.28 0-4.07 3.39-8.15 8.83-8.15h55c7.47 0 10.18 4.07 10.18 12.9v69.58c0 7.47 3.39 10.18 5.43 10.18 4.41 0 8.15-2.72 16.29-10.86 25.12-28.17 43.11-71.62 43.11-71.62 2.38-5.09 6.45-9.84 15.28-9.84h35c10.52 0 12.9 5.43 10.52 12.9-4.41 20.37-47.18 80.79-47.18 80.79-3.73 6.11-5.09 8.83 0 15.61 3.73 5.09 16 15.61 24.1 25.12 14.94 17 26.48 31.23 29.53 41.07 3.45 9.84-1.65 14.93-11.49 14.93z" style="fill:#fff"/></svg>'}, link: 'https://vk.com/diary_spo'}
    ]
  },
  outDir: '../docs'
})
