"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HandPayouts = exports.HandRankings = void 0;
var HandRankings;
(function (HandRankings) {
    HandRankings[HandRankings["NOTHING"] = 0] = "NOTHING";
    HandRankings[HandRankings["ACE_AND_KING"] = 100] = "ACE_AND_KING";
    HandRankings[HandRankings["ONE_PAIR"] = 200] = "ONE_PAIR";
    HandRankings[HandRankings["TWO_PAIRS"] = 300] = "TWO_PAIRS";
    HandRankings[HandRankings["THREE_OF_KIND"] = 400] = "THREE_OF_KIND";
    HandRankings[HandRankings["STRAIGHT"] = 500] = "STRAIGHT";
    HandRankings[HandRankings["FLUSH"] = 600] = "FLUSH";
    HandRankings[HandRankings["FULL"] = 700] = "FULL";
    HandRankings[HandRankings["FOUR_OF_KIND"] = 800] = "FOUR_OF_KIND";
    HandRankings[HandRankings["STRAIGHT_FLUSH"] = 900] = "STRAIGHT_FLUSH";
    HandRankings[HandRankings["ROYAL_FLUSH"] = 1000] = "ROYAL_FLUSH";
})(HandRankings = exports.HandRankings || (exports.HandRankings = {}));
var HandPayouts;
(function (HandPayouts) {
    HandPayouts[HandPayouts["NOTHING"] = 0] = "NOTHING";
    HandPayouts[HandPayouts["ACE_AND_KING"] = 0] = "ACE_AND_KING";
    HandPayouts[HandPayouts["ONE_PAIR"] = 1] = "ONE_PAIR";
    HandPayouts[HandPayouts["TWO_PAIRS"] = 2] = "TWO_PAIRS";
    HandPayouts[HandPayouts["THREE_OF_KIND"] = 3] = "THREE_OF_KIND";
    HandPayouts[HandPayouts["STRAIGHT"] = 4] = "STRAIGHT";
    HandPayouts[HandPayouts["FLUSH"] = 5] = "FLUSH";
    HandPayouts[HandPayouts["FULL"] = 7] = "FULL";
    HandPayouts[HandPayouts["FOUR_OF_KIND"] = 20] = "FOUR_OF_KIND";
    HandPayouts[HandPayouts["STRAIGHT_FLUSH"] = 50] = "STRAIGHT_FLUSH";
    HandPayouts[HandPayouts["ROYAL_FLUSH"] = 100] = "ROYAL_FLUSH";
})(HandPayouts = exports.HandPayouts || (exports.HandPayouts = {}));
//# sourceMappingURL=utils.js.map