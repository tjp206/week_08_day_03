use hotel_bookings;
db.dropDatabase();

db.bookings.insertMany([
    {
        name: "Thor",
        email: "LordOfThunder@avengersmail.com",
        status: true
    },
    {
        name: "Tony Stark",
        email: "IronMan@avengersmail.com",
        status: false
    },
    {
        name: "Bruce Banner",
        email: "hulk_smash@avengersmail.com",
        status: false
    },
]);