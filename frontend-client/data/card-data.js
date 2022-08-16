const CardData = [
    {
        title: "User",
        description: "this is user",
        buttonTitle: "Sing in as User",
        hrefId: "userSignIn"
    },
    {
        title: "Owner",
        description: "this is owner",
        buttonTitle: "Sing in as owner",
        hrefId: "ownerSignIn"
    },
    {
        title: "Agency",
        description: "this is angency",
        buttonTitle: "Sign is as agency",
        hrefId: "agencySignIn"
    }
]

export function getCardData(params) {
    return CardData;
}