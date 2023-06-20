export function getThemeClass(isDarkMode) {
    return isDarkMode ? 'bgDark' : 'bgLight';
}
export function getThemeTextColor(isDarkMode) {
    return isDarkMode ? 'textLight' : 'textDark';
}
export function getThemeBorderColor(isDarkMode) {
    return isDarkMode ? 'borderLight' : 'borderDark';
}