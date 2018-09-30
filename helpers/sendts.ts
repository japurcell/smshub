// declare var lib: any;
import * as lib from 'lib';

/**
* Send an SMS message via MessageBird
* @param {string} originator The StdLib phone number to send the SMS from
* @param {string} recipient The phone number that will receive the SMS
* @param {string} body The contents of the SMS
* @returns {any}
*/
export default async function(originator: string, recipient: string, body: string): Promise<any>
{
    if (!originator || !recipient)
        return body;

    return await lib.messagebird.sms.create({
        originator: originator,
        recipient: recipient,
        body: body
    });
}