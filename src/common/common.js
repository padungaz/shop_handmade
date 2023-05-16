export function makeId(length) {
    let result = "";
    let characters =
        "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm-0123456789";
    let charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
};

export function makeCode() {
    let result = "";
    let characters =
        "0123456789";
    let charactersLength = characters.length;
    for (let i = 0; i < 6; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

export const SortProduct = (data, value) =>
    [...data].sort((a, b) => {
        switch (value) {
            case "nameUp":
                return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
            case "nameDown":
                return a.name > b.name ? -1 : a.name < b.name ? 1 : 0;

            case "priceUp":
                return a.price - b.price;

            case "priceDown":
                return b.price - a.price;
            case "ratingUp":
                return a.rating - b.rating;

            case "ratingDown":
                return b.rating - a.rating;
            case "soldUp":
                return a.rating - b.sold;

            case "soldDown":
                return b.sold - a.sold;

            default:
                return false;
        }
    });
const img1 = "https://m.media-amazon.com/images/I/912yH56AnFL.__AC_SY300_SX300_QL70_FMwebp_.jpg";
const img2 = "https://m.media-amazon.com/images/I/81sxuSIfRjL._AC_SL1500_.jpg";
const img3 = "https://m.media-amazon.com/images/I/61cVnuPJR2L._AC_SL1500_.jpg";
const img4 = "https://m.media-amazon.com/images/I/816KGYiW1cL._AC_SL1500_.jpg";
export const listImage = [img1, img2, img3, img4];
