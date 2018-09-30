"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
// declare var lib: any;
const lib = require("lib");
/**
* Send an SMS message via MessageBird
* @param {string} originator The StdLib phone number to send the SMS from
* @param {string} recipient The phone number that will receive the SMS
* @param {string} body The contents of the SMS
* @returns {any}
*/
function default_1(originator, recipient, body) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!originator || !recipient)
            return body;
        return yield lib.messagebird.sms.create({
            originator: originator,
            recipient: recipient,
            body: body
        });
    });
}
exports.default = default_1;
