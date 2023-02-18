// local storage,
// session storage,
// cookie storage,
// IndexedDB

const THEME_KEY_FOR_LOCAL_STORAGE = 'THEME_KEY_FOR_LOCAL_STORAGE'
const THEME_KEY_FOR_SESSION_STORAGE = 'THEME_KEY_FOR_SESSION_STORAGE'

let appTheme = localStorage.getItem(THEME_KEY_FOR_LOCAL_STORAGE) || 'light'
let appThemeSession = localStorage.getItem(THEME_KEY_FOR_SESSION_STORAGE) || 'light'
const btn = document.querySelector('button')

if (appTheme === 'dark') {
    document.body.style.background = 'darkblue'
} else {
    document.body.style.background = 'gold'

}
btn.addEventListener('click', () => {
    const isLight = appTheme === 'light'
    if (isLight) {
        localStorage.setItem(THEME_KEY_FOR_LOCAL_STORAGE, 'dark')
        appTheme = 'dark'
        document.body.style.background = 'darkblue'

    } else {
        localStorage.setItem(THEME_KEY_FOR_LOCAL_STORAGE, 'light')
        appTheme = 'light'
        document.body.style.background = 'gold'

    }
})


// btn.addEventListener('click', () => {
//     const isLight = appThemeSession === 'light'
//     if (isLight) {
//         sessionStorage.setItem(THEME_KEY_FOR_SESSION_STORAGE, 'dark')
//         appThemeSession = 'dark'
//         document.body.style.background = 'darkblue'
//     } else {
//         sessionStorage.setItem(THEME_KEY_FOR_SESSION_STORAGE, 'light')
//         appThemeSession = 'light'
//         document.body.style.background = 'gold'
//     }
// })