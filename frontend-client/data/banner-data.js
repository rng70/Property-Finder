const BANNER_DATA ={
    title: "Search Properties for sale and for rent in Bangladesh",
    button: {
        sale: {
            title: "For Sale",
            link: "/"
        },
        rent: {
            title: "For Rent",
            link: "/"
        }
    },
    imgUrl: "/static/signin-bg.jpg"
}

export function getAllBannerData() {
    return BANNER_DATA;
}