export const menuItemsData = [
    {
        title: 'File',
        submenu: [
            {
                title: 'Save',
            },
            {
                title: 'Load',
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
                    },
                    {
                        title: 'Dark',
                    }
                ]
            }
        ]
    },
    {
        title: 'Blocks',
        url: '/blocks',
        submenu: [
            {
                title: 'Source Blocks',
                submenu: [
                    {
                        title: "Source Default",
                    }
                ]
            },
            {
                title: 'Sink Blocks',
                submenu: [
                    {
                        title: 'Sink Default',
                    }
                ]
            },
            {
                title: 'Other Blocks',
                submenu: [
                    {
                        title: 'Other Default',
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
            }
        ]
    }
]