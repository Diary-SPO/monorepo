import { DefaultTheme, defineConfig } from "vitepress";

export const ru = defineConfig({
    lang: 'ru-RU',
    description: "Документация к обёртке над дневником",

    themeConfig: {
        nav: nav(),
    
        sidebar: [
           ...sidebarGuide()
        ],
    
        editLink: {
          pattern: 'https://github.com/diary-spo/monorepo/edit/docs/docs_project/:path',
          text: 'Edit this page on GitHub'
        },
    
        footer: {
          message: 'Released under the MIT License.',
          copyright: 'Copyright © 2024-present DIARY-SPO'
        }
      }
})

function nav(): DefaultTheme.NavItem[] {
    return []
}

function sidebarGuide(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: 'Быстрый старт',
            base: '/pages/fast-start/',
            items: [
                { text: 'Описание проекта', link: '/'},
                { text: 'Запуск проектов', items: [
                    { text: 'Сервер', items: [
                        { text: 'Введение в установку', link: '/projects/server/' },
                        { text: 'Загрузка и развёртывание', link: '/projects/server/setting-environment-server'}
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
                base: '/pages/install/postgres/',
                items: [
                  {
                    text: 'С чего начать',
                    link: '/'
                  },
                  {
                    text: 'Linux',
                    collapsed: false,
                    link: '/linux/',
                    items: [
                        {
                            text: 'Поиск обновлений',
                            link: '/linux/search-updates'
                        },
                        {
                            text: 'Установка',
                            link: '/linux/install'
                        },
                        {
                            text: 'Настройка', collapsed: false, items: [
                                { text: 'Смена пользователя', link: '/linux/change-user'},
                                { text: 'Вход в панель управления', link: '/linux/auth-admin-panel'},
                                { text: 'Добавление администратора', link: '/linux/add-admin-user'},
                            ]
                        },
                        {
                            text: 'Выход',
                            link: '/linux/exit'
                        }
                    ]},
                    {
                        text: 'Termux',
                        link: '/termux/',
                        collapsed: false,
                        items: [
                            {
                                text: 'Поиск обновлений',
                                link: '/termux/search-updates'
                            },
                            {
                                text: 'Установка',
                                link: '/termux/install'
                            },
                            {
                                text: 'Создание скелета',
                                link: '/termux/sceleton'
                            },
                            {
                                text: 'Запуск и остановка СУБД',
                                link: '/termux/run'
                            },
                            {
                                text: 'Добавление администратора',
                                link: '/termux/add-admin-user'
                            }
                        ]
                    }
                ]
              }
            ]
          }
    ]
}