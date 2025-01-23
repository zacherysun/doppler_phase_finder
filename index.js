const dopplers = require('./dopplers.json');

function getDopplerIcon(market_hash_name, icon_url) {
    if (!market_hash_name || !icon_url) {
        return null;
    }

    if (!dopplers[market_hash_name]) {
        return null;
    }

    return dopplers[market_hash_name][icon_url] || null;
}

//test item
item = { "appid": 730, "classid": "1043434529", "instanceid": "188530139", "currency": 0, "background_color": "", "icon_url": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL-Kmsj2P7rSnXtU6dd9teTA5475jV2urhcDPzCkfMKLcAE-aV3R-lO5l-e61sfqvZ2fyiBgvikqsXiMyRGw1U1Ja-dm06adSULeWfJvEZCxug", "descriptions": [{ "type": "html", "value": "Exterior: Minimal Wear", "name": "exterior_wear" }, { "type": "html", "value": " ", "name": "blank" }, { "type": "html", "value": "This is the M-9 bayonet.  Originally intended to be mounted on a rifle, it is also well suited to close-quarters combat. It has been painted with black and silver metallic paints using a marbleizing medium, then candy coated.\n\n<i>Getting lost in its color can prove fatal</i>", "name": "description" }, { "type": "html", "value": " ", "name": "blank" }], "tradable": 1, "actions": [{ "link": "steam://rungame/730/76561202255233023/+csgo_econ_action_preview%20S%owner_steamid%A%assetid%D7701800422286153664", "name": "Inspect in Game..." }], "name": "★ M9 Bayonet | Doppler", "name_color": "8650AC", "type": "★ Covert Knife", "market_name": "★ M9 Bayonet | Doppler (Minimal Wear)", "market_hash_name": "★ M9 Bayonet | Doppler (Minimal Wear)", "market_actions": [{ "link": "steam://rungame/730/76561202255233023/+csgo_econ_action_preview%20M%listingid%A%assetid%D7701800422286153664", "name": "Inspect in Game..." }], "commodity": 0, "market_tradable_restriction": 7, "market_marketable_restriction": 7, "marketable": 1, "tags": [{ "category": "Type", "internal_name": "CSGO_Type_Knife", "localized_category_name": "Type", "localized_tag_name": "Knife" }, { "category": "Weapon", "internal_name": "weapon_knife_m9_bayonet", "localized_category_name": "Weapon", "localized_tag_name": "M9 Bayonet" }, { "category": "Quality", "internal_name": "unusual", "localized_category_name": "Category", "localized_tag_name": "★", "color": "8650AC" }, { "category": "Rarity", "internal_name": "Rarity_Ancient_Weapon", "localized_category_name": "Quality", "localized_tag_name": "Covert", "color": "eb4b4b" }, { "category": "Exterior", "internal_name": "WearCategory1", "localized_category_name": "Exterior", "localized_tag_name": "Minimal Wear" }] }

console.log(getDopplerIcon(item.market_hash_name, item.icon_url));