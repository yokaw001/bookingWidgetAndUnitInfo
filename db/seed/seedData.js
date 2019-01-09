const fs = require('fs');
const { generateOwnersData, generateUnitsData } = require('./generateData');
const { Owner, Unit } = require('../index');

///// units
// const unitsFile = fs.createWriteStream('./db/seed/seedUnits.csv');
// const sampleUnits = generateUnitsData();

// unitsFile.write('id, owner_id, title, streetAddress, aptOrSuite, country, city, state, zipCode, partOfUnitFromRent, guestsAllowed, numberOfRoomsGuestsMayUse, numberOfBedsGuestsMayUse, numberOfBathroomsGuestsMayUse, numberOfReviews, averageStarRating, summaryDescription, aboutYourUnit, whatGuestsCanAccess, yourInteractionWithGuests, otherThingsToNote, dateAvailableFrom, dateAvailableTo, pricePerNight, cleaningFee, serviceFee, isBooked, hasEssentials, hasWifi, hasShampoo, hasClosetDrawers, hasTv, hasHeat, hasAirConditioning, hasBreakfastCoffeeTea, hasDeskWorkSpace, hasFirePlace, hasIron, hasHairDryer, hasPrivateEntrance, hasSmokeDetector, hasCarbonMonoxideDetector, hasFirstAidKit, hasFireExtinguisher, hasLockOnBedroomDoor, hasPool, hasKitchen, hasLaundryWasher, hasLaundryDryer, hasParking, hasElevator, hasHotTub\n');

// for (let n = 0; n < 10; n += 1) {
//   for (let i = 0; i < sampleUnits.length; i += 1) {
//     unitsFile.write(`"${sampleUnits[i].id.toString().replace(',', '')}", "${sampleUnits[i].owner_id.toString().replace(',', '')}", "${sampleUnits[i].title.toString().replace(',', '')}", "${sampleUnits[i].streetAddress.toString().replace(',', '')}", "${sampleUnits[i].aptOrSuite.toString().replace(',', '')}", "${sampleUnits[i].country.toString().replace(',', '')}", "${sampleUnits[i].city.toString().replace(',', '')}", "${sampleUnits[i].state.toString().replace(',', '')}", "${sampleUnits[i].zipCode.toString().replace(',', '')}", "${sampleUnits[i].partOfUnitFromRent.toString().replace(',', '')}", "${sampleUnits[i].guestsAllowed.toString().replace(',', '')}", "${sampleUnits[i].numberOfRoomsGuestsMayUse.toString().replace(',', '')}", "${sampleUnits[i].numberOfBedsGuestsMayUse.toString().replace(',', '')}", "${sampleUnits[i].numberOfBathroomsGuestsMayUse.toString().replace(',', '')}", "${sampleUnits[i].numberOfReviews.toString().replace(',', '')}", "${sampleUnits[i].averageStarRating.toString().replace(',', '')}", "${sampleUnits[i].summaryDescription.toString().replace(',', '')}", "${sampleUnits[i].aboutYourUnit.toString().replace(',', '')}", "${sampleUnits[i].whatGuestsCanAccess.toString().replace(',', '')}", "${sampleUnits[i].yourInteractionWithGuests.toString().replace(',', '')}", "${sampleUnits[i].otherThingsToNote.toString().replace(',', '')}", "${sampleUnits[i].dateAvailableFrom.toString().replace(',', '')}", "${sampleUnits[i].dateAvailableTo.toString().replace(',', '')}", "${sampleUnits[i].pricePerNight.toString().replace(',', '')}", "${sampleUnits[i].cleaningFee.toString().replace(',', '')}", "${sampleUnits[i].serviceFee.toString().replace(',', '')}", "${sampleUnits[i].isBooked.toString().replace(',', '')}", "${sampleUnits[i].hasEssentials.toString().replace(',', '')}", "${sampleUnits[i].hasWifi.toString().replace(',', '')}", "${sampleUnits[i].hasShampoo.toString().replace(',', '')}", "${sampleUnits[i].hasClosetDrawers.toString().replace(',', '')}", "${sampleUnits[i].hasTv.toString().replace(',', '')}", "${sampleUnits[i].hasHeat.toString().replace(',', '')}", "${sampleUnits[i].hasAirConditioning.toString().replace(',', '')}", "${sampleUnits[i].hasBreakfastCoffeeTea.toString().replace(',', '')}", "${sampleUnits[i].hasDeskWorkSpace.toString().replace(',', '')}", "${sampleUnits[i].hasFirePlace.toString().replace(',', '')}", "${sampleUnits[i].hasIron.toString().replace(',', '')}", "${sampleUnits[i].hasHairDryer.toString().replace(',', '')}", "${sampleUnits[i].hasPrivateEntrance.toString().replace(',', '')}", "${sampleUnits[i].hasSmokeDetector.toString().replace(',', '')}", "${sampleUnits[i].hasCarbonMonoxideDetector.toString().replace(',', '')}", "${sampleUnits[i].hasFirstAidKit.toString().replace(',', '')}", "${sampleUnits[i].hasFireExtinguisher.toString().replace(',', '')}", "${sampleUnits[i].hasLockOnBedroomDoor.toString().replace(',', '')}", "${sampleUnits[i].hasPool.toString().replace(',', '')}", "${sampleUnits[i].hasKitchen.toString().replace(',', '')}", "${sampleUnits[i].hasLaundryWasher.toString().replace(',', '')}", "${sampleUnits[i].hasLaundryDryer.toString().replace(',', '')}", "${sampleUnits[i].hasParking.toString().replace(',', '')}", "${sampleUnits[i].hasElevator.toString().replace(',', '')}", "${sampleUnits[i].hasHotTub.toString().replace(',', '')}"\n`);
//   }
// }

///// owners
const ownersFile = fs.createWriteStream('./db/seed/seedOwners.csv');
const sampleOwners = generateOwnersData();

ownersFile.write('id, name, photo, isSuperHost\n');

for (let n = 0; n < 10; n += 1) {
  for (let i = 0; i < sampleOwners.length; i += 1) {
    let row = `${sampleOwners[i].id.toString().replace(',','')}, `;
    row += `"${sampleOwners[i].name.toString().replace(',','')}", `;
    row += `"${sampleOwners[i].photo.toString().replace(',','')}", `;
    row += `${sampleOwners[i].isSuperHost.toString().replace(',','')}\n`;
    ownersFile.write(row);
    // ownersFile.write(`${sampleOwners[i].id.toString().replace(',', '')}, ${sampleOwners[i].name.toString().replace(',', '')}`);
  }
}
