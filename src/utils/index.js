// color
export const PRIMARY_GREEN = "#12372A";
export const SECONDARY_GREEN = '#436850';
export const SHADE_GREEN = '#ADBC9F';
export const SHADE_GREY = '#F1F1F1'
export const LIGHT = '#FBFADA';
export const BLACK = 'black'
export const WHITE = '#ffffff'

// font
export const SPLASH_FONT = 'DMSans-Regular';
export const RIGHTS_TITLE_FONT = 'KottaOne-Regular';
export const TEXT_FONT = 'KottaOne-Regular';
export const TEXT_TITLE = '';
export const DETAIL_FONT = '';
export const DESCRIPTION_FONT = '';
export const BOOK_TITLE_FONT = '';
export const PRIMARY_FONT = 'DMSans-Regular';

// font-size


// function
export const showSomePasswordComponents = (password) => {
    somePwdComp = '';

    if (password === '' || null) return 'none'

    if (password.length < 6) {
        for (i = 0; i <= password.length - 1; i++) {
            somePwdComp += "*"
        }
        return somePwdComp
    }

    if (password.length >= 9) {
        somePwdComp = "***..*"
        for (i = 3; i > 0; i--) {
            somePwdComp += password[password.length - i]
        }
    } else {
        for (i = 0; i < password.length - 3; i++) {
            somePwdComp += "*"
        }

        for (i = 3; i > 0; i--) {
            somePwdComp += password[password.length - i]
        }
    }

    return somePwdComp;
}

export const showSomeNameOnly = (text, num) => {
    if (text !== '' & text !== null & num > 0 & num !== null) {
        retVal = '';
        if (num - 2 < text.length) {
            for (i = 0; i < num - 2; i++) {
                retVal += text[i]
            }
            retVal += ".."
        } else {
            retVal = text
        }
        return retVal
    }
    return '?'
}
