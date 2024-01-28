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
            items: [
                { text: 'Описание проекта', link: '/pages/fast-start/'},
                { text: 'Запуск проектов', items: [
                    { text: 'Сервер', items: [
                        { text: 'Введение в установку', link: '/pages/fast-start/projects/server/' },
                        { text: 'Загрузка и развёртывание', link: '/pages/fast-start/projects/server/setting-environment-server'}
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
                  {
                    text: 'С чего начать',
                    link: '/pages/install/postgres/'
                  },
                  {
                    text: 'Linux',
                    collapsed: false,
                    link: '/pages/install/postgres/linux/',
                    items: [
                        {
                            text: 'Поиск обновлений',
                            link: '/pages/install/postgres/linux/search-updates'
                        },
                        {
                            text: 'Установка',
                            link: '/pages/install/postgres/linux/install'
                        },
                        {
                            text: 'Настройка', collapsed: false, items: [
                                { text: 'Смена пользователя', link: '/pages/install/postgres/linux/change-user'},
                                { text: 'Вход в панель управления', link: '/pages/install/postgres/linux/auth-admin-panel'},
                                { text: 'Добавление администратора', link: '/pages/install/postgres/linux/add-admin-user'},
                            ]
                        },
                        {
                            text: 'Выход',
                            link: '/pages/install/postgres/linux/exit'
                        }
                    ]},
                    {
                        text: 'Termux',
                        link: '/pages/install/postgres/termux/',
                        collapsed: false,
                        items: [
                            {
                                text: 'Поиск обновлений',
                                link: '/pages/install/postgres/termux/search-updates'
                            },
                            {
                                text: 'Установка',
                                link: '/pages/install/postgres/termux/install'
                            },
                            {
                                text: 'Создание скелета',
                                link: '/pages/install/postgres/termux/sceleton'
                            },
                            {
                                text: 'Запуск и остановка СУБД',
                                link: '/pages/install/postgres/termux/run'
                            },
                            {
                                text: 'Добавление администратора',
                                link: '/pages/install/postgres/termux/add-admin-user'
                            }
                        ]
                    }
                ]
              }
            ]
          }
    ]
}