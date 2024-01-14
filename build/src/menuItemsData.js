export const menuItemsData = [
    {
        title: 'File',
        submenu: [
            {
                title: 'Save',
                url: 'save',
            },
            {
                title: 'Load',
                url: 'load',
            }
        ]
    },
    {
        title: 'Preferences',
        submenu: [
            {
                title: 'Themes',
                submenu: [
                    {
                        title: 'Light',
                        url: 'light',
                    },
                    {
                        title: 'Dark',
                        url: 'dark',
                    }
                ]
            }
        ]
    },
    {
        title: 'Blocks',
        submenu: [
            {
                title: 'Source Blocks',
                submenu: [
                    {
                        title: "Source Default",
                        url: 'source-default',
                    }
                ]
            },
            {
                title: 'Sink Blocks',
                submenu: [
                    {
                        title: 'Sink Default',
                        url: 'sink-default',
                    }
                ]
            },
            {
                title: 'Other Blocks',
                submenu: [
                    {
                        title: 'Other Default',
                        url: 'other-default',
                    }
                ]
            },
        ]
    },
    {
        title: 'Tools',
        submenu: [
            {
                title: 'Text Editor',
                url: 'text-editor',
            }
        ]
    }
]

