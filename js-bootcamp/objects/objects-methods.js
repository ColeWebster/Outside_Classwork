let restaurant = {
    name: 'Big Rays',
    guestCapacity: 75,
    guestCount: 0,
    checkAvailability: function (partySize) {
        let seatsLeft = this.guestCapacity - this.guestCount
        return partySize <= seatsLeft
    },
    seatParty: function (partySize) {
        this.guestCount = this.guestCount + partySize
    },
    removeParty: function (partySize) {
        this.guestCount = this.guestCount - partySize
    }
}



// Availability method
let availability = restaurant.checkAvailability(10)
console.log(availability)

// removeParty method
restaurant.removeParty(5)
console.log(restaurant.checkAvailability(5))