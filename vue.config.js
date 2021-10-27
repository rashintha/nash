/* eslint-disable indent */
/* eslint-disable quotes */
module.exports = {
  pluginOptions: {
    electronBuilder: {
      preload: 'src/electron/middleware/preload.js',
      builderOptions: {
        appId: 'nash.rashintha.com',
        productName: 'Nash Email Client',
        linux: {
          icon: 'icon/nash.png',
          target: ['deb', 'pacman', 'tar.xz', 'rpm', 'snap', 'AppImage'],
          category: 'Utility'
        },
        mac: {
          target: ['dmg']
        },
        win: {
          target: ["portable", "msi"],
          icon: "icon/nash.png"
        },
        nsis: {
          shortcutName: "Nash",
          deleteAppDataOnUninstall: true,
          createStartMenuShortcut: true,
          createDesktopShortcut: true
        }
      }
    }
  }
}
