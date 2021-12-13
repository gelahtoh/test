var hatoutput = document.getElementById("hatoutput");
        var clothingoutput = document.getElementById("clothingoutput");
        var mouthoutput = document.getElementById("mouthoutput");
        var eyesoutput = document.getElementById("eyesoutput");
        var accessoriesoutput = document.getElementById("accessoriesoutput");
        var skintextureoutput = document.getElementById("skintextureoutput");
        var earringsoutput = document.getElementById("earringsoutput");
        var backgroundoutput = document.getElementById("backgroundoutput");
        //gets a random number from 1-10000
        //math.random gets a number from 0-1 in decimal
        //math.floor makes it a whole number but it would always input 0 since it rounds down
        //+ 1 adds 1 to 0 making it 1
        //* 10000 makes it range from 1 - 10000 instead of 1 - 1
        function chooseHat(){
            var hatpercentage = Math.floor(Math.random() * 10000) + 1;
            if (hatpercentage >= 0 && hatpercentage <= 1078) {
                hatoutput.innerHTML = "Bandana";
                var hatchoice = "Bandana"
            } else if (hatpercentage > 1078 && hatpercentage <= 2143) {
                hatoutput.innerHTML = "Beanie";
                var hatchoice = "Beanie"
            } else if (hatpercentage > 2143 && hatpercentage <= 3100) {
                hatoutput.innerHTML = "Farmer";
                var hatchoice = "Farmer"
            } else if (hatpercentage > 3100 && hatpercentage <= 3976) {
                hatoutput.innerHTML = "Police";
                var hatchoice = "Police"
            } else if (hatpercentage > 3976 && hatpercentage <= 4843) {
                hatoutput.innerHTML = "Trucker";
                var hatchoice = "Trucker"
            } else if (hatpercentage > 4843 && hatpercentage <= 5589) {
                hatoutput.innerHTML = "Ponytail";
                var hatchoice = "Ponytail"
            } else if (hatpercentage > 5589 && hatpercentage <= 6263) {
                hatoutput.innerHTML = "Headband";
                var hatchoice = "Headband"
            } else if (hatpercentage > 6263 && hatpercentage <= 6830) {
                hatoutput.innerHTML = "Straw Hat";
                var hatchoice = "Straw Hat"
            } else if (hatpercentage > 6830 && hatpercentage <= 7367) {
                hatoutput.innerHTML = "Viking Hat";
                var hatchoice = "Viking Hat"
            } else if (hatpercentage > 7367 && hatpercentage <= 7865) {
                hatoutput.innerHTML = "Classy";
                var hatchoice = "Classy"
            } else if (hatpercentage > 7865 && hatpercentage <= 8212) {
                hatoutput.innerHTML = "Genie Hat";
                var hatchoice = "Genie Hat"
            } else if (hatpercentage > 8212 && hatpercentage <= 8510) {
                hatoutput.innerHTML = "Horns"
                var hatchoice = "Horns"
            } else if (hatpercentage > 8510 && hatpercentage <= 8776) {
                hatoutput.innerHTML = "Rainbow Mowhawk"
                var hatchoice = "Rainbow Mowhawk"
            } else if (hatpercentage > 8776 && hatpercentage <= 8873) {
                hatoutput.innerHTML = "Wizard";
                var hatchoice = "Wizard"
            } else if (hatpercentage > 8873 && hatpercentage <= 8959) {
                hatoutput.innerHTML = "Headphones";
                var hatchoice = "Headphones"
            } else if (hatpercentage > 8959 && hatpercentage <= 8982) {
                hatoutput.innerHTML = "Crown";
                var hatchoice = "Crown"
            } else if (hatpercentage > 8982 && hatpercentage <= 9000) {
                hatoutput.innerHTML = "Halo";
                var hatchoice = "Halo"
            } else {
                hatoutputnone.innerHTML = "No Hat";
            }
            var commonhats = ["Bandana", "Beanie", "Farmer", "Police", "Trucker"];
            var uncommonhats = ["Ponytail", "Headband", "Straw Hat", "Viking Hat", "Classy"];
            var rarehats = ["Genie Hat", "Horns", "Rainbow Mowhawk"];
            var superrarehats = ["Wizard", "Headphones"];
            var legendaryhats = ["Crown", "Halo"];
            if (commonhats.includes(hatchoice)) {
                hatrarityidcommon.innerHTML = "Common";
                hatrarityiduncommon.innerHTML = "";
                hatrarityidrare.innerHTML = "";
                hatrarityidsuperrare.innerHTML = "";
                hatrarityidlegendary.innerHTML = "";
                hatoutputnone.innerHTML = "";
            } else if (uncommonhats.includes(hatchoice)) {
                hatrarityidcommon.innerHTML = "";
                hatrarityiduncommon.innerHTML = "Uncommon";
                hatrarityidrare.innerHTML = "";
                hatrarityidsuperrare.innerHTML = "";
                hatrarityidlegendary.innerHTML = "";
                hatoutputnone.innerHTML = "";
            } else if (rarehats.includes(hatchoice)) {
                hatrarityidcommon.innerHTML = "";
                hatrarityiduncommon.innerHTML = "";
                hatrarityidrare.innerHTML = "Rare";
                hatrarityidsuperrare.innerHTML = "";
                hatrarityidlegendary.innerHTML = "";
                hatoutputnone.innerHTML = "";
            } else if (superrarehats.includes(hatchoice)) {
                hatrarityidcommon.innerHTML = "";
                hatrarityiduncommon.innerHTML = "";
                hatrarityidrare.innerHTML = "";
                hatrarityidsuperrare.innerHTML = "Super Rare";
                hatrarityidlegendary.innerHTML = "";
                hatoutputnone.innerHTML = "";
            } else if (legendaryhats.includes(hatchoice)) {
                hatrarityidcommon.innerHTML = "";
                hatrarityiduncommon.innerHTML = "";
                hatrarityidrare.innerHTML = "";
                hatrarityidsuperrare.innerHTML = "";
                hatrarityidlegendary.innerHTML = "Legendary";
                hatoutputnone.innerHTML = "";
            } else {
                hatrarityidcommon.innerHTML = "";
                hatrarityiduncommon.innerHTML = "";
                hatrarityidrare.innerHTML = "";
                hatrarityidsuperrare.innerHTML = "";
                hatrarityidlegendary.innerHTML = "";
                hatoutput.innerHTML = "";
            }
        };
        function chooseClothing(){
            var clothingpercentage = Math.floor(Math.random() * 10000) + 1;
            if (clothingpercentage >= 0 && clothingpercentage <= 1243) {
                clothingoutput.innerHTML = "Tie Dye Shirt";
                var clothingchoice = "Tie Dye Shirt"
            } else if (clothingpercentage > 1243 && clothingpercentage <= 2477) {
                clothingoutput.innerHTML = "Black Hoodie";
                var clothingchoice = "Black Hoodie"
            } else if (clothingpercentage > 2477 && clothingpercentage <= 3611) {
                clothingoutput.innerHTML = "White Shirt";
                var clothingchoice = "White Shirt"
            } else if (clothingpercentage > 3611 && clothingpercentage <= 4709) {
                clothingoutput.innerHTML = "Green Hoodie";
                var clothingchoice = "Green Hoodie"
            } else if (clothingpercentage > 4709 && clothingpercentage <= 5710) {
                clothingoutput.innerHTML = "Blue Hoodie";
                var clothingchoice = "Blue Hoodie"
            } else if (clothingpercentage > 5710 && clothingpercentage <= 6657) {
                clothingoutput.innerHTML = "Red Hoodie";
                var clothingchoice = "Red Hoodie"
            } else if (clothingpercentage > 6657 && clothingpercentage <= 7575) {
                clothingoutput.innerHTML = "White Hoodie";
                var clothingchoice = "White Hoodie"
            } else if (clothingpercentage > 7575 && clothingpercentage <= 8041) {
                clothingoutput.innerHTML = "Red Robe";
                var clothingchoice = "Red Robe"
            } else if (clothingpercentage > 8041 && clothingpercentage <= 8403) {
                clothingoutput.innerHTML = "Green Robe";
                var clothingchoice = "Green Robe"
            } else if (clothingpercentage > 8403 && clothingpercentage <= 8747) {
                clothingoutput.innerHTML = "Blue Robe";
                var clothingchoice = "Blue Robe"
            } else if (clothingpercentage > 8747 && clothingpercentage <= 9058) {
                clothingoutput.innerHTML = "White Robe";
                var clothingchoice = "White Robe"
            } else if (clothingpercentage > 9058 && clothingpercentage <= 9346) {
                clothingoutput.innerHTML = "Black Robe";
                var clothingchoice = "Black Robe"
            } else if (clothingpercentage > 9346 && clothingpercentage <= 9491) {
                clothingoutput.innerHTML = "Zebra Shirt";
                var clothingchoice = "Zebra Shirt"
            } else if (clothingpercentage > 9491 && clothingpercentage <= 9612) {
                clothingoutput.innerHTML = "Gold Jacket";
                var clothingchoice = "Gold Jacket"
            } else if (clothingpercentage > 9612 && clothingpercentage <= 9715) {
                clothingoutput.innerHTML = "Turtleneck";
                var clothingchoice = "Turtleneck"
            } else if (clothingpercentage > 9715 && clothingpercentage <= 9803) {
                clothingoutput.innerHTML = "Rainbow Jacket";
                var clothingchoice = "Rainbow Jacket"
            } else if (clothingpercentage > 9803 && clothingpercentage <= 9876) {
                clothingoutput.innerHTML = "Karate Gi";
                var clothingchoice = "Karate Gi"
            } else if (clothingpercentage > 9876 && clothingpercentage <= 9932) {
                clothingoutput.innerHTML = "Cheetah Robe";
                var clothingchoice = "Cheetah Robe"
            } else if (clothingpercentage > 9932 && clothingpercentage <= 9969) {
                clothingoutput.innerHTML = "Zebra Robe";
                var clothingchoice = "Zebra Robe"
            } else if (clothingpercentage > 9969 && clothingpercentage <= 9988) {
                clothingoutput.innerHTML = "Monk Robe";
                var clothingchoice = "Monk Robe"
            } else {
                clothingoutput.innerHTML = "Gold Suit";
                var clothingchoice = "Gold Suit"
            }
            var commonclothing = ["Tie Dye Shirt", "Black Hoodie", "White Shirt", "Green Hoodie", "Blue Hoodie", "Red Hoodie", "White Hoodie"];
            var uncommonclothing = ["Red Robe", "Green Robe", "Blue Robe", "White Robe", "Black Robe"];
            var rareclothing = ["Zebra Shirt", "Gold Jacket", "Turtleneck", "Rainbow Jacket"];
            var superrareclothing = ["Karate Gi", "Cheetah Robe", "Zebra Robe"];
            var legendaryclothing = ["Monk Robe", "Gold Suit"];
            if (commonclothing.includes(clothingchoice)) {
                clothingrarityidcommon.innerHTML = "Common";
                clothingrarityiduncommon.innerHTML = "";
                clothingrarityidrare.innerHTML = "";
                clothingrarityidsuperrare.innerHTML = "";
                clothingrarityidlegendary.innerHTML = "";
            } else if (uncommonclothing.includes(clothingchoice)) {
                clothingrarityidcommon.innerHTML = "";
                clothingrarityiduncommon.innerHTML = "Uncommon";
                clothingrarityidrare.innerHTML = "";
                clothingrarityidsuperrare.innerHTML = "";
                clothingrarityidlegendary.innerHTML = "";
            } else if (rareclothing.includes(clothingchoice)) {
                clothingrarityidcommon.innerHTML = "";
                clothingrarityiduncommon.innerHTML = "";
                clothingrarityidrare.innerHTML = "Rare";
                clothingrarityidsuperrare.innerHTML = "";
                clothingrarityidlegendary.innerHTML = "";
            } else if (superrareclothing.includes(clothingchoice)) {
                clothingrarityidcommon.innerHTML = "";
                clothingrarityiduncommon.innerHTML = "";
                clothingrarityidrare.innerHTML = "";
                clothingrarityidsuperrare.innerHTML = "Super Rare";
                clothingrarityidlegendary.innerHTML = "";
            } else if (legendaryclothing.includes(clothingchoice)) {
                clothingrarityidcommon.innerHTML = "";
                clothingrarityiduncommon.innerHTML = "";
                clothingrarityidrare.innerHTML = "";
                clothingrarityidsuperrare.innerHTML = "";
                clothingrarityidlegendary.innerHTML = "Legendary";
            } else {
                clothingrarityidcommon.innerHTML = "";
                clothingrarityiduncommon.innerHTML = "";
                clothingrarityidrare.innerHTML = "";
                clothingrarityidsuperrare.innerHTML = "";
                clothingrarityidlegendary.innerHTML = "";
            }
        };
        function chooseMouth(){
            var mouthpercentage = Math.floor(Math.random() * 10000) + 1;
            if (mouthpercentage >= 0 && mouthpercentage <= 1279) {
                mouthoutput.innerHTML = "Neutral";
                var mouthchoice = "Neutral"
            } else if (mouthpercentage > 1279 && mouthpercentage <= 2472) {
                mouthoutput.innerHTML = "Squiggle";
                var mouthchoice = "Squiggle"
            } else if (mouthpercentage > 2472 && mouthpercentage <= 3564) {
                mouthoutput.innerHTML = "Smirk";
                var mouthchoice = "Smirk"
            } else if (mouthpercentage > 3564 && mouthpercentage <= 4602) {
                mouthoutput.innerHTML = "Smile";
                var mouthchoice = "Smile"
            } else if (mouthpercentage > 4602 && mouthpercentage <= 5601) {
                mouthoutput.innerHTML = "Frown";
                var mouthchoice = "Frown"
            } else if (mouthpercentage > 5601 && mouthpercentage <= 6382) {
                mouthoutput.innerHTML = "Big Smile";
                var mouthchoice = "Big Smile"
            } else if (mouthpercentage > 6382 && mouthpercentage <= 7138) {
                mouthoutput.innerHTML = "Big Tooth";
                var mouthchoice = "Big Tooth"
            } else if (mouthpercentage > 7138 && mouthpercentage <= 7792) {
                mouthoutput.innerHTML = "Plump Lips";
                var mouthchoice = "Plump Lips"
            } else if (mouthpercentage > 7792 && mouthpercentage <= 8438) {
                mouthoutput.innerHTML = "Drool";
                var mouthchoice = "Drool"
            } else if (mouthpercentage > 8438 && mouthpercentage <= 9083) {
                mouthoutput.innerHTML = "Tongue";
                var mouthchoice = "Tongue"
            } else if (mouthpercentage > 9083 && mouthpercentage <= 9348) {
                mouthoutput.innerHTML = "Vampire";
                var mouthchoice = "Vampire"
            } else if (mouthpercentage > 9348 && mouthpercentage <= 9602) {
                mouthoutput.innerHTML = "Curly Mustache";
                var mouthchoice = "Curly Mustache"
            } else if (mouthpercentage > 9602 && mouthpercentage <= 9800) {
                mouthoutput.innerHTML = "Hotdog";
                var mouthchoice = "Hotdog"
            } else if (mouthpercentage > 9800 && mouthpercentage <= 9879) {
                mouthoutput.innerHTML = "Pizza";
                var mouthchoice = "Pizza"
            } else if (mouthpercentage > 9879 && mouthpercentage <= 9966) {
                mouthoutput.innerHTML = "Robot";
                var mouthchoice = "Robot"
            } else if (mouthpercentage > 9966 && mouthpercentage <= 9990) {
                mouthoutput.innerHTML = "Bubble Gum";
                var mouthchoice = "Bubble Gum"
            } else {
                mouthoutput.innerHTML = "Rainbow Puke";
                var mouthchoice = "Rainbow Puke"
            }
            var commonmouth = ["Neutral", "Squiggle",  "Smirk", "Smile", "Frown"];
            var uncommonmouth = ["Big Smile", "Big Tooth", "Plump Lips", "Drool", "Tongue"];
            var raremouth = ["Vampire", "Curly Mustache", "Hotdog"];
            var superraremouth = ["Pizza", "Robot"];
            var legendarymouth = ["Bubble Gum", "Rainbow Puke"];
            if (commonmouth.includes(mouthchoice)) {
                mouthrarityidcommon.innerHTML = "Common";
                mouthrarityiduncommon.innerHTML = "";
                mouthrarityidrare.innerHTML = "";
                mouthrarityidsuperrare.innerHTML = "";
                mouthrarityidlegendary.innerHTML = "";
            } else if (uncommonmouth.includes(mouthchoice)) {
                mouthrarityidcommon.innerHTML = "";
                mouthrarityiduncommon.innerHTML = "Uncommon";
                mouthrarityidrare.innerHTML = "";
                mouthrarityidsuperrare.innerHTML = "";
                mouthrarityidlegendary.innerHTML = "";
            } else if (raremouth.includes(mouthchoice)) {
                mouthrarityidcommon.innerHTML = "";
                mouthrarityiduncommon.innerHTML = "";
                mouthrarityidrare.innerHTML = "Rare";
                mouthrarityidsuperrare.innerHTML = "";
                mouthrarityidlegendary.innerHTML = "";
            } else if (superraremouth.includes(mouthchoice)) {
                mouthrarityidcommon.innerHTML = "";
                mouthrarityiduncommon.innerHTML = "";
                mouthrarityidrare.innerHTML = "";
                mouthrarityidsuperrare.innerHTML = "Super Rare";
                mouthrarityidlegendary.innerHTML = "";
            } else if (legendarymouth.includes(mouthchoice)) {
                mouthrarityidcommon.innerHTML = "";
                mouthrarityiduncommon.innerHTML = "";
                mouthrarityidrare.innerHTML = "";
                mouthrarityidsuperrare.innerHTML = "";
                mouthrarityidlegendary.innerHTML = "Legendary";
            } else {
                mouthrarityidcommon.innerHTML = "";
                mouthrarityiduncommon.innerHTML = "";
                mouthrarityidrare.innerHTML = "";
                mouthrarityidsuperrare.innerHTML = "";
                mouthrarityidlegendary.innerHTML = "";
            }
        };
        function chooseEyes(){
            var eyespercentage = Math.floor(Math.random() * 10000) + 1;
            if (eyespercentage >= 0 && eyespercentage <= 2742) {
                eyesoutput.innerHTML = "Happy";
                var eyeschoice = "Happy"
            } else if (eyespercentage > 2742 && eyespercentage <= 5100) {
                eyesoutput.innerHTML = "Normal";
                var eyeschoice = "Normal"
            } else if (eyespercentage > 5100 && eyespercentage <= 7075) {
                eyesoutput.innerHTML = "Angry";
                var eyeschoice = "Angry"
            } else if (eyespercentage > 7075 && eyespercentage <= 7966) {
                eyesoutput.innerHTML = "Closed";
                var eyeschoice = "Closed"
            } else if (eyespercentage > 7966 && eyespercentage <= 8742) {
                eyesoutput.innerHTML = "Sad";
                var eyeschoice = "Sad"
            } else if (eyespercentage > 8742 && eyespercentage <= 9385) {
                eyesoutput.innerHTML = "Flames";
                var eyeschoice = "Flames"
            } else if (eyespercentage > 9385 && eyespercentage <= 9709) {
                eyesoutput.innerHTML = "Swirly";
                var eyeschoice = "Swirly"
            } else if (eyespercentage > 9709 && eyespercentage <= 9862) {
                eyesoutput.innerHTML = "Black Holes";
                var eyeschoice = "Black Holes"
            } else if (eyespercentage > 9862 && eyespercentage <= 9918) {
                eyesoutput.innerHTML = "Laser Beams";
                var eyeschoice = "Laser Beams"
            } else if (eyespercentage > 9918 && eyespercentage <= 9970) {
                eyesoutput.innerHTML = "Rainbow";
                var eyeschoice = "Rainbow"
            } else if (eyespercentage > 9970 && eyespercentage <= 9989) {
                eyesoutput.innerHTML = "Bitcoin";
                var eyeschoice = "Bitcoin"
            } else {
                eyesoutput.innerHTML = "Zombie";
                var eyeschoice = "Zombie"
            }
            var commoneyes = ["Happy", "Normal", "Angry"];
            var uncommoneyes = ["Closed", "Sad", "Flames"];
            var rareeyes = ["Swirly", "Black Holes"];
            var superrareeyes = ["Laser Beams", "Rainbow"];
            var legendaryeyes = ["Bitcoin", "Zombie"];
            if (commoneyes.includes(eyeschoice)) {
                eyesrarityidcommon.innerHTML = "Common";
                eyesrarityiduncommon.innerHTML = "";
                eyesrarityidrare.innerHTML = "";
                eyesrarityidsuperrare.innerHTML = "";
                eyesrarityidlegendary.innerHTML = "";
            } else if (uncommoneyes.includes(eyeschoice)) {
                eyesrarityidcommon.innerHTML = "";
                eyesrarityiduncommon.innerHTML = "Uncommon";
                eyesrarityidrare.innerHTML = "";
                eyesrarityidsuperrare.innerHTML = "";
                eyesrarityidlegendary.innerHTML = "";
            } else if (rareeyes.includes(eyeschoice)) {
                eyesrarityidcommon.innerHTML = "";
                eyesrarityiduncommon.innerHTML = "";
                eyesrarityidrare.innerHTML = "Rare";
                eyesrarityidsuperrare.innerHTML = "";
                eyesrarityidlegendary.innerHTML = "";
            } else if (superrareeyes.includes(eyeschoice)) {
                eyesrarityidcommon.innerHTML = "";
                eyesrarityiduncommon.innerHTML = "";
                eyesrarityidrare.innerHTML = "";
                eyesrarityidsuperrare.innerHTML = "Super Rare";
                eyesrarityidlegendary.innerHTML = "";
            } else if (legendaryeyes.includes(eyeschoice)) {
                eyesrarityidcommon.innerHTML = "";
                eyesrarityiduncommon.innerHTML = "";
                eyesrarityidrare.innerHTML = "";
                eyesrarityidsuperrare.innerHTML = "";
                eyesrarityidlegendary.innerHTML = "Legendary";
            } else {
                eyesrarityidcommon.innerHTML = "";
                eyesrarityiduncommon.innerHTML = "";
                eyesrarityidrare.innerHTML = "";
                eyesrarityidsuperrare.innerHTML = "";
                eyesrarityidlegendary.innerHTML = "";
            }
        };
        function chooseAccessories(){
            var accessoriespercentage = Math.floor(Math.random() * 10000) + 1;
            if (accessoriespercentage >= 0 && accessoriespercentage <= 1154) {
                accessoriesoutput.innerHTML = "Star Glasses";
                var accessorieschoice = "Star Glasses"
            } else if (accessoriespercentage > 1154 && accessoriespercentage <= 2177) {
                accessoriesoutput.innerHTML = "Flame Glasses";
                var accessorieschoice = "Flame Glasses"
            } else if (accessoriespercentage > 2177 && accessoriespercentage <= 3144) {
                accessoriesoutput.innerHTML = "Peace Glasses";
                var accessorieschoice = "Peace Glasses"
            } else if (accessoriespercentage > 3144 && accessoriespercentage <= 4031) {
                accessoriesoutput.innerHTML = "Aviator Glasses";
                var accessorieschoice = "Aviator Glasses"
            } else if (accessoriespercentage > 4031 && accessoriespercentage <= 4410) {
                accessoriesoutput.innerHTML = "Nerd Glasses";
                var accessorieschoice = "Nerd Glasses"
            } else if (accessoriespercentage > 4410 && accessoriespercentage <= 4620) {
                accessoriesoutput.innerHTML = "Monocle";
                var accessorieschoice = "Monocle"
            } else if (accessoriespercentage > 4620 && accessoriespercentage <= 4771) {
                accessoriesoutput.innerHTML = "Face Mask";
                var accessorieschoice = "Face Mask"
            } else if (accessoriespercentage > 4771 && accessoriespercentage <= 4879) {
                accessoriesoutput.innerHTML = "Designer Glasses";
                var accessorieschoice = "Designer Glasses"
            } else if (accessoriespercentage > 4879 && accessoriespercentage <= 4933) {
                accessoriesoutput.innerHTML = "Clout Glasses";
                var accessorieschoice = "Clout Glasses"
            } else if (accessoriespercentage > 4933 && accessoriespercentage <= 4982) {
                accessoriesoutput.innerHTML = "VR Headset";
                var accessorieschoice = "VR Headset"
            } else if (accessoriespercentage > 4982 && accessoriespercentage <= 5000) {
                accessoriesoutput.innerHTML = "Ski Goggles";
                var accessorieschoice = "Ski Goggles"
            } else {
                accessoriesoutputnone.innerHTML = "No Accessories" 
            }
            var commonaccessories = ["Star Glasses", "Flame Glasses", "Peace Glasses", "Aviator Glasses"];
            var uncommonaccessories = ["Nerd Glasses", "Monocle"];
            var rareaccessories = ["Face Mask", "Designer Glasses"];
            var superrareaccessories = ["Clout Glasses", "VR Headset"];
            var legendaryaccessories = ["Ski Goggles"];
            if (commonaccessories.includes(accessorieschoice)) {
                accessoriesrarityidcommon.innerHTML = "Common";
                accessoriesrarityiduncommon.innerHTML = "";
                accessoriesrarityidrare.innerHTML = "";
                accessoriesrarityidsuperrare.innerHTML = "";
                accessoriesrarityidlegendary.innerHTML = "";
                accessoriesoutputnone.innerHTML = "";
            } else if (uncommonaccessories.includes(accessorieschoice)) {
                accessoriesrarityidcommon.innerHTML = "";
                accessoriesrarityiduncommon.innerHTML = "Uncommon";
                accessoriesrarityidrare.innerHTML = "";
                accessoriesrarityidsuperrare.innerHTML = "";
                accessoriesrarityidlegendary.innerHTML = "";
                accessoriesoutputnone.innerHTML = "";
            } else if (rareaccessories.includes(accessorieschoice)) {
                accessoriesrarityidcommon.innerHTML = "";
                accessoriesrarityiduncommon.innerHTML = "";
                accessoriesrarityidrare.innerHTML = "Rare";
                accessoriesrarityidsuperrare.innerHTML = "";
                accessoriesrarityidlegendary.innerHTML = "";
                accessoriesoutputnone.innerHTML = "";
            } else if (superrareaccessories.includes(accessorieschoice)) {
                accessoriesrarityidcommon.innerHTML = "";
                accessoriesrarityiduncommon.innerHTML = "";
                accessoriesrarityidrare.innerHTML = "";
                accessoriesrarityidsuperrare.innerHTML = "Super Rare";
                accessoriesrarityidlegendary.innerHTML = "";
                accessoriesoutputnone.innerHTML = "";
            } else if (legendaryaccessories.includes(accessorieschoice)) {
                accessoriesrarityidcommon.innerHTML = "";
                accessoriesrarityiduncommon.innerHTML = "";
                accessoriesrarityidrare.innerHTML = "";
                accessoriesrarityidsuperrare.innerHTML = "";
                accessoriesrarityidlegendary.innerHTML = "Legendary";
                accessoriesoutputnone.innerHTML = "";
            } else {
                accessoriesrarityidcommon.innerHTML = "";
                accessoriesrarityiduncommon.innerHTML = "";
                accessoriesrarityidrare.innerHTML = "";
                accessoriesrarityidsuperrare.innerHTML = "";
                accessoriesrarityidlegendary.innerHTML = "";
                accessoriesoutput.innerHTML = "";
            }
        };
        function chooseSkinTexture(){
            var skintexturepercentage = Math.floor(Math.random() * 10000) + 1;
            if (skintexturepercentage >= 0 && skintexturepercentage <= 1212) {
                skintextureoutput.innerHTML = "Yellow";
                var skintexturechoice = "Yellow"
            } else if (skintexturepercentage > 1212 && skintexturepercentage <= 2411) {
                skintextureoutput.innerHTML = "Blue";
                var skintexturechoice = "Blue"
            } else if (skintexturepercentage > 2411 && skintexturepercentage <= 3591) {
                skintextureoutput.innerHTML = "Silver";
                var skintexturechoice = "Silver"
            } else if (skintexturepercentage > 3591 && skintexturepercentage <= 4731) {
                skintextureoutput.innerHTML = "Purple";
                var skintexturechoice = "Purple"
            } else if (skintexturepercentage > 4731 && skintexturepercentage <= 5804) {
                skintextureoutput.innerHTML = "White";
                var skintexturechoice = "White"
            } else if (skintexturepercentage > 5804 && skintexturepercentage <= 6833) {
                skintextureoutput.innerHTML = "Black";
                var skintexturechoice = "Black"
            } else if (skintexturepercentage > 6833 && skintexturepercentage <= 7829) {
                skintextureoutput.innerHTML = "Red";
                var skintexturechoice = "Red"
            } else if (skintexturepercentage > 7829 && skintexturepercentage <= 8250) {
                skintextureoutput.innerHTML = "Blue Camo";
                var skintexturechoice = "Blue Camo"
            } else if (skintexturepercentage > 8250 && skintexturepercentage <= 8661) {
                skintextureoutput.innerHTML = "Cow";
                var skintexturechoice = "Cow"
            } else if (skintexturepercentage > 8661 && skintexturepercentage <= 9050) {
                skintextureoutput.innerHTML = "Zebra";
                var skintexturechoice = "Zebra"
            } else if (skintexturepercentage > 9050 && skintexturepercentage <= 9405) {
                skintextureoutput.innerHTML = "Cheetah";
                var skintexturechoice = "Cheetah"
            } else if (skintexturepercentage > 9405 && skintexturepercentage <= 9582) {
                skintextureoutput.innerHTML = "Rainbow";
                var skintexturechoice = "Rainbow"
            } else if (skintexturepercentage > 9582 && skintexturepercentage <= 9736) {
                skintextureoutput.innerHTML = "Psychedelic";
                var skintexturechoice = "Psychedelic"
            } else if (skintexturepercentage > 9736 && skintexturepercentage <= 9869) {
                skintextureoutput.innerHTML = "Webbed Red";
                var skintexturechoice = "Webbed Red"
            } else if (skintexturepercentage > 9869 && skintexturepercentage <= 9940) {
                skintextureoutput.innerHTML = "Abstract";
                var skintexturechoice = "Abstract"
            } else if (skintexturepercentage > 9940 && skintexturepercentage <= 9985) {
                skintextureoutput.innerHTML = "Gold";
                var skintexturechoice = "Gold"
            } else {
                skintextureoutput.innerHTML = "Zombie";
                var skintexturechoice = "Zombie"
            }
            var commonskintexture = ["Yellow", "Blue", "Silver", "Purple", "White", "Black", "Red"];
            var uncommonskintexture = ["Blue Camo", "Cow", "Zebra", "Cheetah"];
            var rareskintexture = ["Rainbow", "Psychedelic", "Webbed Red"];
            var superrareskintexture = ["Abstract", "Gold"];
            var legendaryskintexture = ["Zombie"];
            if (commonskintexture.includes(skintexturechoice)) {
                skintexturerarityidcommon.innerHTML = "Common";
                skintexturerarityiduncommon.innerHTML = "";
                skintexturerarityidrare.innerHTML = "";
                skintexturerarityidsuperrare.innerHTML = "";
                skintexturerarityidlegendary.innerHTML = "";
            } else if (uncommonskintexture.includes(skintexturechoice)) {
                skintexturerarityidcommon.innerHTML = "";
                skintexturerarityiduncommon.innerHTML = "Uncommon";
                skintexturerarityidrare.innerHTML = "";
                skintexturerarityidsuperrare.innerHTML = "";
                skintexturerarityidlegendary.innerHTML = "";
            } else if (rareskintexture.includes(skintexturechoice)) {
                skintexturerarityidcommon.innerHTML = "";
                skintexturerarityiduncommon.innerHTML = "";
                skintexturerarityidrare.innerHTML = "Rare";
                skintexturerarityidsuperrare.innerHTML = "";
                skintexturerarityidlegendary.innerHTML = "";
            } else if (superrareskintexture.includes(skintexturechoice)) {
                skintexturerarityidcommon.innerHTML = "";
                skintexturerarityiduncommon.innerHTML = "";
                skintexturerarityidrare.innerHTML = "";
                skintexturerarityidsuperrare.innerHTML = "Super Rare";
                skintexturerarityidlegendary.innerHTML = "";
            } else if (legendaryskintexture.includes(skintexturechoice)) {
                skintexturerarityidcommon.innerHTML = "";
                skintexturerarityiduncommon.innerHTML = "";
                skintexturerarityidrare.innerHTML = "";
                skintexturerarityidsuperrare.innerHTML = "";
                skintexturerarityidlegendary.innerHTML = "Legendary";
            } else {
                skintexturerarityidcommon.innerHTML = "";
                skintexturerarityiduncommon.innerHTML = "";
                skintexturerarityidrare.innerHTML = "";
                skintexturerarityidsuperrare.innerHTML = "";
                skintexturerarityidlegendary.innerHTML = "";
            }
        };
        function chooseEarrings(){
            var earringspercentage = Math.floor(Math.random() * 10000) + 1;
            if (earringspercentage >= 0 && earringspercentage <= 1758) {
                earringsoutput.innerHTML = "Silver Stud";
                var earringschoice = "Silver Stud"
            } else if (earringspercentage > 1758 && earringspercentage <= 3505) {
                earringsoutput.innerHTML = "Peace Sign";
                var earringschoice = "Peace Sign"
            } else if (earringspercentage > 3505 && earringspercentage <= 5180) {
                earringsoutput.innerHTML = "Cross";
                var earringschoice = "Cross"
            } else if (earringspercentage > 5180 && earringspercentage <= 6556) {
                earringsoutput.innerHTML = "Diamond Stud";
                var earringschoice = "Diamond Stud"
            } else if (earringspercentage > 6556 && earringspercentage <= 7810) {
                earringsoutput.innerHTML = "Gold Hoop";
                var earringschoice = "Gold Hoop"
            } else if (earringspercentage > 7810 && earringspercentage <= 8595) {
                earringsoutput.innerHTML = "Dangling Ruby";
                var earringschoice = "Dangling Ruby"
            } else if (earringspercentage > 8595 && earringspercentage <= 8903) {
                earringsoutput.innerHTML = "Lightning";
                var earringschoice = "Lightning"
            } else if (earringspercentage > 8903 && earringspercentage <= 9000) {
                earringsoutput.innerHTML = "Bitcoin";
                var earringschoice = "Bitcoin"
            } else {
                earringsoutputnone.innerHTML = "No Earrings"
            }
            var commonearrings = ["Silver Stud", "Peace Sign", "Cross"];
            var uncommonearrings = ["Diamond Stud", "Gold Hoop"];
            var rareearrings = ["Dangling Ruby"];
            var superrareearrings = ["Lightning"];
            var legendaryearrings = ["Bitcoin"];
            if (commonearrings.includes(earringschoice)) {
                earringsrarityidcommon.innerHTML = "Common";
                earringsrarityiduncommon.innerHTML = "";
                earringsrarityidrare.innerHTML = "";
                earringsrarityidsuperrare.innerHTML = "";
                earringsrarityidlegendary.innerHTML = "";
                earringsoutputnone.innerHTML = "";
            } else if (uncommonearrings.includes(earringschoice)) {
                earringsrarityidcommon.innerHTML = "";
                earringsrarityiduncommon.innerHTML = "Uncommon";
                earringsrarityidrare.innerHTML = "";
                earringsrarityidsuperrare.innerHTML = "";
                earringsrarityidlegendary.innerHTML = "";
                earringsoutputnone.innerHTML = "";
            } else if (rareearrings.includes(earringschoice)) {
                earringsrarityidcommon.innerHTML = "";
                earringsrarityiduncommon.innerHTML = "";
                earringsrarityidrare.innerHTML = "Rare";
                earringsrarityidsuperrare.innerHTML = "";
                earringsrarityidlegendary.innerHTML = "";
                earringsoutputnone.innerHTML = "";
            } else if (superrareearrings.includes(earringschoice)) {
                earringsrarityidcommon.innerHTML = "";
                earringsrarityiduncommon.innerHTML = "";
                earringsrarityidrare.innerHTML = "";
                earringsrarityidsuperrare.innerHTML = "Super Rare";
                earringsrarityidlegendary.innerHTML = "";
                earringsoutputnone.innerHTML = "";
            } else if (legendaryearrings.includes(earringschoice)) {
                earringsrarityidcommon.innerHTML = "";
                earringsrarityiduncommon.innerHTML = "";
                earringsrarityidrare.innerHTML = "";
                earringsrarityidsuperrare.innerHTML = "";
                earringsrarityidlegendary.innerHTML = "Legendary";
                earringsoutputnone.innerHTML = "";
            } else {
                earringsrarityidcommon.innerHTML = "";
                earringsrarityiduncommon.innerHTML = "";
                earringsrarityidrare.innerHTML = "";
                earringsrarityidsuperrare.innerHTML = "";
                earringsrarityidlegendary.innerHTML = "";
                earringsoutput.innerHTML = "";
            }
        };
        function chooseBackground(){
            var backgroundpercentage = Math.floor(Math.random() * 10000) + 1;
            if (backgroundpercentage >= 0 && backgroundpercentage <= 3500) {
                backgroundoutput.innerHTML = "Grey";
                var backgroundchoice = "Grey"
            } else if (backgroundpercentage > 3500 && backgroundpercentage <= 6500) {
                backgroundoutput.innerHTML = "Green";
                var backgroundchoice = "Green"
            } else if (backgroundpercentage > 6500 && backgroundpercentage <= 8500) {
                backgroundoutput.innerHTML = "Blue";
                var backgroundchoice = "Blue"
            } else if (backgroundpercentage > 8500 && backgroundpercentage <= 9500) {
                backgroundoutput.innerHTML = "Purple";
                var backgroundchoice = "Purple"
            } else {
                backgroundoutput.innerHTML = "Gold";
                var backgroundchoice = "Gold"
            }
            var commonbackground = ["Grey"];
            var uncommonbackground = ["Green"];
            var rarebackground = ["Blue"];
            var superrarebackground = ["Purple"];
            var legendarybackground = ["Gold"];
            if (commonbackground.includes(backgroundchoice)) {
                backgroundrarityidcommon.innerHTML = "Common";
                backgroundrarityiduncommon.innerHTML = "";
                backgroundrarityidrare.innerHTML = "";
                backgroundrarityidsuperrare.innerHTML = "";
                backgroundrarityidlegendary.innerHTML = "";
            } else if (uncommonbackground.includes(backgroundchoice)) {
                backgroundrarityidcommon.innerHTML = "";
                backgroundrarityiduncommon.innerHTML = "Uncommon";
                backgroundrarityidrare.innerHTML = "";
                backgroundrarityidsuperrare.innerHTML = "";
                backgroundrarityidlegendary.innerHTML = "";
            } else if (rarebackground.includes(backgroundchoice)) {
                backgroundrarityidcommon.innerHTML = "";
                backgroundrarityiduncommon.innerHTML = "";
                backgroundrarityidrare.innerHTML = "Rare";
                backgroundrarityidsuperrare.innerHTML = "";
                backgroundrarityidlegendary.innerHTML = "";
            } else if (superrarebackground.includes(backgroundchoice)) {
                backgroundrarityidcommon.innerHTML = "";
                backgroundrarityiduncommon.innerHTML = "";
                backgroundrarityidrare.innerHTML = "";
                backgroundrarityidsuperrare.innerHTML = "Super Rare";
                backgroundrarityidlegendary.innerHTML = "";
            } else if (legendarybackground.includes(backgroundchoice)) {
                backgroundrarityidcommon.innerHTML = "";
                backgroundrarityiduncommon.innerHTML = "";
                backgroundrarityidrare.innerHTML = "";
                backgroundrarityidsuperrare.innerHTML = "";
                backgroundrarityidlegendary.innerHTML = "Legendary";
            } else {
                backgroundrarityidcommon.innerHTML = "";
                backgroundrarityiduncommon.innerHTML = "";
                backgroundrarityidrare.innerHTML = "";
                backgroundrarityidsuperrare.innerHTML = "";
                backgroundrarityidlegendary.innerHTML = "";
            }
        };
