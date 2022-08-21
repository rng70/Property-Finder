const CardData = [
    {
        title: "User",
        description: "Explore apartments, duplex, offices, shops and many more properties online! No.1 Property Portal. Over 70,000 Listings. New Developments. Expert Advice Available. Trusted Property Agency. Types: Apartments, Duplex, Offices, Shops.",
        buttonTitle: "Sign as User",
        hrefIdSignIn: "user",
        hrefIdSignUp : "userSignUp"
    },
    {
        title: "Owner",
        description: "Wanna sell properties? PropertyFinder is the easiest way to aid you in this purpose.Sign up and post your property's information and get your desired clients!",
        buttonTitle: "Sign as owner",
        hrefIdSignIn: "owner",
        hrefIdSignUp : "ownerSignUp"
    },
    {
        title: "Agency",
        description: "Excell your agency's business with the aid of PropertyFinder!! Find your clients across the country with the eassisest way possible! Just sign up and provide your information and get lucrative clients!",
        buttonTitle: "Sign as agency",
        hrefIdSignIn: "agency",
        hrefIdSignUp : "agencySignUp"
    }
]

export function getCardData(params) {
    return CardData;
}